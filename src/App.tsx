import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailsContainer from "./components/EmailsContainer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='body-container'>
				<Sidebar />
				<Routes>
					<Route path='/' element={<EmailsContainer />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
