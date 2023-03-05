export interface LinkRoutes {
  name: string;
  title: string;
  path: string;
}

export const linkRoutes: LinkRoutes[] = [
  {
    path: '/',
    name: 'home',
    title: 'Inicio'
  },
  {
    path: '/about',
    name: 'about',
    title: 'Sobre'
  },
  {
    path: '/characters',
    name: 'characters',
    title: 'Personajes'
  }
];
