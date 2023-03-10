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
import { AddRecipeSlide } from "./views/modals/add-recipe";
import { ShowRecipeSlide } from "./views/modals/show-recipe";
import { useSelector } from "react-redux";
import { columns } from "./utils/constants/columns";
import { useFilter } from "./components/filter/hook";
import { useSearch } from "./components/search/hook";
import { useSetLocalRecipes } from "./utils/helpers/hooks/useSetLocal";

function App() {
  const data = useSelector((state) => state.recipe.data);
  const { search, handleOnSearchChange } = useSearch();
  const {
    isOpen,
    handleOnChange,
    handleOpenDropDown,
    handleCloseDropDown,
    selectedOption,
    filteredData,
  } = useFilter({ data, search });

  useSetLocalRecipes({ data });

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
          <div className="search">
            <Search handleOnChange={handleOnSearchChange} />
            <Filter
              props={{
                isOpen,
                handleOnChange,
                handleOpenDropDown,
                handleCloseDropDown,
                label: selectedOption.label,
              }}
            />
          </div>
          <Table columns={columns} data={filteredData} />
          <AddButton />
        </div>
      </div>
      <AddRecipeSlide />
      <ShowRecipeSlide />
    </div>
  );
}

export default App;
