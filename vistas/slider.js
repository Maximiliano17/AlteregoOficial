document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const newSrc = thumbnail.getAttribute('data-full-src');
            
            thumbnails.forEach(t => t.classList.remove('active'));
            
            thumbnail.classList.add('active');
            
            mainImage.style.opacity = 0; 
            setTimeout(() => {
                mainImage.src = newSrc;
                mainImage.style.opacity = 1;
            }, 150); 
        });
    });
});