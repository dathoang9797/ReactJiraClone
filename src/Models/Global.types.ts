import { AxiosError } from 'axios';
import { ProjectModel } from '@Models/Project.types';
import { RouteProps, RouteComponentProps } from 'react-router-dom';

//Props
export type PropsPage = RouteComponentProps;

//Template
export type PropsTemplate = {
  Component: React.ComponentType<RouteComponentProps>;
} & RouteProps;

//State
export type StateProjectManager = {
  pagination?: any;
  filteredInfo?: ProjectModel | null | {};
  sortedInfo?: ProjectModel | null | {};
};

//Form
export type FormValues = Pick<ProjectModel, 'projectName' | 'description' | 'categoryId'>;

//Service
export type ParamLoginFacebook = { facebookToken: string };

//Responsive Service
export type ResponseModalAPI<T> = {
  statusCode: number;
  message: string;
  content: T;
  dateTime: string;
};

//Error Responsive Service
export type ErrResponseModalAPI<T = any> = AxiosError<T>;
