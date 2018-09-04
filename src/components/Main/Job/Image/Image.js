import React from 'react';
import './Image.css';

const Image = ({image}) => {

    return(
        <div className='pa2 tc' style={{background: '#f3ecd8'}}>
            <img 
                src={process.env.PUBLIC_URL + image} 
                alt="Something went wrong"
                className='image'
            />
        </div>
    );
}

export default Image;
