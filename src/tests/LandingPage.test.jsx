import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';

import App from "../App";

describe('Test for the App component', () => {

  it('Should match the snapshot', () => {
    expect(render(<App />)).toMatchSnapshot()
  });

  it('Should set the correct searchfield state', () => {
    const mockStore = {}
    render(<App store={mockStore}/>)

    const searchBox = screen.getByPlaceholderText('Search Robots')
    userEvent.type(searchBox, "Linda")

    expect(screen.getByRole('name')).toHaveTextContent("Linda Graham")
  });
 })