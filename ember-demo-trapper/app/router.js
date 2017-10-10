import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('simple-exception');
  this.route('demo-trapper');
  this.route('global-callback-demo-trapper');
});

export default Router;
