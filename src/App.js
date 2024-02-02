import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Books from './components/Pages/Books';
import Cart from "./components/Pages/Cart";
import BooksDetail from "./components/Pages/Books/BooksDetail";
import AboutUsPage from "./components/Pages/AboutUsPage";

function App() {
	


	return (
		<>
			<Header/>
			<Routes>
				<Route path={'/'} element={<Home/>} />
				<Route path={'/books'} element={<Books/>} />
				<Route path={"/cart"} element={<Cart/>} />
				<Route path={"/books_details/:bookId"} element={<BooksDetail/> } />
				<Route path={"/about_us"} element={<AboutUsPage/>}/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
