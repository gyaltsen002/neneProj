export const navbar = [
  {
    id: 0,
    name: "Gallery",
    link: "gallery",
  },
  {
    id: 1,
    name: "About Me",
    link: "about",
  },
  {
    id: 2,
    name: "Price",
    link: "price",
  },
  {
    id: 3,
    name: "Contact Me",
    link: "contact",
  },
];

// // Function to get all the images from "assets/galleryImg"
export const getImages = function () {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context("../assets/galleryImg", false, /\.(jpg)$/)
  );

  return images;
};

export const IMAGEPERPAGE = 9;
