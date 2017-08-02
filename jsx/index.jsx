var destination = document.querySelector("#container");

var Counter = React.createClass({
    render:function () {
        var textStyle = {
            fontSize:28,
            fontWeight:"bold"
        };

        return(
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
});

var CounterParent = React.createClass({
    getInitialState:function () {
        return{
            count:0
        };
    },

    increase:function (e) {
        this.setState({
            count:this.state.count +1
        });
    },

    disincrease:function (e) {
        this.setState({
           count:this.state.count -1
        });
    },

    refersh:function (e) {
        this.setState({
            count:0
        });
    },
    render:function () {
        var backgroundStyle = {
            padding:50,
           /* textAlign:"center"*/
        };

        var addButtonStyle = {
            fontSize:"1em",
            fontWeight:"bold",
            width:"50px",
            height:"30px",
            margin:"5px"
        };

        /*var cutButtonStyle = {
            fontSize :"1em",
            fontWeight:"bold",
            width:"50px",
            height:"30px"
        };

        var refershButtonStyle = {
            fontSize :"1em",
            fontWeight:"bold",
            width:"50px",
            height:"30px"
        };*/

        return(
            <div style={backgroundStyle}>
                <Counter display = {this.state.count}/>
                <button onClick={this.increase} style={addButtonStyle}>+</button>
                <button onClick={this.disincrease} style={addButtonStyle}>-</button>
                <button onClick={this.refersh} style={addButtonStyle}>刷新</button>
            </div>
        );
    }

});

ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    destination
);