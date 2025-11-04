import { Link } from 'react-router-dom'
import './css/SinglePost.css'
import PostsList from '../db/PostsList'
import { BlogItem } from '../components'

const SinglePost = () => {
    return (
        <>
            <main className='post-main'>
                <div className="post-main-prev d-f align-center">
                    <Link to="/blog" className='d-b'>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.03021 0L6.33508 1.28545L3.50442 4.09273H15V5.90727H3.50442L6.33508 8.71455L5.03021 10L0 5L5.03021 0Z" fill="#391400" />
                        </svg>
                    </Link>
                    <p className="prev-name">Back to Blog</p>
                </div>
                <h2 className="h2-title">Agency is a business you hire to outsource</h2>
                <div className="post-main-bottom d-f">
                    <p className='text'><span>In</span> Stories <span>by</span> Gabriel Pires</p>
                    <p className='text'><span>Date</span> 7 Dec, 2021</p>
                </div>
            </main>
            <div className="post-pic">
                <img src="/images/blog-latest1.png" alt="post-pic" />
            </div>
            <div className="post-content">
                <p className="text-big">
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
                <p className="text" style={{ marginTop: "32px" }}>
                    Outsource your digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety of digital solutions to promote
                    your product or service online and help you.
                </p>
                <h4 className="h4-title" style={{ marginTop: "51px" }}>Promote your product</h4>
                <p className="text" style={{ marginTop: "35px" }}>
                    Ability to put themselves in the merchant's shoes.
                    It is meant to partner on the long run, and work
                    as an extension of the merchant's team.
                </p>
                <ul className="ul-list" style={{ marginTop: "34px" }}>
                    <li>Digital marketing</li>
                    <li>Efforts instead</li>
                    <li>Handling in-house</li>
                </ul>
                <p className="text" style={{ marginTop: "32px" }}>
                    A digital agency is a business you hire to outsource
                    your digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety of digital solutions
                    to promote your product or service online and help you.
                </p>
                <h4 className="h4-title" style={{ marginTop: "65px" }}>Service online and help</h4>
                <p className="text" style={{ marginTop: "35px" }}>
                    Put themselves in the merchant's shoes. It is meant to partner on the long run,
                    and work as an extension of the merchant's team.
                </p>
                <ol className="ol-list" style={{ marginTop: "28px" }}>
                    <li>Marketing efforts</li>
                    <li>Instead of handling</li>
                    <li>In-house</li>
                </ol>
                <p className="text" style={{ marginTop: "32px" }}>
                    Agency is a business you hire to outsource your digital marketing efforts,
                    instead of handling in-house. They can provide your business with a variety
                    of digital solutions to promote your product or service online and help you.
                </p>
                <p className="quote d-f">
                    <div><img src="/images/quote2.png" alt="quote" /></div>
                    <p className="text-big">
                        Provide your business with a variety of digital solutions
                        to promote your product or service online and help you.
                    </p>
                </p>
                <p className="text">
                    Outsource your digital marketing efforts, instead of handling in-house.
                    They can provide your business with a variety of digital solutions
                    to promote your product or service online and help you.
                </p>
                <div className="bottom d-f jc-sb align-center">
                    <div className="author d-f align-center">
                        <div><img src="/images/editor.png" alt="editor" /></div>
                        <div>
                            <p className="text-big">Samuil Sadovsky</p>
                            <p className="text-small">Editor</p>
                        </div>
                    </div>
                    <div className="social d-f">
                        <a href="" className="social-link">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66667 5.33333H0V8H2.66667V16H6.66667V8H9.09333L9.33333 5.33333H6.66667V4.22267C6.66667 3.58533 6.79467 3.33333 7.41067 3.33333H9.33333V0H6.128C3.73067 0 2.66667 1.056 2.66667 3.07733V5.33333Z" fill="white" />
                            </svg>
                        </a>
                        <a href="" className="social-link">
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 1.54C15.412 1.80133 14.7787 1.97733 14.1147 2.05733C14.7933 1.65067 15.312 1.008 15.5587 0.241333C14.924 0.617333 14.2213 0.890667 13.4733 1.03733C12.876 0.398667 12.0213 0 11.0787 0C8.95867 0 7.40133 1.97733 7.88 4.03067C5.15333 3.89333 2.73333 2.58667 1.11467 0.601333C0.254667 2.076 0.669333 4.00667 2.13067 4.984C1.59333 4.96667 1.088 4.81867 0.645333 4.57333C0.609333 6.09333 1.7 7.516 3.27867 7.83333C2.81733 7.95867 2.31067 7.988 1.796 7.88933C2.21333 9.19333 3.428 10.1413 4.86267 10.168C3.48 11.2507 1.74267 11.7347 0 11.5293C1.45333 12.4613 3.17733 13.004 5.03067 13.004C11.1267 13.004 14.5693 7.856 14.3613 3.23867C15.004 2.77733 15.56 2.19867 16 1.54Z" fill="white" />
                            </svg>
                        </a>
                        <a href="" className="social-link">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32 1.63043C3.32 2.53109 2.58 3.26087 1.66667 3.26087C0.753333 3.26087 0.0133333 2.53109 0.0133333 1.63043C0.0133333 0.730435 0.753333 0 1.66667 0C2.58 0 3.32 0.730435 3.32 1.63043ZM0 4.56522V15H3.33333V4.56522H0ZM5.34267 4.56522H8.65467V5.97065C10.052 3.44087 16 3.2537 16 8.39283V15H12.6747V9.52239C12.6747 6.22761 8.65533 6.47674 8.65533 9.52239V15H5.34267V4.56522Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <section className='post-related'>
                <h4 className="h4-title">Related Articles</h4>
                <div className="post-related-box d-f">
                    {
                        PostsList.filter((elem) => elem.id < 4).map((post) => {
                            return (
                                <BlogItem
                                    key={`post-related${post.id}`}
                                    {...post}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='post-help d-f align-center'>
                <div>
                    <h2 className="h2-title">We're Help <br /> To Build Your Dream Project</h2>
                    <p className="text">
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling in-house.
                    </p>
                    <Link to="/contact" className="post-help-link">Contact Us</Link>
                </div>
                <div><img src="/images/home-help-pic.png" alt="home-help-pic" /></div>
            </section>
        </>
    )
}

export default SinglePost