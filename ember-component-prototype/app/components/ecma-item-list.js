import { A } from '@ember/array';
import Component from '@ember/component';
import { action } from 'ember-decorators/object';

export default class ECMAItemListComponent extends Component {
  itemText = '';

  static items = A( [] );

  @action
  addItem( item ) {
    this.get( 'constructor.items' ).pushObject( item );
    this.set( 'itemText', '' );
  }
}
