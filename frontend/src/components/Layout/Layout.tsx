import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Footer from '../Footer/Footer';

export const Layout = () => (
  <>
  <Header />
  <Outlet />
  <Footer />
  </>
);