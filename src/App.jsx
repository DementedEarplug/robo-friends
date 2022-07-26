import React, { useEffect } from "react";
import { connect } from "react-redux";

import LandingPage from "./components/LandingPage";
import {setSearchField,setRobots} from './actions/actions'
import "./App.css";

const App = ({setSearchField, setRobots, searchField, robots, isLoading }) => {

  return (
    <LandingPage {...{setSearchField, setRobots, searchField, robots, isLoading }} />
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
