import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./components/ReduxToolkit/store";
import { Provider } from "react-redux";
import CounterFeature from "./components/ReduxToolkit";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterFeature />} />
        </Routes>
      </BrowserRouter>
    </Provider>

    //     <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/user/add" element={<UserDetails />} />
    //     <Route path="/user/:userId" element={<UserDetails />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
