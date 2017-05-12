describe('Controller-Thermostat', function() {

  describe('up', function() {
    it('turns temperature up', function() {
      $('#up').click();
      expect(thermostat.temperature).toBe(21);
    });
  });

  describe('down', function() {
    it('turns temperature down', function() {
      $('#down').click();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('reset', function() {
    it('resets temperature', function() {
      $('#up').click();
      $('#reset').click();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('power-save', function() {
    it('power save mode is off when clicked', function() {
      $('#power-save').click();
      expect(thermostat.powersavemode).toBe(false);
    });

    it('power save mode is on when clicked again', function() {
      $('#power-save').click();
      expect(thermostat.powersavemode).toBe(true);
    });
  });
});
