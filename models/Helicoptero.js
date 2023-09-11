const Aeronave = require('./Aeronave');

class Helicoptero extends Aeronave {
  constructor(id, modelo, capacidade) {
    super(id, modelo);
    this.capacidade = capacidade;
  }
}

export { Helicoptero };

