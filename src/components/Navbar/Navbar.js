/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from "react";
import Container from "../Global/Container";
import Logo from "./NavbarLogo";
import Menu from "./Menu";
import Button from "../Global/Button/Button";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav css={styles}>
            <Container>
                <Logo />
                <Menu openMenu={openMenu} />
                <Button text="join us" />
                <i
                    onClick={() => setOpenMenu(!openMenu)}
                    id="burgerMenu"
                    className={
                        openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
                    }
                ></i>
            </Container>
        </nav>
    );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  padding: 40px 0;
  .container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
      color: #fff;
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 1200px;
      button {
        display: none;
      }
      #burgerMenu {
        display: block;
      }
    }
  }
`;

export default Navbar;