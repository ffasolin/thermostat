describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toBe(20);
  });
});

describe('temperatureUp', function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('turns up the default parameter temperature', function() {
    thermostat.temperatureUp()
    expect(thermostat.temperature).toBe(21);
  });

  it('turns up the temperature defined by user', function() {
    thermostat.temperatureUp(40)
    expect(thermostat.temperature).toBe(60);
  });

  it('has maximum temperature of 25 when power save mode is on', function() {
    thermostat.powersavemode = true;
    thermostat.temperatureUp(5);
    expect(function () { thermostat.temperatureUp(); }).toThrow('Power save mode on. Maximum temperature: 25');
  });

  it('has maximum temperature of 32 when power save mode is off', function() {
    thermostat.powersavemode = false;
    thermostat.temperatureUp(12);
    expect(function () { thermostat.temperatureUp(); }).toThrow('Power save mode off. Maximum temperature: 32');
  });
});

describe('temperatureDown', function() {
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('turns down the default parameter temperature', function() {
    thermostat.temperatureDown()
    expect(thermostat.temperature).toBe(19);
  });

  it('turns down the temperature defined by user', function() {
    thermostat.temperatureDown(10)
    expect(thermostat.temperature).toBe(10);
  });

  it('returns error when temperature is lower than 10', function() {
    thermostat.temperatureDown(10)
    expect(function() { thermostat.temperatureDown(); }).toThrow('Minimum temperature is 10.');
  });
});
