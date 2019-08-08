/// <reference types="react" />
declare const useOutsideClick: (inside: import("react").MutableRefObject<HTMLDivElement | null> | [import("react").MutableRefObject<HTMLDivElement | null>], onOutsideClick: (isInside: boolean) => void, active?: boolean) => void;
export default useOutsideClick;
