import { BrowserRouter, Routes, Route } from "react-router-dom";

const Test = () => {
  return (
    <main>
      <p>こんにちは</p>
    </main>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Test}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
