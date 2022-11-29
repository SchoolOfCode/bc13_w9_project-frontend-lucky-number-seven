import {screen, render, fireEvent} from '@testing-library/react';
import Input from './Input'

test("check if the getNewLink function is called when button is clicked", () => {
    const getNewLink = jest.fn();
    render(<Input getNewLink={getNewLink} />);
    fireEvent.click(screen.getByDisplayValue("newLink"));
    expect(getNewLink).toHaveBeenCalled();
  });