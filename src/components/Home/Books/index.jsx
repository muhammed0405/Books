import React from 'react'
import './style.scss'
import ItWas from '../../../assets/img/itWas.png'
import { Link, NavLink } from 'react-router-dom'


const Books = ({ blackColor }) => {
	const bookData = require('../../../components/bookData/booksList')
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
                 <a style={{
			                position: 'relative',
							left: '90%',
							transition: '0.5s',
							color: blackColor ? 'white' : 'black;'
						}} href='/'>View All</a>
					<div className="booksUiContainer">
					{bookData.bookdata.slice(0, 5,).map((book, index) => (
							<div key={index} style={{width: "200px"}}>
								<Link to={`/books_details/${book.id}`}>
									{' '}
									<img
										style={{
											width: '180px',
											fontSize: 'cover',
											borderRadius: '8px'
										}}
										src={book.thumbnailUrl}
										alt={`img-${index}`}
									/>
								</Link>{' '}
								<h4
									style={{ color: blackColor ? 'white' : 'black' }}
									className={'imageTitle'}
								>
									{' '}
									{book.title}
								</h4>{' '}
								<p style={{ color: blackColor ? 'yellow' : 'black' }}>
								{book.authors["0"]}
								</p>
							</div>
						))}
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
