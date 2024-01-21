import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const NewBooks = ({ blackColor }) => {
	const bookData = require('../../../components/bookData/booksList')

	return (
		<div>
			<div className="container">
				<div className="newBooks">
					<h1 style={{ color: blackColor ? 'white' : 'black' }}>New Books</h1>
					<div className="newBooksContainer">
						{bookData.bookdata.slice(17, 20,).map((book, index) => (
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
								<p style={{ color: blackColor ? 'yellow' : 'black' }}>{book.authors["0"]}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewBooks
