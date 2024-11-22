$(document).ready(function () {
    // Suavizar scroll para los enlaces
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top,
            },
            500
        );
    });
});
