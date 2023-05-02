import { Injectable } from '@angular/core';
import axios from 'axios';
import { ApiUrl } from 'src/app/models/apiUrl';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


  async login(data: object): Promise<any> {
    const headers = { 'Content-Type': 'application/json' };
    try {
      const response = await axios.post(ApiUrl.LOGIN, data, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
