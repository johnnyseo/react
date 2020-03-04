import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color : 'black',
            number: 0
        }
    ]    
}


function counter(state = initialState, action){
    // 레퍼런스 생성
    const { counters } = state;

    switch(action.type){
        //카운터 생성
        case types.CREATE : 
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        // slice 를 이용하여 맨 마지막 카운터를 제외
        case types.REMOVE : 
            return {
                counters: counters.slice(0, counters.length -1)
            };
        // action.index 번째 카운터의 number 에 1 을 더합니다.
        case types.INCREMENT : 
            return  {
                counters: [
                    ...counters.slice(0, action.index),             // 0 ~ action.index 사이의 아이템들을 잘라와서 이 자리에 넣는다
                    {
                        ...counters[action.index],                  // 기존 값은 유지하면서
                        number: counters[action.index].number + 1   // number 값을 덮어쓴다 
                    },
                    ...counters.slice(action.index + 1, counters.length)    // action.index + 1 ~ 마지막까지 잘라온
                ]  
            };
        case types.DECREMENT : 
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1 
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR :
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
            
        default : 
            return state;
        
    }
};


export default counter;