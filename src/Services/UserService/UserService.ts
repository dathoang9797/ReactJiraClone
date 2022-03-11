import axios from 'axios';
import { baseUrlUser } from '@Utils/Domain/domainJira';
import { UserModel } from '@Models/User.types';
import {
  ParamLoginFacebook,
  ResponseModalAPI,
  ErrResponseModalAPI,
} from '@Models/Global.types';
import { TOKEN } from '@Utils/Constants/settingSystems';

class UserService {
  private UserAPI = axios.create({
    baseURL: baseUrlUser,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
    },
  });

  public signIn = (userSignIn: Pick<UserModel, 'email' | 'passWord'>) =>
    this.UserAPI.post<ResponseModalAPI<UserModel>>(`/signin`, userSignIn).catch<
      ErrResponseModalAPI<
        | ResponseModalAPI<Pick<UserModel, 'email' | 'passWord'>>
        | ResponseModalAPI<string>
      >
    >((err) => err);

  public signUp = (user: UserModel) =>
    this.UserAPI.post<ResponseModalAPI<UserModel>>(`/signup`, user).catch<
      ErrResponseModalAPI<ResponseModalAPI<UserModel>>
    >((err) => err);

  public editUser = (userEdit: UserModel) =>
    this.UserAPI.put<ResponseModalAPI<UserModel>>(`/editUser`, userEdit).catch<
      ErrResponseModalAPI<ResponseModalAPI<string>>
    >((err) => err);

  public deleteUser = (idUser: UserModel['id']) =>
    this.UserAPI.delete<ResponseModalAPI<UserModel>>(
      `/editUser?id=${idUser}`
    ).catch<ErrResponseModalAPI<ResponseModalAPI<string>>>((err) => err);

  public userTestToken = () =>
    this.UserAPI.post<ResponseModalAPI<UserModel>>(`/TestToken`).catch<
      ErrResponseModalAPI<ResponseModalAPI<string>>
    >((err) => err);

  public userLoginFacebook = (facebookToken: ParamLoginFacebook) =>
    this.UserAPI.post<ResponseModalAPI<UserModel>>(
      `/loginFacebook`,
      facebookToken
    ).catch<ErrResponseModalAPI<ResponseModalAPI<string>>>((err) => err);

  public getUser = (keyword: string) =>
    this.UserAPI.get<ResponseModalAPI<UserModel[]>>(
      `/getUser?keyword=${keyword}`
    ).catch<ErrResponseModalAPI>((err) => err);

  public getUserById = (id: UserModel['id']) =>
    this.UserAPI.get<ResponseModalAPI<UserModel>>(
      `/getUser?idProject=${id}`
    ).catch<ErrResponseModalAPI<ResponseModalAPI<string>>>((err) => err);
}

export default new UserService();
