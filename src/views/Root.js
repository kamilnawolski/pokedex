import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { routes } from './../routes';
import MainTemplate from './../templates/MainTemplate';
import PokemonsView from './PokemonsView'
import PokemonDetailsView from './PokemonDetailsView';


const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<MainTemplate>
				<Switch>
					<Route exact path={routes.home} component={PokemonsView} render={() => <Redirect to={routes.pokemons} />} />
					<Route exact path={routes.pokemons} component={PokemonsView} />
					<Route path={routes.pokemon} component={PokemonDetailsView} />
				</Switch>
			</MainTemplate>
		</BrowserRouter>
	</Provider>
)

export default Root;
