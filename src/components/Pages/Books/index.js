import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import {useSelector} from "react-redux";

const Books = () => {
	const { dark } = useSelector((state) => state)

	const bookData = require('../../bookData/booksList')
	const [checkboxes, setCheckboxes] = useState(Array(11).fill(false))

	const handleClearFilters = () => {
		setCheckboxes(Array(11).fill(false))
	}

	const handleCheckboxChange = (index) => {
		setCheckboxes((prev) => [
			...prev.slice(0, index),
			!prev[index],
			...prev.slice(index + 1)
		])
	}

	return (
		<div className="container">
			<div className="booksTitle" style={{transition: "0.5s", color: dark ? 'white' : 'black'}}>
				<h1 style={{transition: "0.5s", color: dark ? 'white' : 'black'}}>All Books</h1>
				<span style={{transition: "0.5s", color: dark ? 'white' : 'black'}}>
					Here you can find all the books you need
				</span>

			</div>
			<div className="FiltersBlock">
				<div className="FiltersBlockLeft">
					<h3 style={{transition: "0.5s", color: dark ? 'white' : 'black'}}>Filters</h3>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href={'#'} onClick={handleClearFilters}
					   style={{transition: "0.5s", color: dark ? 'lightblue' : 'blue'}}>
						Clear filters
					</a>
				</div>
				<div className="FiltersBlockRight">
					<div className="FiltersButton">
						<p>Sort By</p> <h4>Popular</h4> {<IoIosArrowDown/>}
					</div>
				</div>
			</div>
			<div className="BooksPage" style={{transition: "0.5s", color: dark ? 'white' : 'black'}}>
				<div className="BookTypes">
					<div
						className="BooksGroup"
						style={{display: 'flex', width: '500px'}}
					>
						<div className="BooksInputs">
							{checkboxes.map((isChecked, index) => (
								<div key={index}>
									<input
										type="checkbox"
										checked={isChecked}
										onChange={() => handleCheckboxChange(index)}
									/>
								</div>
							))}
						</div>
						<div className="BooksWords">
							<p>Autographed</p>
							<p>Sci-Fi</p>
							<p>For kids</p>
							<p>For teenagers</p>
							<p>Finance</p>
							<p>Romantic</p>
							<p>Psychology</p>
							<p style={{width: '200px'}}>Self-Improvement</p>
							<p>Educational</p>
							<p>Literature</p>
							<p>Religion</p>
						</div>
					</div>
				</div>

				<div className="Books">
					{bookData.bookdata.map((book, index) => (
						<div key={index}>
							<Link to={`/books_details/${book.id}`}>
								<img
									style={{
										width: '180px',
										height: '270px',
										fontSize: 'cover',
										borderRadius: '8px'
									}}
									src={book.thumbnailUrl}
									alt={`img-${index}`}
								/>
							</Link>
							<h4
								style={{transition: "0.5s", color: dark ? 'white' : 'black'}}
								className={'imageTitle'}
							>
								{book.title}
							</h4>
							<p>{book.author}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Books
