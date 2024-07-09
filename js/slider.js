
    document.addEventListener('DOMContentLoaded', function () {
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');
        const track = document.getElementById('carouselTrack');
        const totalItems = items.length;

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function showItem(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
            updateDots();
        }

        function nextItem() {
            currentIndex = (currentIndex + 1) % totalItems;
            showItem(currentIndex);
        }

        setInterval(nextItem, 3000);

        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                showItem(currentIndex);
            });
        });

        updateDots();
    });

