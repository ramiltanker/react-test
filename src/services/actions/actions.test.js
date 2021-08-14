import * as actions from "./actions";
import {
  SET_PRICE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from "../constants/constants";

import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action creators", () => {
  it("should create an action with correct price", () => {
    const price = 145600;

    // Эталонный экшен
    const expectedAction = {
      type: SET_PRICE,
      price,
    };

    // Проверяем экшены на равенство
    expect(actions.setPrice(price)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    fetchMock.getOnce("http://example.com/todos", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: FETCH_TODOS_REQUEST },
      { type: FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } },
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.fetchTodos()).then(() => {
      // Возвращаем асинхронный экшен
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
