import React, { useEffect, useState } from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import bookData from '../../components/bookData/booksList'

const Cart = ({ dark, updateTotal }) => {

	// бул жерде сорттолгон китептер сакталган
	const [books, setBooks] = useState([]);




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
		// бул жерде локальный стордогу айдилер бар
		const existingIds = getIdsFromLocalStr()
		// бул жерде локальный стордогу китептин саны  бар
		const existingQuantities = getQuantityFromLocalStr()

		// бул жерде жерде
		const updatedIds = existingIds.filter((id) => id !== book.id)
		delete existingQuantities[book.id]

		localStorage.setItem('bookIds', JSON.stringify(updatedIds))
		localStorage.setItem('quantity', JSON.stringify(existingQuantities))

		setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id))


		// бул жерде локальный стор тактап айтканда quantity деген
		// файлдын значенияларын бир бирине кошот
		const totalQuantity = Object.values(existingQuantities).reduce(
			(acc, el) => acc + el,
			0
		);

		// бул жалпы китептин санын sum деген стейтке жонотот
		updateTotal(totalQuantity)

		console.log(totalQuantity)
	}






	return (
		<>
			<div className="container">
				<div className="cart">
					<div className="cartItems">
						<h1
							style={{ color: dark ? 'red' : 'blue' }}
							className={'cartTitle'}
						>
							Your cart
						</h1>

						<div className="returnToShop">
							<p>Not ready to checkout?</p>
							<NavLink to={'/books'}>Continue Shopping</NavLink>
						</div>
						<div className="booksAndPayment">
							<div className="itemsContainer">
								{books.map((data) => (
									<div className="cartUi" key={data.id}>
										<img src={data.thumbnailUrl} alt={'img'} />

										<div className="infoOfBook">
											<div className="title">
												<h1>{data.title}</h1>
												<p className={'author'}>{data.authors[0]}</p>
											</div>

											<div className="costAndQuantity">
												<p className={'quantity'}>quantity: {data.quantity}</p>
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
								<h3>Order Summary</h3>

								<div className="details">
									<div className="shipping">
										<p>Shipping</p>
										<p>Select Method ></p>
									</div>

									<div className="payment">
										<p>Payment</p>
										<p>Select Method ></p>
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
