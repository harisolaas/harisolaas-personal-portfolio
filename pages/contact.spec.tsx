import { shallow } from "enzyme";
import Contact from "./contact";

describe("'Contact' page component", () => {
  it("should render correctly", () => {
    const wrapped = shallow(<Contact />);
    expect(wrapped.length).toEqual(1);
  });
});
