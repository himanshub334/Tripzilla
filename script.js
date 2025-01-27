// Booking Form Handler
document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const persons = document.getElementById('persons').value;
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;
  
        alert(`
        Booking Details:
        Name: ${name}
        Email: ${email}
        Persons: ${persons}
        Start Date: ${start}
        End Date: ${end}
        Booking Submitted Successfully!`);
      });
    }
  
    // Dynamic Scroll Animations
    const elementsToAnimate = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
  
    elementsToAnimate.forEach(element => {
      element.classList.add('hidden');
      observer.observe(element);
    });
  });
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent successfully!');
  });
  