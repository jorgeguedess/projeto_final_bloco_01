export enum Categoria {
  Eletronico = 1,
  Computador = 2,
}

export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _categoria: number;
  private _preco: number;

  constructor(id: number, nome: string, categoria: Categoria, preco: number) {
    this._id = id;
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get categoria(): number {
    return this._categoria;
  }

  public get preco(): number {
    return this._preco;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set categoria(value: number) {
    this._categoria = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar(): void {
    let categoria: string = "";

    switch (this._categoria) {
      case Categoria.Eletronico:
        categoria = "Eletrônico";
        break;
      case Categoria.Computador:
        categoria = "Computador";
        break;
    }

    console.log("\n*****************************************************");
    console.log("Dados do Produto");
    console.log("*****************************************************");
    console.log(`ID: ${this._id}`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Preço: ${this._preco}`);
  }
}
