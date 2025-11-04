import { FaqItem } from '../components'
import FaqsList from '../db/FaqsList'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <h1 className="h1-title">Contact</h1>
                <p className="text">
                    Agency provides a full service range including
                    technical skills, design, business understanding.
                </p>
            </main>
            <div className="contact-map d-f align-center">
                <div className="contact-touch">
                    <h4 className="h4-title">Get In Touch</h4>
                    <form action="" className="home-touch-fm">
                        <input type="email" name='touchEmail' placeholder='Your email' />
                        <input type="text" name='touchSubject' placeholder='Subject' />
                        <textarea name="touchMsg" placeholder='Message'></textarea>
                        <button type="button">Submit Now</button>
                    </form>
                </div>
                <div><img src="/images/pin.png" alt="pin" /></div>
            </div>
            <div className='contact-info d-f'>
                <div className="contact-item">
                    <div className="caption d-f align-center">
                        <div className="icon"><img src="/images/phone.png" alt="phone" /></div>
                        <h5 className="h5-title">Phone</h5>
                    </div>
                    <p className="text-big">+1 (234) 567-89-00</p>
                </div>
                <div className="contact-item">
                    <div className="caption d-f align-center">
                        <div className="icon"><img src="/images/email.png" alt="email" /></div>
                        <h5 className="h5-title">Email</h5>
                    </div>
                    <p className="text-big">info@agency.com</p>
                </div>
                <div className="contact-item">
                    <div className="caption d-f align-center">
                        <div className="icon"><img src="/images/address.png" alt="address" /></div>
                        <h5 className="h5-title">Address</h5>
                    </div>
                    <p className="text-big">2247 Lunetta Street, TX 76301</p>
                </div>
            </div>
            <section className='contact-faq d-f'>
                <div>
                    <h5 className="h5-title">Faq</h5>
                    <h3 className="h3-title">
                        Frequently Asked Questions
                    </h3>
                    <p className="text">
                        A digital agency is a business you hire to outsource
                        your digital marketing efforts, instead of handling in-house.
                    </p>
                    <a href="" className="home-faq-link">Ask us anything</a>
                </div>
                <div>
                    {
                        FaqsList.map((faq) => {
                            return (
                                <FaqItem
                                    key={`faq${faq.id}`}
                                    {...faq}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Contact