import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



const Card = () => {
    const [cards,setcard] =useState([]);
useEffect(()=>{
fetch('card.json')
.then(res=>res.json())
.then(data=> setcard(data))

  } ,[])
console.log("cards",cards)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
           {
            cards.map(card => <div key={card.id}>
                
                <div className="card w-96 bg-purple-100 shadow-xl">
  <figure><img src={card.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">
       <Link to={`/cardDetails/${card._id}`}>See Details</Link></button>
    </div>
  </div>
</div>

            </div>)
           }
           
        </div>
    );
};

export default Card;