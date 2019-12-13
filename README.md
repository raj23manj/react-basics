# react-basics
  * build workflow to compile(babel is used with presets) the features so that all browsers can support new feauters of JS
  * webpack is ab bunlder to consolidate all the code at one place, allows to mention steps
  
  * index.js
    * it is the starting point to the app
      * ReactDOM.render(<App />, document.getElementById('root'));
    * only one index.html page  
  * registerServiceWorker
    * pre cache's all the script files

  * jsx
    * javascript with html  

  * best practice is to wrap all elements in one root element per component like a inside a div
    * multiple is also possible using json  

  * Props
    * props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

  * state
    * use this. to access as it is a class
    * Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the      component, well, state from within. Changes to state also trigger an UI update.
    * state is only available class based components that inherit from  Component from react 
    * state is use to make changes from within a component
    * if state changes it refreshes the dom like in ember(notify all) and angular() 
    * this.setState({})
      * used t0 manipulate the state, we need to pass what property of the object needs to change, it then merges(overrides) with    the state object. i'e it replaces the old state completetl

  * react Hooks(16.8 +)
    * can be used in normal function with out calss based definition to handle states just like class
    * useState
      * returns array with two elements
        * 1st element => current state with changed array and one old array
        * 2nd element => a function that updates the state, i'e react is aware of it and re-render the component
      * when updating the state here (see App.js) it does not merge like class does, the other propertis in the object or hash
        get left out. We need to manually add the other properties  

  * Difference between Props and State
    * Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. The           difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from        outside!  

  * Supported Events By React
    * https://reactjs.org/docs/events.html#supported-events
    * https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8124210#overview  

  *   

# Commands
  * new project 
    * create-react-app react-complete-guide --scripts-version 1.1.5
  * npm start  