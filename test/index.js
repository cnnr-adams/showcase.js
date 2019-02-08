import { assert } from 'chai';
import defaultAwesomeFunction, { awesomeFunction } from '../src';

describe('Awesome test.', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'Testing default function - Connor'
    assert(defaultAwesomeFunction('Connor') === expectedVal, 'Default not awesome :(');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function'
    assert(awesomeFunction() === expectedVal, 'Named awesome :(');
  });
});
