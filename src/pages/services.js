import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import image from '../images/woman-sitting-on-chair-while-reading-1194410.jpg';
import {StaticImage} from "gatsby-plugin-image";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {Parallax} from 'react-parallax';
import image3 from "../images/services/ashley-edwards-zwmkMkJ2Qi4-unsplash.jpg";
import {Link} from "gatsby";
import RequestQuoteModal from "../components/modal/requestQuote";

const ServicesPage = () => {

    const properties = {
        arrows: false,
        duration: 2000
    };

    return (
  <Layout>
    <Seo title="Services" />
    <Intro title={'Read all about it'} image={image}/>

    <section>
        <div className="container-fluid px-4">
            <div className="row">
                <div className="col-md-5 mt-5 pt-5">

                    <div className="slide-container">
                        <Fade {...properties}>
                            <div className="each-fade">
                                <StaticImage
                                    src={"../images/homepage/01_Still_Life_AllisonCave_080+copy.jpg"}
                                    quality={95}
                                    layout={'fullWidth'}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt={'alt'}
                                />
                            </div>
                            <div className="each-fade">
                                <StaticImage
                                    src={"../images/homepage/01_Still_Life_AllisonCave_080+copy.jpg"}
                                    quality={95}
                                    layout={'fullWidth'}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt={'alt'}
                                />
                            </div>
                        </Fade>
                    </div>

                </div>
                <div className="offset-md-1 col-md-5 my-3 pt-md-5 pt-3">
                    <h2 className="mb-4 title">WHY WORK WITH US?</h2>
                    <h3 className="h4">WE ARE BILINGUAL.</h3>
                    <p>We help you reach a strategic luxury audience with content in both English and French.</p>
                    <h3 className="h4">WE ARE EXPERTS.</h3>
                    <p>It is <em>our</em> knowledge, talent and experience that you get, which means you can rely on a consistently high level of quality.</p>
                    <h3 className="h4">WE ARE COMMITTED</h3>
                    <p>Your success is our success, and we work hand-in-hand with your brand to pave the way for long-term results.</p>
                </div>
            </div>
            <div className="row">
                <div className="offset-md-3 col-md-9">
                    <hr/>
                </div>
            </div>
        </div>
    </section>
      <section className="bg-color-black my-md-5">
          <div className="container-fluid">
              <div className="row">
                  <div className="offset-md-4 col-md-7 my-3 pt-md-5 pt-3">
                      <h2 className="mb-4 title">BLOGGING · SOCIAL MEDIA · EMAIL
                          BLOG WRITING</h2>
                      <p>Strengthen your brand image, boost your website’s SEO and attract new customers with a content-rich blog. With over 1,000 posts written, we have nailed the art of blogging.</p>
                      <h3 className="h4">SOCIAL MEDIA CONTENT</h3>
                      <p>Cut through the noise on Instagram, Facebook, Twitter or LinkedIn with strong messaging to match your imagery</p>
                      <h3 className="h4">EMAIL</h3>
                      <p>We craft emails to be read, enjoyed, and to convert. Give your email marketing a personal touch that doesn’t get buried in the promotions folder.</p>
                      <RequestQuoteModal />
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-color-black my-md-5">
          <div className="container-fluid">
              <div className="row">
                  <div className="offset-md-1 col-md-8 my-3 pt-md-5 pt-3">
                      <h2 className="mb-4 title">PRODUCT DESCRIPTIONS · LANDING PAGE COPY</h2>
                      <h3 className="h4">PRODUCT DESCRIPTIONS</h3>
                      <p>We get to know your products from the inside-out and craft product descriptions that help you generate sales and build customer loyalty.</p>
                      <h3 className="h4">LANDING PAGE COPY</h3>
                      <p>Enhance your web presence and boost sales with custom copywriting for your landing pages. We’re here to co-create with you to achieve your goals.</p>
                      <RequestQuoteModal />
                  </div>
              </div>
          </div>
      </section>

      <section className="bg-color-black mt-md-5 mb-md-4">
          <div className="container-fluid">
              <div className="row">
                  <div className="offset-md-4 col-md-7 my-3 pt-md-5 pt-3">
                      <h2 className="mb-4 title">PRESS RELEASES · PRESS KITS</h2>
                      <h3 className="h4">PRESS RELEASES</h3>
                      <p>Keep the world informed of your important news with skillfully written press releases.</p>
                      <h3 className="h4">PRESS KITS</h3>
                      <p>We help tell your brand story and package your offering with clarity, elegance and flair.</p>
                      <RequestQuoteModal />
                  </div>
              </div>
          </div>
      </section>

      <section>
          <Parallax blur={0} bgImage={image3} bgImageAlt="" strength={250}>
              <div className="container-fluid py-md-5 my-md-5" style={{ height: 'auto' }}>
                  <div className="row">
                      <div className="col-md-8 offset-md-1 py-md-5 py-2">
                          <div className='mb-4 py-2 text-center'>
                              <h3 className='h1 title my-2 text-md-start text-center'>WRITE A BEAUTIFUL STORY</h3>
                          </div>
                          <div className="action w-100 text-center text-md-start offset-md-2">
                              <RequestQuoteModal />
                          </div>
                      </div>
                  </div>
              </div>
          </Parallax>
      </section>

  </Layout>
)}

export default ServicesPage;