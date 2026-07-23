export interface NavItem {
  label: string;
  href: string;
}

export interface ExternalProfile {
  label: string;
  href: string;
}

export const navbarConfig = {
  externalProfiles: [
    {
      label: 'At Work',
      href: 'https://genboard.com',
    },
    {
      label: 'X Profile',
      href: 'https://x.com/pulkitrais',
    },
  ] as ExternalProfile[],
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
