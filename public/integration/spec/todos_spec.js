describe('TodosList Tests', function() {

  it('Can add Model instances as objects and arrays.', function() {
    var todos = new Todos();

    expect(todos.length).toBe(0);

    todos.add({ title: 'Clean the kitchen' });

    // how many todos have been added so far?
    expect(todos.length).toBe(1);

    todos.add([
        { title: 'Do the laundry', completed: true },
        { text: 'Go to the gym'}
    ]);

    // how many are there in total now?
    expect(todos.length).toBe(3);
  });
});