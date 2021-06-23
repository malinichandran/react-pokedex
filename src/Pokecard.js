import React from 'react';
import './Pokecard.css';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle
//   } from 'reactstrap';

const poke_api = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';


const Pokecard = (props) => {
    let img = `${poke_api}${props.id}.png`
    return (
        <div className="Pokecard">
        <div className="Pokecard-title">{ props.name }</div>
        <img className="Pokecard-image" src={img} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
      </div>
    )
}

export default Pokecard;