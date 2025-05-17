import { useEffect, useRef } from "react";

const useOutsideClick = (cb, event = "click") => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    document.addEventListener(event, handleOutsideClick);

    return () => {
      document.removeEventListener(event, handleOutsideClick);
    };
  }, [cb]);

  return ref;
};

export default useOutsideClick;
