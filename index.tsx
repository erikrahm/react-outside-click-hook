import React, { useEffect } from "react";
import isElement from "lodash.iselement";

type Props = {
  element: React.MutableRefObject<null | HTMLDivElement>;
  onOutsideClick: (isInside: boolean) => void;
  disabled: boolean;
};

const useOutsideClick = ({ element, onOutsideClick, disabled }: Props) => {
  const onMouseUp = (e: MouseEvent) => {
    const isInside =
      element.current && isElement(element.current)
        ? element.current.contains(e.target as HTMLDocument)
        : false;
    if (!isInside) {
      onOutsideClick(isInside);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [disabled]);
};

export default useOutsideClick;
