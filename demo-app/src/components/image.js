import React from 'react'
import img from '../images/usama.png'
import img2 from '../images/sirabrar.png'
import img3 from '../images/awais.png'
import img4 from '../images/karamat.png'
import img5 from '../images/imtiaz.png'

const user = [
  {
    name: 'Usama',
    imageUrl: img,
},{
    name2: 'Abrar Haidaer',
    imageUrl2: img2,},
  {
    name3: 'Abrar',
    imageUrl3: img3,
},
{
    name3: 'Karamat',
    imageUrl3: img5,
},
{
    name4: 'Mehbbo',
    imageUrl4: img4,
  }
];
export const Image = () => {
  return (
    <>
    <h1>{user.name}</h1>
    <img src={user.imageUrl}/>
    <h1>{user.name2}</h1>
    <img src={user.imageUrl2}/>
    <h1>{user.name3}</h1>
    <img src={user.imageUrl3}/>
    </>
  )
}
