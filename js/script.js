document.addEventListener('DOMContentLoaded', function() {
  // Initialize Hero Slider
  const heroSwiper = new Swiper('.hero-slider .swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  // Initialize Testimonials Slider
  const testimonialsSwiper = new Swiper('.testimonials-section .swiper', {
    // Configuration
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      loopedSlides: 3,

    },
    
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  // Form Validations
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add validation logic here
      console.log('Login form submitted');
      // You can add AJAX call or form processing here
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add validation logic here
      console.log('Register form submitted');
      // You can add AJAX call or form processing here
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add validation logic here
      console.log('Booking form submitted');
      // You can add AJAX call or form processing here
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add validation logic here
      console.log('Contact form submitted');
      // You can add AJAX call or form processing here
    });
  }

  // Load Camps Data (simulated)
  function loadCamps() {
    const campsContainer = document.getElementById('campsContainer');
    if (!campsContainer) return;

    // Simulated data - in real app, this would come from an API
    const campsData = [
      {
        id: 1,
        name: 'Mountain View Camp',
        price: 'EGP 1200 per night',
        image: 'images/camp1.jpg',
        types: ['Private Tent', 'Wooden Cabin', 'Shared Lodge'],
        amenities: ['On-site Restaurant', 'BBQ Area', 'Free Wi-Fi'],
        rating: 4
      },
      {
        id: 2,
        name: 'Forest Retreat',
        price: 'EGP 1500 per night',
        image: 'images/camp2.jpg',
        types: ['Wooden Cabin', 'Shared Lodge'],
        amenities: ['BBQ Area', 'Free Wi-Fi', 'Hiking Trails'],
        rating: 5
      },
      {
        id: 3,
        name: 'Lakeside Camp',
        price: 'EGP 1800 per night',
        image: 'images/camp3.jpg',
        types: ['Private Tent', 'Luxury Tent'],
        amenities: ['On-site Restaurant', 'Fishing Equipment', 'Boat Rental'],
        rating: 4
      }
    ];

    // Generate camp cards
    campsData.forEach(camp => {
      const campCard = document.createElement('div');
      campCard.className = 'col-lg-4 col-md-6 mb-4';
      campCard.innerHTML = `
        <div class="card h-100">
          <img src="${camp.image}" class="card-img-top" alt="${camp.name}">
          <div class="card-body">
            <h5 class="card-title">${camp.name}</h5>
            <h6 class="card-subtitle mb-3 text-primary">${camp.price}</h6>
            // 
            <div class="mb-3">
              <h6 class="mb-1">Accommodation Type</h6>
              ${camp.types.map(type => `
                <span class="badge bg-light text-dark me-1 mb-1">${type}</span>
              `).join('')}
            </div>
            // 
            <div class="mb-3">
              <h6 class="mb-1">Available Services</h6>
              ${camp.amenities.map(amenity => `
                <span class="badge bg-light text-dark me-1 mb-1">${amenity}</span>
              `).join('')}
            </div>
            // 
            <div class="mb-3">
              <h6 class="mb-1">Rating</h6>
              ${'<i class="bi bi-star-fill text-warning"></i>'.repeat(camp.rating)}
              ${'<i class="bi bi-star text-warning"></i>'.repeat(5 - camp.rating)}
            </div>
            // 
            <a href="camp-details.html?id=${camp.id}" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      `;
      campsContainer.appendChild(campCard);
    });
  }

  // Load Testimonials Data (simulated)
  function loadTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-section .swiper-wrapper');
    if (!testimonialsContainer) return;

    // Simulated data - in real app, this would come from an API
    const testimonialsData = [
      {
        name: 'Ahmed Mohamed',
        text: 'The camping experience was amazing! Beautiful location and excellent service.',
        rating: 5,
        avatar: 'images/person.svg'
      },
      {
        name: 'Sarah Johnson',
        text: 'Perfect getaway from the city. The staff was very helpful and the facilities were clean.',
        rating: 4,
        avatar: 'images/person.svg'
      },
      {
        name: 'Michael Brown',
        text: 'Great place for family camping. Kids loved the activities and we enjoyed the peaceful nature.',
        rating: 5,
        avatar: 'images/person.svg'
      },
      {
        name: 'Emily Davis',
        text: 'The wooden cabins were cozy and comfortable. Will definitely come back next season!',
        rating: 4,
        avatar: 'images/person.svg'
      },
      {
        name: 'David Wilson',
        text: 'Best camping site I\'ve been to. The views are breathtaking and the food was delicious.',
        rating: 5,
        avatar: 'images/person.svg'
      }
    ];

    // Generate testimonials slides
    testimonialsData.forEach(testimonial => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="testimonial-card">
          <div class="profile d-flex align-items-center mb-3">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" class="rounded-circle">
            <h6 class="m-0 ms-3">${testimonial.name}</h6>
          </div>
          <p class="mb-3">${testimonial.text}</p>
          <div class="rating">
            ${'<i class="bi bi-star-fill text-warning"></i>'.repeat(testimonial.rating)}
            ${testimonial.rating < 5 ? '<i class="bi bi-star text-warning"></i>'.repeat(5 - testimonial.rating) : ''}
          </div>
        </div>
      `;
      testimonialsContainer.appendChild(slide);
    });

    // Update testimonials swiper after loading data
    testimonialsSwiper.update();
  }

  // Initialize functions
  loadCamps();
  loadTestimonials();

  // Mobile menu toggle animation
  const navbarToggler = document.querySelector('.navbar-toggler');
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  

  // Active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});



//dashboard 
document.addEventListener('DOMContentLoaded', function() {
  // Login Form Submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          
          // Simulate login (in a real app, this would be an API call)
          if (email === 'admin@gmail.com' && password === 'admin123') {
              window.location.href = 'admin-dashboard.html';
          } else if (email === 'user@gmail.com' && password === 'user123') {
              window.location.href = 'user-dashboard.html';
          } else {
              alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
          }
      });
  }

  // Sidebar Toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
          document.querySelector('.sidebar').classList.toggle('active');
          document.querySelector('.main-content').classList.toggle('active');
      });
  }

  // Navigation between sections
  const navItems = document.querySelectorAll('.nav-item[data-target]');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          // Remove active class from all items
          navItems.forEach(navItem => {
              navItem.classList.remove('active');
          });
          
          // Add active class to clicked item
          this.classList.add('active');
          
          // Hide all content sections
          const contentSections = document.querySelectorAll('#contentArea > div');
          contentSections.forEach(section => {
              section.classList.add('d-none');
          });
          
          // Show the selected content section
          const target = this.getAttribute('data-target');
          document.getElementById(`${target}Content`).classList.remove('d-none');
      });
  });

  // Logout functionality
  const logoutButtons = document.querySelectorAll('#logout, #logout2');
  logoutButtons.forEach(button => {
      button.addEventListener('click', function() {
          if (confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟')) {
              window.location.href = 'index.html';
          }
      });
  });

  // Simulate loading data for different sections
  if (window.location.pathname.includes('admin-dashboard.html')) {
      // Admin dashboard specific scripts
      console.log('Admin dashboard loaded');
  }
});