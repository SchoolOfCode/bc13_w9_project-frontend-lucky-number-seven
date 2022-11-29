import { render, screen } from '@testing-library/react';
import App from './App';


test("check if the addToList function is called whencle button is clicked", () => {
  const addToList = jest.fn();
  render(<App addToList={addToList} />);
  userEvent.click(screen.getByRole("button"));
  expect(addToList).toHaveBeenCalled();
});