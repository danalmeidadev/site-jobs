import styled from 'styled-components';
import {shade} from 'polished'

export const Header = styled.header``;

export const NavItem = styled.li`
margin-left: 20px;

a{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #252b60;
  text-transform: uppercase;
}
`;
export const ButtonHeader = styled.div`
display: flex;
margin-left: 300px;

`;

export const NavItemButton = styled.li`
margin-left: 20px;

a {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  background: #fb246a;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 0;
  margin-bottom: 0;
  padding: 23px 0;
  border-radius: 0;
  transition: color 0.4s linear;
  position: relative;
  z-index: 1;
  overflow: hidden;




  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 101%;
    height: 101%;
    background: ${shade(0.2, '#da2461')};
    z-index: 1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scale(0);
  }

  &:hover::before {
     color: #fff;
    transform: scale(1);
    z-index: -1;
  }
}


`;

