import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import Home from '../Home';
import { Provider } from 'react-redux';
import store from '../../../configureStore';

function render(ui: React.ReactElement, { ...renderOptions } = {}) {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

describe('Test Home Page', () => {
  test('should take snapshot of loading', () => {
    const { container } = render(
      <Home
        products={[]}
        loading={{
          LOAD_PRODUCTS: true,
          LOAD_CART: true,
        }}
        loadCart={jest.fn()}
        loadProducts={jest.fn()}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot of products', () => {
    const { container } = render(
      <Home
        products={[
          {
            id: 20,
            title: 'DANVOUY Womens T Shirt Casual Cotton Short',
            price: 12.99,
            description:
              '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
            category: "women's clothing",
            image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
            rating: {
              rate: 3.6,
              count: 145,
            },
          },
        ]}
        loading={{}}
        loadCart={jest.fn()}
        loadProducts={jest.fn()}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render home page', () => {
    render(
      <Home
        products={[]}
        loading={{
          LOAD_PRODUCTS: true,
        }}
        loadCart={jest.fn()}
        loadProducts={jest.fn()}
      />,
    );
    const loading = screen.queryByText(/Loading.../i);

    expect(loading).toBeInTheDocument();
  });

  test('should display products', () => {
    render(
      <Home
        products={[
          {
            id: 20,
            title: 'DANVOUY Womens T Shirt Casual Cotton Short',
            price: 12.99,
            description:
              '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
            category: "women's clothing",
            image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
            rating: {
              rate: 3.6,
              count: 145,
            },
          },
        ]}
        loading={{}}
        loadCart={jest.fn()}
        loadProducts={jest.fn()}
      />,
    );
  });
});
