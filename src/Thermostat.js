function Thermostat(temperature = 20) {
  this.temperature = temperature;
};

Thermostat.prototype.temperatureUp = function(degrees = 1) {
  this.temperature = this.temperature + degrees
};
