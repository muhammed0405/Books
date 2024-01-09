import React from 'react'
import "./style.scss"
import TowerOfBooks from '../../../assets/img/towerOfBooks.png'

const AboutUs = ({blackColor}) => {
	return (
		<>
			<div className="container">
				<div className="aboutUs">
					<div className="title">
						<h1 style={{transition: '0.5s',color: blackColor? "white": "black;"}}> About Us</h1>
					</div>

					<div className="aboutUs--content">
						<div className="aboutUs--content__photo">
							<img src={TowerOfBooks} alt="img" />
						</div>
						<div className="aboutUs--content__text">
							<p style={{transition: '0.5s',color: blackColor? "white": "black;"}}>
								We believe that books have the power to change lives, and <br />
								we're dedicated to helping our customers find the perfect <br />
								book for them. Whether you're looking for an escape from <br />
								reality, an educational read, or a book to inspire you, we've{' '}
								<br />
								got you covered. <br/>
                                Thank you for choosing to shop with us. We look forward to <br />
								helping you discover your next favorite book!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutUs
