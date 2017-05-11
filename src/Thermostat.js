function Thermostat(temperature = 20, powersavemode = true) {
  this.temperature = temperature;
  this.powersavemode = powersavemode;
};

Thermostat.prototype.temperatureUp = function(degrees = 1) {
  if (this.powersavemode == true && this.temperature >= 25) {
    throw 'Power save mode on. Maximum temperature: 25';
  } else if (this.powersavemode == false && this.temperature >= 32) {
    throw 'Power save mode off. Maximum temperature: 32';
  } else {
    this.temperature = this.temperature + degrees
  }
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
