import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import data from "./assets/emoji-list.json";
import Line from "./components/Line";

function App() {
  const [search, setSearch] = useState("");

  const searching = (data, search) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].keywords.includes(search) && result.length < 20) {
        result.push(data[i]);
      }
    }
    return result;
  };
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <div className="list">
        {searching(data, search).map((line, index) => {
          return <Line key={index} line={line} />;
        })}
      </div>
    </div>
  );
}

export default App;
