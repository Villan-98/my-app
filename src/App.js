import React, { Component } from 'react';
import AddItem from './component/AddItem'
class App extends Component {
    constructor(){
        super()
        this.state={
            todo:['sachin']
        }
    }
    handleAddItem(item){
        let abc=this.state.todo
        abc.push(item)
        this.setState({
            todo:abc
        },(()=>{

            console.log(this.state.todo)
        }))
    }
  render() {
    return (
      <div className="App">
          My app
          <AddItem addItem={this.handleAddItem.bind(this)}/>

        </div>
    );
  }
}

export default App;
