const reviews = [{
  name: "Sophia Lee",
  role: "Marketing Director, Tech Startup",
  image : "https://images.pexels.com/photos/3771077/pexels-photo-3771077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team was a dream to work with! They took our complex ideas and turned them into a beautiful, user-friendly website. We've seen a significant increase in traffic since the launch."
}, {
  name: "David Chen",
  role: "CEO, E-commerce Company",
  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "We were struggling to convert visitors into customers. Particel's CRO expertise turned things around! Their data-driven approach and A/B testing strategies significantly boosted our conversion rates."
}, {
  name: "Olivia Rodriguez",
  role: "Project Manager, Non-profit Organization",
  image: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel helped us tell our story in a compelling way. Their branding and content creation skills are exceptional. We're so proud of the website they created for us."
}, {
  name: "Ethan Garcia",
  role: "Owner, Restaurant",
  image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Our online ordering system was a mess. Particel streamlined the entire process, making it easy for customers to order and for us to manage orders. It's been a game-changer for our business."
}, {
  name: "Isabella Wilson",
  role: "Marketing Director, Healthcare Company",
  image: "https://images.pexels.com/photos/3845165/pexels-photo-3845165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team is incredibly knowledgeable about HIPAA compliance. They built a secure and user-friendly patient portal for us that has improved communication and efficiency."
}, {
  name: "Aiden Patel",
  role: "CEO, Tech Startup",
  image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "We needed a mobile app that could handle complex data and integrate with our existing systems. Particel delivered a robust and scalable solution that exceeded our expectations."
}, {
  name: "Mia Martinez",
  role: "Owner, Small Business",
  image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel helped me establish a strong online presence for my small business. Their team was patient and supportive, guiding me through every step of the process. I highly recommend them!"
}, {
  name: "Jackson Thomas",
  role: "Marketing Manager, Education Institution",
  image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "We were impressed by Particel's strategic thinking and creative approach to digital marketing. They helped us reach a wider audience and increase student enrollment."
}, {
  name: "Emily Davis",
  role: "Owner, Online Store",
  image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's e-commerce platform is fantastic! It's easy to use, has all the features we need, and integrates seamlessly with our payment gateway. Our online sales have skyrocketed since we switched to their platform."
}, {
  name: "Lucas Brown",
  role: "Marketing Director, Real Estate Firm",
  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team created a visually stunning website for our real estate firm. The site is mobile-friendly, easy to navigate, and showcases our properties beautifully."
}, {
  name: "Chloe Anderson",
  role: "CEO, Financial Services Company",
  image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's digital marketing strategies have been instrumental in our growth. They helped us increase brand awareness, generate leads, and improve customer engagement."
}, {
  name: "Grayson Wilson",
  role: "Owner, Travel Agency",
  image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team designed a user-friendly and visually appealing website for our travel agency. We've seen a significant increase in online bookings since launching the new site."
}, {
  name: "Harper Garcia",
  role: "Marketing Manager, Non-profit Organization",
  image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel helped us create a compelling online presence that effectively communicates our mission and values. We're grateful for their support and expertise."
}, {
  name: "Benjamin Lee",
  role: "Owner, Small Business",
  image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team was fantastic to work with! They were responsive, professional, and delivered a high-quality website that exceeded my expectations."
}, {
  name: "Luna Rodriguez",
  role: "Marketing Director, Large Corporation",
  image: "https://images.pexels.com/photos/3775577/pexels-photo-3775577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's digital marketing expertise is second to none. They helped us develop a comprehensive strategy that has significantly improved our online visibility and lead generation."
}, {
  name: "Elijah Chen",
  role: "IT Manager, Tech Startup",
  image: "https://images.pexels.com/photos/936038/pexels-photo-936038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team built a robust and scalable web application for us. Their technical skills are impressive, and they were able to meet our tight deadlines."
}, {
  name: "Amelia Patel",
  role: "Social Media Manager, E-commerce Store",
  image: "https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's social media marketing strategies have helped us reach a wider audience and increase engagement. We're thrilled with the results!"
}, {
  name: "James Wilson",
  role: "CEO, Healthcare Company",
  image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team has a deep understanding of the healthcare industry. They developed a HIPAA-compliant website for us that meets all our specific requirements."
}, {
  name: "Evelyn Martinez",
  role: "Owner, Restaurant",
  image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel created a beautiful and functional website for our restaurant. The online ordering system is seamless, and we've seen a significant increase in online orders."
}, {
  name: "Alexander Anderson",
  role: "Marketing Manager, Education Institution",
  image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's digital marketing strategies have helped us reach more prospective students. We're impressed with their data-driven approach and ability to track results."
}, {
  name: "Eleanor Thomas",
  role: "Owner, Online Store",
  image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's e-commerce platform is amazing! It's user-friendly, has all the features we need, and has helped us significantly increase our online sales."
}, {
  name: "Jack Brown",
  role: "Marketing Director, Real Estate Firm",
  image: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel'steam created a beautiful and functional website for our real estate firm. The site is easy to navigate and showcases our properties in a visually appealing way."
}, {
  name: "Lily Davis",
  role: "CEO, Financial Services Company",
  image: "https://images.pexels.com/photos/3777576/pexels-photo-3777576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's expertise in digital marketing has helped us reach a wider audience and generate more leads. We're very happy with their services."
}, {
  name: "Daniel Wilson",
  role: "Owner, Travel Agency",
  image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team designed a user-friendly and visually appealing website for our travel agency. We've seen a significant increase in online bookings since launching the new site."
}, {
  name: "Layla Garcia",
  role: "Marketing Manager, Non-profit Organization",
  image: "https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel helped us create a compelling online presence that effectively communicates our mission and values. We're grateful for their support and expertise."
}, {
  name: "Henry Lee",
  role: "Owner, Small Business",
  image: "https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team was a pleasure to work with. They were responsive, professional, and delivered a high-quality website that exceeded my expectations."
}, {
  name: "Eleanor Rodriguez",
  role: "Marketing Director, Large Corporation",
  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's digital marketing expertise is impressive. They helped us develop a comprehensive strategy that has significantly improved our online visibility and lead generation."
}, {
  name: "Matthew Chen",
  role: "IT Manager, Tech Startup",
  image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team built a robust and scalable web application for us. Their technical skills are exceptional, and they were able to meet our tight deadlines."
}, {
  name: "Ellie Patel",
  role: "Social Media Manager, E-commerce Store",
  image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's social media marketing strategies have helped us reach a wider audience and increase engagement. We're delighted with the results!"
}, {
  name: "Owen Wilson",
  role: "CEO, Healthcare Company",
  image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team has a deep understanding of the healthcare industry. They developed a HIPAA-compliant website for us that meets all our specific requirements."
}, {
  name: "Scarlett Martinez",
  role: "Owner, Restaurant",
  image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel created a beautiful and functional website for our restaurant. The online ordering system is seamless, and we've seen a significant increase in online orders."
}, {
  name: "Joseph Anderson",
  role: "Marketing Manager, Education Institution",
  image: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's digital marketing strategies have helped us reach more prospective students. We're impressed with their data-driven approach and ability to track results."
}, {
  name: "Isabelle Thomas",
  role: "Owner, Online Store",
  image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's e-commerce platform is fantastic! It's user-friendly, has all the features we need, and has helped us significantly increase our online sales."
}, {
  name: "Levi Brown",
  role: "Marketing Director, Real Estate Firm",
  image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team created a visually stunning website for our real estate firm. The site is mobile-friendly, easy to navigate, and showcases our properties beautifully."
}, {
  name: "Aurora Davis",
  role: "CEO, Financial Services Company",
  image: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's expertise in digital marketing has helped us reach a wider audience and generate more leads. We're very happy with their services."
}, {
  name: "Ezra Wilson",
  role: "Owner, Travel Agency",
  image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team designed a user-friendly and visually appealing website for our travel agency. We've seen a significant increase in online bookings since launching the new site."
}, {
  name: "Amelia Garcia",
  role: "Marketing Manager, Non-profit Organization",
  image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel helped us create a compelling online presence that effectively communicates our mission and values. We're grateful for their support and expertise."
}, {
  name: "Ethan Lee",
  role: "Owner, Small Business",
  image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content: "Particel's team was a joy to work with. They were responsive, professional, and delivered a high-quality website that exceeded my expectations."
}];
const reviewsGrid = document.getElementById('reviewsGrid');
let currentIndex = 0;
const reviewsPerPage = 6;

