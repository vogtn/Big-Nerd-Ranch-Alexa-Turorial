'use strict';

var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var FAADataHelper = require('../faa_data_helper');

chai.config

describe('FAADataHelper', function(){
  var subject = new FAADataHelper();
});
