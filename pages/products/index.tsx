import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { GetStaticProps, GetServerSideProps } from "next";
import { TodoItem } from "../../types/todo";
import styles from "../../styles/Login.module.css";
import Header from "@components/Header";
import MainLayout from "@layout/MainLayout";

type Props = {
  todoList: TodoItem[];
};

const Products = ({ todoList }: Props) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);

  // const [todoList, setTodoList] = useState([]);

  // const loadData = useCallback(async () => {
  //   try {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //     const json = await res.json();
  //     setTodoList(json);
  //   } catch (error) {}
  // }, []);

  // useEffect(() => {
  //   loadData();
  // }, [loadData]);

  return (
    <div>
      <h1 className="text-red-300">Todo List</h1>
      {todoList.map((x) => (
        <p key={x.id}>{x.title}</p>
      ))}
    </div>
  );
};

// On build it will generate pre-render html
// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const json = await res.json();
//   return {
//     props: {
//       todoList: json,
//     }, // will be passed to the page component as props
//   };
// };

// On Request it will generate Page
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const json = await res.json();
  return {
    props: {
      todoList: json,
    }, // will be passed to the page component as props
  };
};

Products.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Products;
