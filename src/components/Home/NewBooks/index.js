import React from 'react'
import './style.scss'
import NewBooksUi from './newBooksUi/index.js'
import Rest from '../../../assets/img/rest.png'
import Climate from '../../../assets/img/climate.png'
import NewName from '../../../assets/img/newName.png'
const NewBooks = ({blackColor}) => {
	return (
		<div>
			<div className="container">
				<div className="newBooks">
					<h1 style={{color: blackColor? "white" : "black"}}>New Books</h1>
					<div className="newBooksContainer">
						<NewBooksUi
							blackColor={blackColor}
							elem={Rest}
							title={'The Climate Book: The Facts and the Solutions'}
							description={'by Greta Thunberg'}
						/>
                        <div className="centerEl">
                          <NewBooksUi
						  	blackColor={blackColor}
							elem={Climate}
							title={'Rest Is Resistance: A Manifesto'}
							description={'by Tricia Hersey'}
						/>  
                        </div>
						
						<NewBooksUi
						    blackColor={blackColor}
							elem={NewName}
							title={'A New Name: Septology VI-VII'}
							description={'by Jon Fosse'}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewBooks
