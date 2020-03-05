const formatFullname = require('./formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return an error if "fullName" is in a wrong format', () => {
        expect(formatFullname('Marcin')).to.equal('Error');
        expect(formatFullname('Marcin Bajek Krzysztof')).to.equal('Error');
    });
  
  });