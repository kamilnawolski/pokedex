import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgPokemon } from 'react-icons/cg';
import { pokemonsType } from '../../../helpers/typesPokemons';

const WrapprCard = styled.div`
    width: 40%;
    margin: 5px;
    
    &:hover {
        > .box {
            background-color: #e2e2e2;
        }
    }
`
const Types = styled.span`
    font-size: ${({theme}) => theme.fontSize.m};
`

const Card = ({ name, types, avatar }) => {

    return (
        <WrapprCard as={NavLink} to={`pokemons/${name}`} >
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            {avatar ? <img src={avatar} alt="avatar" /> : <CgPokemon size='6rem' />}


                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name}</strong>
                                <br />
                                {types && types.map(({ slot, type: { name } }) => <Types title={name} key={slot}>{pokemonsType(name)}</Types>)}
                            </p>
                        </div>
                    </div>
                </article>
            </div>

        </WrapprCard>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    types: PropTypes.array,
    avatar: PropTypes.string.isRequired
}

export default Card;