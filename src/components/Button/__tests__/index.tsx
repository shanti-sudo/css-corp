import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LockIcon from 'assets/icons/lock.svg';
import Button from '../index';

const mockFn = jest.fn();

// beforeAll(() => {
//   // start server
// });

// beforeEach(() => {
//   console.log('before each');
//   // create mock methods
// });

// afterEach(() => {
//   // clear mock methods
//   jest.clearAllMocks();
// });

// afterAll(() => {
//   // stop server
// });

describe('"positive scenarios', () => {
  // define my postitive scenario data here
  beforeEach(() => {
    console.log('Positive scenario before all');
  });

  it('button snapshot', () => {
    const { container } = render(<Button>Sign In</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should first', () => {
    render(<Button>Sign In</Button>);
    const btn = screen.queryByRole('button');
    expect(btn).not.toBeNull();
    if (btn) {
      expect(btn.innerHTML).toMatch(/Sign In/i);
    }
  });

  test('should disable button', () => {
    render(<Button disabled>Sign In</Button>);
    const btn = screen.queryByRole('button');
    if (btn) {
      expect(btn).toBeDisabled();
    }
  });

  test('should icon visible', () => {
    render(<Button icon={LockIcon}>Sign In</Button>);
    const iconContainer = screen.queryByTestId('icon-container');
    expect(iconContainer).not.toBeNull();
  });

  test('should click button', () => {
    render(<Button onClick={mockFn}>Sign In</Button>);
    const btn = screen.queryByRole('button');
    if (btn) {
      fireEvent.click(btn);
      expect(mockFn).toBeCalledTimes(1);
    }
  });

  test('should click button', () => {
    render(<Button onClick={mockFn}>Sign In</Button>);
    const btn = screen.queryByRole('button');
    if (btn) {
      fireEvent.click(btn);
      expect(mockFn).toBeCalledTimes(1);
    }
  });
});

describe('negative scenarios', () => {
  afterAll(() => {
    console.log('negative scenarios after all');
  });
  test('should sum 2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });
});
