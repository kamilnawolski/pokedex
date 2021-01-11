import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import rootApi from '../api';
import withLoading from '../hoc/withLoading';
import withHandleError from '../hoc/withHandleError';
import PokemonDetails from '../components/organisms/PokemonDetails';

const PokemonDetailsWithHandleErrorAndLoading = compose(withLoading, withHandleError)(PokemonDetails);

const PokemonDetailsView = ({ match }) => {

    const { params } = match;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [avatar, setAvatar] = useState({});
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemonDetails();
    }, []);

    const getPokemonDetails = () => {
        rootApi.get(`pokemon/${params.name}`)
            .then(({ data }) => {
                setAvatar(data.sprites.front_default);
                createPokeObj(data);
                setLoading(false)
            })
            .catch(error => {
                setError(error)
            })
    }

    const createPokeObj = data => {
        const pokeData = {
            name: data.name,
            types: data.types,
            stats: data.stats
        };
        setPokemon(pokeData);
    }

    return <PokemonDetailsWithHandleErrorAndLoading loading={loading} error={error} pokemon={pokemon} avatar={avatar} />
}

PokemonDetailsView.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string,
        })
    })
};

export default PokemonDetailsView;