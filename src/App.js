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
	const [count, setCount] = useState(0);
	const [idOfBook, setIdOfBook] = useState(null)

	const getId = (bookID)=>{
		setIdOfBook(bookID)
	}

	const getData = (data) => {
		setCount(data);
	};

	const [dark, setDark] = useState(false);
	return (
		<>
			<Header dark={dark} setDark={setDark} countOfBook={count}  />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books dark={dark} />} />
				<Route path={"/cart"} element={<Cart idOfBook={idOfBook} count={count}  />} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail dark={dark} onSubmit={getData} setIdOfBook={getId}/> } />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
