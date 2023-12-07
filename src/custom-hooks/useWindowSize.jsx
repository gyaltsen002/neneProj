import { useState, useEffect } from "react";

import { INITIALWINDOWWIDTH } from "../assets/constants";

const useWindowSize = function () {
  // Window Size
  const [windowSize, setWindowSize] = useState(INITIALWINDOWWIDTH);

  // Images per page
  const [imagesPerPage, setImagesPerPage] = useState(
    INITIALWINDOWWIDTH >= 700 && INITIALWINDOWWIDTH <= 1200 ? 8 : 9
  );

  // The right, left and cross buttons attributes in modal
  const [imageAttributes, setImageAttributes] = useState(true);

  useEffect(() => {
    const handleResize = function (e) {
      const changedWindowSize = e.target.innerWidth;

      setWindowSize(changedWindowSize);

      windowSize >= 700 && windowSize <= 1200
        ? setImagesPerPage(8)
        : setImagesPerPage(9);

      if (windowSize <= 705) {
        setImageAttributes(false);
      } else {
        setImageAttributes(true);
      }
    };

    // On <Gallery /> mount/on Re-render
    window.addEventListener("resize", handleResize);

    return () => {
      // On <Gallery /> unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize, imagesPerPage, setImageAttributes, setImagesPerPage]);

  return { windowSize, imagesPerPage, imageAttributes };
};

export default useWindowSize;
