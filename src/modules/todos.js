import {createAction, handleActions} from 'redux-actions';
import produce from 'immer'

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}))
//파라미터 그냥 id만 넣어줘도 됨. 위에 insert와 구조를 맞추기 위해 함수 형태로 넣어준 것
export const toggle = createAction(TOGGLE, id =>id);
export const remove = createAction(REMOVE, id =>id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text : '리액트와 리덕스 사용하기',
            done: false
        }
    ]
}

const todos = handleActions(
    {
        [CHANGE_INPUT] : (state, {payload : input}) => (
            //produce는 immer에서 제공하는 함수로, 객체가 깊은 경우 
            //불변성을 지키면서 state를 업데이트할 때 유용
            produce(state, draft => {
                draft.input = input;
            })
        ),
        [INSERT]: (state, {payload : todo}) => 
            produce(state, draft => {
                draft.todos.push(todo)
            }),
        [TOGGLE]: (state, {payload : id}) => 
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]:(state, {payload : id}) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            })
    },
    initialState
)

export default todos;