/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import JoinUs1 from "../../images/JoinUs1.png";
import JoinUs2 from "../../images/JoinUs2.png";
import JoinUsInfo from "./JoinUsInfo";

const JoinUs = () => {
    return (
        <section className="joinUs" css={styles}>
            <div className="wrap">
                <div className="img1">
                    <JoinUsInfo title="FOR WOMEN" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                </div>
            </div>
            <div className="wrap">
                <div className="img2">
                    <JoinUsInfo title="FOR GUYS" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                </div>
            </div>

        </section>
    )
}

const styles = css`
    width: 100%;
    display: flex;
    .wrap {
        overflow: hidden;
        width: 50%;
        .img1 {
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .8s;
            background: url('${JoinUs1}') no-repeat center/cover;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .wrap {
        overflow: hidden;
        width: 50%;
        .img2 {
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .8s;
            background: url('${JoinUs2}') no-repeat center/cover;
            &:hover {
                transform: scale(1.2);
            }
        }
    }

    @media(max-width: 990px) {
        flex-direction: column;
        .wrap {
            width: 100%;
        }
    }
`

export default JoinUs;