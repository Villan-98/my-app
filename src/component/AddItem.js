import React,{Component} from 'react'
class AddItem extends Component{
    constructor(){
        super()
        this.state={
            item:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        alert("A item was submitted")
        console.log(this.state.item)
        this.props.addItem(this.state.item)
    }
    handleChange(event){
        const name=event.target.name
        this.setState({[name]:event.target.value});
       // console.log(this.state.item)
    }
    render(){
        return(
            <div className="addItem">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Add Item:
                        <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default AddItem