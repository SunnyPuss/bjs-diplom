class Profile {
    constructor (username, name = {firstname, secondname}, password) {
        this.username = new String (username);
        this.name = name;
        this.password = new String (password);
        this.firstname = new String (name.firstname);
        this.secondname = new String (name.secondname);
            
    }

    addNewUser(callback) {
        const username = new Profile (username, name, password)
        callback (username);
    }

    authorisation() {}

}
addNewUser (Ivan, {Ivan, Ivanov}, 123)