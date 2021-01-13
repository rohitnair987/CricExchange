import {createConnection} from "typeorm";
import {User} from "./entity/User";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    const user = new User();
    user.username = "Nikhil";
    user.password = "encryptedpassword"
    await connection.manager.save(user);

    console.log("user created: ", user);

}).catch(error => console.log("Error: ", error));