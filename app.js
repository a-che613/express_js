const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.listen(3000);

app.use(express.static('public'));


app.get('/', (req, res) => {
  const advantages = [
    'Makes Node.js web application development fast and easy.',
    'Easy to configure and customize.',
    'Includes various middleware modules which you can use to perform additional tasks on request and response.',
    'Easy to integrate with different template engines like Jade, Vash, EJS etc.',
    'Easy to serve static files and resources of your application',
    'Allows you to create REST API server.',
    'Easy to connect with databases such as MongoDB, Redis, MySQL.'
  ]
  res.render('index', { title: 'LEARNING EXPRESS', title2: 'From Scratch', advantages});
});
app.get('/learnings', (req, res) => {
  res.render('learnings', { title: 'LEARNING EXPRESS', title2: 'From Scratch'});
});
app.get('/achievements', (req, res) => {
  const languages = [
    'JavaScript', 'Python', 'Flutter/Dart', 'HTML/CSS'
  ]
  res.render('achievements', { title: 'LEARNING EXPRESS', title2: 'From Scratch', languages});
});
app.get('/todo', (req, res) => {
  const todos = [
    'learn more about NoSQL, as well as SQL',
    'further my knowledge on Express, working with POST, PUT, DELETE and other Express packages',
    'Working with routes in Express'
  ]
  res.render('todo', { title: 'LEARNING EXPRESS', title2: 'From Scratch', todos});
});
app.get('/download', (req, res) => {
  res.render('download', { title: 'LEARNING EXPRESS', title2: 'From Scratch'});
});
// app.get('/code', (req, res) => {
//   res.sendFile('https://monkeytype.com/', { title: 'LEARNING EXPRESS', title2: 'From Scratch'});
// });
app.use((req, res) => {
  res.status(404).send('Page not found');
});