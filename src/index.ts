import 'dotenv/config';
import App from './app';
const PORT = process.env.PORT || 3000;
const server = new App().getInstance();
server.listen(PORT, () : void => {  
    console.log(`Server is running on PORT=${PORT}`)
});