import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import RobotList from "../components/RobotList";

describe('Test for the RobotList component', () => {
   const mockRobots = [
    {
      id: 1,
      name: "wallace",
      phone: 707099883,
      email: "wallace@email.com",
    },
    {
      id: 2,
      name: "pollo",
      phone: 707023883,
      email: "pollo@email.com",
    },
    {
      id: 3,
      name: "rco",
      phone: 723449883,
      email: "rco@email.com",
    }
   ]

  it('Should match the snapshot', () => {
    expect(render(<RobotList robots={mockRobots} />)).toMatchSnapshot()
  });
 })