import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import InfiniteScroll from 'react-infinite-scroll-component';
import rootApi from '../api';
import PokemonCards from '../components/molecules/PokemonCards/PokemonCards';
import withHandleError from '../hoc/withHandleError';
import withLoading from '../hoc/withLoading';

const style = {
	height: 'calc(100vh - 115px)',
	overflow: 'auto'
};

const PokemonCardsWithHandleErrorAndLoading = compose(withLoading, withHandleError)(PokemonCards);

const PokemonsView = () => {

	const limit = 20;

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [totalCount, setTotalCount] = useState(null);
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState(0);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		getPokemon();
	}, [offset])

	const getPokemon = () => {
		rootApi.get(`pokemon?limit=${limit}&offset=${offset}`)
			.then(({ data }) => {
				setTotalCount(data.count);
				getDetails(data.results)
				setLoading(false);
			})
			.catch(error => {
				setError(error);
			})
	}

	const getDetails = (results) => {
		results.forEach(({ url }) => {
			rootApi.get(url).then(({ data }) => {
				setPokemons(prev => [...prev, data]);
			})
		});
	}

	const fetchMoreData = () => {
		if (pokemons.length >= totalCount) {
			setHasMore(false);
			return;
		}
		setOffset(offset + limit);
	};

	const endingTemplate = (
		<p style={{ textAlign: 'center' }}>
			<b>Yay! You have seen it all</b>
		</p>
	)

	return (
		<div id="scrollableElement" style={style}>
			<InfiniteScroll
				dataLength={pokemons.length}
				next={fetchMoreData}
				hasMore={hasMore}
				scrollableTarget="scrollableElement"
				endMessage={endingTemplate}>
				<PokemonCardsWithHandleErrorAndLoading pokemons={pokemons} error={error} loading=
					{loading} />
			</InfiniteScroll>
		</div>




	)


}

export default PokemonsView;