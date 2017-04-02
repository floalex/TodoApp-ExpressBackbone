var SidebarView = Backbone.View.extend({
  tagName: "nav",
  attributes: {
    class: "nav-left"
  },
  template: App.templates.sidebar,
  events: {
    "click .alltodos .completed li": "navigate"
  },
  navigate: function(e) {
    e.preventDefault();
    var $current = $(e.target).closest("li");
    var class_name = "active";
    $current.closest("nav").find("." + class_name).removeClass(class_name);
    $current.addClass(class_name);
    this.trigger("navigate_todos");
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