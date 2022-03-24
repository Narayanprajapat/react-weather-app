import './App.css';
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat=27&lon=28&appid=421d8552c24f006c8410f0beda92f25f
const api = {
	key: '421d8552c24f006c8410f0beda92f25f',
	base: 'https://api.openweathermap.org/data/2.5/weather',
};

const App = () => {
	return (
		<div className='app'>
			<main>
				<div className='search-box'>
					<input type='search' className='search-bar' placeholder='Search City' />
				</div>
			</main>
		</div>
	);
};

export default App;
