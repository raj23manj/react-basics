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
    * can be used only once to manage the states
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
      * unlike class, can be used multiple times 
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

  * Stateful and Stateless
    * Stateful: containers, smartComponent
      * as class based  
      * when need to manage states, use state, useState
    * Stateless: presentational, dumb components
      * used when no state is managed
      * Use this more

  * Passing Method Reference like ember & Binding
    * pass in as props  
    * to pass arguments to function call use bind(this, ...)  
      * .bind(this, 'july')

  * Important Links
    * https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8145390#overview   

  * To Use media queries and pseudo class (:hover), we need to add 'Radium' package or 'Styled-components'
    * need to wrap export with Radium(App), and the entire application in app.js with 'StyleRoot'   

  * Life Cycles
    * availabe only in class based components
      * During Creation
        * constructor(props) -> 1st ()
        * getDerivedStateFromProps(props, state) -> 2nd (props change)
        * render() => then all child and their lifecycle hooks get called -> 3rd
        * componentDidMount() -> triggers re-render, used for async calls, http calls, side-effects(data changing)
          not for updating state. It gets called after child components gets rendered

      * During Updation(props or state changes occur)       
       * getDerivedStateFromProps(props, state)
       * shouldComponentUpdate(nextProps, nextState) => check wheter or not to continue
         * use this if we want to check specific propps changed, if want to change when all props change then extend class from PureComponent
       * render()
       * and then updates child components
       * getSnapshotBeforeUpdate(prevProps, prevState) => used for like restore scrolling position
       * componentDidUpdate() => after dom updated
         * updating a state from this hook causes a infinite loop
         * cause setState() causes a trigger to this hook again, we need to handle it
 
      * componentDidCatch()
      * componentWillUnmount() => not used, instead of this use constructor to load initial data
        * used in burger error handler

  * React Update Dom
    * It does by creating virtual dom of old and changed in memory compare them, if there are changes in the actual dom is touched and updates only the parts which has changes, when render encounters
    * shouldComponentUpdate => is used to control   

  * When rendering an array of elements as individual components it is important  to pass key to it, see persons componenet rendering person component    
     

# Commands
  * new project 
    * create-react-app react-complete-guide --scripts-version 1.1.5
  * npm start  

# Adding SASS/SCSS
  * https://medium.com/@oreofeolurin/configuring-scss-with-react-create-react-app-1f563f862724  

# Folder Structure
  * src -> components
    * used to keep dumb component, i.e stateless components
  * src -> containers
    * used to keep components which manage states, class based or function based(useState). which encloses other function 
      components  
  * src -> assets
    * to store logos  
  * src -> hoc
    * to create higher order components

# Prop Type Validation
  * npm i --save prop-types      

# The way this keyword works is different when we use
  * demo = () => {
    this.something  // this encloses contextthis of the class
  }  

  * demo = function() {
    this.something  // this does not
  }

 # Performance impovements (182-188)
   * Added prop type validations to each components(can be used for both class or function based components)
   * Make sure hidden modals dont get updated 184
   * can use React.memo to make sure re-rendering does not happen in functional components, or else use shouldComponenUpdate hook
   * Custom Notes:
     * Make sure to give key prop if a list of element or divs when looping. it matters
   * See 196 for lifecycle update when to use, see mainly 5:16 to use  componentDidUpdate() issue which will be caused 
   
 # A component can be class or function 
   * see OrderSummary.js  

 # Axios (3rd party library) 
   * https://github.com/axios/axios#interceptors
   * to make XMLHttp requests, http
   * used for intercepting requests also
   * used to create interceptors, in scr -> index.js file
   * if want to override, the create a axios.js file and override it there and include in the package you want to use it
   * 204

# Absolute and Relative Paths
  You learned about <Link> , you learned about the to  property it uses.

  The path you can use in to can be either absolute or relative. 

  Absolute Paths
  By default, if you just enter to="/some-path"  or to="some-path" , that's an absolute path. 

  Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to example.com/some-path .

  Relative Paths
  Sometimes, you might want to create a relative path instead. This is especially useful, if your component is already loaded given a specific path (e.g. posts ) and you then want to append something to that existing path (so that you, for example, get /posts/new ).

  If you're on a component loaded via /posts , to="new"  would lead to example.com/new , NOT example.com/posts/new . 

  To change this behavior, you have to find out which path you're on and add the new fragment to that existing path. You can do that with the url  property of props.match :

  <Link to={props.match.url + '/new'}>  will lead to example.com/posts/new  when placing this link in a component loaded on /posts . If you'd use the same <Link>  in a component loaded via /all-posts , the link would point to /all-posts/new .

  There's no better or worse way of creating Link paths - choose the one you need. Sometimes, you want to ensure that you always load the same path, no matter on which path you already are => Use absolute paths in this scenario.

  Use relative paths if you want to navigate relative to your existing path.

 # Route Params, Fragments, Query Params, history
   * https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8140669#questions
   * Query Params
     <Link to="/my-path?start=5">Go to Start</Link>
     or 
     <Link 
            to={‌{
                pathname: '/my-path',
                search: '?start=5'
            }}
            >Go to Start</Link>


     componentDidMount() {
          const query = new URLSearchParams(this.props.location.search);
          for (let param of query.entries()) {
              console.log(param); // yields ['start', '5']
          }
      }  

      URLSearchParams  is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries()  method

    * Fragments  
      * <Link to="/my-path#start-position">Go to Start</Link>
      * props.location.hash

    * history - 236
      * used to change route programatically

# Route Guards - 234
  * used to know when the user is authenticated or not     

# Lazy Loading - 245
  * see 246 for newer versions of lazy loading
  * same as angular
  * to implement lazy loading or code splitting with create react app react-router-4 with webpack config

# AUX Component
  * from react 16.6 onwards there is a built component React.Fragment instead of creating one manually

# When Hoisting or deploying
  * 247
  * Always need to load index.html for the web server to reach react app, in development it is default in prod 
    we need to set it up  

# Redux
  * Reducer
    * it is the one which updates the state. It take's an old state and action as arguments
  * Store
    * creates a global js store object to store the state
  * Dispatching Action
    * what action needs to be done, like increment or decrement. An payload can be sent
  * Subscription
    * all components subsscribed to this will be updated  

  * Correct way of adding and deleting nested data
    * https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8303068#questions   
    * https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/

  * When to use Redux  
    * 298
    * Use redux if data is used across components
    * Using Local and UI data

# Authentication SPA
  * https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3  