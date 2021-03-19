import { FunctionComponent } from "react";
import { useOverlayContext } from "../Navigation/NavigationContext";

export interface NavigationItemProps {
  label?: string;
  href: string;
  overlay?: boolean;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
  href,
  label,
  overlay,
}) => {
  const { setOverlayOpen, setOverlayContent } = useOverlayContext();
  return (
    <li className={`text-white text-xs uppercase relative m-4`}>
      <a
        href={href}
        onClick={() => {
          setOverlayContent(label);
          setOverlayOpen(overlay);
        }}
      >
        {label}
      </a>
    </li>
  );
};

export default NavigationItem;
