import {screen, render} from '@testing-library/react';
import Input from './index'



test("Input button should display correct text", () => {
    const buttonText = "To add button";
    render(<Input buttonText={buttonText} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText)
  });



