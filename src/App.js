import { Route, Switch } from 'react-router-dom'
import "./App.css"

import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';
import ErrorPage from './pages/ErrorPage'

import countriesDB from './countries.json'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <CountriesList countries={countriesDB} />
          </div>

          <div className="col">
          <Switch>
            <Route
              path="/:id"
              render={(props) => (
                <CountryDetails {...props} countries={countriesDB} />
              )}
            />
            <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;