import React from 'react'
import './style.scss'
import BooksUi from './BooksUi'
import Subtle from '../../../assets/img/subtle.png'
import Love from '../../../assets/img/love.png'
import Circle from '../../../assets/img/circle.png'
import Horse from '../../../assets/img/horse.png'
import HarryPotter from '../../../assets/img/harryPotter.png'
import ItWas from '../../../assets/img/itWas.png'

const Books = ({ blackColor }) => {
	return (
		<div>
			<div className="container">
				<div className="books">
					<h1
						style={{
							transition: '0.5s',
							color: blackColor ? 'white' : 'black;'
						}}
					>
						Books
					</h1>

					<div className="booksUiContainer">
						<BooksUi
							blackColor={blackColor}
							photo={Subtle}
							title={'THE SUBTLE ART OF NOT GIVING A F*CK'}
							description={'by Mark Manson'}
						/>
						<BooksUi
							blackColor={blackColor}
							photo={Love}
							title={'8 RULES OF LOVE'}
							description={'by Jay Shetty'}
						/>
						<BooksUi
							blackColor={blackColor}
							photo={Circle}
							title={'THE CREATIVE ACT'}
							description={'by Rick Rubin with Neil Strauss'}
						/>
						<BooksUi
							blackColor={blackColor}
							photo={Horse}
							title={'THE BOY, THE MOLE, THE FOX AND THE HORSE'}
							description={'by Charlie Mackesy'}
						/>
						<BooksUi
							blackColor={blackColor}
							photo={HarryPotter}
							title={'HARRY POTTER'}
							description={'by J.K. Rowling'}
						/>
						<div className="halfImage">
							<img src={ItWas} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Books
