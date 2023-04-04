import { render, screen, fireEvent } from "@testing-library/react";
import Confession from "./confession";

describe("Confession", () => {
  it("should have the submit button disabled by default", () => {
    render(<Confession />);
    const submitButton = screen.getByRole("button", { name: /confess/i });
    expect(submitButton).toBeDisabled();
  });

  it("should enable the submit button when all form fields are filled", () => {
    render(<Confession />);
    const subjectInput = screen.getByLabelText(/subject/i);
    const reasonSelect = screen.getByLabelText(/reason/i);
    const detailsTextarea = screen.getByLabelText(/details/i);
    const submitButton = screen.getByRole("button", { name: /confess/i });

    fireEvent.change(subjectInput, { target: { value: "My Confession" } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(reasonSelect, { target: { value: "I just want to talk" } });
    expect(submitButton).toBeEnabled();

    fireEvent.change(detailsTextarea, { target: { value: "Some details about my confession" } });
    expect(submitButton).toBeEnabled();
  });

  it("should show validation error messages when form fields are invalid", () => {
    render(<Confession />);
    const subjectInput = screen.getByLabelText(/subject/i);
    const reasonSelect = screen.getByLabelText(/reason/i);
    const detailsTextarea = screen.getByLabelText(/details/i);
    const submitButton = screen.getByRole("button", { name: /confess/i });

    fireEvent.change(subjectInput, { target: { value: "" } });
    fireEvent.change(reasonSelect, { target: { value: "" } });
    fireEvent.change(detailsTextarea, { target: { value: "" } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/reason is required/i)).toBeInTheDocument();
    expect(screen.getByText(/details is required/i)).toBeInTheDocument();
  });
});
