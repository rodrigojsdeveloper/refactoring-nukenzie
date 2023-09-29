import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		border: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		font-family: 'Nunito Sans', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
		// Primary Color
		--color-primary: #FD377E;
		--color-primary-2: #E34981;
		
		// Grey Scale
		--color-white: #FFFFFF;
		--grey-1: #F8F9FA;
		--grey-2: #F8F8F8;
		--grey-3: #F1F1F2;
		--grey-4: #F0F0F1;
		--grey-5: #E9ECEF;
		--grey-6: #DCDCDC;
		--grey-7: #868E96;
		--grey-8: #343A40;
		--grey-9: #212529;
		
		// Shadow
		--shadow: rgba(0, 0, 0, 0.1);
		--shadow-2: rgba(0, 0, 0, 0.02);
		--shadow-3: rgba(0, 0, 0, 0.15);
		--shadow-4: rgba(0, 0, 0, 0.25);
		--shadow-5: rgba(0, 0, 0, 0.85);
		--shadow-6: rgba(255, 255, 255, .7);

		// Transparent
		--transparent: transparent;

		// Border Radius
		--border-radius: 0px;
	}

	body {
		color: var(--grey-9);
		background-color: var(--color-white);
	}

	button, a, select {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
		-moz-appearance:textfield;
	}
	
	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background-color: var(--color-white);
	}

	::-webkit-scrollbar-thumb {
		border-radius: 0.5px;
		background-color: var(--grey-6);
	}
`;
