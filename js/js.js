document.addEventListener('DOMContentLoaded', function () {
    function updateDateDisplay(inputElementId) {
        const input = document.getElementById(inputElementId);
        const dateValue = input.value;

        if (dateValue) {
            const date = new Date(dateValue + 'T00:00:00');
            const day = date.getDate().toString().padStart(2, '0');
            const options = { month: 'short', year: 'numeric' };
            const monthYear = date.toLocaleDateString('es-ES', options).toUpperCase();

            const container = input.closest('.date-input-group');

            const dateDisplaySpan = container.querySelector('.date-display');
            if (dateDisplaySpan) dateDisplaySpan.textContent = day;

            const allSpans = container.querySelectorAll('span');
            if (allSpans.length > 1) {
                const monthYearSpan = allSpans[allSpans.length - 1];
                monthYearSpan.textContent = monthYear.replace('.', '');
            }
        }
    }

    const dateInputs = ['entrada', 'salida'];
    dateInputs.forEach(id => {
        const input = document.getElementById(id);

        input.addEventListener('change', function () {
            updateDateDisplay(id);
        });

        updateDateDisplay(id);
    });

    function altura() {
        let elemento = document.querySelectorAll(".imgs")
        elemento.forEach(element => {
            let ancho = element.offsetWidth
            element.style.height = ancho + "px"
        });
    }

    function opiniones() {
        const reviewCarousel = document.getElementById('reviewCarousel');
        const indexSpan = document.getElementById('currentReviewIndex');

        if (!reviewCarousel || !indexSpan) return;

        const totalItems = reviewCarousel.querySelectorAll('.carousel-item').length;

        function updatePaginationText(activeIndex) {
            const currentNumber = activeIndex + 1;

            if (totalItems > 0) {
                indexSpan.textContent = `${currentNumber}/${totalItems}`;
            } else {
                indexSpan.textContent = '';
            }
        }

        updatePaginationText(0);

        reviewCarousel.addEventListener('slid.bs.carousel', function (event) {
            updatePaginationText(event.to);
        });
    }

    altura()
    opiniones()
    window.addEventListener("resize", altura)
});