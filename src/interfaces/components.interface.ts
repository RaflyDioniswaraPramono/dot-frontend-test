import { ReactNode } from "react";

export interface ILayoutProps {
  children: ReactNode;
}

export interface ISignInLayoutProps {
  children: ReactNode;
}

export interface ICartLayoutProps {
  children: ReactNode;
}

export interface IContainerProps {
  children: ReactNode;
}

export interface IFormFields extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
}

export interface IContentTitleProps {
  title: string;
  description: string;
}

export interface IDetailProductProps {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  description: string | undefined;
  category: string | undefined;
  image: string | undefined;
  rating: any | undefined;
}
