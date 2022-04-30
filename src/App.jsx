import React, { useEffect } from "react";
import { connect } from "react-redux";

import RobotList from "./components/RobotList";
import SearchBox from "./components/SearchBox";
import Loading from "./components/loader/Loading";
import Scrollable from "./components/Scrollable";
import {setSearchField,setRobots} from './actions/actions'
import "./App.css";

const App = ({setSearchField, setRobots, searchField, robots, isLoading }) => {

  useEffect(() => {
    setRobots();
  }, []);

  const handleTextChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );
  return (
    <div className='tc'>
      <h1 className='f1 title'>Robo Friends</h1>
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBox onTextChange={handleTextChange} />
          <Scrollable>
            <RobotList robots={filteredRobots} />
          </Scrollable>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  robots: state.reducer.robots,
  searchField: state.reducer.searchField,
  isLoading: state.reducer.isLoading
});

const mapActionsToProps = {
  setSearchField,
  setRobots,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
