/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Gallery2 from "../../images/gallery.png";
import Gallery1 from "../../images/gallery2.png";
import Gallery3 from "../../images/gallery3.png";
import Gallery4 from "../../images/gallery4.png";
import Gallery5 from "../../images/gallery5.png";
import Gallery6 from "../../images/gallery1.png";

const Gallery = () => {
    return (
        <section className="gallery" css={styles}>
            <div className="img1">
                <img src={Gallery1} alt="" />
            </div>
            <div className="img2">
                <img src={Gallery4} alt="" />
            </div>
            <div className="img3">
                <img src={Gallery5} alt="" />
            </div>
            <div className="img4">
                <img src={Gallery6} alt="" />
            </div>
            <div className="img5">
                <img src={Gallery3} alt="" />
            </div>
            <div className="img6">
                <img src={Gallery2} alt="" />
            </div>
        </section>
    )
}

const styles = css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .img1, .img3 {
        width: 30%;
        height: 500px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .img2 {
        width: 40%;
        height: 500px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .img4 {
        width: 24%;
        height: 500px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    .img5, .img6 {
        width: 38%;
        height: 500px;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width: 769px) {
        .img1, .img2, .img3, .img4, .img5, .img6 { 
            width: 100%;
        } 
    }
    @media (min-width: 770px) and (max-width: 1002px) {
        .img1, .img2, .img3, .img4, .img5, .img6 { 
            width: 50%;
        } 
    }

`

export default Gallery;