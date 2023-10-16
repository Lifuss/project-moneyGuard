import { styled } from 'styled-components';
import { StyledContainer } from 'styles/GlobalStyles';

export const StyledHeaderContainer = styled(StyledContainer)`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const HeaderWrapper = styled.header`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 13px;
  height: 17px;
`;

export const LogoName = styled.span`
  color: #fbfbfb;
  font-size: 13px;
`;

export const AccountName = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const DividerImg = styled.img`
  margin-right: 12px;
  margin-left: 4px;
`;

export const ExitText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 8px;
`;

export const LogoutBtn = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
