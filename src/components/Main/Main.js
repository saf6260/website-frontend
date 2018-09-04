import React from 'react';
import Job from './Job/Job';
import Left from './Controllers/Left';
import Right from './Controllers/Right';
import './Main.css';

const Main = ({changeEdu, changeWork, changeAct, changeProj, edu, work, proj, act}) => {

    return(
        <div className='general pt6'>
            <div className='control'>
                <p
                    className='f2 mb0 pl4 ml5 pb2' 
                >
                    Education:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='pb2 background'
                >
                    <Left changeNumber={changeEdu} num={edu} length={2} type={'education'}/>
                    <Job topic='education' num={edu} />
                    <Right changeNumber={changeEdu} num={edu} length={2} type={'education'}/>
                </div>
            </div>

            <div className='background'>
                <p
                    className='f2 mb0 pl4 ml5 pb2 pt4' 
                >
                    Work Experience:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='pb2 background'
                >
                    <Left changeNumber={changeWork} num={work} length={4} type={'work'}/>
                    <Job topic='work' num={work}/>
                    <Right changeNumber={changeWork} num={work} length={4} type={'work'}/>
                </div>
            </div>

            <div className='background'>
                <p
                    className='f2 mb0 pl4 ml5 pb2 pt4' 
                >
                    Classwork:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='pb2 background'
                >
                    <Job topic='classes' num={'1'} />
                </div>
            </div>

            <div className='background'>
                <p
                    className='f2 mb0 pl4 ml5 pb2 pt4' 
                >
                    Skills:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='pb2 background'
                >
                    <Job topic='skills' num={'1'} />
                </div>
            </div>

            <div className='control'>
                <p
                    className='f2 mb0 pl4 ml5 pb2 pt4' 
                >
                    Projects:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='pb2 background'
                >
                    <Left changeNumber={changeProj} num={proj} length={3} type={'projects'}/>
                    <Job topic='projects' num={proj}/>
                    <Right changeNumber={changeProj} num={proj} length={3} type={'projects'}/>
                </div>
            </div>

            <div className='background'>
                <p
                    className='f2 mb0 pl4 ml5 pb2 pt4' 
                >
                    Activities:
                </p>
                <div 
                    style={{display: 'flex', justifyContent: 'center'}}
                    className='background'
                >
                    <Left changeNumber={changeAct} num={act} length={4} type={'activities'}/>
                    <Job topic='activities' num={act}/>
                    <Right changeNumber={changeAct} num={act} length={4} type={'activities'}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
