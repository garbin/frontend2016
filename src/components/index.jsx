import {Link} from 'react-router';
import TimerES5 from './timer.es5';
// import TimerES6 from './timer.es6';
require('../style/app.less');

export default class Index extends React.Component {
  render(){
    // return <TimerES6 step={1000} />;
    return <TimerES5 step={1000} />;
  }
}
