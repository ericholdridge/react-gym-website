/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Heading = ({ title, info }) => {
    return (
        <div className="heading" css={styles}>
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}

const styles = css`
    width: 100%;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    h2 {
        font-size: 2.4rem;
        color: #fff;
    }
    p {
        color: rgb(170, 177, 183);
        font-size: 1rem;
    }
`;

export default Heading;

