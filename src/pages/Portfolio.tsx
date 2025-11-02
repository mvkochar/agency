import { PortfolioItem } from '../components'
import ProjectsList from '../db/ProjectsList'
import './css/Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <main className='portfolio-main'>
                <h1 className="h1-title">Portfolio</h1>
                <p className="text">
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
            </main>
            <div className="portfolio-tabs d-f">
                <button className='tab-btn tab-btn__active'>Show All<sup>14</sup></button>
                <button className='tab-btn'>Design<sup>6</sup></button>
                <button className='tab-btn'>Branding<sup>4</sup></button>
                <button className='tab-btn'>Illustration<sup>3</sup></button>
                <button className='tab-btn'>Motion<sup>1</sup></button>
            </div>
            <div className="portfolio-content d-f">
                {
                    ProjectsList.map((project) => {
                        return (
                            <PortfolioItem
                                key={`project${project.id}`}
                                {...project}
                            />
                        )
                    })
                }
            </div>
            <a href="" className="portfolio-more">Load More</a>
            <section className='portfolio-help d-f align-center'>
                <div>
                    <h2 className="h2-title">We're Help <br /> To Build Your Dream Project</h2>
                    <p className="text">
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling in-house.
                    </p>
                    <a href="" className="portfolio-help-link">Contact Us</a>
                </div>
                <div><img src="/images/home-help-pic.png" alt="home-help-pic" /></div>
            </section>
        </>
    )
}

export default Portfolio