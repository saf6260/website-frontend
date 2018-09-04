import React from 'react';
import Image from './Image/Image';
import Description from './Desc/Description';
import Data from './jsondescription.json';

const getData = (info, num) => {
    for(let i = 0; i < Data.length; i++){
        if(Data[i].type === info && Data[i].number === num){
            const wantedData = [Data[i].description, Data[i].image];
            return wantedData;
        }
    }
}

const Job = ({topic, num}) => {
    const data = getData(topic, num);

    if(data[1] === "" && topic==='projects'){
        return (
            <div className='ba bw1 mt1 ml4 mr4' style={{width: '700px', height:'720px', background: '#f3ecd8'}}>
                <Description data={data[0]} type={topic}/>
            </div>
        );
    }else if((data[1] === '' && topic==='skills') || topic==='classes'){
        return (
            <div className='ba bw1 mt1 ml4 mr4' style={{background:'#f3ecd8'}}>
                <Description data={data[0]} type={topic}/>
            </div>
        )
    }else{
        return(
            <div className='ba bw1 mt1 ml4 mr4' style={{width: '700px', height: '720px', background:'#f3ecd8'}}>
                <Image image={data[1]}/>
                <Description data={data[0]} type={topic} id={num}/>
            </div>
        );
    }
}

export default Job;
