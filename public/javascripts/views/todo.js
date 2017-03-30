var TodoView = Backbone.View.extend({
  tagName: "tr",
  attributes : function () {
    // Return model data
    return {
      "data-id" : this.model.get( 'item_id' )
    };
  },
  template: App.templates.todo,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.el.find("item-area"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
    this.listenTo(this.model, "remove", this.remove);
  },
});