var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    year: '',
    month: '',
    day: '',
    description: '',
    completed: false,
  },
  toggle: function() {
    this.set("completed", !this.get('completed'));
  },
  formatDate: function() {
    var date = "No Due Date";
    if (this.get('month') && this.get('year')) {
      date = this.get('month') + '/' + this.get('year');
    }
    this.set("date", date);
  },
  
  initialize: function() {
    this.formatDate();
    this.on("change", this.formatDate.bind(this));
  }
});