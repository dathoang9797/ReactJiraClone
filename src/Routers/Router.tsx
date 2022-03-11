import React, { lazy } from 'react';

import Home from '@Pages/Home';
import About from '@Pages/About';
import Contact from '@Pages/Contact';
import Detail from '@Pages/Detail';
import Profile from '@Pages/Profile';
import PageNotFound from '@Pages/PageNotFound';
// const Home = lazy(() => import('@Pages/Home'));
// const About = lazy(() => import('@Pages/About'));
// const Contact = lazy(() => import('@Pages/Contact'));
// const Detail = lazy(() => import('@Pages/Detail'));
// const Profile = lazy(() => import('@Pages/Profile'));
// const Login = lazy(() => import('@Pages/Login'));
// const PageNotFound = lazy(() => import('@Pages/PageNotFound'));

export const routers = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/detail/:id', component: Detail },
  { path: '/profile', component: Profile },
  { path: '*', component: PageNotFound },
];
