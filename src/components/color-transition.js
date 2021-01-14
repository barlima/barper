import React from "react"

import styles from "./color-transition.module.scss"
import { Logo } from "./logo"

const ColorTransition = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div />
        <div
          data-sal="fade"
          data-sal-delay="1000"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default ColorTransition
