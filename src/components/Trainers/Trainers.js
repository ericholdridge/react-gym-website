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
        justify-content: space-between;
    }
`;

export default Trainers;