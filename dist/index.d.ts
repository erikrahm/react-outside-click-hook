import React from "react";
declare type Props = {
    element: React.MutableRefObject<null | HTMLDivElement>;
    onOutsideClick: (isInside: boolean) => void;
    disabled: boolean;
};
declare const useOutsideClick: ({ element, onOutsideClick, disabled }: Props) => void;
export default useOutsideClick;
