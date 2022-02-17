import AuthLayout from "@layout/AuthLayout";
import { ReactElement } from "react";
import styles from "../styles/Login.module.css";

type Props = {};

const Login = (props: Props) => {
  return <div className={styles.container}>Login page</div>;
};

Login.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
