document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.services');

    const toggleTab = (event) => {
        event.currentTarget.classList.toggle('active');
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', toggleTab);
    });
})