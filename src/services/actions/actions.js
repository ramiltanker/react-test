import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "../constants/constants";

export function setPrice(price) {
  return {
    type: "SET_PRICE",
    price,
  };
}

function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST,
  };
}

function fetchTodosSuccess(body) {
  return {
    type: FETCH_TODOS_SUCCESS,
    body,
  };
}

function fetchTodosFailure(ex) {
  return {
    type: FETCH_TODOS_FAILURE,
    ex,
  };
}

// Асинхронный генератор экшена
export function fetchTodos() {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("http://example.com/todos")
      .then((res) => res.json())
      .then((body) => dispatch(fetchTodosSuccess(body)))
      .catch((ex) => dispatch(fetchTodosFailure(ex)));
  };
}
