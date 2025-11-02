import { Route, Routes } from "react-router-dom"
import { About, Home, Portfolio, Services } from "../pages"

const Main = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="about"
                element={<About />}
            />
            <Route
                path="services"
                element={<Services />}
            />
            <Route
                path="portfolio"
                element={<Portfolio />}
            />
        </Routes>
    )
}

export default Main