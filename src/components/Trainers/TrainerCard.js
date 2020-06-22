/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const TrainerCard = ({ trainerName, trainerType, trainerImg }) => {
    return (
        <div className="trainerCard" css={styles}>
            <div className="trainerBgImage" style={{ background: `url('${trainerImg}')no-repeat center/cover` }}>
                <div className="social">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                </div>
            </div>
            <h3>{trainerName}</h3>
            <span>{trainerType}</span>
        </div>
    )
}

const styles = css`
    width: 100%;
    max-width: 380px;
    text-align: center;
    .trainerBgImage {
        /* width: 100%; */
        height: 400px;
        display: flex;
        align-items: flex-end;
        &:hover {
            .social {
                background: rgba(0, 0, 0, 0.5);
                height: 400px;
            }
        }
        .social {
            display: flex;
            width: 100%;
            height: 360px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 300ms ease-in-out;
            i {
                border: 1px solid #ccc;
                color: #ccc;
                padding: 20px;
                margin: 0 10px;
                height: 20px;
                width: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                cursor: pointer;
                transition: 300ms ease-in-out;
                &:hover {
                    background: red;
                    border: 1px solid red;
                }
            }
        }
    }
    h3 {
        color: #fff;
        font-size: 1.8rem;
    }
    span {
        color: #fff;
    }
`;

export default TrainerCard;