import { IUser } from '../user/User.interface';

export interface ILoginResponse {
  access_token: string;
  user: IUser;
  expires_in: number;
}
