// Header.js
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { IoBag } from 'react-icons/io5'
import './style.scss'
import DarkMode from './DarkMode/DarkMode'

const Header = ({ dark, setDark, countOfBook }) => {

	const [searchVisible, setSearchVisible] = useState(false)
	const toggleSearch = () => {
		setSearchVisible(!searchVisible)
	}

	const body = () => {
		document.body.style.background = dark ? '#222' : 'white'
		document.body.style.transition = '1s'
	}

	body()

	return (
		<>
			<div
				id="header"
				style={{ borderBottom: dark ? '1px solid white' : '1px solid black' }}
			>
				<div className="container">
					<div
						className="header"
						style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
					>
						<div className="nav-bar">
							<NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/"
							>
								{' '}
								Bookshop{' '}
							</NavLink>
							<NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/categories"
							>
								{' '}
								Categories{' '}
							</NavLink>
							<NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/recent"
							>
								{' '}
								Recent{' '}
							</NavLink>
							<NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/books"
							>
								{' '}
								Books{' '}
							</NavLink>
							<NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/about_us"
							>
								{' '}
								About Us{' '}
							</NavLink>
						</div>
						{searchVisible && (
							<div className="search-menu">
								<input
									type="search"
									placeholder="Search books"
									style={{
										border: dark ? '1px solid white' : '1px solid black'
									}}
								/>
							</div>
						)}
						<div className="icons">
							<CiSearch onClick={toggleSearch} />
							<div className="bag">
								<NavLink
									to={'/cart'}
									style={{
										color: dark ? 'white' : 'black',
										transition: '0.5s'
									}}
								>
									<IoBag /> {countOfBook}
								</NavLink>
							</div>
							<div className="dark-mode">
								<DarkMode dark={dark} setDark={setDark} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
