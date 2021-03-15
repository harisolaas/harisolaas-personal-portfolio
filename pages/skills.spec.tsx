import { shallow } from "enzyme";
import Skills from "./skills";

describe("'Skills' page component", () => {
  it("should render correctly", () => {
    const wrapped = shallow(<Skills />);
    expect(wrapped.length).toEqual(1);
  });
});
