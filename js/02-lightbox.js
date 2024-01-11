import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector("ul.gallery"),
  fragment = new DocumentFragment(),
  liTemplate = new DOMParser().parseFromString(
    `<li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>`,
    "text/html"
  ).body.firstElementChild;

function appendFromGalleryItem(item) {
  const clone = liTemplate.cloneNode(true),
    img = clone.querySelector("img"),
    a = clone.querySelector("a");

  img.src = item.preview;
  img.alt = item.description;
  a.href = item.original;
  fragment.appendChild(clone);
}

galleryItems.forEach(appendFromGalleryItem);
gallery.appendChild(fragment);

new SimpleLightbox("ul.gallery a", { captionsData: "alt", captionDelay: 250 });
