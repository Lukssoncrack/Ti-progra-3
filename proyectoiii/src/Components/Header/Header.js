import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header(){
    return(
        <section>
            <img src="https://st3.depositphotos.com/5904380/14482/v/450/depositphotos_144828517-stock-illustration-black-film-award.jpg"/>
            <h2>Nefli</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favoritos</Link>
                <Link to='/populares'>Populares</Link>
                <Link to='/cartelera'>Cartelera</Link>
                
            </div>
        </section>
    )
}






export default Header

