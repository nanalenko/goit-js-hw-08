
import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery')
function createGallery({preview, original, description}){
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}
const createGalleryList = galleryItems.map(createGallery).join('');

gallery.insertAdjacentHTML('afterbegin', createGalleryList);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });
