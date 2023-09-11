class ServicoAerovias {
    constructor() {
      this.aerovias = [];
    }
  
    adicionarAerovia(aerovia) {
      this.aerovias.push(aerovia);
    }
  
    listarAerovias() {
      return this.aerovias;
    }
  
    buscarAeroviaPorId(id) {
      return this.aerovias.find(aerovia => aerovia.id === id);
    }
  }
  
  export { ServicoAerovias };
  