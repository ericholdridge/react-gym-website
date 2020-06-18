/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import Button from "../Global/Button/Button";

const Navbar = () => {
    return (
        <nav css={styles}>
            <Container>
                <NavbarLogo />
                <NavbarLinks />
                <Button />
            </Container>
        </nav>
    )
}

const styles = css`
    width: 100%;
    padding: 40px 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default Navbar;