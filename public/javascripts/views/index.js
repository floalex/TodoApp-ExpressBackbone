var IndexView = Backbone.View.extend({
  el: $(".main-section"),
  template: App.templates.index,
  events: {
    "click #add-todo": "openBlankForm",
    "click a#edit-form": "openEdit",
    "click .list-item": "toggleComplete",
    "click .delete": "deleteItem"
  },
  getTodoId: function(e) {
    return Number($(e.target).closest("tr").attr("data-id"));
  },
  openBlankForm: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    new FormView();
  },
  openEdit: function(e) {
    e.stopImmediatePropagation();
    var id = this.getTodoId(e);
    new FormView({ model: this.collection.get(id) });
  },
  toggleComplete: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var model = this.collection.get(this.getTodoId(e));
    model.toggle();
  },
  deleteItem: function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var result = confirm("Are you sure you want to delete this contact?");
    var id = this.getTodoId(e);
    if (result) {
      this.collection.remove(id);
    } 
  },
  render: function() {
    this.$el.html(this.template({
      selected_title: App.selected_title,
      selected_count: App.selected_count,
      todos: App.selected_todos
    }));
    App.selected_todos.forEach(function(model) {
      if (model.completed) {
        var $todo = $("#item-area").find("tr").filter("[data-id=" + model.id + "]");
        $todo.toggleClass("itemcompleted");
        $todo.find(":checkbox").prop("checked", true);
      }
    });
  },
  initialize: function() {
    this.render();
  }
});