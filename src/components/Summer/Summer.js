/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from "../Global/Button/Button";
import Heading from "../Global/Heading/Heading";

// Images
import SummerBg from "../../images/summerBg.webp";

const Summer = () => {
    return (
        <section className="summer" css={styles}>
            <Heading title="A BIG OFFER FOR THIS SUMMER" />
            <Button />
        </section>
    )
}

const styles = css`
    width: 100%;
    background: url('${SummerBg}')no-repeat center/cover;
    padding: 150px 0;
    .heading {
        width: 400px;
        h2 {
            font-size: 3rem;
        }
    }
    button {
        display: block;
        margin: 40px auto;
    }
`;

export default Summer;