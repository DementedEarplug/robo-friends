import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../../components/Card";

describe("Card Componen tests", () => {
  const robot = {
    id: 1,
    name: "wallace",
    phone: 707099883,
    email: "wallace@email.com",
  };



  it('Should match snapshot', () => {
    expect(render(
      <Card
        name={robot.name}
        id={robot.id}
        email={robot.email}
        phone={robot.phone}
      />
    )).toMatchSnapshot()

  });

  it("Should display a robot", async () => {
    render(
      <Card
        name={robot.name}
        id={robot.id}
        email={robot.email}
        phone={robot.phone}
      />
    );
    expect(screen.getByTestId("name")).toHaveTextContent('wallace')
    expect(screen.getByTestId("phone")).toHaveTextContent('707099883')
    expect(screen.getByTestId("email")).toHaveTextContent('wallace@email.com')
  });
});
