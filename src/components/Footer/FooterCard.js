/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const FooterCard = ({ cardHeading, children }) => {
    return (
        <div className="footerCard" css={styles}>
            <h3>{cardHeading}</h3>
            {children}
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 300px;
    h3 {
        color: red;
        font-size: 1.6rem;
    }
`

export default FooterCard;