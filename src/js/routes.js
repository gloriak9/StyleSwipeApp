import HomePage from '../pages/home.f7';
import SetupPage from '../pages/setup.f7';
import ProfileonePage from '../pages/profileone.f7';
import ExplorePage from '../pages/explore.f7';
import NotFoundPage from '../pages/404.f7';
import TryOnPage from '../pages/tryon.f7';
import WardrobePage from '../pages/wardrobe.f7';
import StyleprofilePage from '../pages/styleprofile.f7';
import ProfileenvironmentPage from '../pages/profileenvironment.f7';

const routes = [
  {
    path: '/',
    component: HomePage,
    options: {
      transition: 'f7-fade',
      reloadCurrent: false,  // Whenchanged to true causes problems!!
      browserHistory: false,
      animate: true,
      pushState: true
    }
  },

  {
    path: '/setup/',
    component: SetupPage,
  },

  {
    path: '/profileone/',
    component: ProfileonePage,
  },

  {
    path: '/explore/',
    component: ExplorePage,
    options: {
      transition: 'f7-fade',
      reloadCurrent: false,  // Whenchanged to true causes problems!!
      browserHistory: false,
      animate: true,
      pushState: true
    }
  },
  {
    path: '/wardrobe/',
    component: WardrobePage,
    options: {
      transition: 'f7-fade',
      reloadCurrent: false,  // Whenchanged to true causes problems!!
      browserHistory: false,
      animate: true,
      pushState: true
    }
  },
  {
    path: '/virtual-tryon/',
    component: TryOnPage,
    options: {
      transition: 'f7-fade',
      reloadCurrent: false,  // Whenchanged to true causes problems!!
      browserHistory: false,
      animate: true,
      pushState: true
    }
  },

  {
    path: '/profileenvironment/',
    component: ProfileenvironmentPage,
  },

  {
    path: '/styleprofile/',
    component: StyleprofilePage,
  },

  {
    path: '(.*)',
    component: NotFoundPage,
  }
];

export default routes;