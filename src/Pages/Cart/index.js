import React, { useEffect, useState } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import bookData from '../../components/bookData/booksList'

const Cart = ({ dark }) => {
	// бул жерде сорттолгон китептер сакталган
	const [books, setBooks] = useState([])

	// бул локяльный стордогу китептердин айдисин алат
	const getIdsFromLocalStr = () => {
		return JSON.parse(localStorage.getItem('bookIds')) || []
	}
	// бул стордогу китептердин санын алат
	const getQuantityFromLocalStr = () => {
		return JSON.parse(localStorage.getItem('quantity')) || {}
	}

	useEffect(() => {
		// бул жерде сортолот локальный стордогу айдилерди салыштырып бир гана стордогу китептер калат
		let arrayOfBook = bookData.bookdata.filter((el) =>
			getIdsFromLocalStr().includes(el.id)
		)

		// бул обновления кылат
		arrayOfBook = arrayOfBook.map((book) => ({
			...book,
			quantity: getQuantityFromLocalStr()[book.id] || 0
		}))

		setBooks(arrayOfBook)
	}, [])
	const removeBookFromCart = (book) => {
		const existingIds = getIdsFromLocalStr()

		const existingQuantities = getQuantityFromLocalStr()

		const updatedIds = existingIds.filter((id) => id !== book.id)

		delete existingQuantities[book.id]

		localStorage.setItem('bookIds', JSON.stringify(updatedIds))
		localStorage.setItem('quantity', JSON.stringify(existingQuantities))

		setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id))

		localStorage.setItem('length', JSON.stringify(updatedIds.length))
	}

	return (
		<>
			<div className="container">
				<div className="cart">
					<div className="cartItems">
						<h1
							style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
							className={'cartTitle'}
						>
							Your cart
						</h1>

						<div
							className="returnToShop"
							style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
						>
							<p>Not ready to checkout?</p>
							<NavLink
								to={'/books'}
								style={{ color: '#05b3ea', transition: '0.5s' }}
							>
								Continue Shopping
							</NavLink>
						</div>
						<div className="booksAndPayment">
							<div className="itemsContainer">
								{books.map((data) => (
									<div
										className="cartUi"
										key={data.id}
										style={{
											borderBottom: dark
												? '1px solid white '
												: '1px solid black'
										}}
									>
										<NavLink
											to={`/books_details/${data.id}`}
											style={{ width: '25%', height: '200px' }}
										>
											<img
												src={data.thumbnailUrl}
												alt={'img'}
												style={{ width: '100%', height: '200px' }}
											/>
										</NavLink>

										<div className="infoOfBook">
											<div className="title">
												<h1
													style={{
														color: dark ? 'white' : 'black',
														transition: '0.5s'
													}}
												>
													{data.title}
												</h1>
												<p
													className={'author'}
													style={{
														color: dark ? 'white' : 'black',
														transition: '0.5s'
													}}
												>
													{data.authors[0]}
												</p>
											</div>

											<div className="costAndQuantity">
												<p
													className={'quantity'}
													style={{
														color: dark ? 'white' : 'black',
														transition: '0.5s'
													}}
												>
													quantity: {data.quantity}
												</p>
												<p className={'cost'}>$ {data.price}</p>
											</div>
										</div>

										<p
											className={'remove'}
											onClick={() => removeBookFromCart(data)}
										>
											Remove
										</p>
									</div>
								))}
							</div>

							<div className="orderSummary">
								<h3
									style={{
										color: dark ? 'white' : 'black',
										transition: '0.5s'
									}}
								>
									Order Summary
								</h3>

								<div
									className="details"
									style={{
										color: dark ? 'white' : 'black',
										transition: '0.5s'
									}}
								>
									<div className="shipping">
										<p>Shipping</p>
										<p>Select Method </p>
									</div>

									<div
										className="payment"
										style={{
											borderBottom: dark
												? '1px solid  white'
												: '1px solid black',
											transition: '0.5s'
										}}
									>
										<p>Payment</p>
										<p>Select Method</p>
									</div>

									<div className="total">
										<p>Total</p>
										<p className={'totalCost'}>
											{' '}
											${' '}
											{books.reduce(
												(total, book) => total + book.price * book.quantity,
												0
											)}
										</p>
									</div>
								</div>

								<button className={'checkoutBtn'}>Continue to checkout</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
