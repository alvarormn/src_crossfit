'use strict';

describe('Service: serviceCrossfit', function () {

  // load the service's module
  beforeEach(module('crossfitApp'));

  // instantiate service
  var serviceCrossfit;
  beforeEach(inject(function (_serviceCrossfit_) {
    serviceCrossfit = _serviceCrossfit_;
  }));

  it('should do something', function () {
    expect(!!serviceCrossfit).toBe(true);
  });

});
