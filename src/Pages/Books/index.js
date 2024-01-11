import React,{ useState } from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom'
const Books = ({ dark }) => {    // Importing bookData from another file
    const bookData = require('../../components/bookData/booksList');
    return (     
        <div className='Container'>
            <div className='booksTitle'>
        <h1 style={{ color: dark? 'dark' : 'blue' }}>All Books</h1>
        <span style={{ color: dark? 'dark' : '#818EEA' }}>Here you can find all the books you need</span>
		<div className='FiltersBlock'>
			<div className='FiltersBlockLeft'>
         <h3>Filters</h3>
         <a href="/">Clear filters</a>
			</div>
			<div className='FiltersBlockRight'>
          <button className='FiltersButton'>Sort By Popular</button>
			</div>
		</div>
        </div>
        <div className='BooksPage'>
        <div className='BookTypes'>
            <div className='BooksInputs'>
            <input type="checkbox" placeholder='Autographed Books' />
            <input type="checkbox" placeholder='Sci-Fi' />
            <input type="checkbox" placeholder='For kids' />
            <input type="checkbox" placeholder='For teenagers' />
            <input type="checkbox" placeholder='Finance' />
            <input type="checkbox" placeholder='Detective' />
            <input type="checkbox" placeholder='Romantic' />
            <input type="checkbox" placeholder='Psychology' />
            <input type="checkbox" placeholder='Self-Improvement' />
            <input type="checkbox" placeholder='Educational' />
            <input type="checkbox" placeholder='Literature' />
            <input type="checkbox" placeholder='Religion' />
            </div>
            <div className='BooksWords'>
            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/autographedBooks"
							>
								{' '}
								Autographed{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Sci-Fi"
							>
								{' '}
								Sci-Fi{' '}
							</NavLink> 
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/forKids"
							>
								{' '}
								For kids{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/forTeenagers"
							>
								{' '}
								For teens{' '}
							</NavLink> 
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Finance"
							>
								{' '}
								Finance{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Detective"
							>
								{' '}
								Detective{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Romantic"
							>
								{' '}
								Romantic{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Psychology"
							>
								{' '}
								Psychology{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/selfImprovement"
							>
								{' '}
								Improvement{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Educational"
							>
								{' '}
								Educational{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Literature"
							>
								{' '}
								Literature{' '}
							</NavLink>
                            <NavLink
								style={{ color: dark ? 'white' : 'black', transition: '0.5s' }}
								to="/Religion"
							>
								{' '}
								Religion{' '}
							</NavLink>
            </div>
        </div>
        <div className='Books'> 
            {bookData.bookdata.slice(0,12).map((book, index) => (                    <div>
                        <img style={{width:"180px", fontSize: "cover", borderRadius:"8px"}} src={book.thumbnailUrl} alt={`img-${index}`} />                    </div>
            ))}        </div> 

</div>
            </div>
    );}
export default Books;
