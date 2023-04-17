import { useEffect } from "react";

type Params = {
  ref: React.MutableRefObject<HTMLDivElement | undefined>;
  setDropdown: (value: boolean) => void;
};

export function useOutsideAlerter({ ref, setDropdown }: Params) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    function handleKeyPress(event: any) {
      if (ref.current && event.key === "Enter") {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [ref]);
}
