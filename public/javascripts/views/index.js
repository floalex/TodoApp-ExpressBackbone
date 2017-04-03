var IndexView = Backbone.View.extend({
  attributes: {
    id: "index"
  },
  template: App.templates.index,
  events: {
    "click #add-todo": "openBlankForm",    
  },
  openBlankForm: function(e) {
    e.preventDefault();
    new FormView();
  },
  render: function() {
    this.$el.html(this.template({
      selected_title: App.selected_title,
      selected_count: App.selected_count
    }));
    App.el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});