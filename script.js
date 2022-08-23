
const toggleThemeBtn = document.querySelector('.toggleBtn');

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.section-1-svg').classList.toggle('section-1-svg-dark');
    document.querySelector('.toggle-btn').classList.toggle('toggle-btn-dark');
})