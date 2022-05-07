import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchBox from "../components/SearchBox";

describe('Test for the SearchBox component', () => {

  it('Should match the snapshot', () => {
    expect(render(<SearchBox />)).toMatchSnapshot()
  });
 })