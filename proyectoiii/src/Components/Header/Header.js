import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header(){
    return(
        <section>
            <h2>Nefli</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favoritos</Link>
                <Link to='/seccion1'>Seccion 1</Link>
                <Link to='/seccion2'>Seccion 2</Link>
                
            </div>
        </section>
    )
}






export default Header

