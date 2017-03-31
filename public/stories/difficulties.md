1. Formview
- Orginally create new form view. Found it difficult to close it from index since
  we can access form from "add" and "edit"
- solution: put the modal and modal layer into modal section
- need to define `el: ".modal-section"`, instead of `el: $(".modal-section")` 
  as this part is not defined in layout
- change `this.$el` to `$(".modal")` in open and close methods
- since I want to pass the model's data in form view in editing mode, change 
  form.hbs to pass in "if"