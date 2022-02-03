export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function }
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = []
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn]
    this.notify()
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action)
    this.notify()
  }

  private notify() {
    this.subscribers.forEach(fn => {
      // console.log("fn :: ", fn);
      // console.log("value :: ", this.value);
      // console.log("fn(value) :: ", fn(this.value));
      return fn(this.value)
    })
  }

  private reduce(state, action) {
    const newState = {};
    console.log("action :: ", action);
    for (const prop in this.reducers) {
      // console.log("prop", prop)
      // console.log("state", state)
      // console.log("state[prop]", state[prop])

      newState[prop] = this.reducers[prop](state[prop], action);
    }
    console.log("newState ", newState);
    return newState;
  }

}