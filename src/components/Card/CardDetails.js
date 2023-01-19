import React, { useEffect, useState } from 'react';
import CardData from './CardData';
import { useLoaderData, useParams } from 'react-router-dom';


const CardDetails = (props) => {
    // const data = useLoaderData()
    const {id} = useParams();
    console.log(id)
//    console.log(data)

    const [cardDetails,setCardDetails]=useState([]);
    useEffect( ()=>{
        fetch('details.json')
.then(res=>res.json())
.then(data=> setCardDetails(data))
    },[])
    console.log(cardDetails)
    return (
        <div>
           
           {
                cardDetails.map(cardDetail =><CardData
                key={cardDetail._id}
                cardDetail={cardDetail}
                ></CardData>)

            }
        </div>
    );
};

export default CardDetails;