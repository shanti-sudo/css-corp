import Logo from "@public/svg/logo.svg";
import { useAuth } from "context";

type Props = {};

const AuthLayout: React.FC = ({ children }) => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Logo width={48} heigh={48} />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
