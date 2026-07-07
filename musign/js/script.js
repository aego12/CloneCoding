const preventEmptyLinks = () => {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href="#"]');

        if (!link) return;

        e.preventDefault();
    });
};

const setSvgPathLength = () => {
    document.querySelectorAll('.svgAni path').forEach((path) => {
        const totalLength = path.getTotalLength();

        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength;
    });
};

const toggleMenu = () => {
    const menuWrap = document.querySelector('.menuOpen .menuWrap');
    const openButton = document.querySelector('.menuOpen button.open');
    const closeButtons = document.querySelectorAll('.menuOpen .menuWrap .close');

    if (!menuWrap || !openButton) return;

    openButton.addEventListener('click', () => {
        menuWrap.classList.add('on');
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            menuWrap.classList.remove('on');
        });
    });
};

const animateOnScroll = () => {
    const animateElements = document.querySelectorAll('.animate');

    const setMotion = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + windowHeight;

        animateElements.forEach((element) => {
            const animateClass = element.dataset.animate;
            const offset = Number(element.dataset.offset) || 0;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollTop + offset;
            const elementBottom = elementTop + rect.height - offset;

            if (element.dataset.duration) {
                element.style.animationDuration = element.dataset.duration;
            }

            if (element.dataset.delay) {
                element.style.animationDelay = element.dataset.delay;
            }

            if (element.dataset.iteration) {
                element.style.animationIterationCount = element.dataset.iteration;
            }

            if (elementBottom >= scrollTop && elementTop <= scrollBottom) {
                element.style.visibility = 'visible';
                element.classList.add(animateClass, 'animated');
            } else {
                element.style.visibility = 'hidden';
                element.classList.remove(animateClass, 'animated');
            }
        });
    };

    window.addEventListener('scroll', setMotion);
    window.addEventListener('resize', setMotion);
    setMotion();
};

const changeBgColor = () => {
    const bgColor = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 1400 && scrollTop <= 2700) {
            document.body.classList.add('on');
        } else {
            document.body.classList.remove('on');
        }
    };

    window.addEventListener('scroll', bgColor);
    window.addEventListener('resize', bgColor);
    bgColor();
};

(() => {
    preventEmptyLinks();
    setSvgPathLength();
    toggleMenu();
    animateOnScroll();
    changeBgColor();
})();
