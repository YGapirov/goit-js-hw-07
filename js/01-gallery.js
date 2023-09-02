import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems)
let instance;
container.insertAdjacentHTML('beforeend', markup);   //виводимо на живу сторінку контейнер
container.addEventListener('click', handleGalleryClick);

function createMarkup (arr) {
    return arr.map(({preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item js-gallery-item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image"/>
        </a>
        </li>`

    }).join('');
}
function handleGalleryClick (evt) {
    evt.preventDefault();   //блокуєму перехід за посиланням при кліку
    if(evt.target === evt.currentTarget) {
        return;
    }

    const targetElement = evt.target.closest('.js-gallery-item');
    const galleryDesc = targetElement.dataset.preview;
    const galleryInfo = galleryItems.find(gallery => gallery.preview === galleryDesc)
        
const instance = basicLightbox.create(`
<div class="modal">
<img src="${galleryInfo.original}" alt="${galleryInfo.description}"/>
</div>
`);

instance.show();

};
console.log(galleryItems);


// закриття модалки ESC

// document.addEventListener("keydown", (evt) => {
//     if (evt.handleGalleryClick == "Escape") {
//       closemodal();
//     }
//   });


