function Thermostat(temperature = 20) {
  this.temperature = temperature;
};

Thermostat.prototype.temperatureUp = function(degrees = 1) {
  this.temperature = this.temperature + degrees
};

Thermostat.prototype.minimumTemperature = function() {
  if (this.temperature < 10) {
    throw 'Minimum temperature is 10.';
  }
};

Thermostat.prototype.temperatureDown = function(degrees = 1) {
  this.temperature = this.temperature - degrees
  this.minimumTemperature()
};
