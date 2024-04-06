import { DinamicSidebarStyled } from './DinamicSidebar.styled';
import { Navigation } from '../SideBar/Navigation/Navigation';
import Balance from '../SideBar/Balance/Balance';
// import { Currency } from '../SideBar/Currency';
// import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { SpecialDivStyled } from './SpecialDivStyled';

export const DinamicSidebar = () => {
  // const location = useLocation();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  // const currencyActive = location.pathname.includes('/currency');
  // const homeActive = location.pathname.includes('/home');

  return !isMobile ? (
    <DinamicSidebarStyled>
      <SpecialDivStyled>
        <Navigation />
        <Balance />
      </SpecialDivStyled>
      {/* <Currency /> */}
    </DinamicSidebarStyled>
  ) : (
    <DinamicSidebarStyled>
      <Navigation />
      <Balance />
      {/* {homeActive && <Balance />}
      {currencyActive && <Currency />} */}
    </DinamicSidebarStyled>
  );
};
