import React,{ useEffect, useState }  from 'react';
import { useLoaderData } from 'react-router-dom';

const CardData = ({cardDetail}) => {
    const detail=useLoaderData()
    console.log(detail)
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('details.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

const {picture,name,SeatingCapacity,EngineCapacity,fuelType,Price,Milege,about} = detail
    return (
        <div className='m-10 w-100'>
          <div className='grid justify-center items-center '>
          <img className='w-full border-4 rounded-sm border-purple-800 p-3' src={picture} alt="" />
          </div>
           <div className='mt-5'>
            <h1 className='text-3xl text-purple-900 font-bold'>Name: {name}</h1>
            <h2 className='text-purple-900'><span className='text-xl font-bold'>About the Car:</span> {about}</h2>
           </div>
           <div className='flex justify-center items-center gap-5 mt-4 '>
            <h1 className='border border-3 rounded-lg border-purple-800 p-2'>Milege: {Milege}</h1>
            <h2 className='border border-3 rounded-lg border-purple-800 p-2'>Price: {Price}</h2>
            


           </div>
        </div>
    );
};

export default CardData;