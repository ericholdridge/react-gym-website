/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from "../Global/Button/Button";

const PricingCard = ({ cardTitle, cardPricing }) => {
    return (
        <div className="pricingCard" css={styles}>
            <div className="pricingTitle">
                <h3>{cardTitle}</h3>
                <h5>{cardPricing}</h5>
            </div>
            <div className="pricingInfo">
                <span>24h unlimited access</span>
                <span>Trainer Advice</span>
            </div>
            <div className="infoGrey">
                <span>Locker + Bathroom</span>
                <span>Personal trainer</span>
            </div>
            <Button />
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 380px;
    border: 1px solid red;
    background: rgb(26, 26, 26);
    text-align: center;
    .pricingTitle {
        border-bottom: 1px solid rgb(49, 49, 49);
        padding: 30px 0 20px 0;
        h3 {
            color: #fff;
            font-size: 1.8rem;
        }
        h5 {
            color: rgb(255, 20, 20);
            font-size: 1.7rem;
        }   
    }
    .pricingInfo {
        display: flex;
        flex-direction: column;
        padding: 20px 0 0 0;
        color: #fff;
        span {
            display: block;
            padding: 10px 0;
        }
    }
    .infoGrey {
        color: rgb(122, 131, 139);
        display: flex;
        flex-direction: column;
        span {
            display: block;
            padding: 10px 0;
        }
    }
    button {
        margin: 40px 0;
    }
`

export default PricingCard;