import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from "./Componenets/Login/LoginPage";
import ListItems from "./Componenets/MainScreen/List";
import ResponsiveAppBar from "./Componenets/Navbar/Navbar";

import SHOP_DATA from "./Data/DummyData";

import './App.css';

function App() {
  const [shopData, setShopData] = useState(SHOP_DATA);

  const handleAddFavourites = (value) => {
    let array2 = shopData.map(a => { return { ...a } })

    array2.find(a => a.id === value.id).favourite = true;
    setShopData(array2)
  }

  const handleRemovefavourite = (value) => {
      let array2 = shopData.map(a => { return { ...a } })

      array2.find(a => a.id === value.id).favourite = false;
      setShopData(array2)
    }

    return (
      <>
        <div className="App">
          <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/" element={<ListItems SHOP_DATA={shopData} handleAddFavourites={handleAddFavourites} />} />
              <Route exact path="/favourite" element={<ListItems SHOP_DATA={shopData} handleRemovefavourite={handleRemovefavourite} />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  }

  export default App;
