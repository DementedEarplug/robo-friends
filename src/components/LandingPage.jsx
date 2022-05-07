import React, { useEffect } from "react";

import RobotList from "./RobotList";
import SearchBox from "./SearchBox";
import Loading from "./loader/Loading";
import Scrollable from "./Scrollable";
import Header from "./Header";
// import "./LandingPage.css";

const LandingPage = ({setSearchField, setRobots, searchField, robots, isLoading }) => {

  useEffect(() => {
    setRobots();
    // eslint-disable-next-line
  }, []);

  const handleTextChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return (
    <div className='tc'>
      <Header />
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

export default LandingPage;
