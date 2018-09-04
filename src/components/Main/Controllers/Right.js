import React from 'react';
import './controllers.css';

const Right = ({changeNumber, num, length}) => {

    var able = true;

    const moveForward = () => {
        if(able){
            able = false;
            let newNumber = parseInt(num, 8) + 1;
            if(newNumber > length){
                newNumber = 1
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
            onMouseOver = {moveForward}
            onMouseOut = {changeAble}
        >
            <div className='triangle-right'></div>
        </div>
    );
}

export default Right;
