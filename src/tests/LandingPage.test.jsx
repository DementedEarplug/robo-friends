import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../components/LandingPage";

describe('Test for the LandingPage component', () => {
  afterEach(cleanup)

  let wrapper;
  let mockStore;
  beforeEach(()=>{
    mockStore = {
      setRobots: jest.fn(),
      setSearchField: jest.fn(),
      searchField: '',
      robots: [{
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
      }],
      isLoading: false
    }

    wrapper = render(<><LandingPage {...mockStore} /></>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('Should call the setSearchField', () => {
    let searchBox = screen.getByPlaceholderText('Search Robots')
    fireEvent.change(searchBox,{target: {value:'wallace'}})

    expect(mockStore.setSearchField).toBeCalledTimes(1)

  });

  it('Robots should popultate', () => {
    expect(wrapper.getByText("wallace")).toBeInTheDocument()
  });


 })

 it('Should filter robots when searching', () => {
  let mockStore = {
    setRobots: jest.fn(),
    setSearchField: jest.fn(),
    searchField: 'pollo',
    robots: [{
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
    }],
    isLoading: false
  }
  let wrapper = render(<LandingPage {...mockStore} />)

  expect(wrapper.getByText("pollo")).toBeInTheDocument()

});

it('Should render loading', () => {
  let mockStore = {
    setRobots: jest.fn(),
    setSearchField: jest.fn(),
    searchField: 'pollo',
    robots: [{
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
    }],
    isLoading: true
  }
  let wrapper = render(<LandingPage {...mockStore} />)

  expect(wrapper.getByText("Loading...")).toBeInTheDocument()

});