// Simple Task Manager - Functional Programming Style

// Pure function to create initial state
const createTaskManager = () => ({
  tasks: [],
  nextId: 1
});

// Pure function to create a task
const createTask = (id, title, description) => ({
  id,
  title,
  description,
  completed: false,
  createdAt: new Date()
});

// Pure function to add a task
const addTask = (manager, title, description) => ({
  ...manager,
  tasks: [...manager.tasks, createTask(manager.nextId, title, description)],
  nextId: manager.nextId + 1
});

// Pure function to complete a task
const completeTask = (manager, taskId) => ({
  ...manager,
  tasks: manager.tasks.map(task =>
    task.id === taskId ? { ...task, completed: true } : task
  )
});

// Pure function to filter pending tasks
const getPendingTasks = (manager) =>
  manager.tasks.filter(task => !task.completed);

// Pure function to filter completed tasks
const getCompletedTasks = (manager) =>
  manager.tasks.filter(task => task.completed);

// Pure function to get all tasks
const getAllTasks = (manager) => manager.tasks;

// Usage example with function composition
let state = createTaskManager();
state = addTask(state, 'Buy groceries', 'Milk, eggs, bread');
state = addTask(state, 'Finish report', 'Complete quarterly report');
state = addTask(state, 'Exercise', '30 minutes cardio');
state = completeTask(state, 1);

console.log('Pending:', getPendingTasks(state));
console.log('Completed:', getCompletedTasks(state));
console.log('Total tasks:', getAllTasks(state).length);
