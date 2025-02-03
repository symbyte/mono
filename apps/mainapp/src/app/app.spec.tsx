import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    // @ts-expect-error blah
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    // @ts-expect-error blah
    const { getByText } = render(<App />);
    expect(getByText(new RegExp('Welcome @mono/mainapp', 'gi'))).toBeTruthy();
  });
});
