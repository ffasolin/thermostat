describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toBe(20);
  });

  it('turns up the default parameter temperature', function() {
    thermostat.temperatureUp()
    expect(thermostat.temperature).toBe(21);
  });

  it('turns up the temperature defined by user', function() {
    thermostat.temperatureUp(40)
    expect(thermostat.temperature).toBe(60);
  });

  it('turns down the default parameter temperature', function() {
    thermostat.temperatureDown()
    expect(thermostat.temperature).toBe(19);
  });

  it('turns down the temperature defined by user', function() {
    thermostat.temperatureDown(40)
    expect(thermostat.temperature).toBe(-20);
  });
});
