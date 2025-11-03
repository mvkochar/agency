import React from 'react'
import { PortfolioItem } from '../components'
import ProjectsList from '../db/ProjectsList'
import './css/Portfolio.css'

const Portfolio = () => {
    const [tagName, setTagName] = React.useState("Show All")
    const totalCount = ProjectsList.length
    const designCount = ProjectsList.filter((elem)=> elem.tag === "Design").length
    const brandingCount = ProjectsList.filter((elem)=> elem.tag === "Branding").length
    const illustrationCount = ProjectsList.filter((elem)=> elem.tag === "Illustration").length
    const motionCount = ProjectsList.filter((elem)=> elem.tag === "Motion").length

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
                <button 
                    className={tagName === "Show All" ?  'tab-btn tab-btn__active' : 'tab-btn'} 
                    onClick={()=>setTagName("Show All")}
                >
                    Show All<sup>{totalCount}</sup>
                </button>
                <button 
                    className={tagName === "Design" ?  'tab-btn tab-btn__active' : 'tab-btn'} 
                    onClick={()=>setTagName("Design")}
                >
                    Design<sup>{designCount}</sup>
                </button>
                <button 
                    className={tagName === "Branding" ?  'tab-btn tab-btn__active' : 'tab-btn'} 
                    onClick={()=>setTagName("Branding")}
                >
                    Branding<sup>{brandingCount}</sup>
                </button>
                <button 
                    className={tagName === "Illustration" ?  'tab-btn tab-btn__active' : 'tab-btn'} 
                    onClick={()=>setTagName("Illustration")}
                >
                    Illustration<sup>{illustrationCount}</sup>
                </button>
                <button 
                    className={tagName === "Motion" ?  'tab-btn tab-btn__active' : 'tab-btn'} 
                    onClick={()=>setTagName("Motion")}
                >
                    Motion<sup>{motionCount}</sup>
                </button>
            </div>
            <div className="portfolio-content d-f">
                {
                    ProjectsList.filter((elem)=> elem.tag === tagName || tagName === "Show All").map((project) => {
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