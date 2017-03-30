var Todos = Backbone.Collection.extend({
  model: Todo,
  completedList: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },
});