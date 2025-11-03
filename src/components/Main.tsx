import { Route, Routes } from "react-router-dom"
import { About, Blog, Home, Portfolio, Services } from "../pages"

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
            <Route
                path="Blog"
                element={<Blog />}
            />
        </Routes>
    )
}

export default Main