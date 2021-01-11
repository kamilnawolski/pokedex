import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { pokemonsType } from '../../helpers/typesPokemons';
import Heading from '../atoms/Heading/Heading';
import Paragraph from '../atoms/Paragraph/Paragraph';

const WrapperDetails = styled.div`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`
const Types = styled.span`
    font-size: 2rem;
`
const CardContent = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Media = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`
const HeadingStyled = styled(Heading)`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

const PokemonDetail = ({ pokemon, avatar }) => {
    return (
        <WrapperDetails>
            <div className="card">
                <HeadingStyled upper className="card-header">{pokemon.name} <Paragraph className="button is-white" as={NavLink} to="/"><FaTimes /></Paragraph></HeadingStyled>
                <CardContent className="card-content">
                    <Media className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={avatar} alt="Placeholder image" />
                            </figure>
                            <div className="media-content">
                                <p className="subtitle is-6">
                                    {pokemon.types && pokemon.types.map(({ slot, type: { name } }) => <Types title={name} key={slot}>{pokemonsType(name)}</Types>)}
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            {pokemon.stats && pokemon.stats.map((data, index) => <p key={index}>{data.stat.name} : {data.base_stat}</p>)}
                        </div>
                    </Media>
                </CardContent>
            </div>

        </WrapperDetails>
    )
}

PokemonDetail.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        types: PropTypes.array,
        stats: PropTypes.array
    }).isRequired,
    avatar: PropTypes.string,
}

export default PokemonDetail;