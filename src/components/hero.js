import React from "react"
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import heroStyles from "./hero.module.scss"
import { Logo } from "./logo"
import ColorTransition from "./color-transition"

const Hero = () => {
  return (
    <div className={heroStyles.wrapper}>
      <div className={heroStyles.content}>
        <div className={heroStyles.title}>
          <div className={heroStyles.typing}></div>
          <h1
            className={heroStyles.name}
            data-sal="fade"
            data-sal-delay="500"
            data-sal-duration="500"
            data-sal-easing="ease"
          >
            B. Perucki
          </h1>
          <h3 className={heroStyles.webDev}></h3>
        </div>

        <div
          className={heroStyles.logo}
          data-sal="slide-left"
          data-sal-delay="500"
          data-sal-easing="ease"
        >
          <Logo />
        </div>

        <div className={heroStyles.media}>
          <a
            href="https://www.linkedin.com/in/bart%C5%82omiej-perucki-319a0bb5/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/barlima" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/bartlomiejperucki/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <ColorTransition />
    </div>
  )
}

export default Hero
