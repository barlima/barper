import React from "react"
import logoStyles from "./logo.module.scss"

export const Logo = () => (
  <div className={logoStyles.logo}>
    <span className={logoStyles.logoText}>BAR</span>
    <span className={logoStyles.logoText}>PER</span>
  </div>
)
