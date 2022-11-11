import { useEffect, useState } from "react";
import { Title } from "./components/title";
import { Image } from "./components/image";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Filter } from "./components/filter";
import { Table } from "./components/table";
import { AddButton } from "./components/buttons/add-button";
import picture from "./assets/recipeImage.png";
import { KITCHEN_RECIPES } from "./utils/constants";
import "./App.css";
import { AddModal } from "./views/modals/add-recipe";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.recipe);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const columns = [
    { field: "name", header: "Recipe name" },
    { field: "reviews", header: "Reviews" },
    { field: "cookedBefore", header: "Coocked before" },
  ];

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, []);

  useEffect(() => {
    let searchResults = data;
    if (search !== "") {
      searchResults = data.filter((recipe) => recipe.name.includes(search));
    }
    setFilteredData(searchResults);
  }, [search]);

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <Image img={picture} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "32px 48px",
          }}
        >
          <Title text={KITCHEN_RECIPES} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Search callback={setSearch} />
            <Filter />
          </div>
          <Table columns={columns} data={filteredData} />
          <AddButton />
        </div>
      </div>
      {/* <AddModal /> */}
    </div>
  );
}

export default App;
