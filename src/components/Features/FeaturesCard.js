/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const FeaturesCard = ({ featureImg, featureHeading, featureInfo }) => {
    return (
        <div css={styles} className="featureCard">
            <img src={featureImg} alt="" />
            <h3>{featureHeading}</h3>
            <p>{featureInfo}</p>
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 220px;
    text-align: center;
    img {
        display: block;
        margin: 0 auto;
    }
    h3 {
        color: #fff;
        padding: 20px 0 10px 0;
        font-size: 1.5rem;
    }
    p {
        color: rgb(170, 177, 183);
        font-size: 1.1rem;
    }
    @media (min-width: 509px) and (max-width: 905px) {
        padding: 20px 0 0 0;
    }
`;

export default FeaturesCard;