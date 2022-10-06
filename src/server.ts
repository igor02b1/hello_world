import * as express from "express";

const app = express();
const port = 3000;

    app.get('/', (request, response) => {
        response.send('Hello World!');
     });
    
    app.get('/bsms', (request, response) => {
        response.send('Persistência, responsabilidade pessoal, orientação ao futuro, mentalidade de crescimento');
     });
     app.get('/bsms/meta', (request, response) => {
        response.send('A minha meta da semana é juntar o maximo possivel de conhecimento sobre API e acordar mais cedo');
    });

 app.listen(port, () => {});
    console.log(`o server está rodando na porta: ${port}`);
        