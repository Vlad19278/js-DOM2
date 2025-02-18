
export function addImage(url, gallery) {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  }
  
  export function clearGallery(gallery) {
    gallery.innerHTML = '';
  }
  
  export function removeLastImage(gallery) {
    if (gallery.lastChild) {
      gallery.removeChild(gallery.lastChild);
    }
  }
  
  export function reverseGallery(gallery) {
    const images = Array.from(gallery.children);
    gallery.innerHTML = '';
    images.reverse().forEach(img => gallery.appendChild(img));
  }
  