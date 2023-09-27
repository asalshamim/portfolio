import React from "react";
import styles from "../components/ProjectStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import shop from '../assets/shop2.png';
import sport from '../assets/sportShop.png';
import movie from '../assets/Movie.png';

const data = [
  {
    id: 1,
    image: shop,
    title: "App",
    description: " o",
    github: "https://github.com/asalshamim/examensarbete1",
    demo: "https://examensarbete1.vercel.app/",
  },
  {
    id: 2,
    image: sport,
    title: " App",
    description: "ki",
    github: "",
    demo: "",
  },
  {
    id: 3,
    image: movie,
    title: "Movie",
    description: "s.",
    github: "https://github.com/asalshamim/movie-app",
    demo: "https://movie-app-psi-mauve.vercel.app/",
  },
];

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <section id="Portfolio">
        

        <div className={styles.portfolioContainer}>
          {data.map(({ id, image, title, description, github, demo }) => {
            return (
              <article key={id} className={styles.portfolioItem}>
                <img
                  className={styles.portfolioItemImage}
                  src={image}
                  alt={title}
                />
                <div className={styles.portfolioOverlay}>
                  <h3 className={styles.portfolioH3}>{title}</h3>
                  <p className={styles.portfolioParagraph}>{description}</p>
                  <div className={styles.btnWrapper}>
                    <a href={demo} className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                      Live demo
                    </a>
                    {github && (
                      <a href={github} className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Project;
