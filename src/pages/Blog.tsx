import { Link } from 'react-router-dom'
import { BlogItem } from '../components'
import PostsList from '../db/PostsList'
import './css/Blog.css'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <h1 className="h1-title">Blog Articles</h1>
                <p className="text">
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
            </main>
            <div className="blog-latest d-f">
                <div className="blog-latest-item">
                    <div><Link to="/post"><img src="/images/blog-latest1.png" alt="blog-latest1" /></Link></div>
                    <p className="text-big">Stories</p>
                    <h3 className="h3-title">Performance marketing agencies specialize</h3>
                    <p className="text">7 Dec, 2021</p>
                </div>
                <div className="blog-latest-item">
                    <div><img src="/images/blog-latest2.png" alt="blog-latest2" /></div>
                    <p className="text-big">Design</p>
                    <h3 className="h3-title">Digital marketing channels</h3>
                    <p className="text">23 Nov, 2021</p>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-box d-f">
                    {
                        PostsList.map((post) => {
                            return (
                                <BlogItem
                                    key={`post${post.id}`}
                                    {...post}
                                />
                            )
                        })
                    }
                </div>
                <button className='blog-more'>Load more</button>
            </div>
            <section className='blog-newsletter d-f jc-sb'>
                <h3 className="h3-title">Newsletter</h3>
                <form action="" className='blog-newsletter-fm'>
                    <input type="email" name="newsletterEmail" placeholder='Your email' />
                    <button type="button">Subscribe</button>
                </form>
            </section>
            <section className='blog-help d-f align-center'>
                <div>
                    <h2 className="h2-title">We're Help <br /> To Build Your Dream Project</h2>
                    <p className="text">
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling in-house.
                    </p>
                    <Link to="/contact" className="blog-help-link">Contact Us</Link>
                </div>
                <div><img src="/images/home-help-pic.png" alt="home-help-pic" /></div>
            </section>
        </>
    )
}

export default Blog