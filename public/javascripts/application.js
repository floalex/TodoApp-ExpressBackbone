var App = {
  templates: JST,
  el: $(".column"),
  indexView: function() {
    this.renderSidebar();
    this.index = new IndexView({ collection: this.todos });
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
    // this.index.render();
    var date_name = $.trim($current.find("a").text());
    // var is_completed = $current.closest("ul").is($completes);
    // var todos = $current.closest("ul").is($all_todos);

    if (date_name === "All Todos") {
      this.selected_todos = this.todos.toJSON();
      // this.addSelectedTodos(); // this prevents edit and toggle complete
      // this.addAllTodos(); // this will make sure mark complete and edit works
      
    } else if (date_name === "Completed") {
      this.selected_todos = this.todos.completedList();
    } else if (is_completed) {
      this.todo_items.forEach(function(item) {
        item.date = this.formatDate(item);         
        var condition = (item.date === date_name) && item.complete_status;
        $items.filter("[data-id=" + item.id + "]").toggle(condition);
      });
      
    } else if (todos) {
      this.todo_items.forEach(function(item) {
        item.date = this.formatDate(item);          
        var condition = (item.date === date_name);
        $items.filter("[data-id=" + item.id + "]").toggle(condition);
      });
    }
    // this.index.render();
  },
  setStorage: function() {
    localStorage.setItem('todo_items', JSON.stringify(this.todos.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    $(window).on("unload", this.setStorage.bind(this));
  }
};