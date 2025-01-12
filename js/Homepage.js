document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
        alert(`Directing you to ${circle.innerText}`);
    });
});
