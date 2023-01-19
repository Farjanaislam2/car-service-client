import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Slides from './Slides';

const Home = () => {
    const slides = useLoaderData();
    const [dark, setDark] = useState(false)
    
    return (
        <div className={`${dark&& 'bg-black'}`}>
          <div className='mt-5 mb-5 flex justify-end gap-3'>
          <button className='btn btn-dark' onClick={()=> setDark(true)}>Dark Theme</button>
            <button className='btn btn-primary' onClick={()=>setDark(false)}>Light Theme</button>
          </div>
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