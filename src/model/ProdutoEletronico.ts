import { Categoria, Produto } from "./Produto";

export class ProdutoEletronico extends Produto {
  private _marca: string;

  constructor(
    id: number,
    nome: string,
    categoria: Categoria,
    preco: number,
    marca: string
  ) {
    super(id, nome, categoria, preco);
    this._marca = marca;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Marca: ${this._marca}`);
  }
}
