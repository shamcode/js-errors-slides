import { A } from '@ember/array';
import Component from '@ember/component';

export default Component.extend( {
  itemText: '',

  items: A( [] ),

  actions: {
    addItem( item ) {
      this.get( 'items' ).pushObject( item );
      this.set( 'itemText', '' );
    }
  }
} );
