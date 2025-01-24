// Select elements
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Toggle mobile menu visibility
const toggleMobileMenu = () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
};

// Add event listener for hamburger menu
hamburger.addEventListener('click', toggleMobileMenu);

// Change header background color on scroll
const changeHeaderBackgroundOnScroll = () => {
    const scroll_position = window.scrollY;
    header.style.backgroundColor = (scroll_position > 250) ? '#29323c' : 'transparent';
};

document.addEventListener('scroll', changeHeaderBackgroundOnScroll);

// Close the mobile menu when a menu item is clicked
menu_items.forEach(item => {
    item.addEventListener('click', toggleMobileMenu);
});
