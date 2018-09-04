import React from 'react';
import './Sprint.css';

const Sprint = () => {
    return(
        <div style={{position:'absolute'}}>
            <div>
                <p className='f2 mt5 pt3 pl3 mb3'>Sprint Breakdown:</p>
            </div>
            <div className='meter'>
                <div className='bulb first'>
                    <div className='redCircle'></div>
                    <p className='text'><strong>Sprint One-Old Website</strong></p>
                    <div className='description firstFix'>
                        <p>Focused on the completion and operation of a website built entirely with html, css, and javascript</p>
                        <p>Date of Completion: July 6th, 2018</p>
                        <p>Notes Upon Completion: Hosting services took longer to figure out than expected. Once up and running, everything worked well.</p>
                    </div>
                </div>
                <div className='bar'>
                    <div className='redBar'></div>
                </div>
                <div className='bulb bulbTwo'>
                    <div className='redBarUp'></div>
                    <div className='redCircle redCircleTwo'></div>
                    <p className='text textExtra1'><strong>Sprint Two</strong></p>
                    <div className='description'>
                        <p>Focus on the main page and tab abilities for new website layout and controls.</p>
                        <p>Date of Completion: August 28th, 2018</p>
                        <p>Notes Upon Completion: The rewrite took longer than expected, however functionality is higher and the look is a lot more professional and cleaner.</p>
                    </div>
                </div>
                <div className='bar barTwo'></div>
                <div className='bulb extra'>
                    <div className='redBarUp grey'></div>
                    <div className='redCircle redCircleTwo grey'></div>
                    <p className='text textExtra1'><strong>Sprint Three</strong></p>
                    <div className='description'>
                        <p>Focus on the chat controls and back end development.</p>
                        <p>Date of Completion: </p>
                        <p>Notes Upon Completion: </p>
                    </div>
                </div>
                <div className='bar extraBar'></div>
                <div className='bulb extra2'>
                    <div className='redBarUp grey'></div>
                    <div className='redCircle redCircleTwo grey'></div>
                    <p className='text textExtra1'><strong>Project Completed</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Sprint;
