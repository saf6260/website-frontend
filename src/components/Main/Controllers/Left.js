import React from 'react';
import './controllers.css';

const Left = ({changeNumber, num, length, type}) => {

    var able = true;

    const moveBack = () => {
        if(able){
            able = false;
            let newNumber = parseInt(num, 8) - 1;
            if(newNumber === 0){
                newNumber = length;
            }
            changeNumber(newNumber.toString())
        }
    }

    const changeAble = () => {
        able = true;
    }
    
    return(
        <div 
            className='rectangle mt1'
            onMouseOver={moveBack}
            onMouseOut={changeAble}
        >
            <div className='triangle-left'></div>
        </div>
    )
}

export default Left;
