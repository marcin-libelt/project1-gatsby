import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import FullScreenHeroSlider from "../components/FullScreenHeroSlider";
import {Parallax} from 'react-parallax';
import image3 from "../images/about/art-lasovsky-8XddFc6NkBY-unsplash.jpg";
import ContactModal from "../components/modal/contact";
import RequestQuoteModal from "../components/modal/requestQuote";

const AboutPage = () => {

    const images = [
        "../../gray-utility-post-1634190.jpg",
        "../../laura-chouette-5Cgro6B4syQ-unsplash.jpg",
        "../../luigi-manga-tf3DfXxfvWE-unsplash.jpg",
        "../../people-inside-galleria-vittorio-emanuele-ii-shopping-mall-in-2954412.jpg"
    ]

    return (
  <Layout>
    <Seo title="About" />
    <section>
        <FullScreenHeroSlider images={images}
                              title={"NEW YORK · LONDON · MILAN · PARIS"}/>
    </section>
      <section className="my-5">
          <div className='container-fluid py-4'>
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <h2 className="h4 text-center">ELEGANCE • AUTHENTICITY • SAVOIR-FAIRE</h2>
                      <h1 className="text-center mb-3">CRAFTING BEAUTIFUL LANGUAGE FOR LUXURY BRANDS.</h1>
                      <p className="text-center">Thoughtful, elegant and persuasive copywriting informed by personal encounters with authentic luxury… from the Paris showroom to travels far and wide.</p>
                  </div>
              </div>
          </div>
      </section>
      <section>
          <Parallax blur={0} bgImage={image3} bgImageAlt="the cat" strength={250}>
              <div className="container-fluid py-4">
                  <div className="row">
                      <div className="col-md-8 offset-md-1 py-md-5 py-2">
                          <div className='text-center'>
                              <p className='h1 my-5'>“SOME PEOPLE THINK LUXURY IS THE OPPOSITE OF POVERTY. IT IS NOT. IT IS THE OPPOSITE OF VULGARITY.”</p>
                          </div>
                          <div className="action w-100 text-center">
                              <RequestQuoteModal />
                          </div>
                      </div>
                  </div>
              </div>
          </Parallax>
      </section>
      <section className="my-5">
          <div className='container-fluid py-4'>
              <div className="row">
                  <div className="col-md-4">
                      <StaticImage
                          src="../images/homepage/02_Portrait_AllisonCave_039+copy.jpg"
                          layout='fullWidth'
                          quality={95}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="A Gatsby astronaut"
                      />
                  </div>
                  <div className="col-md-8">
                      <h1 className="mt-md-5 mb-4" style={{ lineHeight: 1.8 }}>
                          ALLISON CAVE <br/>
                          <span className="h2">WRITER. DANCER. FRANCOPHONE.</span>
                      </h1>
                      <p>To me, authentic luxury is rare.<br/>
                          <br/>
                      It’s a form of art created in the service of pleasure. Perfection is the goal and every single detail — every minute gesture — is subject to scrutiny.<br/>
                          <br/>
                      In essence, luxury is a lot like dance.<br/>
                          <br/>
                      From the time I left home at age 14 to study ballet at University of North Carolina School of the Arts, I have been immersed in environments that require the same level of discipline you’ll find in the most elite fashion houses and hotels around the world.<br/>
                          <br/>
                      A North Carolina native, I’ve lived in Marseille and Paris, France, where I learned French as an au pair. Mainz and Wiesbaden, Germany where I taught dance to children of military families on a US Army base. London, England, where I studied my MFA at Trinity Laban Conservatoire of Music and Dance. And NYC, where I danced professionally for many exciting projects featured in the New York Times.<br/>
                          <br/>
                      Now based in North Carolina, I work with brands all around the world to reach their target audiences in English and French.<br/>
                          <br/>
                      Do you have high ambitions for your communications, but you’re too short on time or internal resources to make them happen?<br/>
                          <br/>
                      There are many ways we can support your marketing strategy. Just take the leap, we’re here to catch you.</p>

                      <ContactModal />

                  </div>
              </div>
          </div>
      </section>
  </Layout>
)}

export default AboutPage;