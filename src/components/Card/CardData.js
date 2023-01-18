import React, { useEffect, useState } from 'react';

const CardData = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/data-categories`)
        .then(res => res.json())
        .then(data =>console.log(data))
    } ,[])
    return (
        <div>
            
        </div>
    );
};

export default CardData;