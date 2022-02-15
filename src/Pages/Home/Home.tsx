import Product from 'components/Product';
import React, { useEffect, useState } from 'react';
import { ProductResponse } from 'types/ProductResponse';

type Props = {
  products: ProductResponse[];
  loadProducts: () => void;
  loadCart: () => void;
  loading: any;
};

const Home = ({ products, loadProducts, loadCart, loading }: Props) => {
  console.log(loading);

  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  return (
    <>
      {(loading['LOAD_PRODUCTS'] || loading['LOAD_CART']) && (
        <div className="flex justify-center items-center h-screen w-full absolute z-10 bg-gray-600 opacity-60">
          <h1 className="text-white text-4xl">Loading...</h1>
        </div>
      )}
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </>
  );
};

export default Home;
