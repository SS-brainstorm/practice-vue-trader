import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio'
import Stocks from './components/pages/Stocks';
import PageError from './components/pages/PageError';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks
  },
  {
    path: '*',
    name: '404',
    component: PageError
  }
];
