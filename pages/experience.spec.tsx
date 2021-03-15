import { shallow } from "enzyme";
import Experience from "./experience";

describe("'Experience' page component", () => {
  it("should render correctly", () => {
    const wrapped = shallow(<Experience />);
    expect(wrapped.length).toEqual(1);
  });
});
