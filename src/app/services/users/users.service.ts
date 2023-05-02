import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiUrl } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async getUsers(): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    try {
      const response = await axios.get(ApiUrl.GET_USERS, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(data: object): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    try {
      const response = await axios.post(ApiUrl.LOGIN, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
