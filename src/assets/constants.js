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
  const importAll = (r) =>
    r.keys().map((image, index) => ({ key: index, image: r(image) }));

  const imagesWithKeys = importAll(
    require.context("../assets/galleryImg", false, /\.(jpg)$/)
  );

  return imagesWithKeys;
};

// Window width
export const INITIALWINDOWWIDTH = window.innerWidth;

// Short bio of nene
export const aboutBioConstant = {
  title: "My Bio",
  body: `I have been a professional makeup artist since 2007, and it used to be my childhood dream. I believe that everybody has its own flawless natural beauty. My work is to show it in the best way. I cherish all the little processes. I care, focus and ensure all of my tools and skills to let every client feel comfortable and aware of their true beauty.`,
};

// Career throughout the years
export const aboutCareerConstant = {
  title: "Career",
  body: [
    {
      id: 0,
      date: 2007,
      experience: `Started the career at Nagoya, Japan as an assistant at the Hair & Make up salon, learnt about basic skills of hair styling.`,
    },
    {
      id: 1,
      date: 2008,
      experience: `Graduated Aliare Beauty Collage, Certified as the hair dresser.`,
    },
    {
      id: 2,
      date: 2011,
      experience: `Established Salon de Coco.`,
    },
    {
      id: 3,
      date: 2015,
      experience: `Stayed in New York to learn the backstage of NYFW, Moved to Tokyo and started a new career in the creative industry.`,
    },
    {
      id: 4,
      date: 2019,
      experience: `Moved to Melbourne, Australia and started international career as a freelance HMU artist.`,
    },
  ],
};

// Experience
export const aboutSkillsConstant = {
  title: "Skills, Experiences",
  date: "since 2007",
  skill: `Mostly passionate for the natural skin finish. Specialized for the fashion shoot and beauty shoot, also, involving multiple shoots as the art director too. Experienced fashion shows, TV/Video shoot, magazine shoot, commercial shoot, wedding, traditional Japanese style, etc.`,
};

// Options to inquire in quote
export const quoteOptions = [
  { id: 0, service: "Photo/Video Shoot" },
  { id: 1, service: "Personal Hair & Make up - non bridal" },
  { id: 2, service: "Mobile Services" },
  { id: 3, service: "Bridal Services" },
  { id: 4, service: "Location Shoot" },
  { id: 5, service: "Other" },
];
