//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/App.css'
import Banner from './compoments/Banner.jsx'
import Background from './compoments/Background.jsx'
import AnnoncesGrid from './compoments/AnnoncesGrid.jsx'
import Footer from './compoments/Footer.jsx'

function App() {
	return (
		<div>
      <Banner />
      <Background />
      <AnnoncesGrid />
      <Footer />
			
		</div>
	)
}


export default App
