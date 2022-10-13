import { Provider } from "react-redux";
import store from "../../redux/cinfigureStore";
import Case from "../case";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

const afg = {
  country: {
    abbreviation: "Af",
    id: "Afghanistan",
    life_expectancy: "45.9",
  },
};

test("Render <Case /> Components", () => {
  const comp = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Case country={afg} />
        </Provider>
      </BrowserRouter>
    )
    .toJSON();
  expect(comp).toMatchSnapshot();
});
