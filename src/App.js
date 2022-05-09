import Header from './components/Header'
import Stadistics from './views/Stadistics'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Stadistics />} />
					<Route exact path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
  );
}

export default App;
