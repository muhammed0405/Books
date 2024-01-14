import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import bookData from '../../components/bookData/booksList';

const Cart = ({ dark, cart, setCart }) => {
	const handleRemoveBook = (bookId) => {
		// Remove the book with the specified ID from the cart
		const updatedCart = cart.filter((book) => book.id !== bookId);
		setCart(updatedCart);

	};

	console.log(cart)

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
								{bookData.bookdata.map((data) => (
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

										<p className={'remove'} onClick={() => handleRemoveBook(bookData.bookdata.id)}>
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
