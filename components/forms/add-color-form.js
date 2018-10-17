import {Component} from "react";
import PropTypes from "prop-types";

class AddColorForm extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.onNewColor = this.props.onNewColor;
    }

    submit(e){
        const {_title, _color} = this.refs;
        e.preventDefault();
        this.onNewColor(_title.value, _color.value);
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

AddColorForm.propTypes ={
    onNewColor: PropTypes.func,
}

export default AddColorForm;