import React from 'react'
import AboutUs from './AboutUs'
import Books from './Books/index'
import Genres from './Genres'
import Hero from './Hero'
import NewBooks from './NewBooks/index';
const Home = () => {
	return (
		<>
			<Hero />
			<Genres />
			<NewBooks />
			<Books />
			<AboutUs />
		</>
	)
}

export default Home
