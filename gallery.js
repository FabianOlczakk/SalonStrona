const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
let currentImageIndex;
const totalImages = 171;

function loadImages() {
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `img/gallery/${i}.jpg`;
        img.onclick = function() {
            openModal(i);
        };
        galleryGrid.appendChild(img);
    }
}

function openModal(index) {
    modal.style.display = 'block';
    currentImageIndex = index;
    modalImage.src = `img/gallery/${index}.jpg`;
}

function closeModal() {
    modal.style.display = 'none';
}

function changeSlide(step) {
    currentImageIndex += step;
    if (currentImageIndex < 1) {
        currentImageIndex = totalImages;
    } else if (currentImageIndex > totalImages) {
        currentImageIndex = 1;
    }
    modalImage.src = `img/gallery/${currentImageIndex}.jpg`;
}

loadImages();

modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});