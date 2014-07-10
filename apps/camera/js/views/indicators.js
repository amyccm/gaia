define(function(require, exports, module) {
'use strict';

/**
 * Dependencies
 */

var debug = require('debug')('view:indicators');
var View = require('vendor/view');

/**
 * Exports
 */

module.exports = View.extend({
  name: 'indicators',
  tag: 'ul',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.el.innerHTML = this.template();

    // Clean up
    delete this.template;

    debug('rendered');
    return this;
  },

  template: function() {
    return '<li class="indicator_timer icon-timer rotates"></li>' +
    '<li class="indicator_hdr icon-hdr rotates"></li>' +
    '<li class="indicator_geolocation icon-geolocation rotates"></li>' +
    '<li class="indicator_battery icon rotates"></li>';
  }
});

});