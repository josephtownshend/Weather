'use strict';

describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('Default', function() {

    it('Thermostat starts at 20', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it('Minimum temp is 10', function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
    });
    it('Has power saving mode on', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });
});
