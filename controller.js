var thermostat = new Thermostat();

$(document).ready(function() {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=266024989e21dcc05fd57718a97022ab&units=metric', function( data ) {
    $('#api').html('Temperature in London: ' + data.main.temp);
  });

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
