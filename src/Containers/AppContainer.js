import {connect} from 'react-redux';
import {increaseCounter, zeroCounter, decreaseCounter} from '../Actions/actions';
import App from '../App';

const mapDispatchToProps = {
    addClick: increaseCounter,
    decreaseClick: decreaseCounter,
    zeroClick: zeroCounter
}

const mapStateToProps = (state) => {
    return {
        clicks: state.clicks
    }
}

 

export default connect(mapStateToProps, mapDispatchToProps)(App);