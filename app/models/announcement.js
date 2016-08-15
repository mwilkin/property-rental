import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
  message: DS.attr()
});
