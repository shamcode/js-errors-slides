import { Promise as EmberPromise } from 'rsvp';
import Ember from 'ember';
import WRAP from 'error-trapper/macros/wrap-function.macro';

function failLoadModel( reason, scope ) {
  debugger;
  //Raven.captureException( reason, { extra: { scope } } );
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
      resolve( this.loadModelWithMacro( this.config, 42 ) );
    } ).catch(
      failLoadModel
    )
  },

  loadModelWithMacro: WRAP( function( settings, multiplier ) {
    return settings.config.baseNumber * multiplier;
  }, failLoadModel ),

  loadModel( settings, multiplier ) {
    return settings.config.baseNumber * multiplier;
  }
} );
