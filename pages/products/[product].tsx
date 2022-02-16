import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { useCallback, useEffect, useState } from "react";
import { TodoItem } from "../../types/todo";

type Props = {};

const Product = (props: Props) => {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoItem>();

  const { product } = router.query;

  const loadData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${product}`
      );
      const json = await res.json();
      setTodo(json);
    } catch (error) {}
  }, [product]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Todo Item</h1>
      {todo && (
        <div>
          <h2>{todo.title}</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
