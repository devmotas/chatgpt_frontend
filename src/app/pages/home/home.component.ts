import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: any = [];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }


  async getUsers() {
    try {
      this.users = await this.usersService.getUsers();
      console.log(this.users);
    } catch (error) {
      console.error(error);
    }
  }

  logout() {
    // Desloga o usuário e redireciona para a página de login
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
  async addUser() {
    // const modal = await this.dialog.open(CreateUserComponent);
    // const { data, role } = await modal.afterClosed().toPromise();

    // if (role === 'confirm') {

    // }
  }


  editUser(user: object) {

  }
  showDetails(user: object) {

  }

}
