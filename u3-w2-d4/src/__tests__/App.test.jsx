import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Correctly mounted Welcome section", () => {
  it("mounts Welcome section correctly", () => {
    render(<App />);

    const welcome = screen.getByRole("alert");
    expect(welcome).toBeInTheDocument();
  });
});
