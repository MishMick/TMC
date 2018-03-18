var eventEmitter = new EventEmitter();

var Browser = React.createClass({
    componentWillMount: function () {
        eventEmitter.addListener("reload", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("reload", this.reloadData);
    },
    reloadData: function (defaultValue) {
        console.info("Reload data called on Browser card");
    },
    render:function(){
        return (
            <div>
                <h3>Browser Share</h3>
                <div className="pad bottom-left-svg">
                    <DonutChart id="bs_chart" padAngle={0.03}/>
                </div>
            </div>
        )
    }
});

var RetVisitors = React.createClass({
    componentWillMount: function () {
        eventEmitter.addListener("reload", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("reload", this.reloadData);
    },
    reloadData: function (defaultValue) {
        console.info("Reload data called on RetVisitors card");
    },
    render:function(){
        return (
            <div>
                <h3>Returning Visitors</h3>
                <div className="pad bottom-right-svg">
                    <ProgressChart />
                    <br/>
                    <BarChart />
                </div>
            </div>
        )
    }
});

var Visitors = React.createClass({
    getInitialState: function () {
        return {
           data : [
               { day: '02-01-2016', count: 18 },
               { day: '02-02-2016', count: 12 },
               { day: '02-03-2016', count: 15 },
               { day: '02-04-2016', count: 14 },
               { day: '02-05-2016', count: 14 },
               { day: '02-06-2016', count: 16 },
               { day: '02-07-2016', count: 18 },
               { day: '02-08-2016', count: 19 },
               { day: '02-09-2016', count: 20 },
               { day: '02-10-2016', count: 21 },
               { day: '02-11-2016', count: 22 },
               { day: '02-12-2016', count: 23 },
               { day: '02-13-2016', count: 21 },
               { day: '02-14-2016', count: 22 },
               { day: '02-15-2016', count: 14 },
               { day: '02-16-2016', count: 18 },
               { day: '02-17-2016', count: 10 },
               { day: '02-18-2016', count: 15 },
               { day: '02-19-2016', count: 18 },
               { day: '02-20-2016', count: 22 },
               { day: '02-21-2016', count: 12 },
               { day: '02-22-2016', count: 10 },
               { day: '02-23-2016', count: 14 },
               { day: '02-24-2016', count: 13 },
               { day: '02-25-2016', count: 23 },
               { day: '02-26-2016', count: 11 },
               { day: '02-27-2016', count: 22 },
               { day: '02-28-2016', count: 12 },
               { day: '02-29-2016', count: 15 }
           ]
        };
    },
    componentWillMount: function () {
        eventEmitter.addListener("reload", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("reload", this.reloadData);
    },
    reloadData: function (defaultValue) {
        console.info("Reload data called on Visitors card", defaultValue);
        this.setState({data:[
            { day: '02-01-2016', count: 18 },
            { day: '02-02-2016', count: 12 },
            { day: '02-03-2016', count: 15 },
            { day: '02-04-2016', count: 14 },
            { day: '02-05-2016', count: 14 },
            { day: '02-06-2016', count: 16 },
            { day: '02-07-2016', count: 18 },
            { day: '02-08-2016', count: 19 },
            { day: '02-09-2016', count: 20 },
            { day: '02-10-2016', count: 21 },
            { day: '02-11-2016', count: 22 }
        ]})
    },
    render:function(){
        return (
            <div>
                <h3>Visitors to your site</h3>
                <div className="bottom-right-svg">
                    <LineChart data={this.state.data}/>
                </div>
            </div>
        )
    }
});

var Filter = React.createClass({
    
    getDefaultProps: function () {
        return {

        };
    },
    getInitialState: function () {
        return {
            location: '',
            file_type: [],
            startDate: '',
            endDate: '',
            data:[
                { day: '02-01-2016', count: 18 },
                { day: '02-02-2016', count: 12 },
                { day: '02-03-2016', count: 15 },
                { day: '02-04-2016', count: 14 },
                { day: '02-05-2016', count: 14 },
                { day: '02-06-2016', count: 16 },
                { day: '02-07-2016', count: 18 },
                { day: '02-08-2016', count: 19 },
                { day: '02-09-2016', count: 20 },
                { day: '02-10-2016', count: 21 },
                { day: '02-11-2016', count: 22 },
                { day: '02-12-2016', count: 23 },
                { day: '02-13-2016', count: 21 },
                { day: '02-14-2016', count: 22 },
                { day: '02-15-2016', count: 14 },
                { day: '02-16-2016', count: 18 },
                { day: '02-17-2016', count: 10 },
                { day: '02-18-2016', count: 15 },
                { day: '02-19-2016', count: 18 },
                { day: '02-20-2016', count: 22 },
                { day: '02-21-2016', count: 12 },
                { day: '02-22-2016', count: 10 },
                { day: '02-23-2016', count: 14 },
                { day: '02-24-2016', count: 13 },
                { day: '02-25-2016', count: 23 },
                { day: '02-26-2016', count: 11 },
                { day: '02-27-2016', count: 22 },
                { day: '02-28-2016', count: 12 },
                { day: '02-29-2016', count: 15 }
            ]
        };
    },
    mixins: [resizeMixin],
    handleLocationChange: function() {
        eventEmitter.emitEvent("reload",this.state.data);
    },
    render: function () {
        return (
            <div className="filterDiv">
                <form className="filterOptions">
                    <h4>File types</h4>
                    <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="apple" /><h5>Apple</h5>
                    <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="orange" /><h5>Orange</h5>
                    <input onChange={this.handleFileTypeChange} type="checkbox" name="file_type" value="watermelon" /><h5>Watermelon</h5>
                    <br/>
                    <h4>Location</h4>
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="London" /><h5>London</h5>
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="Paris" /><h5>Paris</h5>
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="New York" /><h5>New York</h5>
                    <br/>
                    <h4>Date range</h4>
                    <input name="startDate" type="date" placeholder="Date" value=""/> <h5>to</h5>
                    <input name="endDate" type="date" placeholder="mm/DD/YYYY" value="" /> 
                </form>
            </div>
        )
    }
});

var Dashboard = React.createClass({
    // DATA LOADING HAPPENS HERE
    getDefaultProps: function () {
        return {

        };
    },
    getInitialState: function () {
        return {
            data: [
                { day: '02-01-2016', count: 18 },
                { day: '02-02-2016', count: 12 },
                { day: '02-03-2016', count: 15 },
                { day: '02-04-2016', count: 14 },
                { day: '02-05-2016', count: 14 },
                { day: '02-06-2016', count: 16 },
                { day: '02-07-2016', count: 18 },
                { day: '02-08-2016', count: 19 },
                { day: '02-09-2016', count: 20 },
                { day: '02-10-2016', count: 21 },
                { day: '02-11-2016', count: 22 },
                { day: '02-12-2016', count: 23 },
                { day: '02-13-2016', count: 21 },
                { day: '02-14-2016', count: 22 },
                { day: '02-15-2016', count: 14 },
                { day: '02-16-2016', count: 18 },
                { day: '02-17-2016', count: 10 },
                { day: '02-18-2016', count: 15 },
                { day: '02-19-2016', count: 18 },
                { day: '02-20-2016', count: 22 },
                { day: '02-21-2016', count: 12 },
                { day: '02-22-2016', count: 10 },
                { day: '02-23-2016', count: 14 },
                { day: '02-24-2016', count: 13 },
                { day: '02-25-2016', count: 23 },
                { day: '02-26-2016', count: 11 },
                { day: '02-27-2016', count: 22 },
                { day: '02-28-2016', count: 12 },
                { day: '02-29-2016', count: 15 }
            ]
        };
    },
    mixins: [resizeMixin],
 
    render: function () {
        return (
            <div className="row">
            <div className="col-xs-3">
                <div className="top-left" id="filter">
                    <Filter/>
                </div>
            </div>
            <div className="col-xs-9">
                <div className="top-right" id="top-line-chart">
                    <Visitors/>
                </div>
            </div>
            <div className="col-xs-5">
                <div className="bottom-left" id="browser">
                    <Browser/>
                </div>
            </div>
            <div className="col-xs-4">
                <div className="bottom-right" id="ret_visitors">
                    <RetVisitors/>
                </div>
            </div>
            </div>
        )
    }
});
// Single entry point for application
ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));






