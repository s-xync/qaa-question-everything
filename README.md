# QAA - Question Everything
To use this project, make sure you have `mongodb` installed.  
Clone the repository to your local system.  
Open the `server` folder and create a file called `.env` and add the following contents to it.  
`PORT=8080`  
`CORS_ORIGIN=http://localhost:3000`  
`MONGODB_URI=mongodb://127.0.0.1:27017/qaa`  
Now open a terminal in the `server` folder and run the following commands `yarn install`, `yarn start:dev`.  

Now go to `client` folder in the cloned repository.  
Create a file called `.env` and add the following contents to it.  
`REACT_APP_SERVER_API_URL=http://localhost:8080
`  
Now open a terminal in the `client` folder and run the following commands `yarn install`, `yarn start`.  

#### NOTE
If you don't have `yarn` installed, just run the command `npm install -g yarn` in a new terminal.  If you get a user permissions error, just use `sudo npm install -g yarn`.

Thanks!
