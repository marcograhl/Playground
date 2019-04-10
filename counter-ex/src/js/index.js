import '../css/app.css';
// eslint-disable-next-line 
import { h, app } from './hyperapp';


// help 
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v,idx) => idx);//?
// [0, 1, 2, 3, 4]

//Getting the first 5
String.fromCharCode(...Array.from({ length: 5 }, (v, idx) => idx+64))//?

const createPassword = length =>
  String.fromCharCode(
    ...Array.from({ length }, () => Math.floor(Math.random() * 58) + 64) // @ to z
  )

const MIN = 8
const MAX = 24

// we dont need the state therefore we can write, because we dont nee to know what value the state was after changing
// const NewLength = (event) => event.target.value 
// the state before we manipulate the range is 8 and the value will get changes on input
// Both input elements are synchronized with the application state. This prevents the state from going out of sync if the user changes their value.
// The underscore just prevents the node to complain that we did not use the first argument(cause its not needed)
const NewLength = (_(state, event) => event.target.value

app({
  init: MIN,
  view: state => (
    <main>
      <input type="text" value={createPassword(state)} readonly />
      <input
        type="range"
        min={MIN}
        max={MAX}
        value={state}
        oninput={NewLength}
      />
    </main>
  ),
  container: document.body
})