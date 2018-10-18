import PropTypes from "prop-types";
import { Component } from "react";
import Star from "./star";

class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStars: this.props.selectedStars
        }

        this.change = this.change.bind(this);
    }

    change(selectedStars) {
        this.setState({ selectedStars: selectedStars }); // updates part of the state object, another props won't be updated.
    }

    render() {
        let { totalCount } = this.props;
        let { selectedStars } = this.state;

        return (
            <div className="rating">
                <div className="stars clearfix">
                    {
                        [...new Array(totalCount)].map((starIndex, i) => {
                            return (
                                <Star
                                    key={i}
                                    selected={i < selectedStars}
                                    onClick={() => this.change(i + 1)}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <p>Selected {selectedStars} of {totalCount} stars.</p>
                </div>
            </div>
        )
    }
}

StarRating.propTypes = {
    totalCount: PropTypes.number,
    selectedStars: (props, propName, componentName) => {
        let selectedStars = props[propName],
            totalCount = props.totalCount;

        if (typeof (selectedStars) !== 'number')
            return new Error(`${propName} in ${componentName} should be a number.`);

        if (selectedStars < 0 || selectedStars > totalCount)
            return new Error(`${propName} in ${componentName} should be a between 0 and ${totalCount}.`);

        return null;
    }
}

StarRating.defaultProps = {
    totalCount: 5,
    selectedStars: 0
};

export default StarRating;