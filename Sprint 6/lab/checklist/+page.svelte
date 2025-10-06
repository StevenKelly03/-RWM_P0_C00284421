import { render, screen } from '@testing-library/svelte';
import YourComponent from './YourComponent.svelte';

test('title displays "Progress Checklist"', () => {
  render(YourComponent);

  const titleElement = screen.getByTestId('title');

  expect(titleElement).toHaveTextContent('Progress Checklist');
});
