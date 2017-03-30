var App = {
  templates: JST,
  el: $(".column"),
  indexView: function() {
    this.index = new IndexView();
    this.renderTodos();
    this.renderSidebar();
    this.bindEvents();
  },
  renderTodos: function() {
    this.todos.each(this.renderTodoView);
  },
  renderTodoView: function(todo) {
    new TodoView({
      model: todo
    });
  },
  renderSidebar: function() {
    this.sideView = new SidebarView({
      collection: this.todos
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
  }
};