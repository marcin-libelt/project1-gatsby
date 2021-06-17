import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";

const Brands = () => {

    return (<>
        {[1,2,3,4,5,6,7,8,9].map(brand => (<div className='col-4'>
            <StaticImage
                src={"../images/brands/28_OC_LOGO.jpeg"}
                width={500}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt={'alt'}
            />
        </div>))}
        </>)
}

export default Brands;