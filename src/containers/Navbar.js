import React from 'react'

import { Switch, NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light style=`background-color: #e3f2fd`">
            
             <span className="navbar-brand mb-0 h1"> <NavLink to='accueil'> Menu</NavLink></span>
             <span className="navbar-brand mb-0 h1"><NavLink to='theater'> Films</NavLink></span>
             <span className="navbar-brand mb-0 h1"><NavLink to='/'> test</NavLink></span>
             <span className="navbar-brand mb-0 h1"><a href=''> A l'affihe</a></span>
             <span className="navbar-brand mb-0 h1"><a href=''> Séries</a></span>
        </nav>
    );
}



export default Navbar


