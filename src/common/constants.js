export const Symbols = {
  BBDough: '🅱️',
  MibiBBDough: 'Ⓜ️',
};

export const Pages = [
  {
    id: 1,
    name: 'Dashboard',
    link: '/',
  },
  {
    id: 2,
    name: 'Financial Services',
    link: '/bank',
  },
  {
    id: 3,
    name: 'Loan Applications',
    link: '/loans',
  },
];

export const urls = {
  homeLoans : 'https://api.bonds.projects.bbdgrad.com',
  commercialBank: 'http://api.commercialbank.projects.bbdgrad.com',
};

Object.freeze(Symbols);
Object.freeze(Pages);