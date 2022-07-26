import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../../components/Header";

describe('Test for the Header component', () => {

  it('Should match the snapshot', () => {
    expect(render(<Header />)).toMatchSnapshot()
  });
 })