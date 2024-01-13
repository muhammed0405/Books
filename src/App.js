import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { useState } from 'react'
import Footer from './components/Footer'
import Books from './Pages/Books'
import Cart from "./Pages/Cart";
import BooksDetail from "./Pages/Books/BooksDetail";

function App() {
	const [dark, setDark] = useState(false)
	return (
		<>
			<Header dark={dark} setDark={setDark} />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books  dark={dark}/>} />
				<Route path={"/cart"} element={<Cart />} dark={dark} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail dark={dark}/>}/>
			</Routes>
			<Footer />
		</>
	)
}

export default App;
