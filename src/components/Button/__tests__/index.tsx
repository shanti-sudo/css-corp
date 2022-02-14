import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LockIcon from 'assets/icons/lock.svg';
import Button from '../index';

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
  const mockFn = jest.fn();
  render(<Button onClick={mockFn}>Sign In</Button>);
  const btn = screen.queryByRole('button');
  if (btn) {
    fireEvent.click(btn);
    expect(mockFn).toBeCalledTimes(1);
  }
});
