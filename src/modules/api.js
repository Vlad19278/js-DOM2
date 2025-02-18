
export async function fetchImages(count = 4) {
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
  