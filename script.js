document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        if (e.target.tagName === 'SELECT') return;

        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove('expanded');
            }
        });

        box.classList.toggle('expanded');
    });

    // Color selection – remove visual application
    const colorSelect = box.querySelector('.color-select');
    colorSelect.addEventListener('change', (e) => {
        console.log(`Color selected for ${box.id}: ${e.target.value}`);
    });

    // Size selection – optional visual resizing (OK to keep)
    const sizeSelect = box.querySelector('.size-select');
    sizeSelect.addEventListener('change', (e) => {
        const size = e.target.value;
        if (size === 'small') {
            box.style.maxWidth = '400px';
        } else if (size === 'medium') {
            box.style.maxWidth = '600px';
        } else if (size === 'large') {
            box.style.maxWidth = '800px';
        }
    });
});
