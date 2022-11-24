const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_Catalogos": "/Catalogos",
  "/adicionar_Catalogos": "/Catalogos",
  "/editar_Catalogos/:id": "/Catalogos/:id",
  "/deletar_Catalogos/:id": "/Catalogos/:id"

}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
