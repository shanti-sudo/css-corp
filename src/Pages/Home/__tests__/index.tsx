import React from 'react';
import {
  fireEvent,
  queryByRole,
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Home from '../index';
import { Provider } from 'react-redux';
import store from '../../../configureStore';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from 'utils/axios';

const mock = new MockAdapter(axiosInstance);

function render(ui: React.ReactElement, { ...renderOptions } = {}) {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('Test Home Page', () => {
  beforeEach(() => {
    mock.onGet('660/products').replyOnce(200, [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      },
    ]);
    mock.onGet('660/cart').replyOnce(200, [
      {
        quantity: 1,
        productId: 1,
        id: 3,
      },
    ]);
  });

  afterEach(() => {
    mock.reset();
  });

  test('should take snapshot of loading', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot of products', async () => {
    const { container } = render(<Home />);
    await screen.findAllByTestId('productContainer');
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render home page', () => {
    render(<Home />);
    const loading = screen.queryByText(/Loading.../i);

    expect(loading).toBeInTheDocument();
  });

  test('should display products', async () => {
    render(<Home />);
    const products = await screen.findAllByTestId('productContainer');
    expect(products.length).toBe(2);
  });

  test('should display edit select on first Product', async () => {
    render(<Home />);
    const products = await screen.findAllByTestId('productContainer');
    const modifyProduct = screen.queryByTestId('modifyProduct');
    const addToCartBtn = screen.queryByRole('button', {
      name: 'Add to bag',
    });

    expect(products[0]).toContainElement(modifyProduct);
    expect(products[1]).not.toContainElement(modifyProduct);
    expect(products[1]).toContainElement(addToCartBtn);
  });

  test('should click add to cart button', async () => {
    render(<Home />);
    await screen.findAllByTestId('productContainer');
    const addToCartBtn = screen.queryByRole('button', {
      name: 'Add to bag',
    });
    if (addToCartBtn) {
      fireEvent.click(addToCartBtn);
    }
  });
});
