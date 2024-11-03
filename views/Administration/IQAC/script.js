// JavaScript to add 'active' class to the currently clicked item
document.querySelectorAll('.sidebar li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.sidebar li.active')?.classList.remove('active');
        this.parentElement.classList.add('active');
    });
});
