import { SET_ROBOTS, SET_SEARCH_FIELD, SET_LOADING } from "../../actions/types";
import reducer from "../../reducers/reducer";

describe("Testing app reducer", () => {
  let mockInitialState;
  beforeEach(() => {
    mockInitialState = {
      robots: [],
      searchField: "",
      isLoading: true,
    };
  });

  it("Should return initial state", () => {
    expect(reducer(mockInitialState, "")).toEqual(mockInitialState);
  });

  it("Should set the robots array", () => {
    const mockAction = {
      payload: [
        {
          _id: "626aad682f0acfbb1faaa8dc",
          name: "Olivia Wright",
          email: "oliviawright@automon.com",
          phone: "+1 (871) 555-2471",
          address: "505 Stuart Street, Norfolk, Wisconsin, 829",
        },
      ],
      type: SET_ROBOTS,
    };
    expect(reducer(mockInitialState, mockAction)).toEqual({
      robots: [
        {
          _id: "626aad682f0acfbb1faaa8dc",
          name: "Olivia Wright",
          email: "oliviawright@automon.com",
          phone: "+1 (871) 555-2471",
          address: "505 Stuart Street, Norfolk, Wisconsin, 829",
        },
      ],
      searchField: "",
      isLoading: true,
    });
  });

  it("Should set the search field", () => {
    const mockAction = {
      payload: "Lopez Goyo",
      type: SET_SEARCH_FIELD,
    };
    expect(reducer(mockInitialState, mockAction)).toEqual({
      robots: [],
      searchField: "Lopez Goyo",
      isLoading: true,
    });
  });

  it("Should set the is loading", () => {
    const mockAction = {
      payload: false,
      type: SET_LOADING,
    };
    expect(reducer(mockInitialState, mockAction)).toEqual({
      robots: [],
      searchField: "",
      isLoading: false,
    });
  });
});
