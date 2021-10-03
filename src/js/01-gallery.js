// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');
};
galleryEl.addEventListener('click', onClick);
let instance;

function onClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
	const bigUrl = evt.target.dataset.source;
	instance = basicLightbox.create(
		`
    <img src="${bigUrl}" width="1280">
`,
		{
			onClose: () => {
				document.removeEventListener("keyup", closeModal);
			},
		}
	);
	instance.show();
	document.addEventListener("keyup", closeModal);
}

function closeModal(evt) {
	if (evt.code === "Escape") {
		instance.close();
	}
}
