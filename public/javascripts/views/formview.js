var FormView = Backbone.View.extend({
  el: ".modal-section",
  template: App.templates.form,
  duration: 400,
  events: {    
    "click .modal-layer": "closeForm",
  },
  open: function() {
    $(".modal").css({
      top: $(window).scrollTop() + 200
    });
    $(".modal").add($(".modal-layer")).fadeIn(this.duration);
  },
  closeForm: function(e) {
    e.preventDefault();
    this.fadeOut();
  },
  fadeOut: function(e) {
    $(".modal-layer").stop().fadeOut(this.duration);
    $(".modal").stop().fadeOut(this.duration, function() {
      $(".modal").remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template(
      (this.model) ? this.model.toJSON() : new Todo()
    ));
    this.open();
  },
  initialize: function() {
    this.render();
  },
});