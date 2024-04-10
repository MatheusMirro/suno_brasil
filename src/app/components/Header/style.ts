import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 350px;
  height: auto;
`;

export const Menu = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    cursor: pointer;
    font-family: 'Schibsted Grotesk', Arial, sans-serif; /* Aplica a fonte Schibsted Grotesk ao ul */
    color: #012340;
  }

  li {
    margin-right: 20px;
    font-weight: 550;
  }
`;