describe('controller', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('turns temperature up', function() {
    $('#up').click();
    expect(thermostat.temperature).toBe(21);
  });
});
