import { useEffect, RefObject } from "react";
import isElement from "lodash.isElement";

const useOutsideClick = (
  inside:
    | RefObject<null | HTMLDivElement>
    | Array<RefObject<null | HTMLDivElement>>,
  onOutsideClick: (isInside: boolean) => void,
  active: boolean = true
) => {
  const onMouseUp = (e: MouseEvent) => {
    const isInside = Array.isArray(inside)
      ? inside.some(
          element =>
            !!element &&
            !!element.current &&
            isElement(element.current) &&
            element.current.contains(e.target as HTMLDocument)
        )
      : !!inside &&
        !!inside.current &&
        isElement(inside.current) &&
        inside.current.contains(e.target as HTMLDocument);

    onOutsideClick(isInside);
  };

  useEffect(() => {
    if (active) {
      document.addEventListener("mouseup", onMouseUp);
      return () => {
        document.removeEventListener("mouseup", onMouseUp);
      };
    }
  }, [active]);
};

export default useOutsideClick;
