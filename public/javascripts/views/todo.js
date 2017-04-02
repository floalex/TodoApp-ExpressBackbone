var TodoView = Backbone.View.extend({
  tagName: "tr",
  attributes: function() {
    // Return model data
    return {
      "data-id": Number(this.model.get('id'))      
    };
  },
  template: App.templates.todo,
  events: {
    "click a#edit-form": "openEdit",
    "click .list-item": "toggleComplete",
  },
  openEdit: function() {
    new FormView({ model: this.model });
    return false;
  },
  toggleComplete: function(e) {
    this.model.toggle();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    if (this.model.get("completed")) {
      this.$el.toggleClass("itemcompleted");
      this.$el.find(":checkbox").prop("checked", true);
      this.$el.appendTo(App.el.find("#item-area"));
    } else {
      this.$el.prependTo(App.el.find("#item-area"));
    }
  },
  initialize: function() {
    this.render();
    this.model.view = this;
    this.listenTo(this.model, "remove", this.remove);
  },
});