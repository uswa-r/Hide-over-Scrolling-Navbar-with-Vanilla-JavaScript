//how to set date automatically
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();
//date setupend here

//close links - nav toggle button
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // linksContainer.classList.toggle('show-links'); that's a manual way to show links which do not auto resize toggle container
    //below is auto height resize method:
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    //dynamically adding height
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksHeight.style.height = 0;
    }
});
//dynamically close links with  height ends here

//fixed navbar
const navbar = document.getElementById(nav);
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageXOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
});