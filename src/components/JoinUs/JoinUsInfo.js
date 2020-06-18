/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Button from "../Global/Button/Button";

const JoinUsInfo = ({ title, info }) => {
    return (
        <div css={styles} className="joinUsInfo">
            <h3>{title}</h3>
            <p>{info}</p>
            <Button />
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    h3 {
        color: #fff;
        font-size: 2.3rem;
    }
    p {
        color: #fff;
        line-height: 1.4;
        padding: 12px 0;
    }
    button {
        display: block;
        margin: 20px 0 0 0;
    }
`

export default JoinUsInfo;