var FormView = Backbone.View.extend({
  el: ".modal-section",
  template: App.templates.form,
  duration: 400,
  events: {    
    "submit #form": "saveForm",
    "click .complete": "markComplete",
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
    (this.model) ? this.updateTodo($f) : this.createTodo($f);
    this.closeForm();
  },
  createTodo: function($f) {    
    var item = this.getFormObject($f);
    item.id = App.todos.nextID();
    App.todos.add(item);
  },
  updateTodo: function($f) { 
    var item = this.getFormObject($f);
    this.model.set(item);
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
  markComplete: function(e) {
    e.preventDefault();
    if (this.model) {
      this.model.set("completed", true);
      this.closeForm();
    } else {
      alert("Your item doesn't exist yet.\nPlease complete and save the Todo first!");
    }
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