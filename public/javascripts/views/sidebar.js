var SidebarView = Backbone.View.extend({
  el: $(".left-column"),
  template: App.templates.sidebar,
  events: {
    "click": "navigate"
  },
  navigate: function(e) {
    var $current = $(e.target).closest("li");
    var class_name = "active";
    $current.closest("nav").find("." + class_name).removeClass(class_name);
    $current.addClass(class_name);
    var title = $current.find(".title").text();
    var count = $current.find(".count").text();
    App.selected_title = title;
    App.selected_count = count;
    App.navigateTodos($current);
    return false;
  },
  render: function() {
    this.$el.html(this.template({
      todos: this.collection.sortAllList(),
      total: this.collection.length,
      completes: this.collection.sortCompletedList(),
      completed_total: this.collection.completedList().length
    }));
  },
  initialize: function() {
    this.render();
    $(".alltodos a").eq(0).click();
  }
});