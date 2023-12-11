import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const useApiFetch = function (imagesPerPage, setIsPending) {
  const [apiImage, setApiImage] = useState(null);
  const [slicedApiImage, setSlicedApiImage] = useState(
    apiImage?.slice(0, imagesPerPage)
  );

  const [error, setError] = useState("Error occured :(");

  useEffect(() => {
    const api = createApi({
      // Don't forget to set your access token here!
      token: "536087",
      // See https://unsplash.com/developers
      accessKey: "ca9VJj9rFoS3hgMhPiC84qzc_FCLf4VhAo9HhK2QeGI",
    });

    const unsplashApiImageReq = async function () {
      try {
        const response = await api.search.getPhotos({
          query: "dog", // Green dog query images && NO search query yet
          page: 1,
          perPage: 12,
          color: "green",
          // orientation: "portrait",
        });

        const result = response.response.results;

        const copyResult = result.map((unpslashImageObj, index) => {
          return {
            key: index,
            image: unpslashImageObj.urls.raw, //unsplash GET image url
            description: unpslashImageObj.alt_description,
            date: unpslashImageObj.created_at.substring(0, 10),
          };
        });

        setIsPending(false);
        setApiImage(copyResult);
        setSlicedApiImage(copyResult.slice(0, imagesPerPage));
      } catch (error) {
        setError(error);
      }
    };

    unsplashApiImageReq();
  }, [imagesPerPage, setIsPending]);

  return { apiImage, slicedApiImage, setSlicedApiImage, error };
};

export default useApiFetch;
