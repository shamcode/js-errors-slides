import { Promise as EmberPromise } from 'rsvp';
import Ember from 'ember';
import WRAP from 'error-trapper/macros/wrap-function.macro';

function failLoadModel( reason, scope ) {
  Raven.captureException( reason, { extra: { scope } } );
}

export default Ember.Route.extend( {
  config: {
    settings: {
      param1: {
        baseNumber: 42
      }
    }
  },

  model() {
    return new EmberPromise( ( resolve ) => {
      resolve( this.loadModel( this.config, 42 ) );
    } );
  },

  loadModel: WRAP( function( settings, multiplier ) {
    return settings.config.baseNumber * multiplier;
  }, failLoadModel )
} );
