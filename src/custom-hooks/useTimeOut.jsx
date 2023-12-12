import { useEffect } from "react";

const useTimeOut = function (userFunc, userSeconds) {
  useEffect(() => {
    setTimeout(() => {
      userFunc();
    }, 1000 * userSeconds);
  }, [userSeconds, userFunc]);
};

export default useTimeOut;
