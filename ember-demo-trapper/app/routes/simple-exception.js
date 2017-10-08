import { Promise as EmberPromise } from 'rsvp';
import Ember from 'ember';

function failLoadModel( reason ) {
  Raven.captureException( reason );
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
    } ).catch(
      failLoadModel
    )
  },

  loadModel( settings, multiplier ) {
    return settings.config.baseNumber * multiplier;
  }
} );
