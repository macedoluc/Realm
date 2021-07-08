import Realm from 'realm';
// comando que equivale ao create table

class ProdSchema extends Realm.Object {}
ProdSchema.schema = {
  name: 'Prod',
  properties: {
    produto_id: {type: 'int', default: 0},
    produto_nome: 'string',
    produto_descricao: 'string',
    produto_preco: 'double',
  },
  primaryKey: 'produto_id',
};

let realm_produto = new Realm({schema: [ProdSchema], schemaVersion: 1});
//Exportando a instancia do schema criado;
export default realm_produto;

//criando os métodos CRUD

let listarProdutos = () => {
  return realm_produto.objects('Prod');
  //objects pra listar
};

//Adiçao de Produtos
let cadastrarProdutos = (nome, descricao, preco) => {
  console.log(nome, descricao, preco);

  const ultimoId = realm_produto.objects('Prod').sorted('produto_id', true)[0];
  const maiorId = ultimoId == null ? 0 : ultimoId.produto_id;
  const proximoId = maiorId == null ? 1 : maiorId + 1;

  realm_produto.write(() => {
    const prod = realm_produto.create('Prod', {
      produto_id: proximoId,
      produto_nome: nome,
      produto_descricao: descricao,
      produto_preco: parseFloat(preco),
    });
  });
};

export {listarProdutos, cadastrarProdutos};
