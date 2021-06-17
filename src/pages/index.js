import * as React from "react"
import {Link, graphql} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import Intro from '../components/intro'
import SmallGallery from "../components/smallGallery";

// images
import image1 from '../images/homepage/shelby-miller-unsplash-croped.jpg'
import image2 from '../images/homepage/vadim-l-_mgfuATaQnk-unsplash.jpg'
import image3 from '../images/homepage/kelly-sikkema-Oz_J_FXKvIs-unsplash+(1).jpg'

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Parallax} from 'react-parallax';
import Brands from "../components/brands";
import Mosaic from "../components/mosaic";
import { Vline } from "../components/v-line";

const IndexPage = ({data}) => (
    <Layout>
        <Seo title="Home"/>
        <div className='container-fluid'>
            <div className='row'>
                <Parallax blur={0} bgImage={image1} bgImageAlt="the cat" strength={500}>
                    <div className={'homepage-intro'}>
                        <div className={'intro-box my-5'}>
                            <h1 className={'h1 title'}>{'SEAMLESS copywriting service for luxury brands.'}</h1>
                        </div>
                    </div>
                    <SmallGallery/>
                </Parallax>
            </div>
        </div>
        <section className='bg-color-nude text-center pt-5' style={{paddingBottom: '6rem'}}>
            <div className='pt-5 pb-3'>
                <h2 className='h1 mb-4'>
                    CRAFTED WITH <em>SAVOIR-FAIRE</em>
                </h2>
                <p className='mb-5' style={{
                    fontSize: '17px',
                    letterSpacing: '.2em',
                    lineHeight: '2em',
                    fontFamily: 'Lato',
                    textTransform: 'uppercase',
                    whiteSpace: 'pre-wrap',
                    fontWeight: '300'
                }}>
                    your product isn’t just any product.<br/><br/>
                    it’s made from the finest materials on earth. <br/>
                    designed with rigorous attention to detail.<br/>
                    By world-class talent.<br/><br/>
                    and it deserves copywriting of the same calibre.<br/>
                    that’s what we deliver.
                </p>
                <button type="button" className="btn btn-primary p-3 px-4">How can we help?</button>
            </div>
            <Vline color={'#000'} indent={150} width={200}/>
        </section>

        <section>
            <div className='container-fluid'>
                <div className='col-md-8 offset-md-2 pt-4 brands'>
                    <div className='row pt-4'>
                        <Brands/>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-color-black px-3'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-5">
                        <StaticImage
                            src={"../images/homepage/01_Still_Life_AllisonCave_080+copy.jpg"}
                            width={500}
                            quality={95}
                            layout={'fullWidth'}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt={'alt'}
                            style={{
                                marginTop: '-25%'
                            }}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-12 col-md-10">
                                <h2 className='h1 title'>
                                    COPYWRITING YOU’RE PROUD OF, DELIVERED WITH CARE
                                </h2>
                            </div>
                            <div className="col-md-2">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>

            <Vline color={'#fff'} indent={75} width={300}/>
        </section>

        <Mosaic/>

        <section>
            <Parallax blur={0} bgImage={image2} bgImageAlt="the cat" strength={250}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="summary-excerpt">
                                <p className=""><em>I was familiar with Allison’s writing from a previous collaboration
                                    and strongly
                                    wanted her to be part of the launch of our new e-commerce BLANCAH. I was sure she
                                    would be able to
                                    adapt her writing to the different brands, while maintaining her clear and elegant
                                    style. But,
                                    unexpectedly, she has also helped us define the store’s identity and find the right
                                    way to
                                    position it at its best. Allison is not just a copywriter. She is a goldmine of
                                    ideas.</em><br/><br/>—
                                    Erika Cesana, E-commerce &amp; Digital Manager at Onward Luxury Group</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
        <section className='mosaic'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-5">
                        <StaticImage
                            src="../images/homepage/02_Portrait_AllisonCave_039+copy.jpg"
                            width={300}
                            layout='fullWidth'
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                        />
                    </div>
                    <div className="col-md-7">
                        <div className='ac-box'>
                            <div className="content">
                                <h3 className='title'>ABOUT ALLISON</h3>
                                <p className='description'>
                                    Hi! I’m Allison Cave and I’ve been putting words to work for authentic luxury brands
                                    since 2013.<br/>
                                    <br/>
                                    I love what I do because my days are spent pondering beautiful places and
                                    things.<br/>
                                    <br/>
                                    As a former professional dancer, my artistic background gives me a unique skill set
                                    for crafting winning luxury communications for your brand.<br/>
                                    <br/>
                                    Are you ready to see what external hands can do for your copywriting?<br/>
                                </p>
                                <div className='action'>
                                    <Link to={'/about'} className='btn btn-primary'>tell me more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <Parallax blur={0} bgImage={image3} bgImageAlt="the cat" strength={250}>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-5 offset-md-1 py-md-5 py-2">
                            <div style={{backgroundColor: '#eeeae1'}} className='text-center py-2 py-md-5 mb-4'>
                                <h3 className='h1 title my-5'>Tell a story that counts</h3>
                            </div>
                            <div className="action w-100 text-center">
                                <Link to={'/modal'} className='btn btn-primary'>Request a quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
        {/*    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          {document.node.title}
        </li>
      ))}
    </ul>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>*/}
    </Layout>
)

export default IndexPage
/*

export const pageQuery = graphql`
   query IndexQuery {
       allStrapiArticle {
           edges {
               node {
                   id
                   content
                   title
                   strapiId
                   image {
                       url
                       alternativeText
                   }
               }
           }
       }
   }
`
*/
