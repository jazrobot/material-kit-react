import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MainNavbar from './MainNavbar';

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayout = () => (
  <>
    <MainNavbar />
    <MainLayoutWrapper>
      <Outlet />
    </MainLayoutWrapper>
  </>
);

export default MainLayout;
