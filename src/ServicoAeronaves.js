class ServicoAeronaves {
    constructor() {
      this.aeronaves = [];
    }
  
    adicionarAeronave(aeronave) {
      this.aeronaves.push(aeronave);
    }
  
    listarAeronaves() {
      return this.aeronaves;
    }
  
    buscarAeronavePorId(id) {
      return this.aeronaves.find(aeronave => aeronave.id === id);
    }
  }
  
  export { ServicoAeronaves };

  