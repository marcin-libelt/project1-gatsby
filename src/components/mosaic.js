import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import * as React from "react";

const Mosaic = () => {

    return (<section className='bg-color-black mosaic' >
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-7">
                    <div className='ac-box'>
                        <div className="content">
                            <h3 className='title'>BRAND LANGUAGE</h3>
                            <p className='description'>
                                The best way to stand out in a competitive marketplace is to <em>sound like you</em>. We help your sales soar with strategic language, custom designed for your brand.<br/>
                                <br/>
                                Incorporating targeted research and deep competitor analysis, we develop a tone of voice that is unique, clear and easy to reproduce — so you can stop missing the mark and start converting.<br/>
                                <br/>
                                As the first external copywriters for multiple world-famous luxury brands, we know a thing or two about getting the words right.
                            </p>
                            <div className='action'>
                                <Link to={'/about'} className='btn btn-primary'>See our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <StaticImage
                        src="../images/homepage/01_Still_Life_AllisonCave_074+copy.jpg"
                        width={300}
                        layout='fullWidth'
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className='row'>
                        { /* 7 5 5 7 */}
                        <div className="col-md-5">
                            <StaticImage
                                src="../images/homepage/anomaly-16aIvW0lxOk-unsplash.jpg"
                                width={300}
                                layout='fullWidth'
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="A Gatsby astronaut"
                            /></div>
                        <div className="col-md-7">
                            <div className='ac-box'>
                                <div className="content">
                                    <h3 className='title'>ENGAGEMENT COPY</h3>
                                    <p className='description'>
                                        Keep your customers informed and engaged with copywriting designed to break through the noise.<br/>
                                        <br/>
                                        Our philosophy is simple: Know your customers. Speak directly to their desires, dreams and needs.<br/>
                                        <br/>
                                        They will respond.
                                    </p>
                                    <div className='action'>
                                        <Link to={'/about'} className='btn btn-primary'>See our work</Link>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                    <div className='row'>
                        <div className="col-md-7">
                            <div className='ac-box'>
                                <div className="content">
                                    <h3 className='title'>SALES COPY</h3>
                                    <p className='description'>
                                        Every word you publish online casts a reflection of your brand.<br/>
                                        <br/>
                                        We have written 100,000+ product descriptions and landing page texts.<br/>
                                        <br/>
                                        Lean on our experience to avoid common luxury copywriting pitfalls.
                                    </p>
                                    <div className='action'>
                                        <Link to={'/about'} className='btn btn-primary'>See our work</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5"><StaticImage
                            src="../images/homepage/01_Still_Life_AllisonCave_078+copy.jpg"
                            width={300}
                            layout='fullWidth'
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                        /></div>
                    </div>
                </div>
                <div className="col-md-5 ac-box-inside">
                    <StaticImage
                        src="../images/homepage/taisiia-stupak-xoTghSaruf4-unsplash.jpg"
                        width={300}
                        layout='fullWidth'
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                    />
                    <div className='ac-box'>
                        <div className="content">
                            <h3 className='title'>Press copy</h3>
                            <p className='description'>
                                Who better than your copywriting partners to take your message the full 360˚?<br/>
                                <br/>
                                We get to know your brand inside-out and craft press documents that deliver your message with accuracy and style.
                            </p>
                            <div className='action'>
                                <Link to={'/about'} className='btn btn-primary'>See our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            { /* 7 - 5 */ }
            <div className="row">
                <div className="col-md-7">
                    <div className='ac-box'>
                        <div className="content">
                            <h3 className='title'>TRANSLATION<br/>EN&lt;&gt;FR</h3>
                            <p className='description'>
                                Is your brand bilingual? Pas de problème !
                                We translate your French language content to reach English speaking audiences, and your English language content to target your francophone customers.
                                Streamline your process with one simple and reliable copywriting service for both languages.
                            </p>
                            <div className='action'>
                                <Link to={'/about'} className='btn btn-primary'>See our work</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <StaticImage
                        src="../images/homepage/04_Portrait_AllisonCave_073+copy.jpg"
                        width={300}
                        layout='fullWidth'
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                    />
                </div>
            </div>

        </div>
    </section>)
}

export default Mosaic;