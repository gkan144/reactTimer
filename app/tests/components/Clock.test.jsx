import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from '../../components/Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });


  describe('formatSeconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    it('should format seconds', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    });
    it('should format seconds with double digits', () => {
      expect(clock.formatSeconds(61)).toBe('01:01');
    });
  });

  describe('render', () => {
    it('should render default clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var $el = $(ReactDom.findDOMNode(clock));

      expect($el.find('.clock-text').text()).toBe('00:00')
    });
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDom.findDOMNode(clock));

      expect($el.find('.clock-text').text()).toBe('01:02')
    });
  });
});