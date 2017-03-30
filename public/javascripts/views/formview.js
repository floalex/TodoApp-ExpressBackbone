var FormView = Backbone.View.extend({
  attributes: {
    class: "modal",
  },
  template: App.templates.form,
  duration: 400,
  events: {    
  },
  open: function() {
    this.$el.css({
      top: $(window).scrollTop() + 200
    });
    this.$el.add($(".modal-layer")).fadeIn(this.duration);
  },
  fadeOut: function(e) {
    $(".modal-layer").stop().fadeOut(this.duration);
    this.$el.stop().fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template(
      (this.model) ? this.model.toJSON() : new Todo()
    ));
    this.open();
  },
  initialize: function() {
    this.$el.appendTo(App.el.find("#index"));
    this.render();
  },
});