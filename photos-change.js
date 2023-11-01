
    const carousel = document.querySelector('.carousel-images');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let imageIndex = 1;
    const totalImages = 171;

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `img/gallery/${i}.jpg`;
        carousel.appendChild(img);
    }
    
    showImage();    

    function showImage() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach((img, index) => {
            if (index === imageIndex - 1) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }                       

    nextBtn.addEventListener('click', () => {
        if (imageIndex < totalImages) {
            imageIndex++;
        } else {
            imageIndex = 1;
        }
        showImage();
    });
    
    prevBtn.addEventListener('click', () => {
        if (imageIndex > 1) {
            imageIndex--;
        } else {
            imageIndex = totalImages;
        }
        showImage();
    });       

    setInterval(() => {
        if (imageIndex < totalImages) {
            imageIndex++;
        } else {
            imageIndex = 1;
        }
        showImage();
    }, 3000);

