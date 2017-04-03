var App = {
  templates: JST,
  el: $(".column"),
  indexView: function() {
    this.renderSidebar();
    // this.index = new IndexView({ collection: this.todos });
    this.bindEvents();
  },
  // addSelectedTodos: function() {
  //   this.selected_todos.each(this.addOne);
  // },
  // addAllTodos: function() {
  //   this.todos.each(this.addOne);
  // },
  // addOne: function(todo) {
  //   new TodoView({
  //     model: todo
  //   });
  // },
  renderSidebar: function() {
    this.sideView = new SidebarView({
      collection: this.todos
    });
  },
  navigateTodos: function($current) {
    var date_name = $.trim($current.find("a").text());
    var is_completed = $current.closest("ul").is($(".completed"));
    var todos = $current.closest("ul").is($(".alltodos"));

    if (date_name === "All Todos") {
      this.selected_todos = this.todos.toJSON();
      this.index = new IndexView({ collection: this.todos });

    } else if (date_name === "Completed") {
      this.selected_todos = this.todos.completedList();
      this.index.render();
      
    } else if (is_completed) {      
      this.selected_todos = this.todos.completedList().filter(function(todo) {
        return todo.date === date_name;
      });
      this.index.render();
      
    } else if (todos) {
      this.selected_todos = this.todos.toJSON().filter(function(todo) {
        return todo.date === date_name;
      });
      this.index.render();
    }
  },
  setStorage: function() {
    localStorage.setItem('todo_items', JSON.stringify(this.todos.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    $(window).on("unload", this.setStorage.bind(this));
  }
};