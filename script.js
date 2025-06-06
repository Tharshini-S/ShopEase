// Navigation: Show only the selected section
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all nav buttons and sections
    navButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    const target = button.dataset.section;
    document.getElementById(target).classList.add('active');
  });
});

// Wishlist functionality
const wishlist = [];
const wishlistList = document.getElementById('wishlist-items');

document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const productName = card.querySelector('h3').textContent;
    if (!wishlist.includes(productName)) {
      wishlist.push(productName);
      updateWishlist();
      alert(`Added "${productName}" to your wishlist!`);
    } else {
      alert(`"${productName}" is already in your wishlist.`);
    }
  });
});

function updateWishlist() {
  if (wishlist.length === 0) {
    wishlistList.innerHTML = '<li>No items yet. Add some from the home page!</li>';
  } else {
    wishlistList.innerHTML = wishlist.map(item => `<li>${item}</li>`).join('');
  }
}

// Contact form submission (dummy)
const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-msg');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactMsg.textContent = 'Thank you for contacting us, ' + document.getElementById('name').value + '!';
  contactForm.reset();
});
