import React from "react";
import List from "./containers/List";

const App = () => {
  return (
    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>movieList</h1>
      </nav>
      <List />
    </div>
  )
};
export default App;