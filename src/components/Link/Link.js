import React from "react";

import { useDispatch } from "react-redux";

import { ADD_TODO } from "../../services/constants/constants";

function Link(props) {
  const { title, url } = props;

  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    alert("Ура! Пельмени!");
    dispatch({ type: ADD_TODO, text: "пельмени" });
  };

  return (
    <a href={url} onClick={(e) => onClick(e)}>
      {title}
    </a>
  );
}

export default Link;
