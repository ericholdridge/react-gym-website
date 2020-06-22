/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Button from "../Global/Button/Button";
import HeroImage from "../../images/HeroImage.png";

const Hero = () => {
    return (
        <section className="hero" css={styles}>
            <div className="overlay"></div>
            <Container>
                <div className="heroText">
                    <h2>BUILD UP YOUR</h2><br></br>
                    <h1>BODY SHAPE</h1>
                    <span>Build Your Body and Fitness with Professional Touch</span>
                </div>
                <Button />
            </Container>
        </section>
    )
}

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('${HeroImage}') no-repeat center/cover;
  position: relative;
  .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(at center center, rgba(181, 8, 8, 0.38) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      z-index: 4;
      max-width: 1200px;
        .heroText {
            text-align: center;
            line-height: 3.8rem;
            h2 {
            font-size: 3rem;
            }
            h1 {
                font-size: 9rem;
            } 
            span {
                display: block;
                padding: 60px 0 0 0;
                font-size: 1.3rem;
            }
        }
        button {
            margin: 20px 0 0 0;
        }
    }

    @media(max-width: 568px) {
        .container {
            .heroText {
                line-height:1;
                h2 {
                    font-size: 2.4rem;
                }
                h1 {
                    font-size: 4rem;
                }
                span {
                    font-size: 1.1rem;
                    padding: 30px 0;
                }
            }
        }
    }
    @media (min-width: 569px) and (max-width: 1008px){
        .container {
            .heroText {
                line-height:1;
                h2 {
                    font-size: 3rem;
                }
                h1 {
                    font-size: 5rem;
                }
                span {
                    padding: 30px 0;
                }
            }
        }
    }
`

export default Hero;