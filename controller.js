var thermostat = new Thermostat();

$(document).ready(function() {

  $('#current-temp').html('Current temperature is ' + thermostat.temperature)

  $('#power-save-display').html('Power saving mode: ' + thermostat.powerSaveDisplay())

  $('#power-usage').html('Current power usage: ' + thermostat.energyUsage())
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
    if (thermostat.powersavemode == false) {
      thermostat.powersavemode = true;
    } else {
      thermostat.powersavemode = false;
    }
  });
});
