
export class ApiUrl {

  public static URL_BASE: string = 'http://192.168.1.100:8800'

  // Login
  public static LOGIN: string = this.URL_BASE + '/login';

  // Users
  public static GET_USERS: string = this.URL_BASE + '/get-user';
  public static CREATE_USERS: string = this.URL_BASE + '/create-user';

};
