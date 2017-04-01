var SidebarView = Backbone.View.extend({
  tagName: "nav",
  attributes: {
    class: "nav-left"
  },
  template: App.templates.sidebar,
  events: {
  },
  render: function() {
    this.$el.html(this.template({
      todos: this.collection.sortAllList(),
      total: this.collection.length,
      completes: this.collection.sortCompletedList(),
      completed_total: this.collection.completedList().length
    }));
    this.$el.appendTo(App.el.find(".left-column"));
  },
  initialize: function() {
    this.render();
  }
});