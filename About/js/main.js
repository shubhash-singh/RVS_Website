// Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on page load
    handleScroll();

    // Smooth scroll for "Explore" link
    const exploreLink = document.querySelector('.explore-link');
    
    if (exploreLink) {
        exploreLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    }
});

// First, update your adminData to include photo paths
const adminData = [
    {
        title: "DEAN",
        name: "Dr. [Dean Name]",
        photo: "../../Images/hospital_home_Image.jpg", 
        dob: "DOB: [Date of Birth]",
        qualifications: [
            {
                degree: "MBBS - [Year]",
                institution: "[Medical College], [University]"
            },
            {
                degree: "MD([Specialization]) - [Year]",
                institution: "[Medical College], [University]"
            }
        ],
        contacts: {
            landline: "Land Line : [Number]",
            mobile: "Mobile : [Number]",
            email: "E-mail id : [Email]"
        }
    },
    {
        title: "MEDICAL SUPERINTENDENT",
        name: "Dr. Ravi Kumarvel",
        photo: "../../Images/hospital_home_Image.jpg", 
        dob: "DOB: 01-07-1971",
        qualifications: [
            {
                degree: "MBBS - 1998",
                institution: "S V Medical college Tirupathi, University of Health sciences, A.P."
            },
            {
                degree: "MD(ANAESTHESIOLOGY) - 2006",
                institution: "Kilpauk Medical College, Dr.MGR Medical University."
            }
        ],
        contacts: {
            landline: "Land Line : 08577-293400",
            mobile: "Mobile : 8825686001",
            email: "E-mail id : rawbharathhospital@gmail.com"
        }
    }
];

// Then update your createAdminCards function
function createAdminCards() {
    const container = document.getElementById('adminContainer');
    
    adminData.forEach(admin => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let qualificationsHTML = '';
        admin.qualifications.forEach(qual => {
            qualificationsHTML += `
                <tr>
                    <td>${qual.degree}</td>
                    <td>${qual.institution}</td>
                </tr>
            `;
        });
        
        card.innerHTML = `
            <h2>${admin.title}</h2>
            <img src="${admin.photo || 'default-profile.jpg'}" alt="${admin.name}" class="profile-photo">
            <div class="profile-info">
                <p>${admin.name}</p>
                <p>${admin.dob}</p>
            </div>
            
            <h3>QUALIFICATION</h3>
            <table>
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Institution</th>
                    </tr>
                </thead>
                <tbody>
                    ${qualificationsHTML}
                </tbody>
            </table>
            
            <div class="contact-info">
                <h3>CONTACT</h3>
                <p><i class="fas fa-phone-alt"></i> ${admin.contacts.landline}</p>
                <p><i class="fas fa-mobile-alt"></i> ${admin.contacts.mobile}</p>
                <p><i class="fas fa-envelope"></i> ${admin.contacts.email}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page
window.onload = function() {
    createAdminCards();
};