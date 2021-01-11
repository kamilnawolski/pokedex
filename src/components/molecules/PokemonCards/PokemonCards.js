import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../Card/Card';


const WrapperCard = styled.div`
	display: flex;
	flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

const PokemonCards = ({pokemons}) => {

    const { search } = useSelector(({ SearchReducer }) => SearchReducer);

    return (
        <WrapperCard>
            {pokemons.length > 0 && pokemons
                .filter(({ name }) => name && name.includes(search.trim()))
                .map(({id, name, types, sprites: { front_default } }) => <Card key={id} name={name} types={types} avatar={front_default} />)}
        </WrapperCard>
    )
}

PokemonCards.propTypes = {
    pokemons: PropTypes.array.isRequired
}

PokemonCards.defaultProps = {
    pokemons: []
}

export default PokemonCards;