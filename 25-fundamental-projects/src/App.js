import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* <RandomColor />*/}
      <StarRating noOfStars={9} />
    </div>
  );
}

export default App;
