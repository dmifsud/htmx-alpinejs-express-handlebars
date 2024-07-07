const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Set the path to your views directory
app.set('views', __dirname + '/views');

// Serve static files from the public directory
app.use(express.static('public'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample todos array
let todos = [
  { id: 1, task: 'Learn Express.js', done: false },
  { id: 2, task: 'Learn Mustache.js', done: false },
  { id: 3, task: 'Learn HTMX', done: false },
  { id: 4, task: 'Learn Alpine.js', done: false }
];

// Route to render the index page
app.get('/', (req, res) => {
    res.render('index', { todos: todos });
});

// Route to handle adding new todos
app.post('/add', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task, done: false };
  todos.push(newTodo);
  res.render('partials/todo', { layout: false, ...newTodo });
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(200).end();
});

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.map((todo) => todo.id === +id ? { ...todo, task: req.body.task, done: !!req.body.done }: todo);
  const updatedTodo = todos.find(todo => todo.id === +id);
  res.render('partials/todo', { layout: false, ...updatedTodo });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
