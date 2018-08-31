console.log('App.js is running');

// JSX
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// e object contains various information about the events
const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }

};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");
const render = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'Options are currently empty'}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>What Should I do?</button>
      <button onClick={onRemoveAll}>Remove all Items</button>
      <ol>
      Below is JSX code to render content in array format, which is spit out onto the DOM thanks to react.
      {
         app.options.map((option) => {
          return <li key={option}>{option}</li>;
         })
      }
      </ol>
      
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button onSubmit={onFormSubmit}>Add Option</button>
      </form>
  
  
    </div>
  );

  ReactDOM.render(template, appRoot);

};

render();





