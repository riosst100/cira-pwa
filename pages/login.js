/**
 * pages/index.js
 *
 * A demo login page.
 */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Get the actual API_URL as an environment variable. For real
// applications, you might want to get it from 'next/config' instead.
const API_URL = process.env.API_URL

// The following getInitialProps function demonstrates how to make
// API requests from the server. We basically take the auth-token cookie
// and from it create an HTTP header, just like the API Proxy does.
// For real applications you might want to create reusable function that returns
// a correctly configured axios instance depending on whether it gets called
// from the server or from the browser.

export default function Login() {
	const router = useRouter()

	async function onSubmit(e) {
		e.preventDefault()

		const phone = e.target.querySelector('[name="phone"]').value
		const password = e.target.querySelector('[name="password"]').value

		try {
			await axios.post('/api/proxy/login', { phone, password })

			router.push('/')
		} catch (err) {
			console.error('Request failed:' + err.message)
		}
	}

	return (
		<>
			<div className="Homepage">
				<p className="login-status">
					(<a href="/logout">Logout</a>)
				</p>

				<form className="login-form" onSubmit={onSubmit}>
					<label>
						<span>No. HP</span>
						<input name="phone" type="phone" required />
					</label>

					<label>
						<span>Password</span>
						<input name="password" type="password" required />
					</label>

					<button type="submit">Log in!</button>
				</form>

				<p>
					<small>To emulate successful login, use "admin@example.com" and any password.</small>
				</p>

				<hr />
				<p>
					<small>
						Blog post:{' '}
						<a href="https://maxschmitt.me/posts/next-js-http-only-cookie-auth-tokens/">
							Next.js: Using HTTP-Only Cookies for Secure Authentication
						</a>
					</small>
				</p>
			</div>
		</>
	)
}