function createReviewCard(review) {
  return `
  
        
        <article class="review-card">
          <div class="review-header">
            <img src="${review.image}" alt="${review.name}" class="review-image">
              <div>
                <div class="review-author">${review.name}</div>
                <div class="review-role">${review.role}</div>
              </div>
            </div>
            <div class="review-content">${review.content}</div>
          </article>
`;
}

function updateReviews() {
  const currentReviews = reviewsGrid.querySelectorAll('.review-card');
  currentReviews.forEach(review => {
    review.classList.remove('fade-in'); // Remove fade-in class first
    review.classList.add('fade-out');
  });
  setTimeout(() => {
    let newGridHTML = '';
    for (let i = 0; i < reviewsPerPage; i++) {
      const reviewIndex = (currentIndex + i) % reviews.length;
      newGridHTML += createReviewCard(reviews[reviewIndex]);
    }
    reviewsGrid.innerHTML = newGridHTML;
    const newReviews = reviewsGrid.querySelectorAll('.review-card');
    newReviews.forEach(review => {
      review.classList.add('fade-in');
    });
    currentIndex = (currentIndex + reviewsPerPage) % reviews.length;
  }, 500);
}
// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 200;
    const updateCounter = () => {
      count += increment;
      counter.innerText = Math.ceil(count);
      if (count < target) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
});
updateReviews();
setInterval(updateReviews, 6000);


// Updated script for toggling the mobile dropdown and hiding desktop navbar
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbarToggle');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const navbarNav = document.getElementById('navbarNav');
  const navbarSocial = document.querySelector('.navbar-social');

  navbarToggle.addEventListener('click', function() {
    mobileDropdown.classList.toggle('show');
    if (mobileDropdown.classList.contains('show')) {
      navbarNav.style.display = 'none';
      navbarSocial.style.display = 'none';
    } else {
      navbarNav.style.display = '';
      navbarSocial.style.display = '';
    }
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.navbar-toggle') && !event.target.matches('.icon-bar')) {
      if (mobileDropdown.classList.contains('show')) {
        mobileDropdown.classList.remove('show');
        navbarNav.style.display = '';
        navbarSocial.style.display = '';
      }
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      mobileDropdown.classList.remove('show');
      navbarNav.style.display = '';
      navbarSocial.style.display = '';
    }
  });
});