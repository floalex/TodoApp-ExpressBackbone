var App = {
  templates: JST,
  el: $(".column"),
  indexView: function() {
    this.index = new IndexView();
    this.addAllTodos();
    this.renderSidebar();
    this.bindEvents();
  },
  addAllTodos: function() {
    this.todos.each(this.addOne);
  },
  addOne: function(todo) {
    new TodoView({
      model: todo
    });
  },
  renderSidebar: function() {
    this.sideView = new SidebarView({
      collection: this.todos
    });
  },
  setStorage: function() {
    localStorage.setItem('todo_items', JSON.stringify(this.todos.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    $(window).on("unload", this.setStorage.bind(this));
  }
};