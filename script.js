//how to set date automatically
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();
//date setupend here

//close links - nav toggle button
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // linksContainer.classList.toggle('show-links');

});