import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { useState } from 'react'
import Footer from './components/Footer'
import Books from './Pages/Books'
import Cart from "./Pages/Cart";

function App() {
	const [dark, setDark] = useState(false)
	return (
		<>
			<Header dark={dark} setDark={setDark} />
			<Routes>
				<Route path={'/'} element={<Home dark={dark} />} />
				<Route path={'/books'} element={<Books />} />
				<Route path={"/cart"} element={<Cart />} dark={dark} />
			</Routes>
			<Footer />
		</>
	)
}

export default App;
