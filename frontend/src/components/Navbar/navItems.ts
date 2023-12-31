export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dentists",
    href: "/dentists",
  },
  {
    label: "My Booking",
    href: "/mybooking",
  },
];
