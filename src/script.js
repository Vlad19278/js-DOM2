const gallery = document.getElementById("gallery");


async function fetchImages(count = 4) {
  try {
    const response = await fetch("https://picsum.photos/v2/list?page=1&limit=100");
    const data = await response.json();

    
    const images = [];
    while (images.length < count) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const image = data[randomIndex];
      if (!images.includes(image)) {
        images.push(image);
      }
    }
    return images;
  } catch (error) {
    console.error("Помилка при отриманні зображень:", error);
    return [];
  }
}


async function loadInitialImages() {
  const images = await fetchImages();
  images.forEach(image => addImage(image.download_url));
}


async function loadMoreImages() {
  const images = await fetchImages();
  images.forEach(image => addImage(image.download_url));
}


function clearGallery() {
  gallery.innerHTML = '';
}


function removeLastImage() {
  if (gallery.lastChild) {
    gallery.removeChild(gallery.lastChild);
  }
}


function reverseGallery() {
  const images = Array.from(gallery.children);
  gallery.innerHTML = '';
  images.reverse().forEach(img => gallery.appendChild(img));
}


function addImage(url) {
  const img = document.createElement("img");
  img.src = url;
  gallery.appendChild(img);
}


window.onload = loadInitialImages;
