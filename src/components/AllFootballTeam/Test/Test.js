import React, { useEffect, useState } from 'react';

const Test = () => {
    const [test,setTest]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php')
        .then(res=>res.json())
        .then(data=>setTest(data))
       
    },[])
    console.log(test);
    return (
        <div>
            <h1>kolla</h1>
        </div>
    );
};

export default Test;