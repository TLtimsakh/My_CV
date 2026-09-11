document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('body > *');

    if (!('IntersectionObserver' in window)) {
        elements.forEach(function (element) {
            element.classList.add('is-visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        var revealed = 0;

        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.style.transitionDelay = revealed * 0.12 + 's';
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            revealed++;
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });
});
