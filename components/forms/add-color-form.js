import {Component} from "react"

class AddColorForm extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e){
        const {_title, _color} = this.refs;
        e.preventDefault();
        alert(`New color: ${_title.value} ${_color.value}`);
        _title.value = '';
        _color.value = "#000000";
        _title.focus();
    }

    render(){
        return (
            <form onSubmit={this.submit}>
                <div>
                    <input ref="_title" type="text" placeholder = "color title..." required />
                </div>
                <div>
                    <input ref="_color" type="color" required />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        )
    }
}

export default AddColorForm;