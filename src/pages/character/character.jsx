import React, { useEffect, useState } from 'react'
import './character.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Character = () => {
    const [DataHero, setDataHero] = useState([])
    const [data2, setData2] = useState({})

    async function getCharacter() {
        const response = await axios.get('https://thronesapi.com/api/v2/Characters')
        console.log(response.data);
        setDataHero(response.data)
    }

    useEffect(() => {
      getCharacter()
    }, [])


    const getOneCharacter = async(id) => {
        const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
        setData2(response.data)
    }

  return (
    <div className='character-parent'>
     <div className= 'character-list'>
     {DataHero.map((item,idx) => {

            return (
                <div
                key={idx} 
                className='item-list' 
                 onClick={() => getOneCharacter(item.id)} 
                >
                    <div className='fullName'>{item.fullName}</div>
                    <div >
                        <img className='img' src= {item.imageUrl} alt="" />
                    </div>
                   
                </div>
            )
        })}

     </div>
     <div className='detailed-info'>
     <h2>{data2.fullName}</h2>
       <h3>{data2.family}</h3>
       <h3>{data2.title}</h3>
       <div>
        <img src={data2.imageUrl} alt={data2.name} />
       </div>
     </div>
    </div>
  )
}

export default Character