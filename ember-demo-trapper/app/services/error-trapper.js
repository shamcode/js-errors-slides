import Ember from 'ember';

export default Ember.Service.extend( {
  onError( e, scope ) {
    Raven.captureException( e, { extra: { scope } } );
  }
} );
