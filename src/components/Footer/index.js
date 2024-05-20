import React, { useState } from 'react'
import './style.scss'

const Footer = () => {
	const [value, setValue] = useState('')
	const [isValid, setIsValid] = useState(true)

	const enterEvent = (e) => {
		if (e.key === 'Enter') {
			if (e.target.value.includes('@gmail.com')) {
				setValue('')
				setIsValid(true)
			} else {
				// If the input doesn't contain "@gmail.com", mark it as invalid
				setIsValid(false)
			}
		}
	}
	return (
		<div>
			<div id="footer">
				<div className="container">
					<div className="footer">
						<div className="title">
							<h1>Sign up for our newsletter</h1>
							<p>
								Be the first to know about our special offers, news, and
								updates.
							</p>
							<div className="footer--emailSendler">
								<input
									id="footer--emailSendler__input"
									type="email"
									value={value}
									onChange={(e) => {
										setValue(e.target.value)
										// Reset validation when the user types
										setIsValid(true)
									}}
									onKeyDown={enterEvent}
									placeholder={'Email Address'}
									className={isValid ? '' : 'invalid'}
								/>

								<button
									onClick={() => {
										setValue('')
									}}
								>
									Sign Up
								</button>

								{!isValid && (
									<span className="error-mark">
										There must be a " @gmail.com " !
									</span>
								)}
							</div>
						</div>

						<div
							className="footer--links"
						>
							<div className="footer--info">
								<h3>Lorem ipsum</h3>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
							</div>

							<div className="footer--info">
								<h3>Lorem ipsum</h3>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
							</div>

							<div className="footer--info">
								<h3>Lorem ipsum</h3>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
							</div>

							<div className="footer--info">
								<h3>Lorem ipsum</h3>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
								<p>Lorem ipsum</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
