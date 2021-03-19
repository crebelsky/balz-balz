export interface NavigationItemProps {
  label: string;
  href: string;
  overlay?: boolean;
}

export default function NavigationItem({ children, href }) {
  return (
    <li className={`text-white text-xs uppercase relative m-4`}>
      <a href={href}>{children}</a>
    </li>
  );
}
