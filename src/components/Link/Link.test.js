import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import { testRender, fixtureSet, makeTestStore } from "../../services/testUtils";

import Link from "../Link/Link";

it("Ссылка рендерится без ошибок", () => {
  const tree = renderer
    .create(<Link title="Рецепт пельменей" url="#" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Нажатие на кнопку вызывает корректный alert", () => {
  window.alert = jest.fn();

  // Рендерим ссылку в переменную
  const output = shallow(
    <Link title="Рецепт пельменей" url="https://pelmeni.gov" />
  );
  // Имитируем нажатие на ссылку
  output.simulate("click");

  // Проверяем, что alert сработал с правильным текстом предупреждения
  expect(window.alert).toHaveBeenCalledWith("Ура! Пельмени!");
});
