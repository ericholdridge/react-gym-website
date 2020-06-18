/** @jsx jsx */
import { css, jsx } from '@emotion/core'


const NavbarLinks = () => {
    return (
        <div css={styles}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Pricing</a>
            <a href="">Gallery</a>
            <a href="">Pages</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
    )
}

const styles = css`
    a {
        text-decoration: none;
        text-transform: uppercase;
        padding: 0 20px;
        color: #fff;
        font-weight: 700;
    }

`

export default NavbarLinks;