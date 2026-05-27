export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  mediumProfile: 'https://medium.com/@pulkitrai',
  logo: {
    src: '/assets/logo.png',
    alt: 'Pulkit Rai',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Work',
      href: '/work-experience',
    },
  ] as NavItem[],
};
