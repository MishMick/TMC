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

                    <div className="col-xs-12">
                        <h4>File types</h4>
                            <div className="checkBoxGroup">
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="pnl_attrib" />PNL ATTRIB
                            </div>
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="mtm_cash" />MTM CASH
                            </div>
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="risq" />RISQ
                            </div>
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="new_trade" />NEW TRADE
                            </div>
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="flex_swap" />FLEX SWAP
                            </div>
                            <div className="row">
                            <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="amend" />AMEND
                            </div>
                            </div>
                        <hr />

                        <h4>Location</h4>
                        <div className="radioGroup">
                            <div className="row">
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="London" />London
                            </div>
                            <div className="row">
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="Paris" />Paris
                            </div>
                            <div className="row">
                            <input onChange={this.handleLocationChange} type="radio" name="location" value="New York" />New York
                            </div>
                        </div>
                        <hr />
                    
                        <h4>Date range</h4>
                       
                            <input className="form-control" onChange={this.handleStartDateChange} id="startDate" name="startDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.startDate} /> <h5>to</h5>
                            <input className="form-control" onChange={this.handleEndDateChange} id="endDate" name="endDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.endDate} />
  
                    </div>
                </form>
            </div>
        )
    }
});

window.Filter = Filter;