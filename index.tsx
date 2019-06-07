import { useEffect } from "react";
import isElement from "lodash.iselement";

const useOutsideClick = (
  element: React.MutableRefObject<null | HTMLDivElement>,
  onOutsideClick: (isInside: boolean) => void,
  active: boolean = true
) => {
  if (active) {
    const onMouseUp = (e: MouseEvent) => {
      const isInside =
        element.current && isElement(element.current)
          ? element.current.contains(e.target as HTMLDocument)
          : false;
      onOutsideClick(isInside);
    };

    useEffect(() => {
      document.addEventListener("mouseup", onMouseUp);
      return () => {
        document.removeEventListener("mouseup", onMouseUp);
      };
    }, [active]);
  }
};

export default useOutsideClick;
