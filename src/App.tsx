import { Suspense, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { classNames } from "./helpers/classNames/classNames"
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync"
import { MainPageAsync } from "./pages/MainPage/MainPageAsync"
import "./styles/index.scss"
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App