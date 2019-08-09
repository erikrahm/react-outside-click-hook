import { RefObject } from "react";
declare const useOutsideClick: (inside: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement | null>[], onOutsideClick: (isInside: boolean) => void, active?: boolean) => void;
export default useOutsideClick;
