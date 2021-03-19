import { createContext, useContext } from "react";

interface Overlay {
  content: string;
  title: string;
}

export interface OverlayContextData {
  overlay: Overlay;
}

export const overlayContextDefaultValue: OverlayContextData = {
  overlay: {
    content: "",
    title: "",
  },
};

export const PostsContext = createContext<OverlayContextData>(
  overlayContextDefaultValue
);
