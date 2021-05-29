import media from "./media-queries";

describe("'media' function", () => {
  it("should wrap the provided styles with a media query when executed", () => {
    const result = media("medium")`
        div {
            background-color: blue;
        }
    `;

    expect((result as string[]).join("").split("{")[0].trim()).toEqual(
      "@media (min-width:768px)"
    );
    expect((result as string[])[result.length - 1].trim()).toEqual("}");
  });
});
