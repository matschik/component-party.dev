import Controller from '@ember/controller';

export default class UserController extends Controller {
	@tracked allUsers = this.model;
}
