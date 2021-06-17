import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SmallGallery = () => {
    const images = ["../images/homepage/04_Portrait_AllisonCave_043.jpg",
        "../images/homepage/04_Portrait_AllisonCave_088.jpg",
        "../images/homepage/04_Portrait_AllisonCave_073.jpg",
        "../images/homepage/02_Portrait_AllisonCave_141.jpg"
    ];
    return (
        <div className='container-fluid' style={{ marginBottom: '10vh '}}>
            <div className='row'>
                {images.map((img, index) => (
                    <div className={'col-6 col-md-3'} key={'small_gqler_' + index}>
                        <div className={'ratioImage'} style={{marginBottom: '1.5rem'}}>
                            <StaticImage
                                src={"../images/homepage/04_Portrait_AllisonCave_043.jpg"}
                                width={750}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt={'alt'}
                            />
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}


export default SmallGallery