var FormView = Backbone.View.extend({
  el: ".modal-section",
  template: App.templates.form,
  duration: 400,
  events: {    
    "submit #form": "saveForm",
    "click .modal-layer": "closeForm",
  },
  getFormObject: function(form) {
    var item = {};    
    form.serializeArray().forEach(function(input) {
      item[input.name] = input.value;
    });    
    return item;
  },
  saveForm: function(e) {
    e.preventDefault();
    var $f = $(e.target);
    var id = Number($f.attr("data-id"));
    id ? this.updateTodo($f) : this.createTodo($f);
    this.closeForm();
  },
  createTodo: function($f) {    
    var item = this.getFormObject($f);
    item.id = App.todos.nextID();
    App.todos.add(item);
  },
  open: function() {
    $(".modal").css({
      top: $(window).scrollTop() + 200
    });
    $(".modal").add($(".modal-layer")).fadeIn(this.duration);
  },
  closeForm: function() {
    this.undelegateEvents(); // prevent ghost view
    $(".modal-layer").stop().fadeOut(this.duration);
    $(".modal").stop().fadeOut(this.duration, function() {
      $(".modal").remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template(
      (this.model) ? this.model.toJSON() : {}
    ));
    this.open();
  },
  initialize: function() {
    this.render();
  },
});