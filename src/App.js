import Footer from "./Footer";
import SearchForm from "./SearchForm";
import "./styles.css";
import WeatherBlock from "./WeatherBlock";
import WeatherDetails from "./WeatherDetails";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <SearchForm />
            <h1>Seattle</h1>
            <div className="row">
              <div className="col-6">
                <WeatherBlock />
              </div>
              <div className="col-6">
                <WeatherDetails />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
