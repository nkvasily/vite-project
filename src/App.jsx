import { useState, createElement } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
	const [count, setCount] = useState(0);
	const date = new Date();

	// return (
	// 	<>
	// 		<div>
	// 			<a href="https://vite.dev" target="_blank">
	// 				<img src={viteLogo} className="logo" alt="Vite logo" />
	// 			</a>
	// 			<a href="https://react.dev" target="_blank">
	// 				<img src={reactLogo} className="logo react" alt="React logo" />
	// 			</a>
	// 		</div>
	// 		<div>{date.toLocaleString()}</div>
	// 		<h1>Vite + React</h1>
	// 		<div className="card">
	// 			<button onClick={() => setCount((count) => count + 1)}>
	// 				count is {count}
	// 			</button>
	// 			<p>
	// 				Edit <code>src/App.jsx</code> and save to test HMR
	// 			</p>
	// 		</div>
	// 		<p className="read-the-docs">
	// 			Click on the Vite and React logos to learn more
	// 		</p>

	// 	</>
	// )

	return createElement(
		'div',
		null,
		createElement('div', null,
			createElement(
				'a',
				{ href: "https://vite.dev", target: "_blank" },
				createElement(
					'img',
					{
						src: viteLogo,
						className: "logo",
						alt: "Vite logo"
					}
				)
			),
			createElement(
				'a',
				{ href: "https://react.dev", target: "_blank" },
				createElement(
					'img',
					{
						src: reactLogo,
						className: "logo react",
						alt: "React logo"
					}
				)
			)
		),
		createElement('div', null, date.toLocaleString()),
		createElement('h1', null, 'Vite + React'),
		createElement(
			'div',
			{ className: "card" },
			createElement(
				'button',
				{ onClick: () => setCount((count) => count + 1) },
				'count is ', count
			),
			createElement(
				'p',
				null,
				'Edit',
				createElement('code', null, 'src/App.jsx'),
				'and save to test HMR'
			)
		),
		createElement(
			'p',
			{ className: 'read-the-docs' },
			'Click on the Vite and React logos to learn more'
		)
	)


}

// export default App
