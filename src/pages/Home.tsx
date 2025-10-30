import React from 'react'
import './css/Home.css'
import FaqsList from '../db/FaqsList'
import { BlogItem, FaqItem } from '../components'
import PostsList from '../db/PostsList'

const Home = () => {
  const [pinNum, setPinNum] = React.useState(1)

  return (
    <>
      <main className='home-main d-f'>
        <div>
          <h5 className="h5-title">Modern Studio</h5>
          <h1 className="h1-title">We're Help <br /> To Build Your Dream Project</h1>
          <p className="text">
            Agency provides a full service range
            including technical skills, design, business understanding.
          </p>
          <div className="home-main-actions d-f align-center">
            <a href="" className="home-main-work">How we work</a>
            <a href="" className="home-main-contact">Contact Us</a>
          </div>
          <div className="home-main-author d-f align-center">
            <div><img src="/images/author1.png" alt="author1" /></div>
            <div>
              <p className="text">"Put themselves in the merchant's shoes"</p>
              <p className="text">Meta Inc.</p>
            </div>
          </div>
        </div>
        <div><img src="/images/home-main-pic.png" alt="home-main-pic" /></div>
      </main>
      <div className="home-logos"><img src="/images/logos.png" alt="logos" /></div>
      <section className='home-about d-f align-center'>
        <div><img src="/images/home-about-pic.png" alt="home-about-pic" /></div>
        <div>
          <h5 className="h5-title">About</h5>
          <h2 className="h2-title">An Experience Design Agency</h2>
          <p className="text-big">Provides a full service range</p>
          <p className="text">
            Ability to put themselves in the merchant's shoes.
            It is meant to partner on the long run, and work
            as an extension of the merchant's team.
          </p>
          <a href="" className="home-about-link">About Us</a>
        </div>
      </section>
      <table className='home-stats'>
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
      <section className='home-work d-f'>
        <div>
          <h5 className="h5-title">How we work</h5>
          <h3 className="h3-title">Making Your Projects Look Awesome</h3>
          <p className="text">
            Technical skills, design, business understanding,
            ability to put themselves in the merchant's shoes.
          </p>
          <a href="" className="home-work-more">Read More</a>
        </div>
        <div className="home-work-content d-f">
          <div className="home-work-item d-f align-center">
            <h4 className="h1-title">1</h4>
            <h5 className="h4-title">Full service range including</h5>
          </div>
          <div className="home-work-item d-f align-center">
            <h4 className="h1-title">2</h4>
            <h5 className="h4-title">Technical skills, design, business</h5>
          </div>
          <div className="home-work-item d-f align-center">
            <h4 className="h1-title">3</h4>
            <h5 className="h4-title">Themselves in the merchant's</h5>
          </div>
        </div>
      </section>
      <section className='home-features d-f align-center'>
        <div>
          <h5 className="h5-title">Features</h5>
          <h2 className="h2-title">Give Your Site A New Look</h2>
          <p className="text-big">
            Service range including technical skills, design, business understanding.
          </p>
          <ul className="home-features-list">
            <li>Range including technical skills</li>
            <li>Business understanding</li>
            <li>Partner on the long run</li>
          </ul>
        </div>
        <div><img src="/images/home-features-pic.png" alt="home-features-pic" /></div>
      </section>
      <section className='home-advantages d-f align-center'>
        <div>
          <h5 className="h5-title">Features</h5>
          <p className="text-big">
            Long run, and work as an extension of the merchant's team.
          </p>
          <a href="" className="text">Read More</a>
        </div>
        <div className='d-f'>
          <div className="home-advantages-professional">
            <div className="advantages-professional-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V25.99V26V26.088C0.0212881 27.6491 0.652221 29.1399 1.758 30.242C2.88171 31.3692 4.40839 32.0019 6 32H31C31.5523 32 32 31.5523 32 31V21C32 20.4477 31.5523 20 31 20H20.522L28.778 11.78C28.9661 11.5924 29.0718 11.3377 29.0718 11.072C29.0718 10.8063 28.9661 10.5516 28.778 10.364L21.708 3.292C21.3175 2.90162 20.6845 2.90162 20.294 3.292L12 11.554V1C12 0.447715 11.5523 0 11 0H1ZM26.656 11.068L12 25.668V14.376L20.998 5.412L26.656 11.068ZM9 26C9 24.3431 7.65685 23 6 23C4.34315 23 3 24.3431 3 26C3 27.6568 4.34315 29 6 29C7.65685 29 9 27.6568 9 26ZM18.516 22H30V30H10.486L18.516 22Z" fill="white" />
              </svg>
            </div>
            <h4 className="h4-title">Professional</h4>
            <p className="text">
              Full service range including technical skills, design.
            </p>
          </div>
          <div className="home-advantages-accessibility">
            <h4 className="h4-title">Accessibility</h4>
            <p className="text">
              Business understanding, ability to put themselves.
            </p>
          </div>
        </div>
      </section>
      <section className="home-service d-f align-center">
        <div><img src="/images/home-service-pic.png" alt="home-service-pic" /></div>
        <div>
          <h5 className="h5-title">Service</h5>
          <h2 className="h2-title">Making Complex Digital Products</h2>
          <p className="text-big">
            Agency provides a full service range
            including technical skills, design, business.
          </p>
          <div className="home-service-author d-f align-center">
            <div><img src="/images/author2.png" alt="author2" /></div>
            <div>
              <p className="text-small">
                "Understanding, ability to put themselves
                in the merchant's shoes. It is meant to partner."
              </p>
              <p className="text">Jenny Murtaugh</p>
            </div>
          </div>
          <a href="" className="home-service-link">Explore</a>
        </div>
      </section>
      <section className='home-services'>
        <h5 className="h5-title">Service</h5>
        <h3 className="h3-title">How Our Agency Can Help</h3>
        <div className="home-services-box d-f">
          <div className="home-services-item">
            <div className="services-item-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C16.3784 0 16.7244 0.213767 16.894 0.552318L17.618 2.00133H27C28.6569 2.00133 30 3.34541 30 5.00342V20.0139H2V5.00342C2 3.34541 3.34315 2.00133 5 2.00133H14.38L15.106 0.552318C15.2756 0.213767 15.6216 0 16 0ZM1 22.0153C0.447715 22.0153 0 22.4633 0 23.016C0 23.5687 0.447715 24.0167 1 24.0167H6.72L5.03 30.7794C4.91073 31.3098 5.23643 31.8384 5.76354 31.97C6.29065 32.1016 6.82633 31.788 6.97 31.2637L7.78 28.0195H24.22L25.03 31.2637C25.1737 31.788 25.7094 32.1016 26.2365 31.97C26.7636 31.8384 27.0893 31.3098 26.97 30.7794L25.28 24.0167H31C31.5523 24.0167 32 23.5687 32 23.016C32 22.4633 31.5523 22.0153 31 22.0153H1ZM8.28 26.0181L8.78 24.0167H23.22L23.72 26.0181H8.28Z" fill="white" />
              </svg>
            </div>
            <h4 className="h4-title">Design</h4>
            <p className="text">
              Agency provides a full service range
              including technical skills, design.
            </p>
            <a href="" className="services-item-link">Learn More</a>
          </div>
          <div className="home-services-item">
            <div className="services-item-icon">
              <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C11.3431 0 10 1.34315 10 3V4H3C1.34315 4 0 5.34315 0 7V9.768L15.228 13.828C15.7339 13.9627 16.2661 13.9627 16.772 13.828L32 9.768V7C32 5.34315 30.6569 4 29 4H22V3C22 1.34315 20.6569 0 19 0H13ZM13 2H19C19.5523 2 20 2.44772 20 3V4H12V3C12 2.44772 12.4477 2 13 2ZM3 26C1.34315 26 0 24.6569 0 23V11.7L15.742 15.894C15.911 15.9391 16.089 15.9391 16.258 15.894L32 11.7V23C32 24.6569 30.6569 26 29 26H3Z" fill="white" />
              </svg>
            </div>
            <h4 className="h4-title">Development</h4>
            <p className="text">
              Full service range including technical skills, design, business.
            </p>
            <a href="" className="services-item-link">Discover More</a>
          </div>
          <div className="home-services-item">
            <div className="services-item-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8639 1.45491C17.3759 -0.48497 14.6221 -0.48497 14.1361 1.45491L13.9941 2.02687C13.8249 2.70379 13.3018 3.23562 12.6278 3.41597C11.9538 3.59632 11.235 3.39679 10.7503 2.89482L10.3404 2.47285C8.95044 1.03494 6.56459 2.41485 7.11456 4.33473L7.27655 4.90269C7.46742 5.57297 7.28008 6.29406 6.78707 6.78665C6.29405 7.27925 5.57281 7.46599 4.90269 7.27455L4.33473 7.11456C2.41285 6.56459 1.03494 8.95044 2.47285 10.3404L2.89482 10.7503C3.39679 11.235 3.59632 11.9538 3.41597 12.6278C3.23562 13.3018 2.70379 13.8249 2.02687 13.9941L1.45491 14.1361C-0.48497 14.6241 -0.48497 17.3779 1.45491 17.8639L2.02687 18.0059C2.70379 18.1751 3.23562 18.6982 3.41597 19.3722C3.59632 20.0462 3.39679 20.765 2.89482 21.2497L2.47285 21.6596C1.03494 23.0496 2.41485 25.4354 4.33473 24.8854L4.90269 24.7235C5.57297 24.5326 6.29406 24.7199 6.78665 25.2129C7.27925 25.7059 7.46599 26.4272 7.27455 27.0973L7.11456 27.6653C6.56459 29.5872 8.95044 30.9651 10.3404 29.5272L10.7503 29.1052C11.235 28.6032 11.9538 28.4037 12.6278 28.584C13.3018 28.7644 13.8249 29.2962 13.9941 29.9731L14.1361 30.5451C14.6241 32.485 17.3779 32.485 17.8639 30.5451L18.0059 29.9731C18.1751 29.2962 18.6982 28.7644 19.3722 28.584C20.0462 28.4037 20.765 28.6032 21.2497 29.1052L21.6596 29.5272C23.0496 30.9651 25.4354 29.5852 24.8854 27.6653L24.7235 27.0993C24.5316 26.4287 24.7186 25.7069 25.2117 25.2137C25.7049 24.7206 26.4268 24.5336 27.0973 24.7255L27.6653 24.8854C29.5872 25.4354 30.9651 23.0496 29.5272 21.6596L29.1052 21.2497C28.6032 20.765 28.4037 20.0462 28.584 19.3722C28.7644 18.6982 29.2962 18.1751 29.9731 18.0059L30.5451 17.8639C32.485 17.3759 32.485 14.6221 30.5451 14.1361L29.9731 13.9941C29.2962 13.8249 28.7644 13.3018 28.584 12.6278C28.4037 11.9538 28.6032 11.235 29.1052 10.7503L29.5272 10.3404C30.9651 8.95044 29.5852 6.56459 27.6653 7.11456L27.0993 7.27655C26.4287 7.46836 25.7069 7.28143 25.2137 6.78826C24.7206 6.29509 24.5336 5.57325 24.7255 4.90269L24.8854 4.33473C25.4354 2.41285 23.0496 1.03494 21.6596 2.47285L21.2497 2.89482C20.765 3.39679 20.0462 3.59632 19.3722 3.41597C18.6982 3.23562 18.1751 2.70379 18.0059 2.02687L17.8639 1.45491ZM16.5 16.9999H25.9454C25.603 20.4108 23.5366 23.4083 20.4705 24.9415C17.4045 26.4747 13.7666 26.3298 10.8323 24.5575L16.5 16.9999ZM25.9454 15.0001C25.603 11.5892 23.5366 8.59172 20.4705 7.0585C17.4045 5.52528 13.7666 5.67023 10.8323 7.44253L16.5 15.0021H25.9454V15.0001ZM6.00462 16C6.00176 13.2036 7.17369 10.5347 9.23442 8.64446L14.7501 16L9.23442 23.3555C7.24855 21.5297 6.00462 18.9098 6.00462 16Z" fill="white" />
              </svg>
            </div>
            <h4 className="h4-title">Marketing</h4>
            <p className="text">
              Technical skills, design, business understanding, ability.
            </p>
            <a href="" className="services-item-link">Explore Now</a>
          </div>
        </div>
      </section>
      <div className="home-middle">
        <section className='home-latest'>
          <h5 className="h5-title">Portfolio</h5>
          <h2 className="h2-title">Latest Work</h2>
          <div className="home-latest-tabs d-f">
            <button className='tab-btn tab-btn__active'>Show All <sup>14</sup></button>
            <button className='tab-btn'>Design <sup>6</sup></button>
            <button className='tab-btn'>Branding <sup>4</sup></button>
            <button className='tab-btn'>Illustration <sup>3</sup></button>
            <button className='tab-btn'>Motion <sup>3</sup></button>
          </div>
          <div className="home-latest-box d-f">
            <div className="home-latest-item">
              <div className="tag">
                <p className="text">Design</p>
              </div>
              <h3 className="h3-title text-uppercase">Sofa</h3>
            </div>
            <div className="home-latest-item">
              <div className="tag">
                <p className="text">Branding</p>
              </div>
              <h3 className="h3-title">KeyBoard</h3>
            </div>
            <div className="home-latest-item">
              <div className="tag">
                <p className="text">Illustration</p>
              </div>
              <h3 className="h3-title">Work Media</h3>
            </div>
            <div className="home-latest-item">
              <div className="tag">
                <p className="text">Motion</p>
              </div>
              <h3 className="h3-title">DDDone</h3>
            </div>
          </div>
          <a href="" className="home-latest-link">Explore More</a>
        </section>
        <section className='home-started'>
          <div className="home-started-icon"><img src="/images/home-started-icon.png" alt="home-started-icon" /></div>
          <div className="home-started-content d-f jc-sb align-center">
            <div>
              <h5 className="h5-title">Get Started</h5>
              <h4 className="h4-title">We Help Companies Move Faster</h4>
              <a href="" className="home-started-link">Contact Us</a>
            </div>
            <div><img src="/images/home-started-pic1.png" alt="home-started-pic1" /></div>
            <div style={{ marginTop: "-31px" }}><img src="/images/home-started-pic2.svg" alt="home-started-pic2" /></div>
          </div>
        </section>
        <section className='home-events'>
          <h5 className="h5-title">Events</h5>
          <h2 className="h2-title">Explore Future Conferences</h2>
          <div className="home-events-box d-f">
            <div className="home-events-item">
              <div className="date d-f align-center">
                <h3 className="h1-title">3</h3>
                <h4 className='h4-title'>November <br /> 2021</h4>
              </div>
              <p className="time text">9:00 am - 3:00 pm</p>
              <div className="divider"></div>
              <h4 className="h4-title">Design Weeks</h4>
              <p className="desc text">
                Digital agency is a business you hire
                to outsource your digital.
              </p>
              <a href="" className="link">Explore Now</a>
            </div>
            <div className="home-events-item">
              <div className="date d-f align-center">
                <h3 className="h1-title">15</h3>
                <h4 className='h4-title'>November <br /> 2021</h4>
              </div>
              <p className="time text">1:00 pm - 8:00 pm</p>
              <div className="divider"></div>
              <h4 className="h4-title">Interior Design</h4>
              <p className="desc text">
                Marketing efforts, instead of handling in-house.
              </p>
              <a href="" className="link">Explore Now</a>
            </div>
            <div className="home-events-item">
              <div className="date d-f align-center">
                <h3 className="h1-title">2</h3>
                <h4 className='h4-title'>December <br /> 2021</h4>
              </div>
              <p className="time text">10:00 am - 2:00 pm</p>
              <div className="divider"></div>
              <h4 className="h4-title">The F design events</h4>
              <p className="desc text">
                Provide your business with a variety
                of digital solutions to promote.
              </p>
              <a href="" className="link">Explore Now</a>
            </div>
          </div>
          <a href="" className="home-events-more">Explore More</a>
        </section>
        <section className='home-team'>
          <h5 className="h5-title">Our Team</h5>
          <div className="d-f jc-sb">
            <h2 className="h2-title">Team of Designers and Developers</h2>
            <div className="home-team-actions d-f">
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
          <div className="home-team-box d-f">
            <div className="home-team-member">
              <div className="pic">
                <img src="/images/team/1.png" alt="team1" />
              </div>
              <h4 className="h4-title">Azah Anyeni</h4>
              <p className="text">Designer</p>
            </div>
            <div className="home-team-member">
              <div className="pic">
                <img src="/images/team/2.png" alt="team2" />
              </div>
              <h4 className="h4-title">Roelof Bekkenenks</h4>
              <p className="text">React Developer</p>
            </div>
            <div className="home-team-member">
              <div className="pic">
                <img src="/images/team/3.png" alt="team3" />
              </div>
              <h4 className="h4-title">Leonardo Oliveira</h4>
              <p className="text">Illustrator</p>
            </div>
            <div className="home-team-member">
              <div className="pic">
                <img src="/images/team/4.png" alt="team4" />
              </div>
              <h4 className="h4-title">Izabella Tabakova</h4>
              <p className="text">Product Designer</p>
            </div>
          </div>
          <div className="home-team-pins d-f">
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
        <section className='home-founder d-f jc-sb align-center'>
          <div><img src="/images/founder.png" alt="founder" /></div>
          <div>
            <h5 className="h5-title">Founder Words</h5>
            <h3 className="h3-title">
              Digital agency is a business you hire
              to outsource your digital marketing efforts
            </h3>
            <p className="text-big">Ren Delan</p>
            <p className="text-small">Founder</p>
          </div>
        </section>
      </div>
      <section className='home-testimonials'>
        <h5 className="h5-title">Testimonials</h5>
        <h2 className="h2-title">What Our Clients Saying</h2>
        <div className="home-testimonials-box d-f">
          <div className="home-testimonials-item">
            <div className="rating d-f">
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
            </div>
            <p className="text">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
            <div className="author d-f align-center">
              <div><img src="/images/clients/1.png" alt="clients1" /></div>
              <div>
                <h4 className="h4-title">Alan Martí</h4>
                <p className="text">Meta Inc.</p>
              </div>
            </div>
          </div>
          <div className="home-testimonials-item">
            <div className="rating d-f">
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
            </div>
            <p className="text">
              Provide your business with a variety of digital
              solutions to promote your product or service online.
            </p>
            <div className="author d-f align-center">
              <div><img src="/images/clients/2.png" alt="clients2" /></div>
              <div>
                <h4 className="h4-title">Richardo Kann</h4>
                <p className="text">Photogram</p>
              </div>
            </div>
          </div>
          <div className="home-testimonials-item">
            <div className="rating d-f">
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
            </div>
            <p className="text">
              Outsource your digital marketing efforts,
              instead of handling in-house. They can provide
              your business with a variety.
            </p>
            <div className="author d-f align-center">
              <div><img src="/images/clients/3.png" alt="clients3" /></div>
              <div>
                <h4 className="h4-title">Graham Griffiths</h4>
                <p className="text">Twitor</p>
              </div>
            </div>
          </div>
          <div className="home-testimonials-item">
            <div className="rating d-f">
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
              <div><img src="/images/star2.png" alt="star2" /></div>
            </div>
            <p className="text">
              Promote your product or service online and
              help you hit your marketing goals and grow your business.
            </p>
            <div className="author d-f align-center">
              <div><img src="/images/clients/4.png" alt="clients4" /></div>
              <div>
                <h4 className="h4-title">Maria Trofimova</h4>
                <p className="text">Whochat</p>
              </div>
            </div>
          </div>
        </div>
        <a href="" className="home-testimonials-link">See All</a>
      </section>
      <section className='home-pricing'>
        <h5 className="h5-title">Pricing</h5>
        <h2 className="h2-title">Check Our Pricing Plans</h2>
        <div className="home-pricing-box d-f">
          <div className="home-pricing-item">
            <h5 className="h5-title">Consultation</h5>
            <h3 className="h3-title">Free</h3>
            <p className="text">
              Your digital marketing efforts, instead of handling in-house.
            </p>
            <ul className="values">
              <li>Brand Design</li>
              <li>Market Analysis</li>
              <li>Production</li>
            </ul>
            <a href="" className="contact-link">Contact Us</a>
          </div>
          <div className="home-pricing-item">
            <p className="popular">Popular</p>
            <h5 className="h5-title">Design</h5>
            <h3 className="h3-title">$1500</h3>
            <p className="text">
              Provide your business with a variety of digital solutions to promote.
            </p>
            <ul className="values">
              <li>Brand Design</li>
              <li>Market Analysis</li>
              <li>Production</li>
            </ul>
            <a href="" className="contact-link">Contact Us</a>
          </div>
          <div className="home-pricing-item">
            <h5 className="h5-title">Design+Code</h5>
            <h3 className="h3-title">$2900</h3>
            <p className="text">
              Help you hit your marketing goals and grow your business.
            </p>
            <ul className="values">
              <li>Brand Design</li>
              <li>Market Analysis</li>
              <li>Production</li>
            </ul>
            <a href="" className="contact-link">Contact Us</a>
          </div>
        </div>
      </section>
      <section className='home-faq d-f'>
        <div>
          <h5 className="h5-title">Faq</h5>
          <h3 className="h3-title">
            Frequently Asked Questions
          </h3>
          <p className="text">
            A digital agency is a business you hire to outsource
            your digital marketing efforts, instead of handling in-house.
          </p>
          <a href="" className="home-faq-link">Contact Us</a>
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
      <section className='home-awards'>
        <h3 className="h3-title">Our Awards</h3>
        <table className="home-awards-tb">
          <tbody>
            <tr>
              <td>
                <div className="caption d-f align-center">
                  <div><img src="/images/home-awards1.png" alt="home-awards1" /></div>
                  <p className="text-big text-uppercase">Sofa</p>
                </div>
              </td>
              <td>
                <p className="text">25 Oct, 2021</p>
              </td>
              <td>
                <div className="award-icon d-f align-center">
                  <p className="text-big">Awwwards</p>
                  <div><img src="/images/home-awards-icon1.png" alt="home-awards-icon1" /></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="caption d-f align-center">
                  <div><img src="/images/home-awards2.png" alt="home-awards2" /></div>
                  <p className="text-big text-uppercase">KeyBoard</p>
                </div>
              </td>
              <td>
                <p className="text">19 Oct, 2021</p>
              </td>
              <td>
                <div className="award-icon d-f align-center">
                  <p className="text-big">CSS Design Awards</p>
                  <div><img src="/images/home-awards-icon2.png" alt="home-awards-icon2" /></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="caption d-f align-center">
                  <div><img src="/images/home-awards3.png" alt="home-awards3" /></div>
                  <p className="text-big text-uppercase">Work Media</p>
                </div>
              </td>
              <td>
                <p className="text">7 Oct, 2021</p>
              </td>
              <td>
                <div className="award-icon d-f align-center">
                  <p className="text-big">The FWA</p>
                  <div><img src="/images/home-awards-icon2.png" alt="home-awards-icon2" /></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="home-awards-more d-f">
          <p className='more-name'>Want more awards?</p>
          <a href="" className="more-link">Explore Now</a>
        </div>
      </section>
      <section className='home-blog'>
        <div className="d-f jc-sb">
          <div>
            <h5 className="h5-title">Our Blog</h5>
            <h2 className="h2-title">Latest Blog Articles</h2>
          </div>
          <a href="" className="home-blog-link">Discover All</a>
        </div>
        <div className="home-blog-box d-f">
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

      </section>
      <section className='home-newsletter d-f jc-sb'>
        <h3 className="h3-title">Newsletter</h3>
        <form action="" className='home-newsletter-fm'>
          <input type="email" name="newsletterEmail" placeholder='Your email' />
          <button type="button">Subscribe</button>
        </form>
      </section>
      <div className="home-map d-f align-center">
        <div className="home-touch">
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
      <div className='home-contacts d-f'>
        <div className="home-contacts-item">
          <div className="caption d-f align-center">
            <div className="icon"><img src="/images/phone.png" alt="phone" /></div>
            <h5 className="h5-title">Phone</h5>
          </div>
          <p className="text-big">+1 (234) 567-89-00</p>
        </div>
        <div className="home-contacts-item">
          <div className="caption d-f align-center">
            <div className="icon"><img src="/images/email.png" alt="email" /></div>
            <h5 className="h5-title">Email</h5>
          </div>
          <p className="text-big">info@agency.com</p>
        </div>
        <div className="home-contacts-item">
          <div className="caption d-f align-center">
            <div className="icon"><img src="/images/address.png" alt="address" /></div>
            <h5 className="h5-title">Address</h5>
          </div>
          <p className="text-big">2247 Lunetta Street, TX 76301</p>
        </div>
      </div>
      <section className='home-help d-f align-center'>
          <div>
            <h2 className="h2-title">We're Help <br /> To Build Your Dream Project</h2>
            <p className="text">
              A digital agency is a business you hire to outsource 
              your digital marketing efforts, instead of handling in-house.
            </p>
            <a href="" className="home-help-link">Contact Us</a>
          </div>
          <div><img src="/images/home-help-pic.png" alt="home-help-pic" /></div>
      </section>
    </>
  )
}

export default Home