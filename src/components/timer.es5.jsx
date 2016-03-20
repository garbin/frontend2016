module.exports = React.createClass({
  defaultProps: {
    unit:"秒",
    setp: 1000,
  },
  getInitialState: function(){
    return {
      interval: 1
    };
  },
  componentDidMount: function () {
    this.timer = setInterval(()=>{
      this.setState({interval:this.state.interval + 1});
    }, this.props.step);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  render: function () {
    var interval = this.state.interval;
    var unit     = this.props.unit;
    var style = {
      color:"black",
      height:"5em",
      fontSize:"3em",
      marginTop:"100px",
      lineHeight:"5em"
    };

    return <div style={style} className="timer">计时：{interval} {unit}</div>
  }
});
