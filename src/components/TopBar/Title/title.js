import React from 'react';

const Title = ({changeRoute}) => {
    return(
        <div>
            <p 
                className='tc f1 b link underline dim pointer ma1 pa2'
                style={{color: 'black'}}
                onClick={changeRoute}
            >
                Scott Frauenknecht
            </p>
            <p 
                className='f2 tc b blue ma0 pa0 pb2'
                style={{color: 'black'}}>
                Expected Graduation May 2022
            </p>
        </div>
    );
}

export default Title;
