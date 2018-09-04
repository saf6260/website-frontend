import React from 'react';
import './Description.css';

const Description = ({data, type, id}) => {

    const splitData = data.split('\n');

    const general = () => {
        return(
            <div className='main'>
                <p><b className='short' style={{background:'transparent'}}>{splitData[0]}</b></p>
                <p className='short'>{splitData[1]}</p>
                <p className='short'>{splitData[2]}</p>
                <p className='large'>{splitData[3]}</p>
                <p className='large'>{splitData[4]}</p>
                <p className='large'>{splitData[5]}</p>
                <p className='large'>{splitData[6]}</p>
                <p className='large'>{splitData[7]}</p>
                <p>{splitData[8]}</p>
            </div>
        );
    }

    if(type==='skills'){
        return(
            <div style={{background:'#f3ecd8'}}>
                <p className = 'tc ml1 mr1 mb1 f3 main'>
                    {splitData[0]} --- {splitData[1]} --- {splitData[2]} --- {splitData[3]} --- {splitData[4]} --- {splitData[5]} --- {splitData[6]} --- {splitData[7]} --- {splitData[8]} --- {splitData[9]} --- {splitData[10]} --- {splitData[11]} --- {splitData[12]} --- {splitData[13]} --- {splitData[14]} --- {splitData[15]} --- {splitData[16]} --- {splitData[17]}                </p>
            </div>
        );
    }

    else if(type==='classes'){
        return(
            <div style={{background: '#f3ecd8'}}>
                <p className = 'tc ml1 mr1 mb1 f3 main'>
                    {splitData[0]}
                </p>
                <p className = 'tc ml1 mr1 mb1 f3 main'>
                    {splitData[1]}
                </p>
            </div>
        );
    }

    else if(type==='projects' && id===undefined){
        return(
            <div className='tc ma1 f3 main' style={{height: '350px'}}>
                {general()}
            </div>
        );
    }

    else{
        return(
            <div className='tc ma1 f3'>
                {general()}
            </div>
        );
    }
}

export default Description;
