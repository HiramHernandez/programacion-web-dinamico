
export class UserService {
    url: string = "http://localhost:4000/users/";
    public async getUsers() {
        const response = await fetch(this.url);
        return await response.json();
    }
 
}