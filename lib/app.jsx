var eventEmitter = new EventEmitter();

var FileSource = React.createClass({
    componentWillMount: function () {
        eventEmitter.addListener("reload", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("reload", this.reloadData);
    },
    reloadData: function (defaultValue) {
    },
    render:function(){
        return (
            <div>
                <h3>Files' source</h3>
                <div className="pad bottom-left-svg">
                    <DonutChart id="bs_chart" padAngle={0.03}/>
                </div>
            </div>
        )
    }
});

var AboveSLAPercent = React.createClass({
    getInitialState: function () {
        return {
            data: this.props.initialData,
            SLA: this.props.SLA,
        };
    },
    componentWillMount: function () {
        eventEmitter.addListener("EVENT_START_DATE_CHANGE", this.reloadData);
        eventEmitter.addListener("EVENT_END_DATE_CHANGE", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("EVENT_START_DATE_CHANGE", this.reloadData);
        eventEmitter.removeListener("EVENT_END_DATE_CHANGE", this.reloadData);
    },
    calcProgress : function (data) {
        let percent = 0;
        var defaultCount = 0;
        for (var index = 0; index < this.state.data.length; index++) {
            if (this.state.data[index].count > this.props.SLA[0].count) {
                percent = ++defaultCount / this.state.data.length;
            }
        }
        return Number.parseFloat(percent).toPrecision(2);
    },
    reloadData: function (range, value) {
        if (range === 'start') {
            this.setState({
                data: this.state.data.filter(elem => new Date(value) <= new Date(elem.day))
            })
        }
        else if (range === 'end') {
            this.setState({
                data: this.state.data.filter(elem => new Date(elem.day) <= new Date(value))
            })
        }
       this.calcProgress(this.state.data);
    },
    render:function(){
        return (
            <div>
                <h3>Files above SLA</h3>
                <div className="pad bottom-right-svg">
                    <ProgressChart data={this.calcProgress(this.state.data)} SLA={this.state.SLA}/>
                    <br/>
                    {/*
                    <BarChart />
                    */}
                </div>
            </div>
        )
    }
});

var FilesGraph = React.createClass({
    getInitialState: function () {
        return {
           data:this.props.initialData
        };
    },
    componentWillMount: function () {
        eventEmitter.addListener("EVENT_START_DATE_CHANGE", this.reloadData);
        eventEmitter.addListener("EVENT_END_DATE_CHANGE", this.reloadData);
    },
    componentWillUnmount: function () {
        eventEmitter.removeListener("EVENT_START_DATE_CHANGE", this.reloadData);
        eventEmitter.removeListener("EVENT_END_DATE_CHANGE", this.reloadData);
    },
    reloadData: function (range,value) {
    
        if(range === 'start'){
            this.setState({
                data: this.state.data.filter(elem => new Date(value) <= new Date(elem.day))
            })
        }
        else if(range === 'end'){
            this.setState({
                data: this.state.data.filter(elem => new Date(elem.day) <= new Date(value))
            })
        }
    },
    render:function(){
        return (
            <div>
                <h3>Files</h3>
                <div className="top-right-svg">
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
            startDate: this.props.startDate,
            endDate: this.props.endDate,
        };
    },
    mixins: [resizeMixin],
    handleStartDateChange: function (e) {
        this.setState({
           startDate: e.target.value
        })
        eventEmitter.emitEvent("EVENT_START_DATE_CHANGE",['start',e.target.value]);
    },
    handleEndDateChange: function (e) {
        this.setState({
            endDate: e.target.value
        })
        eventEmitter.emitEvent("EVENT_END_DATE_CHANGE",['end',e.target.value]);
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
                    <br/>
                   
                    <h4>Location</h4>
                    <div className="col-xs-12">
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="London" /><h5>London</h5>
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="Paris" /><h5>Paris</h5>
                    <input onChange={this.handleLocationChange} type="radio" name="location" value="New York" /><h5>New York</h5>
                    </div>
                    <br/>
                    <br/>
                  
                    <h4>Date range</h4>
                    <div className="col-xs-10">
                    <input className="form-control" onChange={this.handleStartDateChange} id="startDate" name="startDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.startDate}/> <h5>to</h5>
                    <input className="form-control" onChange={this.handleEndDateChange} id="endDate" name="endDate" type="date" min={this.props.startDate} max={this.props.endDate} value={this.state.endDate} /> 
                    </div>
                    </div>
                </form>
            </div>
        )
    }
});

var Dashboard = React.createClass({
    // DATA LOADING HAPPENS HERE
    getDefaultProps: function () {
        return {
            data: [
                { day: '2016-02-01', count: 18 },
                { day: '2016-02-02', count: 12 },
                { day: '2016-02-03', count: 15 },
                { day: '2016-02-04', count: 14 },
                { day: '2016-02-05', count: 14 },
                { day: '2016-02-06', count: 16 },
                { day: '2016-02-07', count: 18 },
                { day: '2016-02-08', count: 19 },
                { day: '2016-02-09', count: 20 },
                { day: '2016-02-10', count: 21 },
                { day: '2016-02-11', count: 22 },
                { day: '2016-02-12', count: 23 },
                { day: '2016-02-13', count: 21 },
                { day: '2016-02-14', count: 22 },
                { day: '2016-02-15', count: 14 },
                { day: '2016-02-16', count: 18 },
                { day: '2016-02-17', count: 10 },
                { day: '2016-02-18', count: 15 },
                { day: '2016-02-19', count: 18 },
                { day: '2016-02-20', count: 22 },
                { day: '2016-02-21', count: 12 },
                { day: '2016-02-22', count: 10 },
                { day: '2016-02-23', count: 14 },
                { day: '2016-02-24', count: 13 },
                { day: '2016-02-25', count: 23 },
                { day: '2016-02-26', count: 11 },
                { day: '2016-02-27', count: 22 },
                { day: '2016-02-28', count: 12 },
                { day: '2016-02-29', count: 15 }
            ],
            SLA: [
                { count: 19}
            ]
        };
    },
    getInitialState: function () {
        return {
            
        };
    },
    mixins: [resizeMixin],
 
    render: function () {
        return (
            <div className="row">
            <div className="col-xs-3">
                <div className="top-left" id="filter">
                    <Filter startDate={this.props.data[0].day} endDate={this.props.data[this.props.data.length-1].day}/>
                </div>
            </div>
            <div className="col-xs-9">
                <div className="top-right" id="top-line-chart">
                    <FilesGraph initialData={this.props.data}/>
                </div>
            </div>
            <div className="col-xs-5">
                <div className="bottom-left" id="fileSourceGraph">
                    <FileSource/>
                </div>
            </div>
            <div className="col-xs-4">
                <div className="bottom-right" id="aboveSLAPercentGraph">
                    <AboveSLAPercent initialData={this.props.data} SLA={this.props.SLA}/>
                </div>
            </div>
            </div>
        )
    }
});
// Single entry point for application
ReactDOM.render(<Dashboard />, document.getElementById("dashboard"));






