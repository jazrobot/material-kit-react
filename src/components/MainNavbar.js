import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  AppBar,
  Toolbar
} from '@mui/material';
import { Logo } from './Logo';

const MainNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const MainNavbar = (props) => (
  <>
    <MainNavbarRoot {...props}>
      <Toolbar sx={{ height: 64 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </MainNavbarRoot>
  </>
);

export default MainNavbar;
