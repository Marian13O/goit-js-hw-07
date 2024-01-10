import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
import basiclightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";
const modal = basicLightbox.create(`
    <img>
`),
  modalImg = modal.element().querySelector("img");

const gallery = document.querySelector("ul.gallery"),
  fragment = new DocumentFragment(),
  liTemplate = document.createElement("template");

liTemplate.innerHTML = `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="small-image.jpg"
    data-source="large-image.jpg"
    alt="Image description"
  />
</a>
</li>`;

function appendFromGalleryItem(item) {
  const clone = liTemplate.content.cloneNode(true),
    img = clone.querySelector("img");

  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  fragment.appendChild(clone);
}

galleryItems.forEach(appendFromGalleryItem);
gallery.appendChild(fragment);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  modalImg.src = event.target.dataset.source;
  modal.show();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && modal.visible()) {
    event.preventDefault();
    modal.close();
  }
});
