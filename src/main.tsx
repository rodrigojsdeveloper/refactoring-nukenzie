import GlobalStyled from './styles/global'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyled />
    	<App />
	</React.StrictMode>
)
