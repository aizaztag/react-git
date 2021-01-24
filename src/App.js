import './App.css';
import React from 'react'

//setting default context
const WeatherContext = React.createContext({
  cities: [],
  addCity: (name, temperature) => { },
  delteCity:(name)=>{ },
  user:'',
});

const CityList = (props) => {
const context = React.useContext(WeatherContext);
  
const deleteing = (name) => {context.delteCity(name)};

  return (
    <table className="city-list">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        { context.cities ?  context.cities.map((city, i) => (
          <tr key={city.name}>
            <td>{city.name}</td>
            <td>{city.temperature} </td>
            <td><button onClick={() => deleteing(city.name)}>Delete</button> </td>
            
          </tr>
        )) : ' '}
      </tbody>
    </table>
  );
};

const TemperatureAverage = (props) => {
  const context = React.useContext(WeatherContext);

  if (context.cities.length === 0) {
    return (
      <div>Add some cities to view their average temperatures.</div>
    );
  }

  let total = 0;
  for (const city of context.cities) {
    total += city.temperature;
  }
  const avg = total / context.cities.length;

  return (
    <div>
      The average is <b>{avg.toFixed(2)}</b> degrees Fahrenheit.
    </div>
  );
};

const  Header = () => {
    
     const context = React.useContext(WeatherContext)

     return (
       <div>This is header hello user  {context.user}</div>
     )
};

const AddCityButton = (props) => {
  const context = React.useContext(WeatherContext);
  const [name, setName] = React.useState('');

  const submit = () => {
    context.addCity(name, Math.ceil(Math.random() * 10));
    setName('');
    context.changeUserName('user name has been changed')  
  };

  return (
    <div className="add-city-form">
      <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="input" onClick={submit}>Add</button>
    </div>
  );
};

function App() {
  const [cities, setCities] = React.useState([]);

  const addCity = (name, temperature) => {
    const newCity = { name, temperature };
    setCities(prevCities => [...prevCities, { name, temperature }]);
  };

  const  delteCity = (name) =>  {
      setCities(cities.filter(item => item.name !== name));
    };

  const [user , setUser] = React.useState('aizaz');

  const changeUserName = (name) => {
      setUser(name)
  }

  return (
    <WeatherContext.Provider value={{
      cities,
      addCity,
      delteCity,
      user,
      changeUserName
    }}>
      <div className="city-overview">
        <Header />
        <h2>Multi-Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      
      </div>
    </WeatherContext.Provider>
  );
}
export default App;
