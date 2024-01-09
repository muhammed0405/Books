import React from 'react'
import './style.scss'
import HeroBackground from '../../../assets/img/mainImage.png'

const Hero = ({blackColor}) => {
	console.log(
		blackColor
	)


	return (
		<div
			id="hero"
			style={{
				backgroundImage: `url(${HeroBackground})`
			}}
		>
			<div className="container">
				<div className="hero" >
					<div className="title">
						<h1>Welcome to our Bookshop</h1>
						<p>A place where you can get all the books you want!</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
