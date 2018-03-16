var Filter = React.createClass({
    getDefaultProps: function () {
        return {
          
        };
    },
    getInitialState: function () {
        return {
        location:'',
        file_type:[],
        startDate:'',
        endDate:''
        };
    },
    mixins: [resizeMixin],

    render: function () {
        return (
            <div>
            
            </div>
        );
    }
});

window.Filter = Filter;