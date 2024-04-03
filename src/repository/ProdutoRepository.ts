import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  // Métodos do CRbUD (Create, Read, Update, Delete)
  listarTodos(): void;
  buscarPorID(numero: number): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(id: number): void;
  procurarPorNome(nome: string): void;
}
