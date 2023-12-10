import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
	const [dark, setDark] = useState(false)
	return (
		<>
			<Header dark={dark} setDark={setDark} />
			<Routes>
				<Route path={'/'} element={<Home />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
