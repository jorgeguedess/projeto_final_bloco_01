import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();
  public id: number = 0;

  listarTodos(): void {
    if (this.listaProdutos.length === 0) {
      console.log(
        `${colors.fg.redstrong}\nNenhum produto foi encontrado!!${colors.reset}`
      );
      return;
    }
    this.listaProdutos.forEach((produto) => produto.visualizar());
  }

  buscarPorID(id: number): void {
    const buscaProduto = this.buscarNoArray(id);

    if (buscaProduto === null) {
      console.log(
        `${colors.fg.redstrong}\nO Produto de id: ${id} não foi encontrado!${colors.reset}`
      );
      return;
    }
    buscaProduto.visualizar();
  }

  cadastrar(produto: Produto): void {
    this.listaProdutos.push(produto);
    console.log(
      `${colors.fg.green}\nO Produto ${produto.nome} de id: ${produto.id} foi criado com sucesso!${colors.reset}`
    );
  }

  atualizar(produto: Produto): void {
    const buscaProduto = this.buscarNoArray(produto.id);

    if (buscaProduto === null) {
      console.log(
        `${colors.fg.redstrong}\nO Produto de id: ${produto.id} não foi encontrado!${colors.reset}`
      );
      return;
    }

    this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
    console.log(
      `${colors.fg.green}\nO Produto de id: ${produto.id} foi atualizado com sucesso!${colors.reset}`
    );
  }

  deletar(id: number): void {
    const buscaProduto = this.buscarNoArray(id);

    if (buscaProduto === null) {
      console.log(
        `${colors.fg.redstrong}\nO Produto de id: ${id} não foi encontrado!${colors.reset}`
      );
      return;
    }
    this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
    console.log(
      `${colors.fg.green}\nO Produto de id: ${id} foi deletado com sucesso!${colors.reset}`
    );
  }

  procurarPorNome(nome: string): void {
    let listaProdutosPorNome = this.listaProdutos.filter((produto) => {
      return produto.nome.toLowerCase().includes(nome.toLowerCase());
    });
    if (listaProdutosPorNome.length === 0) {
      console.log(
        `\n${colors.fg.redstrong}O Produto ${nome} não foi encontrado${colors.reset}`
      );
      return;
    }
    listaProdutosPorNome.forEach((produto) => produto.visualizar());
  }

  /* Métodos Auxiliares */
  public gerarId(): number {
    return ++this.id;
  }

  public buscarNoArray(id: number): Produto | null {
    return this.listaProdutos.find((produto) => produto.id === id) || null;
  }

  public retornaTipo(id: number): number {
    const produtoEncontrado = this.listaProdutos.find(
      (produto) => produto.id === id
    );
    return produtoEncontrado ? produtoEncontrado.categoria : 0;
  }
}
