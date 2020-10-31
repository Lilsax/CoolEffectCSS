import React from 'react'
import './Header.scss'

import pic from 'C://Users//user//Desktop//fachion//src//Assists//pic.png';
import video from 'C://Users//user//Desktop//fachion//src//Assists//aa.mov';

export default function Header() {
    return (
        <div>
            <img src={pic} />
            <video autoPlay muted loop >
                <source src={video}/>
            </video>
        </div>
    )
}
