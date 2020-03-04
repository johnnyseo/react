import React, { Component } from 'react';
import CounterContainer from './CounterListContainer';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';
import * as actions from '../actions';
import Buttons from '../components/Buttons';

class App extends Component {
    render() {
        const { onCreate, onRemove }  =this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove} />
                <CounterContainer />
            </div>
            
        );
    }
}

// 액션함수
const MapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
})

// 리덕스 연결시키고 내보냄
export default connect(null, MapToDispatch)(App);