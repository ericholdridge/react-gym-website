/** @jsx jsx */
// Components
import { css, jsx } from '@emotion/core'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import TrainerCard from "./TrainerCard";
// Images
import TrainerBg from "../../images/HeroImage.png";
import Trainer1 from "../../images/trainer.png";
import Trainer2 from "../../images/trainer2.png";
import Trainer3 from "../../images/trainer3.png";


const Trainers = () => {
    return (
        <section className="trainers" css={styles}>
            <Heading title="OUR TRAINERS" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
            <Container>
                <TrainerCard trainerImg={Trainer3} trainerName="Jessica Mino" trainerType="Woman Trainer" />
                <TrainerCard trainerImg={Trainer1} trainerName="Amit Khan" trainerType="Men Trainer" />
                <TrainerCard trainerImg={Trainer2} trainerName="Paulo Rolac" trainerType="Men Trainer" />
            </Container>
        </section>
    )
}

const styles = css`
    width: 100%;
    background: url('${TrainerBg}') no-repeat center/cover;
    .heading {
        padding: 150px 0 0 0;
    }
    .container {
        padding: 150px 0;
        display: flex;
        max-width: 1200px;
        justify-content: space-between;
    }
    @media (max-width: 769px) {
        .heading {
            max-width: 400px;
        }
        .container {
            flex-direction: column;
            .trainerCard {
                margin: 0 auto;
                .trainerBgImage {
                    height: 500px;
                    &:hover {
                        .social {
                            background: rgba(0, 0, 0, 0.5);
                            height: 500px;
                        }
                    }
                    .social {
                        height: 480px;
                    }
                }
            }
        }
    }
    @media (min-width: 770px) and (max-width: 980px) {
        .container {
            flex-wrap: wrap;
            .trainerCard {
                max-width: 45%;
            }
        }
    }
    @media (min-width: 981px) and (max-width: 1324px) {
        .container {
            flex-wrap: wrap;
            .trainerCard {
                max-width: 290px;
            }
        }
    }
`;

export default Trainers;