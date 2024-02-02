import React from 'react'
import './style.scss'
import ItWas from '../../../assets/img/itWas.png'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";

const Books = () => {
	const { dark } = useSelector((state) => state)

	const bookData = require('../../../components/bookData/booksList')


	return (
		<div>
			<div className="container">
				<div className="books">
					<h1
						style={{
							transition: '0.5s',
							color: dark ? 'white' : 'black;'
						}}
					>
						Books
					</h1>
					<Link
						to={'/books'}
						style={{
							position: 'relative',
							left: '93%',
							bottom: '20px',
							transition: '0.5s',
							color: '#818EEA',
							fontSize: '18px',
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: '120%'
						}}
					>
						View All
					</Link>
					<div className="booksUiContainer">
						{bookData.bookdata.slice(0, 5).map((book, index) => (
							<div key={index} style={{ width: '200px' }}>
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
									style={{ color: dark ? 'white' : 'black' }}
									className={'imageTitle'}
								>
									{' '}
									{book.title}
								</h4>{' '}
								<p style={{ color: dark ? 'yellow' : 'black' }}>
									{book.authors['0']}
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
