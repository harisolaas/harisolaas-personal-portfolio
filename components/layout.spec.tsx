import { shallow } from "enzyme";
import Layout from "./layout";

function TestComponent() {
  return null;
}
describe("'Layout' component", () => {
  it("should render correctly", () => {
    const wrapped = shallow(
      <Layout title="Skills" children={<TestComponent />} />
    );
    expect(wrapped.length).toEqual(1);
    expect(wrapped.find(TestComponent).length).toEqual(1);
    expect(wrapped.find("title").html()).toContain("Skills");
  });
});
