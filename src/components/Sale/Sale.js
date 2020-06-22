/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Button from "../Global/Button/Button";

// Background Image
import SaleBg from "../../images/Sale.png";

const Sale = () => {
    return (
        <section className="saleSection" css={styles}>
            <Container>
                <div className="wrapper">
                    <h3>A BIG OFFER FOR<br></br>
                    THIS SUMMER</h3>
                    <h2>50% Off</h2>
                    <p>There are many variations of passages of lorem Ipsum available but the majority have suffered alteration.</p>
                    <Button />
                </div>
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: url('${SaleBg}') no-repeat center/cover;
    .container {
        padding: 200px 0;
        display: flex;
        max-width: 1200px;
        justify-content: flex-end;
        .wrapper {
            h3 {
                color: #fff;
                font-size: 2.6rem;
            }
            h2 {
                color: rgb(255, 20, 20);
                font-size: 6rem;
            }
            p {
                padding: 10px 0 40px 0;
                max-width: 500px;
                color: #fff;
            }
        }
    }
`;

export default Sale;