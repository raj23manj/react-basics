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
    * Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the      component, well, state from within. Changes to state also trigger an UI update.
    * state is only available class based components that inherit from  Component from react 
    * state is use to make changes from within a component
    * if state changes it refreshes the dom like in ember(notify all) and angular() 

  * Difference between Props and State
    * Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. The           difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from        outside!  

# Commands
  * new project 
    * create-react-app react-complete-guide --scripts-version 1.1.5
  * npm start  