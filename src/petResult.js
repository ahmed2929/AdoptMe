// import React from 'react'
// import Pet from './Pet' 

// export default function PetResult({pets}){
//     console.debug(pets)

//         return(
//             <div className="search">
//             {pets.length==0?(
//                 <h1>No pets</h1>


//             ):(
//                 pets.map((pet)=>{
//                     <Pet
//                     animal={pet.animal}
//                     key={pet.id}
//                     name={pet.name}
//                     breed={pet.breed}
//                     media={pet.photo}
//                     location={`${pet.contact.address.city},${pet.contact.address.state}`}
//                     id={pet.id}

                    
                    
//                     />
//                 })
//             )}



//             </div>





//         )






// }


import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${
                pet.contact.address.state
              }`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;