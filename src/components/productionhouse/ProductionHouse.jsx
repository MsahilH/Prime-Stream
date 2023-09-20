import React from 'react'
import disney from '../../assets/disney-c4059d54.png'
import marvel from '../../assets/marvel-e9c1323d.png'
import nationalG from '../../assets/nationalG-7a8236a9.png'
import pixar from '../../assets/pixar-c423f7c1.png'
import starwar from '../../assets/starwar-1eab3a7b.png'
 
import starwarV from '../../assets/videos/star-wars-6bfec285.mp4'
import disneyV from '../../assets/videos/disney-dc7d5ffd.mp4'
import marvelV from '../../assets/videos/marvel-2bc69f97.mp4'
import nationalGV from '../../assets/videos/national-geographic-50e971d7.mp4'
import pixarV from '../../assets/Videos/pixar-faceac07.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV
        },

    ]
  return (
    <div>
        {productionHouseList.map((item)=>(
            <span key={item.id}>
                 <video src={item.video} autoPlay loop playsInline muted style={{
                    // border: '1px solid red',
                    width: '15vw',
                    height: '150px',
                    position: 'absolute',
                    zIndex: 0,
                    opacity: 0.6,
                 }}/> 
                <img src={item.image} style={{
                     width: '15vw',
                     height: '150px',
                     zIndex: 1,
                     opacity: 1,
                }} /> 
               
            </span>
        ))}
    </div>
  )
}

export default ProductionHouse