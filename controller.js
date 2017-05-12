var thermostat = new Thermostat();

$(document).ready(function() {
  $('#up').click(function() {
    thermostat.temperatureUp();
  });

  $('#down').click(function() {
    thermostat.temperatureDown();
  });

  $('#reset').click(function() {
    thermostat.reset();
  });

  $('#power-save').click(function() {
    thermostat.powersavemode = false;
  });
});
