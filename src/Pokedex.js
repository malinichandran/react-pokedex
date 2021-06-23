import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = ({cardDetails}) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title"> Pokedex</h1>
            <div className="Pokedex-cards">
                {cardDetails.map(c => (
                    <div>
                        <Pokecard   
                          id={c.id}
                          name={c.name}
                          
                          type={c.type}
                          exp={c.base_experience} />
                
                </div>
                ))}
            
           </div>
        </div>
    )
}

export default Pokedex;