import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        message: this.get('message'),
        type: this.get('type'),
        date: this.get('date'),
        };
        this.set('addNewAnnouncement', false);
        this.sendAction('save2', params);
      }
    }
});
