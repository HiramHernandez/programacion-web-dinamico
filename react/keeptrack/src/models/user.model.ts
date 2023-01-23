export class User{
    id: number | undefined;
    username: string = "";
    password: string = "";
    menu: number[] = [];

    constructor(initializer?: any){
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.username) this.username = initializer.username;
        if (initializer.password) this.password = initializer.password;
    }
}


export class Menu{
    id: number | undefined;
    title: string = "";
    icon: string = "";
    route: string = "";

    constructor(initializer?: any){
        if (!initializer) return;
        if (!initializer.id) this.id = initializer.id;
        if (!initializer.title) this.title = initializer.title;
        if (!initializer.icon) this.icon = initializer.icon;
        if (!initializer.route) this.route = initializer.route;
    }

}