import React,{useState,useEffect,useContext} from 'react'
import pet,{ANIMALS} from '@frontendmasters/pet'
import useDropdown from './useDropdown'
import Results from './petResult'
import TheamContext from './TheamContex'
const SearchParams=()=>{
    const [location,setLocation] =useState('seattle , WA')
    const [breeds,setbreeds] =useState([])
    const [animal,AnimalDropDown] =useDropdown('animal','dog',ANIMALS)
    const [breed,BreadDropDown,setbread] =useDropdown('breed','',breeds)
    const [pets,setPets] =useState([])
    const [theam,setTheam]=useContext(TheamContext)

    function requestPets(){
    pet.animals({
        location,
        breed,
        type: animal
      }).then(({animals})=>{

        
        setPets(animals || []);

      })
  
      

   }
    

    useEffect(()=>{
        setbreeds([]);
        setbread("")
       pet.breeds(animal).then(({breeds})=>{
        const breadNames=breeds.map(({name})=>name)
        setbreeds(breadNames)
        
       },console.error)
    },[animal,setbreeds,setbread])


    return (
        <div className="search-params">
        <form onSubmit={e => {
            e.preventDefault();
            requestPets();
          }}
  >
        <label htmlFor="location">
        location
        <input 
         id="location" 
         value={location} 
         placeholder="location" 
         onChange={e=>setLocation(e.target.value)}></input>
        </label>
        <AnimalDropDown/>
        <BreadDropDown />
        <label htmlFor={theam}> 
        theme
        <select 
        value={theam}
        onChange={(e)=>{setTheam(e.target.value)}}
        onBlur={(e)=>{setTheam(e.target.value)}}
        >
        <option value="peru">peru</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="gray">gray</option>
        
        </select>
        
        
        </label>
        <button style={{backgroundColor:theam}}>submit</button>
        
        </form>
        <Results pets={pets}/>
        
        </div>

    )
}

export default SearchParams;