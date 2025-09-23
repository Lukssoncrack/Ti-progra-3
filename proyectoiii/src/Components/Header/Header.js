import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header(){
    return(
        
        <section className='header'>
            <div className="titulo">
           
            <img  className="logo" src="https://st3.depositphotos.com/5904380/14482/v/450/depositphotos_144828517-stock-illustration-black-film-award.jpg" class='logo'/>
            <div className='titulos'>
            <h1>Nefli</h1>
            <h3>Plus</h3>
            </div>

            </div>
            <nav>
                <Link to='/' className='titulos2'>Home</Link>
                <Link to='/favorites' className='titulos2'>Favoritos</Link>
                <Link to='/populares' className='titulos2'>Peliculas populares</Link>
                <Link to='/seriesPopulares' className='titulos2'> Series populares</Link>   
                <Link to='/seriesCartelera' className='titulos2'> Series cartelera</Link>                                
                <Link to='/cartelera' className='titulos2'>Peliculas cartelera</Link>
                
            </nav>
        </section>

    
    )
}






export default Header

