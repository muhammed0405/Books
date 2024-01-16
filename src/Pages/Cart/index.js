import React, { useEffect, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import bookData from '../../components/bookData/booksList';

const Cart = ({ dark, idOfBook }) => {
	const [books, setBooks] = useState([]);

	const getIdsFromLocalStr = () => {
		return JSON.parse(localStorage.getItem("bookIds")) || [];
	};

	useEffect(() => {
		let arrayOfBook = bookData.bookdata.filter((el) => getIdsFromLocalStr().includes(el.id));

		setBooks(arrayOfBook);

		const existingIds = getIdsFromLocalStr();

		if (!existingIds.includes(idOfBook)) {
			existingIds.push(idOfBook);
			localStorage.setItem("bookIds", JSON.stringify(existingIds));
		}
	}, [idOfBook]);

	const removeBookFromCart = (book) => {
		console.log(book, "this is remove button");

		const existingIds = getIdsFromLocalStr();

		const updatedIds = existingIds.filter((id) => id !== book.id);
		localStorage.setItem("bookIds", JSON.stringify(updatedIds));

		setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
	};


	return (
		<>
			<div className="container">
				<div className="cart">
					<div className="cartItems">
						<h1 style={{ color: dark ? 'red' : 'blue' }} className={'cartTitle'}>
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
												<p className={'quantity'}>quantity: 1</p>
												<p className={'cost'}>$ {data.price}</p>
											</div>
										</div>

										<p className={'remove'} onClick={() => removeBookFromCart(data)}>
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
										<p className={'totalCost'}>$188</p>
									</div>
								</div>

								<button className={'checkoutBtn'}>Continue to checkout</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
