import React ,{useState}from 'react'
import {render} from 'react-dom'
import SearchParams from './searchParams'
import {Router, Link} from '@reach/router'
import Details from './Details'
import TheamContex from './TheamContex'

const App=()=>{
    const TheamHook=useState(['peru'])
    return (
        <TheamContex.Provider value={TheamHook}>
        
        <div id="main continer">
        <header>

        <Link to="/">
        adopt me
        </Link>
        
        </header>
        
        <Router>
        <SearchParams path="/" />
        <Details path="details/:id"/>
        </Router>
        
        
        </div>

        
        
        </TheamContex.Provider>
        

    )







}

render(
     <App/>
     ,document.getElementById("root")
     )
