// BookDetails.js
import './style.scss'
import { useParams } from 'react-router-dom'
import bookData from '../../../bookData/booksList'
import { IoMdAdd } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'
import { FaRegHeart } from 'react-icons/fa'
import { LuShare2 } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'

const BookDetails = () => {
	const { dark , count} = useSelector((state) => state);
	const { bookId } = useParams()
	const dispatch = useDispatch()


	const selectedBook = bookData.bookdata.find(
		(book) => book.id === parseInt(bookId, 10)
	)

	if (!selectedBook) {
		return <div>Book not found.</div>
	}

	const handleClick = () => {

		dispatch({type: "SET_DEFAULT_COUNT"})

		let existingQuantities = JSON.parse(localStorage.getItem('quantity'))

		existingQuantities = existingQuantities !== null ? existingQuantities : {}

		const existingIds = JSON.parse(localStorage.getItem('bookIds')) || []

		existingQuantities[selectedBook.id] =
			(existingQuantities[selectedBook.id] || 0) + count

		localStorage.setItem('quantity', JSON.stringify(existingQuantities))

		if (!existingIds.includes(selectedBook.id)) {
			existingIds.push(selectedBook.id)
			localStorage.setItem('bookIds', JSON.stringify(existingIds))
		}

		localStorage.setItem('length', JSON.stringify(existingIds.length))


	}

	return (
		<>
			<div className={'container'}>
				<div className="bookDetails">
					<div className="bookPhoto">
						<img src={selectedBook?.thumbnailUrl} alt={selectedBook?.title}/>
					</div>

					<div className="bookDesc" style={{color: dark ? 'white' : 'black' }}>
						<div className="title">
							<h1 style={{ color: dark ? 'white' : 'black' }}>
								{selectedBook.title}
							</h1>

							<div className="likeAndShareIcons">
								{<FaRegHeart />}
								{<LuShare2 />}
							</div>
						</div>

						<p style={{ color: dark ? 'white' : 'black' }} className={'author'}>
							{selectedBook.authors[0]}
						</p>
						<p
							style={{ color: dark ? 'white' : 'black' }}
							className={'description'}
						>
							{selectedBook.shortDescription.slice(0, 500)}
						</p>

						<p className={'price'}>$ {selectedBook.price}</p>

						<div className="buttons">
							<button
								onClick={handleClick}
								className={'addToCart'}
								style={{ color: dark ? 'white' : 'black' }}
							>
								Add to Cart
							</button>

							<div className="counter">
								<p onClick={()=> dispatch({ type: 'MINUS_COUNT' })} className={'subtract'}>
									{<RiSubtractFill />}
								</p>
								<p
									className={'currentNum'}
									style={{ color: dark ? 'white' : 'black' }}
								>
									{count}
								</p>
								<p onClick={()=> dispatch({ type: 'ADD_COUNT' })} className={'add'}>
									{<IoMdAdd />}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BookDetails
