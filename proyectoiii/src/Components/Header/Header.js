import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header(){
    return(
        <section>
            <img src="https://st3.depositphotos.com/5904380/14482/v/450/depositphotos_144828517-stock-illustration-black-film-award.jpg" class='logo'/>
            <h2>Nefli</h2>
            <div class = 'menu'>
                <Link to='/' class='item'>Home</Link>
                <Link to='/favorites' class='item'>Favoritos</Link>
                <Link to='/populares' class='item'>Peliculas populares</Link>
                <Link to='/seriesPopulares' class='item'> Series populares</Link>   
                <Link to='/seriesCartelera' class='item'> Series cartelera</Link>                                
                <Link to='/cartelera' class='item'>Peliculas cartelera</Link>
                
            </div>
        </section>
    )
}






export default Header

