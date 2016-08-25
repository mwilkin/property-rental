import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country: DS.attr(),
  rentals: DS.hasMany('rentals', {async: true})
});
