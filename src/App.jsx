import React, { useState, useEffect } from "react";

import RobotList from "./components/RobotList";
import SearchBox from "./components/SearchBox";
import Loading from "./components/loader/Loading";
import Scrollable from "./components/Scrollable";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robotList, setRobotList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRobots();
  }, []);

  const fetchRobots = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await res.json();
      setRobotList(robots);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    } catch (error) {
      console.log("Error fetching users.");
      console.log(error);
    }
  };

  const handleTextChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robotList.filter((robot) =>
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

export default App;
