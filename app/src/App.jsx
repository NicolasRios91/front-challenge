import { useEffect, useState } from "react";
import { Title } from "./components/title";
import { Image } from "./components/image";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Filter } from "./components/filter";
import { Table } from "./components/table";
import { AddButton } from "./components/buttons/add-button";
import picture from "./assets/recipeImage.png";
import {
  KITCHEN_RECIPES,
  ACTIVE_VALUE,
  ALL_VALUE,
  INACTIVE_VALUE,
} from "./utils/constants";
import "./App.css";
import { AddRecipeSlide } from "./views/modals/add-recipe";
import { ShowRecipeSlide } from "./views/modals/show-recipe";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./utils/constants/columns";

function App() {
  const data = useSelector((state) => state.recipe.data);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(ALL_VALUE);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  //todo move to a custom hook if possible
  useEffect(() => {
    let filteredResults = data;
    filteredResults =
      search !== " " &&
      data.filter((recipe) => recipe?.title?.includes(search));

    if (status !== ALL_VALUE) {
      filteredResults = filteredResults.filter((recipe) => {
        if (status === ACTIVE_VALUE && recipe.cookedBefore) {
          return recipe;
        }
        if (status === INACTIVE_VALUE && !recipe.cookedBefore) {
          return recipe;
        }
      });
    }
    setFilteredData(filteredResults);
  }, [search, status, data]);

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
            <Filter callback={setStatus} />
          </div>
          <Table columns={columns} data={filteredData} callback={dispatch} />
          <AddButton />
        </div>
      </div>
      <AddRecipeSlide />
      <ShowRecipeSlide />
    </div>
  );
}

export default App;
