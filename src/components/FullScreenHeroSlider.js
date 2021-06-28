import React from 'react';
import {Fade} from "react-slideshow-image";

const FullScreenHeroSlider = ({ images, title }) => {

    const properties = {
        arrows: false,
        duration: 2000
    };

    return <div style={{ position: 'relative'}}><Fade {...properties}>
        {images.map((image, index) =>
                <div key={index} className="each-fade" >
                    <img src={image} alt={''} style={{
                        height: 'calc(100vh - 92px)',
                        width: '100%',
                        objectFit: 'cover'
                    }}/>
                </div>
        )}
    </Fade>
    <h1 className='title' style={{
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10,
        transform: 'translate(-50%,-50%)' }}
    >{title}</h1>
</div>
}

export default FullScreenHeroSlider;