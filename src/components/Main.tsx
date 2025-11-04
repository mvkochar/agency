import { Route, Routes } from "react-router-dom"
import { About, Blog, Contact, Home, Portfolio, Services, SinglePost } from "../pages"

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
                path="blog"
                element={<Blog />}
            />
            <Route
                path="contact"
                element={<Contact />}
            />
            <Route
                path="post"
                element={<SinglePost/>}
            />
        </Routes>
    )
}

export default Main