import React, { useEffect } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import bookData from '../../bookData/booksList'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiSubtractFill } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'

const Cart = () => {
	const dark = useSelector((state) => state.dark)
	const sortedBooks = useSelector((state) => state.sortedBooks)
	const dispatch = useDispatch()
	// бул локяльный стордогу китептердин айдисин алат
	const getIdsFromLocalStr = () => {
		return JSON.parse(localStorage.getItem('bookIds')) || []
	}
	// бул стордогу китептердин санын алат
	const getQuantityFromLocalStr = () => {
		return JSON.parse(localStorage.getItem('quantity')) || {}
	}
	setInterval(() => {}, 100)
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

		dispatch({ type: 'SORT_BOOKS', payload: { sortedBooks: arrayOfBook } })
	}, [dispatch])

	const updateQuantities = () => {
		let arrayOfBook = bookData.bookdata.filter((el) =>
			getIdsFromLocalStr().includes(el.id)
		)

		// бул обновления кылат
		arrayOfBook = arrayOfBook.map((book) => ({
			...book,
			quantity: getQuantityFromLocalStr()[book.id] || 0
		}))

		dispatch({ type: 'SORT_BOOKS', payload: { sortedBooks: arrayOfBook } })
	}

	const removeBookFromCart = (book) => {
		const existingIds = getIdsFromLocalStr()

		const existingQuantities = getQuantityFromLocalStr()

		const updatedIds = existingIds.filter((id) => id !== book.id)

		delete existingQuantities[book.id]

		localStorage.setItem('bookIds', JSON.stringify(updatedIds))
		localStorage.setItem('quantity', JSON.stringify(existingQuantities))

		dispatch({
			type: 'SORT_BOOKS',
			payload: {
				sortedBooks: sortedBooks.filter((el) => el.id !== book.id)
			}
		})
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
								{sortedBooks.map((data) => (
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
														width: "90%",
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
												<div className="quantityAddAndRemove">
													<p
														className={'quantity'}
														style={{
															textAlign: 'start',
															color: dark ? 'white' : 'black',
															transition: '0.5s'
														}}
													>
														quantity: {data.quantity}
														<button
															className="subtractBtn"
															onClick={() => {
																dispatch({
																	type: 'MINUS_COUNT_LOCAL',
																	payload: { id: data.id }
																})
																updateQuantities()
															}}
														>
															{
																<RiSubtractFill
																	style={{
																		transition: '0.5s',
																		color: dark ? 'white' : 'black'
																	}}
																/>
															}
														</button>
														<button
															className="addBtn"
															onClick={() => {
																dispatch({
																	type: 'ADD_COUNT_LOCAL',
																	payload: { id: data.id }
																})
																updateQuantities()
															}}
														>
															{
																<IoMdAdd
																	style={{
																		transition: '0.5s',
																		color: dark ? 'white' : 'black'
																	}}
																/>
															}
														</button>
													</p>
												</div>

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
										<p>Shipping <MdKeyboardArrowDown
											style={{
												transition: '0.5s',
												color: dark ? 'white' : 'black'
											}}
										/></p>
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
										<p>
											Payment{' '}
											<MdKeyboardArrowDown
												style={{
													transition: '0.5s',
													color: dark ? 'white' : 'black'
												}}
											/>
										</p>
										<p>Select Method</p>
									</div>

									<div className="total">
										<p>Total</p>
										<p className={'totalCost'}>
											{' '}
											${' '}
											{sortedBooks.reduce(
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
