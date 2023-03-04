import axios, { AxiosResponse } from "axios";
import { IUser } from "./../moduls/IUser";

class UsersData {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>("./users.json");
  }
}

export default UsersData;
