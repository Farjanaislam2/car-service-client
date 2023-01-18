import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Slides from './Slides';

const Home = () => {
    const slides = useLoaderData();
    const [dark, setDark] = useState(false)
    
    return (
        <div className={`${dark&& 'bg-black'}`}>
            <button onClick={()=> setDark(true)}>Dark</button>
            <button onClick={()=>setDark(false)}>Light</button>
            {
                slides?.map(slide => <Slides
                key={slide.id}
                slide={slide}
                ></Slides>)
            }
           <div className='mt-12 mb-12'>
           <Card></Card>

           </div>
        </div>
    );
};

export default Home;