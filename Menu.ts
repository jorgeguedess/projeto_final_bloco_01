import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {
  let opcao: number;

  while (true) {
    exibirMenu();
    opcao = readlinesync.questionInt("Entre com a opção desejada: ", {
      limitMessage: `${colors.fg.redstrong}Opção inválida. Digite de 1 a 6${colors.reset}`,
    });
    switch (opcao) {
      case 1:
        console.log("\nListar todos os Produtos\n");

        keyPress();
        break;
      case 2:
        console.log("\nListar Produto pelo ID  \n");

        keyPress();
        break;
      case 3:
        console.log("\nCadastrar Produto\n");

        keyPress();
        break;
      case 4:
        console.log("\nAtualizar Produto\n");

        keyPress();
        break;
      case 5:
        console.log("\nDeletar Produto \n");

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
    console.log(`${colors.bg.black}${colors.fg.blue}*********************************************************
    
COMÉRCIO ZATHUM - Os melhores eletrônicos estão aqui!
  
**********************************************************
  
1 - Listar todos os Produtos                          
2 - Listar Produto pelo ID          
3 - Cadastrar Produto             
4 - Atualizar Produto          
5 - Deletar Produto                       
0 - Sair                                 
    
*********************************************************${colors.reset}`);
  }
}

main();