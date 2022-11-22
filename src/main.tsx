import GlobalStyled from './styles/global'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyled />
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
