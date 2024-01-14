import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Books from './Pages/Books';
import Cart from "./Pages/Cart";
import BooksDetail from "./Pages/Books/BooksDetail";

function App() {
	const [count, setCount] = useState(1);

	const getData = (data) => {
		setCount(data);
	};

	const [dark, setDark] = useState(false);
	const [cart, setCart] = useState([]);

	console.log(cart, "this is from app.js");

	return (
		<>
			<Header dark={dark} setDark={setDark} countOfBook={count} />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books dark={dark} />} />
				<Route path={"/cart"} element={<Cart cart={cart} setCart={setCart} />} dark={dark} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail dark={dark} onSubmit={getData} cart={cart} setCart={setCart} />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
