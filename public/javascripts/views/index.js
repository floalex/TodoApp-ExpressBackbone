var IndexView = Backbone.View.extend({
  attributes: {
    id: "index"
  },
  template: App.templates.index,
  events: {
    "click #add-todo": "openBlankForm",
    "click .modal-layer": "closeForm",
  },
  openBlankForm: function(e) {
    e.preventDefault();
    this.form = new FormView();
  },
  closeForm: function(e) {
    e.preventDefault();
    this.form.fadeOut();
  },
  render: function() {
    this.$el.html(this.template());
    App.el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});