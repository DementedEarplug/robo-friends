import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Scrollable from "../components/Scrollable";

describe('Test for the Scrollable component', () => {

  it('Should match the snapshot', () => {
    expect(render(<Scrollable />)).toMatchSnapshot()
  });
 })