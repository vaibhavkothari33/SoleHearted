document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileSearch = document.getElementById('mobile-search');

    searchButton.addEventListener('click', function () {
        mobileSearch.classList.toggle('hidden');
        mobileMenu.classList.add('hidden');
    });

    hamburgerButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileSearch.classList.add('hidden');
    });
});
