
import { fetchImages } from './api.js';
import { addImage, clearGallery, removeLastImage, reverseGallery } from './gallery.js';


const gallery = document.getElementById("gallery");


async function loadInitialImages() {
  const images = await fetchImages();
  images.forEach(image => addImage(image.download_url, gallery));
}


async function loadMoreImages() {
  const images = await fetchImages();
  images.forEach(image => addImage(image.download_url, gallery));
}
window.onload = loadInitialImages;
