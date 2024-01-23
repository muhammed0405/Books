import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Footer from './components/Footer';
import Books from './components/Pages/Books';
import Cart from "./components/Pages/Cart";
import BooksDetail from "./components/Pages/Books/BooksDetail";
import AboutUsPage from "./components/Pages/AboutUsPage";

function App() {
	const [idOfBook, setIdOfBook] = useState(null);
	const getId = (bookID)=>{
		setIdOfBook(bookID)
	}


	return (
		<>
			<Header/>
			<Routes>
				<Route path={'/'} element={<Home/>} />
				<Route path={'/books'} element={<Books/>} />
				<Route path={"/cart"} element={<Cart idOfBook={idOfBook}  />} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail  setIdOfBook={getId}/> } />
				<Route path={"/about_us"} element={<AboutUsPage/>}/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
