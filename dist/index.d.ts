/// <reference types="react" />
declare type Props = {
    element: React.MutableRefObject<null | HTMLDivElement>;
    onOutsideClick: (isInside: boolean) => void;
    active: boolean;
};
declare const useOutsideClick: ({ element, onOutsideClick, active }: Props) => void;
export default useOutsideClick;
