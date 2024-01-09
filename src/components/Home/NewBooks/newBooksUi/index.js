import React from 'react'
import './style.scss'

const NewBooksUi = ({ elem, description, title, blackColor }) => {
	return (
		<div>
			<div className="newBooksUi">
				<img loading="lazy" src={elem} alt="" />
				<h1
					style={{ 
                        transition: '0.5s', 
                        color: blackColor ? 'white' : 'black' 
                    }}
				>
					{title}
				</h1>
				<p
					style={{
						transition: '0.5s',
						color: blackColor ? '#f1d9d9' : 'black'
					}}
				>
					{description}
				</p>
			</div>
		</div>
	)
}

export default NewBooksUi
