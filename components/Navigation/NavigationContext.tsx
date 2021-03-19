import { createContext, useContext } from "react";

export type OverlayContent = {
  isOverlayOpen: boolean;
  overlayContent: string;
  setOverlayContent: (i: string) => void;
  setOverlayOpen: (c: boolean) => void;
};
export const OverlayContext = createContext<OverlayContent>({
  isOverlayOpen: false,
  overlayContent: "",
  setOverlayContent: () => {},
  setOverlayOpen: () => {},
});
export const useOverlayContext = () => useContext(OverlayContext);
