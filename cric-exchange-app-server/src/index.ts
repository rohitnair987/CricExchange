import {createConnection, Connection} from "typeorm";
import {User} from "./entity/User";
import express from "express";
const app = express();
const port = 8080;
let dbConnection: Connection;

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    dbConnection = connection;
    console.log("Connection Created");
   
}).catch(error => console.log("Error: ", error));

app.get("/", async (req, res) => {
    const user = new User();
    user.username = req.query.username as string;
    user.password = req.query.password as string;
    
    await dbConnection.manager.save(user);
    
    console.log("user created: ", user);
});

// start the express server
app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
});