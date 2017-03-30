var SidebarView = Backbone.View.extend({
  tagName: "nav",
  attributes: {
    class: "nav-left"
  },
  template: App.templates.sidebar,
  render: function() {
    this.$el.html(this.template({
      todos: this.collection.toJSON(),
      total: this.collection.length,
      completes: this.collection.completedList(),
      completed_total: this.collection.completedList().length
    }));
    this.$el.appendTo(App.el.find(".left-column"));
  },
  initialize: function() {
    this.render();
  }
});