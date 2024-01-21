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
	const [sum , setSum] = useState(0)
	const [idOfBook, setIdOfBook] = useState(null);



	const getId = (bookID)=>{
		setIdOfBook(bookID)
	}

	const getLength = (length) => {
		setSum(length);
	};

	const [dark, setDark] = useState(false);
	return (
		<>
			<Header dark={dark} setDark={setDark} countOfBook={sum}  />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books dark={dark} />} />
				<Route path={"/cart"} element={<Cart dark={dark} idOfBook={idOfBook} getLength={getLength} />} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail dark={dark} onSubmit={getLength} setIdOfBook={getId}/> } />
				<Route path={"/about_us"} element={<AboutUsPage/>}/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
