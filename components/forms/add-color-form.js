import { Component } from "react";
import PropTypes from "prop-types";
import StarRating from "../star-rating";

class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.onNewColor = this.props.onNewColor;
    }

    submit(e) {
        const { _title, _color } = this.refs;
        e.preventDefault();
        this.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = "#000000";
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div>
                    <input ref="_title" type="text" placeholder="color title..." required />
                </div>
                <div>
                    <input ref="_color" type="color" required />
                </div>
                <div>
                    <StarRating selectedStars={0} />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func,
}

AddColorForm.defaultProps = {
    onNewColor: f => f,
}

export default AddColorForm;

const AddColorFormStateless = ({onNewColor = f => f}) => {
    let _title, _color;
    
    const submit = e => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = "#000000";
        _title.focus();
    }

    return
        <form>
            <div>
                <input ref={input => _title = input} type="text" placeholder="...color title"/>
            </div>
            <div>
                <input ref={input => _colot = input} type="color" />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
}

AddColorFormStateless.propTypes = {
    onNewColor: PropTypes.func
};