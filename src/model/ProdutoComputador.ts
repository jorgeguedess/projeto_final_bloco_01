import { Categoria } from "./Produto";
import { ProdutoEletronico } from "./ProdutoEletronico";

type ProcessadorAMD = "AMD Ryzen 3" | "AMD Ryzen 5" | "AMD Ryzen 7";
type ProcessadorIntel =
  | "Intel Core i9"
  | "Intel Core i7"
  | "Intel Core i5"
  | "Intel Core i3"
  | "Intel Xeon"
  | "Intel Pentium"
  | "Intel Celeron";

export type TipoProcessador = ProcessadorAMD | ProcessadorIntel;

export type TipoMemoriaRam =
  | "4GB DDR4"
  | "8GB DDR4"
  | "16GB DDR4"
  | "32GB DDR4"
  | "4GB DDR3"
  | "8GB DDR3"
  | "16GB DDR3"
  | "32GB DDR3";

export type TipoArmazenamento =
  | "500GB HDD"
  | "256GB SSD"
  | "1TB HDD"
  | "512GB SSD"
  | "2TB HDD"
  | "1TB SSD";

export const tiposProcessador: TipoProcessador[] = [
  "Intel Core i9",
  "Intel Core i7",
  "Intel Core i5",
  "Intel Core i3",
  "Intel Xeon",
  "Intel Pentium",
  "Intel Celeron",
];

export const tiposMemoria: TipoMemoriaRam[] = [
  "4GB DDR3",
  "4GB DDR4",
  "8GB DDR3",
  "8GB DDR4",
  "16GB DDR3",
  "16GB DDR4",
  "32GB DDR3",
  "32GB DDR4",
];

export const tiposArmazenamento: TipoArmazenamento[] = [
  "500GB HDD",
  "256GB SSD",
  "1TB HDD",
  "512GB SSD",
  "2TB HDD",
  "1TB SSD",
];

export class ProdutoComputador extends ProdutoEletronico {
  private _memoriaRAM: TipoMemoriaRam;
  private _armazenamento: TipoArmazenamento;
  private _processador: TipoProcessador;

  constructor(
    id: number,
    nome: string,
    preco: number,
    marca: string,
    memoriaRAM: TipoMemoriaRam,
    armazenamento: TipoArmazenamento,
    processador: TipoProcessador
  ) {
    super(id, nome, Categoria.Computador, preco, marca);
    this._memoriaRAM = memoriaRAM;
    this._armazenamento = armazenamento;
    this._processador = processador;
  }

  public get memoriaRAM(): string {
    return this._memoriaRAM;
  }

  public get armazenamento(): TipoArmazenamento {
    return this._armazenamento;
  }

  public get processador(): TipoProcessador {
    return this._processador;
  }

  public set memoriaRAM(value: TipoMemoriaRam) {
    this._memoriaRAM = value;
  }

  public set armazenamento(value: TipoArmazenamento) {
    this._armazenamento = value;
  }

  public set processador(value: TipoProcessador) {
    this._processador = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Memória Ram: ${this._memoriaRAM}`);
    console.log(`Armazenamento: ${this._armazenamento}`);
    console.log(`Processador: ${this.processador}\n`);
  }
}
