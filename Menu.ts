import readlinesync, { question } from "readline-sync";

import { colors } from "./src/util/Colors";
import {
  ProdutoComputador,
  TipoArmazenamento,
  TipoMemoriaRam,
  TipoProcessador,
  tiposArmazenamento,
  tiposMemoria,
  tiposProcessador,
} from "./src/model/ProdutoComputador";
import { ProdutoEletronico } from "./src/model/ProdutoEletronico";
import { Categoria } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
  let produtos: ProdutoController = new ProdutoController();
  const tiposCategoria: string[] = ["Eletrônico", "Computador"];

  let opcao: number;

  let id: number;
  let nome: string;
  let categoria: number;
  let preco: number;
  let marca: string;

  let ram: TipoMemoriaRam;
  let processador: TipoProcessador;
  let armazenamento: TipoArmazenamento;
  let indiceRam: number;
  let indiceProcessador: number;
  let indiceArmazenamento: number;

  const smartphone = new ProdutoEletronico(
    1,
    "Smartphone XYZ",
    Categoria.Eletronico,
    999.99,
    "Samsung"
  );
  produtos.cadastrar(smartphone);

  const pcGamer = new ProdutoComputador(
    2,
    "PC Gamer",
    1999.99,
    "Asus",
    "16GB DDR3",
    "256GB SSD",
    "Intel Xeon"
  );
  produtos.cadastrar(pcGamer);

  while (true) {
    exibirMenu();
    opcao = readlinesync.questionInt("Entre com a opção desejada: ", {
      limitMessage: `${colors.fg.redstrong}Opção inválida. Digite de 1 a 6${colors.reset}`,
    });
    switch (opcao) {
      case 1:
        console.log(
          `${colors.fg.whitestrong}\nListar todos os Produtos\n${colors.reset}`
        );

        produtos.listarTodos();

        keyPress();
        break;
      case 2:
        console.log("\nListar Produto pelo ID  \n");

        id = readlinesync.questionInt("Digite o ID do produto: ", {
          limitMessage: `${colors.fg.redstrong}Número inválido!\n${colors.reset}`,
        });
        produtos.buscarPorID(id);

        keyPress();
        break;

      case 3:
        console.log("\nCadastrar Produto\n");
        nome = readlinesync.question("Nome do produto: ");
        categoria =
          readlinesync.keyInSelect(tiposCategoria, "Categória produto: ", {
            cancel: false,
          }) + 1;
        preco = readlinesync.questionFloat("Preço do produto: ");
        marca = readlinesync.question("Marca do produto: ");

        switch (categoria) {
          case Categoria.Eletronico:
            const novoProdutoEletronico = new ProdutoEletronico(
              produtos.gerarId(),
              nome,
              Categoria.Eletronico,
              preco,
              marca
            );
            produtos.cadastrar(novoProdutoEletronico);
            break;
          case Categoria.Computador:
            indiceRam = readlinesync.keyInSelect(tiposMemoria, "Memória Ram: ");

            ram = tiposMemoria[indiceRam];

            indiceArmazenamento = readlinesync.keyInSelect(
              tiposArmazenamento,
              "Armazenamento: ",
              { cancel: false }
            );

            armazenamento = tiposArmazenamento[indiceArmazenamento];

            indiceProcessador = readlinesync.keyInSelect(
              tiposProcessador,
              "Processador: ",
              { cancel: false }
            );

            processador = tiposProcessador[indiceProcessador];

            const novoProdutoComputador = new ProdutoComputador(
              produtos.gerarId(),
              nome,
              preco,
              marca,
              ram,
              armazenamento,
              processador
            );
            produtos.cadastrar(novoProdutoComputador);
            break;
        }

        keyPress();
        break;
      case 4:
        console.log("\nAtualizar Produto\n");

        id = readlinesync.questionInt("Digite o ID do Produto: ", {
          limitMessage: "Número inválido!",
        });

        if (produtos.buscarNoArray(id) === null) {
          console.log(
            `${colors.fg.redstrong}\nO id do produto: ${id} não foi encontrado!${colors.reset}`
          );
          keyPress();
          break;
        }

        nome = readlinesync.question("Nome do produto: ");
        categoria =
          readlinesync.keyInSelect(tiposCategoria, "Categória produto: ", {
            cancel: false,
          }) + 1;
        preco = readlinesync.questionFloat("Preço do produto: ");
        marca = readlinesync.question("Marca do produto: ");

        switch (categoria) {
          case Categoria.Eletronico:
            const novoProdutoEletronico = new ProdutoEletronico(
              produtos.gerarId(),
              nome,
              Categoria.Eletronico,
              preco,
              marca
            );
            produtos.atualizar(novoProdutoEletronico);
            break;
          case Categoria.Computador:
            indiceRam = readlinesync.keyInSelect(tiposMemoria, "Memória Ram: ");

            ram = tiposMemoria[indiceRam];

            indiceArmazenamento = readlinesync.keyInSelect(
              tiposArmazenamento,
              "Armazenamento: ",
              { cancel: false }
            );

            armazenamento = tiposArmazenamento[indiceArmazenamento];

            indiceProcessador = readlinesync.keyInSelect(
              tiposProcessador,
              "Processador: ",
              { cancel: false }
            );

            processador = tiposProcessador[indiceProcessador];

            const novoProdutoComputador = new ProdutoComputador(
              produtos.gerarId(),
              nome,
              preco,
              marca,
              ram,
              armazenamento,
              processador
            );
            produtos.atualizar(novoProdutoComputador);
            break;
        }

        keyPress();
        break;
      case 5:
        console.log("\nDeletar Produto \n");

        id = readlinesync.questionInt("Digite o ID do Produto: ", {
          limitMessage: "Número inválido!",
        });

        produtos.deletar(id);

        keyPress();
        break;
      case 5:
        console.log("\nDeletar Produto \n");

        id = readlinesync.questionInt("Digite o ID do Produto: ", {
          limitMessage: "Número inválido!",
        });

        produtos.deletar(id);

        keyPress();
        break;
      case 6:
        console.log("\nProcurar por nome \n");

        nome = readlinesync.question("Digite o Nome do Produto: ");
        produtos.procurarPorNome(nome);

        keyPress();
        break;
      case 0:
        console.log(
          colors.fg.magenta,
          "\nComércio Zathum - Os melhores eletrônicos estão aqui!"
        );
        sobre();
        console.log(colors.reset, "");
        process.exit(0);

      default:
        console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);

        keyPress();
        break;
    }
  }

  function sobre(): void {
    console.log(`
*****************************************************

Projeto Desenvolvido por:

Jorge Guedes - apoio da Generation Brasil
https://github.com/jorgeguedess
https://www.linkedin.com/in/jorgeguedess/

*****************************************************
    `);
  }

  function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }

  function exibirMenu(): void {
    console.log(`${colors.bg.black}${colors.fg.blue}\n*********************************************************
    
COMÉRCIO ZATHUM - Os melhores eletrônicos estão aqui!
  
**********************************************************
  
1 - Listar todos os Produtos                          
2 - Listar Produto pelo ID          
3 - Cadastrar Produto             
4 - Atualizar Produto          
5 - Deletar Produto                       
6 - Listar por Nome                       
0 - Sair                                 
    
*********************************************************${colors.reset}`);
  }
}

main();
