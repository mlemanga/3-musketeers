/*eslint-disable*/
var expect = require('chai').expect;
var is = require('../lib/is/index');
//Array.isArray = null;

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });
  });

  describe('is.array', function () {
    it('should return true if passed argument type is Array', function () {
      expect(is.array(['value1', 'value2'])).to.be.true;
    });
    it('should return false if passed argument type is not Array', function () {
      expect(is.array('mohamed')).to.be.false;
    });
  });
  describe('is.whoWillBeLigue1Champion', function () {
    it('should return PSG in uppercase', function() {
      expect(is.whoWillBeLigue1Champion()).to.be.equal('PSG');
    });
  });
 describe('is.boolean', function(){
   it('should return true if is boolean', function(){
    // var bool = new boolean();
     expect(is.boolean(false)).to.be.true;
     expect(is.boolean(true)).to.be.true;
   });
   it('should return false if not boolean', function(){
     expect(is.boolean('notboolean')).to.be.false;
   });
 });
 describe('is.date', function(){
   it('should return true if is date', function(){
     var date = new Date();
     expect(is.date(date)).to.be.true;
   });
   it('should return false if not date', function(){
     expect(is.date('notDate')).to.be.false;
   });
 });
 describe('is.error', function(){
   it('should return true if is error', function(){
     var erreur = new Error();
     expect(is.error(erreur)).to.be.true;
   });
   it('should return false if not error', function(){
     expect(is.error('notError')).to.be.false;
   });
 });
 describe('is.function', function(){
   it('should return true if is function', function(){
     var f = function(){
     };
     expect(is.function((f))).to.be.true;
   });
   it('should return false if not function', function(){
     expect(is.function('notFunction')).to.be.false;
   });
 });
 describe('is.nan', function(){
   it('should return true if is nan', function(){
     expect(is.nan(NaN)).to.be.true;
   });
   it('should return false if not nan', function(){
     expect(is.nan('jugj')).to.be.false;
   });
 });

});
