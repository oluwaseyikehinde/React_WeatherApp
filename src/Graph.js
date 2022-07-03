import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import Bar from "./component/Bar";
import './component/style.css';

function Graph() {
  return (
    <div className="App">
      <div className="container-3">
      <div className="section">
        <h5 className = " text-white"> The Historic Weather Information as a Graph</h5>
          <Bar />
        </div>
      </div>
    </div>
  );
}

export default Graph;
