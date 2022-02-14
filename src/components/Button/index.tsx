import React, { ComponentProps, memo } from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: string;
  icon?: any;
};

export type BtnProps = ButtonProps &
  Omit<ComponentProps<'button'>, keyof ButtonProps>;

const Button = ({ children, icon: Icon, ...props }: BtnProps) => {
  return (
    <button
      {...props}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-gray-500"
    >
      {Icon && (
        <span
          data-testid="icon-container"
          className="absolute left-0 inset-y-0 flex items-center pl-3"
        >
          <Icon fill="rgb(99 102 241 / 1)" />
        </span>
      )}
      {children}
    </button>
  );
};

export default memo(Button);
