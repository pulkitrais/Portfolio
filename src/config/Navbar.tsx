export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  navItems: [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
  ] as NavItem[],
};
