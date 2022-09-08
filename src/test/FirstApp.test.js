import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe("Pruebas en componente <FirstApp />", () => {
  test("Debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola, soy Goku";
    const subtitle = 3;
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBeTruthy(2);
  });
});
