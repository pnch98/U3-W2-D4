import { fireEvent, queryAllByText, render, screen } from "@testing-library/react";
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

  describe("Correctly changing border color after clicks", () => {
    it("shows red border after click", async () => {
      render(<App />);

      const fetchedBooks = await screen.findAllByTestId("card");

      const card1 = fetchedBooks[0];
      const card2 = fetchedBooks[2];

      fireEvent.click(card1);

      expect(card1.classList.contains("selectedCard")).toBe(true);

      fireEvent.click(card2);
      expect(card1.classList.contains("selectedCard")).toBe(false);
    });
  });

  describe("Correctly not showing instances of SingleComment at page load", () => {
    it("correctly doesn't show up", () => {
      render(<App />);

      const comments = screen.queryAllByTestId("singleComment");

      expect(comments).toHaveLength(0);
    });
  });

  describe("Correctly mounting comments on click", () => {
    it("mounts comments correctly", async () => {
      render(<App />);

      const fetchedBooks = await screen.findAllByTestId("card");

      const card2 = fetchedBooks[1];

      fireEvent.click(card2);

      const comments = screen.queryAllByTestId("singleComment");

      comments.forEach((comment) => {
        expect(comment).toBeInTheDocument();
      });
    });
  });
});
