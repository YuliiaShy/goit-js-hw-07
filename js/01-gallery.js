import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", onGalleryImgClick);

function onGalleryImgClick(event) {
  event.preventDefault();

  const eventTarget = event.target;
  const datasetImage = eventTarget.dataset.source;

    if (!datasetImage) return; 

 const instance = basicLightbox.create(`
    <img src=${datasetImage} width="800" height="600">
`);

  instance.show();
}
