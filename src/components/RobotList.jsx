import React from "react";
import Card from './Card'


const RobotList = ({robots}) => {
  return (
    <>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          name={robot.name}
          id={robot.id}
          email={robot.email}
          phone={robot.phone}
        />
      ))}
    </>
  );
};

export default RobotList;
