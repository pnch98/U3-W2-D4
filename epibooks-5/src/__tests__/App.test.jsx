import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Correctly mounted Welcome section", () => {
  it("mounts correctly", () => {
    render(<App />);
    const welcome = screen.getByRole("alert");
    expect(welcome).toBeInTheDocument();
  });
});

describe("Correctly mounting all 150 books", () => {
  it("mounts all 150 book cards correctly", async () => {
    render(<App />);
    const allBooks = await screen.findAllByRole("img");

    expect(allBooks).toHaveLength(150);
  });

  describe("Correctly mounted CommentArea", () => {
    it("mounts correctly", () => {
      render(<App />);
      const commentArea = screen.getByTestId("commentArea");
      expect(commentArea).toBeInTheDocument();
    });
  });

  describe("Correctly filtering with search value", () => {
    it("filters correctly", async () => {
      render(<App />);
      const user = userEvent.setup();

      const inputField = screen.getByPlaceholderText(/cerca un libro/i);

      await user.type(inputField, "kingdom");
      const booksSearched = await screen.findAllByTestId("card-title");

      booksSearched.forEach((bookDiv) => {
        expect(bookDiv).toHaveTextContent(/kingdom/i);
      });
    });
  });
});
