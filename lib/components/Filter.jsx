var Filter = React.createClass({

    getDefaultProps: function () {
        return {

        };
    },
    getInitialState: function () {
        return {
            location: '',
            file_type: [],
            startDate: this.props.startDate,
            endDate: this.props.endDate,
        };
    },
    mixins: [resizeMixin],
    handleStartDateChange: function (e) {
        this.setState({
            startDate: e.target.value
        })
        eventEmitter.emitEvent("EVENT_START_DATE_CHANGE", ['start', e.target.value]);
    },
    handleEndDateChange: function (e) {
        this.setState({
            endDate: e.target.value
        })
        eventEmitter.emitEvent("EVENT_END_DATE_CHANGE", ['end', e.target.value]);
    },
    render: function () {
        return (
            <div className="filterDiv">
                <form className="filterOptions">
                    <div className="col-cs-12">

                        <h4>File types</h4>
                        <div className="col-xs-10">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="apple" /><h5>Apple</h5>
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="orange" /><h5>Orange</h5>
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="watermelon" /><h5>Watermelon</h5>
                        </div>
                        <br />

                        <h4>Location</h4>
                        <div className="col-xs-12">
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="London" /><h5>London</h5>
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="Paris" /><h5>Paris</h5>
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="New York" /><h5>New York</h5>
                        </div>
                        <br />
                        <br />

                        <h4>Date range</h4>
                        <div className="col-xs-10">
                            <input className="form-control" onChange={this.handleStartDateChange} id="startDate" name="startDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.startDate} /> <h5>to</h5>
                            <input className="form-control" onChange={this.handleEndDateChange} id="endDate" name="endDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.endDate} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
});

window.Filter = Filter;