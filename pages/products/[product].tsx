import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { useCallback, useEffect, useState } from "react";
import { TodoItem } from "../../types/todo";

type Props = {
  todo: TodoItem;
};

const Product = ({ todo }: Props) => {
  // const router = useRouter();
  // const [todo, setTodo] = useState<TodoItem>();

  // const { product } = router.query;

  // const loadData = useCallback(async () => {
  //   try {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/todos/${product}`
  //     );
  //     const json = await res.json();
  //     setTodo(json);
  //   } catch (error) {}
  // }, [product]);

  // useEffect(() => {
  //   loadData();
  // }, [loadData]);

  return (
    <div>
      <h1>Todo Item</h1>
      {todo && <h2>{todo.title}</h2>}
    </div>
  );
};

type Params = {
  product: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { product } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${product}`
  );
  const json: TodoItem = await res.json();

  return {
    props: {
      todo: json,
    }, // will be passed to the page component as props
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const json: TodoItem[] = await res.json();
  const paths = json.map((x) => ({
    params: { product: `${x.id}` },
  }));

  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
};

export default Product;
