var Todos = Backbone.Collection.extend({
  model: Todo,
  checkID: function() {
    return this.length > 0 ? this.last().get('id') : 0;
  },
  nextID: function() {
    return this.last_id++;
  },
  completedList: function() {
    return this.toJSON().filter(function(todo) {
      return todo.completed;
    });
  },
  sortAllList: function() {
    var all = [];      
    if (this.length > 0) {
      this.filteredByDate(this.toJSON(), all); // remember to pass in the attributes
      all = this.sortDateList(all);
    }      
    return all;
  },
  sortCompletedList: function() {
    var completed = [];    
    if (this.length > 0) {
      var all_completed = this.completedList();     
      this.filteredByDate(all_completed, completed);
      completed = this.sortDateList(completed);
    }       
    return completed;
  },
  filteredByDate: function(source, result) {
    var temp_obj = {};
    source.forEach(function(item) {
      var date = item.date;
      temp_obj[date] = (temp_obj[date] || 0) + 1; 
    });
    
    for (var prop in temp_obj) {
      var by_date = {};
      by_date.date = prop;
      by_date.count = temp_obj[prop];  
      result.push(by_date);
    } 
  },
  sortDateList: function(source) {
    var result;
    result = source.filter(function(item) { 
      return item.date !== "No Due Date"; 
    }).sort(function(a, b) {
      if (Number(a.year) < Number(b.year)) {
        return -1;
      } else {
        if (Number(a.year) > Number(b.year)){
          return 1;
        } else {
          if (Number(a.month) < Number(b.month)) {
            return -1;
          }                        
          if (Number(a.month) > Number(b.month)) {
            return 1;
          }                        
          return 0;
        }
      }
    });
    var no_date = source.filter(function(el) {
      return el.date === "No Due Date";
    });
    return source = no_date.concat(result);   // no date at top   
  },
  readStorage: function() {
    var todos = JSON.parse(localStorage.getItem('todo_items'));
    if (todos) { this.set(todos) }
  },
  initialize: function() {
    this.readStorage();
    this.last_id = this.checkID();
    this.on("update change", App.indexView.bind(App));
    this.on("update change", this.sort);
    this.comparator = "completed";
    this.sort();
  }
});