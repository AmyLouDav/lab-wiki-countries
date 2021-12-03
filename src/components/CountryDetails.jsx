import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [country, setCountry] = useState({})
    const {id: countryId} = useParams();
    // const country = countries.find((country) => country.alpha3Code === countryId);

    useEffect(() =>{
        const foundCountry = countries.find(
        (country) => country.alpha3Code === countryId
        );
        setCountry(foundCountry);
        setIsLoading(false);
    }, [countryId]);

//protect from useless rerendering and not going back to the API if still on the same page
//seeing if country id has or hasnt changed
//if you use conditions (try to always use!!!!) make sure that the conditions are the most important things in the page
// return statement based on the last iteration. For the previous iteration you need a map or depends how you have structured the code

const bordersCountries = countries.filter((oneCountry) => country.borders && country.borders.includes(oneCountry.alpha3Code));
console.log('border countries', bordersCountries);



  return (
    <div>
      {isLoading && <p>Data is loading...</p>}
      {!isLoading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
            width="300px"
            height="auto"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  {country.borders.length === 0 ? (
                    <p>This country has no neighbouring countries.</p>
                  ) : (
                    <ul>
                      {country.borders.map((countryCode, index) => {
                        return (
                          <li key={index}>
                            <Link to={countryCode}>{countryCode}</Link>;
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
