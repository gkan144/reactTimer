import React from 'react';
import ReactDom from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', ()=>{
  it('should exist', ()=>{
    expect(CountdownForm).toExist();
  });

  describe('submit', ()=>{
    it('should call onSetCountdown if valid seconds', ()=>{
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDom.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = '109';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds', ()=>{
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDom.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = 'a';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });

});