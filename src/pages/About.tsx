import React from 'react'
import './css/About.css'
import FaqsList from '../db/FaqsList'
import { FaqItem } from '../components'

const About = () => {
    const [pinNum, setPinNum] = React.useState(1)

    return (
        <>
            <main className='about-main'>
                <h1 className="h1-title">About Us</h1>
                <p className="text">
                    Agency provides a full service range
                    including technical skills, design,
                    business understanding.
                </p>
            </main>
            <section className='about-agency'>
                <div className="d-f jc-sb">
                    <div>
                        <h5 className="h5-title">About</h5>
                        <h2 className="h2-title">An Experience Design Agency</h2>
                    </div>
                    <div className="about-agency-info d-f">
                        <p className="text">
                            Ability to put themselves in the merchant's shoes.
                            It is meant to partner on the long run, and
                            work as an extension of the merchant's team.
                        </p>
                        <p className="text">
                            A digital agency is a business you hire to outsource
                            your digital marketing efforts, instead of handling in-house.
                            They can provide your business with a variety of digital
                            solutions to promote your product or service online and help you.
                        </p>
                    </div>
                </div>
                <div className="about-agency-media d-f">
                    <div><img src="/images/about-agency-video.png" alt="about-agency-video" /></div>
                    <div className="about-agency-box d-f">
                        <div><img src="/images/about-agency-pic1.png" alt="about-agency-pic1" /></div>
                        <div><img src="/images/about-agency-pic2.png" alt="about-agency-pic2" /></div>
                        <div><img src="/images/about-agency-pic3.png" alt="about-agency-pic3" /></div>
                        <div><img src="/images/about-agency-pic4.png" alt="about-agency-pic4" /></div>
                    </div>
                </div>
            </section>
            <section className='about-features d-f'>
                <div>
                    <h5 className="h5-title">Features</h5>
                    <p className="text-big">
                        Long run, and work as an extension of the merchant's team.
                    </p>
                    <p className="text">
                        Ability to put themselves in the merchant's shoes.
                        It is meant to partner on the long run, and work as an extension.
                    </p>
                </div>
                <div className='d-f'>
                    <div className="about-features-professional">
                        <div className="features-professional-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V25.99V26V26.088C0.0212881 27.6491 0.652221 29.1399 1.758 30.242C2.88171 31.3692 4.40839 32.0019 6 32H31C31.5523 32 32 31.5523 32 31V21C32 20.4477 31.5523 20 31 20H20.522L28.778 11.78C28.9661 11.5924 29.0718 11.3377 29.0718 11.072C29.0718 10.8063 28.9661 10.5516 28.778 10.364L21.708 3.292C21.3175 2.90162 20.6845 2.90162 20.294 3.292L12 11.554V1C12 0.447715 11.5523 0 11 0H1ZM26.656 11.068L12 25.668V14.376L20.998 5.412L26.656 11.068ZM9 26C9 24.3431 7.65685 23 6 23C4.34315 23 3 24.3431 3 26C3 27.6568 4.34315 29 6 29C7.65685 29 9 27.6568 9 26ZM18.516 22H30V30H10.486L18.516 22Z" fill="white" />
                            </svg>
                        </div>
                        <h4 className="h4-title">Professional</h4>
                        <p className="text">
                            Full service range including technical skills, design.
                        </p>
                    </div>
                    <div className="about-features-accessibility">
                        <h4 className="h4-title">Accessibility</h4>
                        <p className="text">
                            Business understanding, ability to put themselves.
                        </p>
                    </div>
                </div>
            </section>
            <table className='about-stats'>
                <tbody>
                    <tr>
                        <td>
                            <dl>
                                <dt>42</dt>
                                <dd>Years of experience</dd>
                            </dl>
                        </td>
                        <td>
                            <dl>
                                <dt>73+</dt>
                                <dd>Agency members</dd>
                            </dl>
                        </td>
                        <td>
                            <dl>
                                <dt>5.000</dt>
                                <dd>Projects complete</dd>
                            </dl>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="about-middle">
                <section className='about-team'>
                    <h5 className="h5-title">Our Team</h5>
                    <div className="d-f jc-sb">
                        <h2 className="h2-title">Team of Designers and Developers</h2>
                        <div className="about-team-actions d-f">
                            <button className='action-btn'>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0009 4.50064C14.0009 4.2245 13.777 4.00064 13.5009 4.00064H1.70789L4.85489 0.854643C4.98137 0.728171 5.03076 0.543834 4.98447 0.37107C4.93817 0.198306 4.80323 0.063362 4.63047 0.01707C4.4577 -0.029222 4.27337 0.020171 4.14689 0.146643L0.146894 4.14664C0.0528521 4.24045 0 4.36782 0 4.50064C0 4.63347 0.0528521 4.76084 0.146894 4.85464L4.14689 8.85464C4.27337 8.98112 4.4577 9.03051 4.63047 8.98422C4.80323 8.93792 4.93817 8.80298 4.98447 8.63022C5.03076 8.45745 4.98137 8.27312 4.85489 8.14664L1.70789 5.00064H13.5009C13.777 5.00064 14.0009 4.77679 14.0009 4.50064Z" fill="white" />
                                </svg>
                            </button>
                            <button className='action-btn'>
                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.50063C0 4.22449 0.223858 4.00063 0.5 4.00063H12.293L9.146 0.854632C8.95049 0.659123 8.95049 0.34214 9.146 0.146632C9.34151 -0.0488772 9.65849 -0.0488772 9.854 0.146632L13.854 4.14663C13.948 4.24044 14.0009 4.3678 14.0009 4.50063C14.0009 4.63346 13.948 4.76083 13.854 4.85463L9.854 8.85463C9.65849 9.05014 9.34151 9.05014 9.146 8.85463C8.95049 8.65912 8.95049 8.34214 9.146 8.14663L12.293 5.00063H0.5C0.223858 5.00063 0 4.77677 0 4.50063Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="about-team-box d-f">
                        <div className="about-team-member">
                            <div className="pic">
                                <img src="/images/team/1.png" alt="team1" />
                            </div>
                            <h4 className="h4-title">Azah Anyeni</h4>
                            <p className="text">Designer</p>
                        </div>
                        <div className="about-team-member">
                            <div className="pic">
                                <img src="/images/team/2.png" alt="team2" />
                            </div>
                            <h4 className="h4-title">Roelof Bekkenenks</h4>
                            <p className="text">React Developer</p>
                        </div>
                        <div className="about-team-member">
                            <div className="pic">
                                <img src="/images/team/3.png" alt="team3" />
                            </div>
                            <h4 className="h4-title">Leonardo Oliveira</h4>
                            <p className="text">Illustrator</p>
                        </div>
                        <div className="about-team-member">
                            <div className="pic">
                                <img src="/images/team/4.png" alt="team4" />
                            </div>
                            <h4 className="h4-title">Izabella Tabakova</h4>
                            <p className="text">Product Designer</p>
                        </div>
                    </div>
                    <div className="about-team-pins d-f">
                        <button
                            className={pinNum === 1 ? "pin-btn pin-btn__active" : "pin-btn"}
                            onClick={() => setPinNum(1)}
                        >
                        </button>
                        <button
                            className={pinNum === 2 ? "pin-btn pin-btn__active" : "pin-btn"}
                            onClick={() => setPinNum(2)}
                        >
                        </button>
                        <button
                            className={pinNum === 3 ? "pin-btn pin-btn__active" : "pin-btn"}
                            onClick={() => setPinNum(3)}
                        >
                        </button>
                    </div>
                </section>
                <section className='about-testimonials'>
                    <h5 className="h5-title">Testimonials</h5>
                    <h2 className="h2-title">What Our Clients Saying</h2>
                    <div className="about-testimonials-content">
                        <div className="rating d-f">
                            <div><img src="/images/star2.png" alt="star2" /></div>
                            <div><img src="/images/star2.png" alt="star2" /></div>
                            <div><img src="/images/star2.png" alt="star2" /></div>
                            <div><img src="/images/star2.png" alt="star2" /></div>
                            <div><img src="/images/star2.png" alt="star2" /></div>
                        </div>
                        <p className="text">
                            A digital agency is a business you hire to outsource
                            your digital marketing efforts, instead of handling in-house.
                            They can provide your business with a variety of digital solutions
                            to promote your product or service online and help you. A digital
                            agency is a business you hire to outsource your digital marketing efforts.
                        </p>
                        <div className="author d-f align-center">
                            <div><img src="/images/clients/1.png" alt="clients1" /></div>
                            <div>
                                <h4 className="author-name">Alan Martí</h4>
                                <p className="author-pos">Meta Inc.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-faq">
                    <h5 className="h5-title">Faq</h5>
                    <h3 className="h3-title">Frequently Asked Questions</h3>
                    <p className="text">
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling in-house.
                    </p>
                    <div className="about-faq-content">
                        {
                            FaqsList.map((faq) => {
                                return (
                                    <FaqItem
                                        key={`about-faq${faq.id}`}
                                        {...faq}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
                <div className="about-partners">
                    <img src="/images/about-logos.png" alt="about-logos" />
                </div>
                <section className='about-help d-f align-center'>
                    <div>
                        <h2 className="h2-title">We're Help <br /> To Build Your Dream Project</h2>
                        <p className="text">
                            A digital agency is a business you hire to outsource
                            your digital marketing efforts, instead of handling in-house.
                        </p>
                        <a href="" className="about-help-link">Contact Us</a>
                    </div>
                    <div><img src="/images/home-help-pic.png" alt="home-help-pic" /></div>
                </section>
            </div>
        </>
    )
}

export default About