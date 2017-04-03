1. Formview
- Orginally create new form view. Found it difficult to close it from index since
  we can access form from "add" and "edit"
- solution: put the modal and modal layer into modal section
- need to define `el: ".modal-section"`, instead of `el: $(".modal-section")` 
  as this part is not defined in layout
- change `this.$el` to `$(".modal")` in open and close methods
- since I want to pass the model's data in form view in editing mode, change 
  form.hbs to pass in "if"

2. Ghost View When Submitting Form
- App will create multiple todo items after you open form on existing items by 
  simply closing the form
- Solution: Add `this.undelegateEvents();` in closeForm method, ensure no events
  attached to the view

3. Navigation part
- We should be able to navigate the todo list by selecting dates on the left
- Should we put this function on the app level or the seidebar view?
- How do we implement this feature? How to set default active class for All todos?
- Remember index view has been separated from sidebar view
- Add `$(".alltodos a").eq(0).click();` in sideview's render method creates  
  "Uncaught RangeError: Maximum call stack size exceeded"