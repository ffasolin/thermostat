var thermostat = new Thermostat();

$(document).ready(function() {

  $('#current-temp').html('Current temperature is ' + thermostat.temperature)

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
