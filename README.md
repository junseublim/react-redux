# Redux with React

## UI 준비하기

Presentational component와 container component를 분리하는 패턴을 사용한다. Presentational component란 상태 관리가 이루어지지 않고 props를 받아 화면에 UI를 보여주기만 하는 컴포넌트를 말한다.
Container component란 리덕스와 연동되어 있는 컴포넌트로 리더스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.

## Ducks Pattern

액션타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식. modules 디렉토리안에 기능별로 파일을 따로 만들어서 사용한다.
각 모듈 파일 안에서 액션 타입의 이름은 '모듈이름/액션 이름'과 같은 형태로 작성한다.
그 후 index.js라는 파일을 만들고 안에서 모든 리듀서들을 합치는 루트 리듀서를 만든다. 이는 combineReducer라는 유틸 함수로 할 수 있다.

## redux-actions

액션 생성 함수를 더 짧은 코드로 작성 할 수 있도록 도와주는 라이브러리. 리듀서를 작성할 때도 handleActions라는 함수를 사용해서 더 간편하게 만들 수 있다.
