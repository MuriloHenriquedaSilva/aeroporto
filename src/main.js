import readline from 'readline';
import { ServicoPilotos } from './ServicoPilotos.js';
import { ServicoAeronaves } from './ServicoAeronaves.js';
import { ServicoAerovias } from './ServicoAerovias.js';
import { Piloto } from '../models/Piloto.js';
import { Aviao } from '../models/Aviao.js';
import { Aerovia } from '../models/Aerovia.js';


  function exibirMenu() {
      console.log("===== Menu =====");
      console.log("1. Listar Pilotos");
      console.log("2. Listar Aeronaves");
      console.log("3. Listar Aerovias");
      console.log("4. Sair");
    }

    function main() {
      const servicoPilotos = new ServicoPilotos();
      const servicoAeronaves = new ServicoAeronaves();
      const servicoAerovias = new ServicoAerovias();

      // Adicionar alguns dados de exemplo
      const piloto1 = new Piloto(1, "João");
      const piloto2 = new Piloto(2, "Maria");
      servicoPilotos.adicionarPiloto(piloto1);
      servicoPilotos.adicionarPiloto(piloto2);

      const aviao1 = new Aviao(1, "Boeing 737", "Comercial");
      servicoAeronaves.adicionarAeronave(aviao1);

      const aerovia1 = new Aerovia(1, "A1");
      servicoAerovias.adicionarAerovia(aerovia1);

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.on('close', () => {
        console.log("Encerrando o programa.");
      });

      rl.on('line', line => {
        const escolha = parseInt(line);

        if (isNaN(escolha)) {
          console.log("Escolha inválida. Por favor, insira um número válido.");
        } else {
          switch (escolha) {
            case 1:
              console.log("Lista de Pilotos:");
              console.log(servicoPilotos.listarPilotos());
              break;
            case 2:
              console.log("Lista de Aeronaves:");
              console.log(servicoAeronaves.listarAeronaves());
              break;
            case 3:
              console.log("Lista de Aerovias:");
              console.log(servicoAerovias.listarAerovias());
              break;
            case 4:
              rl.close();
              break;
            default:
              console.log("Opção inválida. Escolha uma opção válida.");
          }
        }

        if (escolha !== 4) {
          exibirMenu();
        } else {
          rl.close();
        }
      });

      exibirMenu();
    }

    main();
