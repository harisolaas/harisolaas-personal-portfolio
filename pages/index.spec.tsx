import { shallow } from "enzyme";
import Home from "./index";

describe("'Home' page component", () => {
  it("should render correctly", () => {
    const wrapped = shallow(<Home />);
    expect(wrapped.length).toEqual(1);
  });
});
