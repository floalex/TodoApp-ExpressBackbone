var IndexView = Backbone.View.extend({
  el: $(".main-section"),
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
  },
  initialize: function() {
    this.render();
  }
});