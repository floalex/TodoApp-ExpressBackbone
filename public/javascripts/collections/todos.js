var Todos = Backbone.Collection.extend({
  model: Todo,
  checkID: function() {
    return this.length > 0 ? this.last().get('id') : 0;
  },
  nextID: function() {
    return this.last_id++;
  },
  completedList: function() {
    return this.filter(function(todo) {
      return todo.get('completed');
    });
  },
  readStorage: function() {
    var todos = JSON.parse(localStorage.getItem('todo_items'));
    if (todos) { this.set(todos) }
  },
  initialize: function() {
    this.readStorage();
    this.last_id = this.checkID();
    this.on("update change", App.indexView.bind(App));
    this.on('update change', this.sort);
    this.comparator = 'completed';
    this.sort();
  }
});