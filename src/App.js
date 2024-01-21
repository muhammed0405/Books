import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Books from './Pages/Books';
import Cart from "./Pages/Cart";
import BooksDetail from "./Pages/Books/BooksDetail";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
	const [idOfBook, setIdOfBook] = useState(null);
	const getId = (bookID)=>{
		setIdOfBook(bookID)
	}

	const [dark, setDark] = useState(false);
	return (
		<>
			<Header dark={dark} setDark={setDark} />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books dark={dark} />} />
				<Route path={"/cart"} element={<Cart dark={dark} idOfBook={idOfBook}  />} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail dark={dark} setIdOfBook={getId}/> } />
				<Route path={"/about_us"} element={<AboutUsPage/>}/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
