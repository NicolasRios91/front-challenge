import { useState } from "react";
import { Title } from "./components/title";
import { Image } from "./components/image";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Filter } from "./components/filter";
import { Table } from "./components/table";
import { AddButton } from "./components/buttons/add-button";
import picture from "./assets/recipeImage.png";
import { KITCHEN_RECIPES, LIST } from "./utils/constants";
import "./App.css";

function App() {
  const columns = [
    { field: "name", header: "Recipe name" },
    { field: "reviews", header: "Reviews" },
    { field: "coockedBefore", header: "Coocked before" },
  ];
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
            <Search />
            <Filter />
          </div>
          <Table columns={columns} data={LIST} />
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default App;
