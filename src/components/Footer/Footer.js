/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Container from "../Global/Container";
import FooterCard from "./FooterCard";
import Button from "../Global/Button/Button";

const Footer = () => {
    return (
        <footer css={styles}>
            <Container>
                <FooterCard cardHeading="Gym">
                    <div className="firstCard">
                        <p>5th flora, 700/D kings road, green lane New York-1782</p>
                        <a href="">+10 367 826 2567</a>
                        <a href="">contact@carpenter.com</a>
                        <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-pinterest-p"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Useful Links">
                    <div className="usefulLinks">
                        <a href="">Pricing</a>
                        <a href="">About</a>
                        <a href="">Gallery  </a>
                        <a href="">Contact</a>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Subscribe">
                    <div className="subscribe">
                        <div className="input">
                            <input type="text" placeholder="Enter your Email" />
                            <Button />
                        </div>
                        <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                    </div>
                </FooterCard>
            </Container>
            <div className="copyright">
                <p>Copyright ©2020 All rights reserved | This template is made with <i class="far fa-heart"></i> by Colorlib</p>
            </div>
        </footer>
    )
}

const styles = css`
    width: 100%;
    background: #000;
    .container {
        padding: 150px 0;
        max-width: 1200px;
        display: flex;
        border-bottom: 1px solid rgb(26, 26, 26);
        justify-content: space-between;
    }
    .footerCard {
        .firstCard {
            display: flex;
            flex-direction: column;
            padding: 40px 0 0 0;
            p {
                color: #ccc;
            }
            a {
                color: #ccc;
                padding: 10px 0 0 0;
                text-decoration: none;
                transition: 400ms ease-in-out;
                &:hover {
                    color: red;
                }
            }
            .social {
                display: flex;
                padding: 40px 0 0 0;
                i {
                    color: #ccc;
                    margin: 0 10px 0 0;
                    cursor: pointer;
                    transition: all 300ms ease-in-out;
                    &:hover {
                        color: red;
                    }
                }
            }
        }
        .usefulLinks {
            padding: 40px 0 0 0;
            display: flex;
            flex-direction: column;
            a {
                color: #ccc;
                padding: 10px 0 0 0;
                text-decoration: none;
                transition: 400ms ease-in-out;
                &:hover {
                    color: red;
                }
            }
        }
        .subscribe {
            padding: 40px 0 0 0;
            .input {
                position: relative;
                input {
                    height: 44px;
                    padding: 10px;
                    width: 100%;
                    border-radius: 10px;
                    border: none;
                    outline: none;
                }
                button {
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    padding: 10px 20px;
                    z-index: 20;
                    right: -42px;
                    border-radius: 10px;
                }
            }
            p {
                color: #ccc;
                padding: 20px 0 0 0;
            }
        }
    }
    .copyright {
        p {
            padding: 20px 0;
            color: #ccc;
            text-align: center;
            i {
                color: red;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 700px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 200px;
                /* border: 1px solid green; */
                &:nth-child(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
        .copyright {
            max-width: 400px;
            margin: 0 auto;
        }
    }
    @media (min-width: 701px) and (max-width: 1000px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 300px;
                &:nth-child(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
    }
    @media (min-width: 1001px) and (max-width: 1200px) {
        .container {
            padding: 100px 0;
            flex-wrap: wrap;
            .footerCard {
                max-width: 200px;
                &:nth-child(3) {
                    max-width: 400px;
                    padding: 30px 0 0 0;
                }
            }
        }
    }
`

export default Footer;