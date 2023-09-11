class ServicoPilotos {
    constructor() {
      this.pilotos = [];
    }
  
    adicionarPiloto(piloto) {
      this.pilotos.push(piloto);
    }
  
    listarPilotos() {
      return this.pilotos;
    }
  
    buscarPilotoPorId(id) {
      return this.pilotos.find(piloto => piloto.id === id);
    }
  }
  
  export { ServicoPilotos };
