export default class TimerES6 extends React.Component {
  static get defaultProps(){
    return {
      unit:"秒"
    };
  }
  constructor(props){
    super(props);
    this.state = {
      interval: 1
    };
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState({interval: this.state.interval+1});
    }, this.props.step);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render(){
    var {interval} = this.state;
    var {unit}     = this.props;
    var style = {
      color:"black",
      height:"5em",
      fontSize:"3em",
      marginTop:"100px",
      lineHeight:"5em"
    };
    return <div style={style} className="timer">计时：{interval} {unit}</div>
  }
}
