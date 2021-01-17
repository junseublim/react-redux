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

## Middleware

미들웨어는 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다. 
    - 전달받은 액션을 콘솔에 출력
    - 전달받은 액션 정보 기반으로 액션을 취소
    - 다른 종류의 액션을 추가로 디스패치
    
### redux-logger

미들웨어 라이브러리로 액션을 로그에 찍는 것을 편하게 도와준다.

### redux-thunk

비동기 작업을 처리할 때 사용하는 미들웨어이다. 객체가 아닌 함수 형태의 액션을 디스패치할 수 있게 해준다.

### Thunk란

Thunk는 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.

## redux-saga

redux-saga도 비동기 작업 관련 미들웨어이다. 이는 redux-thunk보다 좀 더 까다로운 상황에서 유용하다.
    - 기존 요청을 취소 처리해야 할 때(불필요한 중복 요청 방지)
    - 특정 액션이 발생했을 때 다른 액션을 발생시키거나, API 요청 등 리덕스와 관계없는 코드를 실행할때
    - 웹소켓을 사용할 떄
    - API 요청 실패 시 재요청해야 할 때

