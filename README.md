# React를 이용하여 Front 해보기!!

## 1. Naver 로그인 페이지 클론코딩([SourceCode](https://github.com/1876070677/Frontend/tree/main/src/naver), [WebPage](https://blog.shbox.shop))
    + Html 레이아웃 구성 방식
    + CSS 기본 태그 익히기
    + React에서 컴포넌트 단위로 나누어서 개발하는 방식(header, body, footer로 나누었음)
    + React에서 state를 이용한 동적 렌더링
    + React의 Styled-Component 를 이용하여 NudgeBanner 구현
    + React의 Ref를 이용하여 Input ID 부분의 AutoFocus를 적용 - Ref를 이용하여 Dom 객체에 직접 접근하는 것을 학습
    + 일부 클래스형 컴포넌트를 트렌드에 맞게 함수형 컴포넌트로 변경하였음
    + Redux-toolkit을 이용하여 props를 상속하지 않고 전체에서 자유롭게 사용가능하도록 만듬
    + react-dom-router를 이용하여 페이지 이동 구현
    + 실제 로그인 기능 구현(AccessToken : 쿠키/RefreshToken : Local Storage)
    + 통신 암호화(Https 통신, 쿠키 httponly & secure 설정)
    + (구현 예정) DB에 사용자 정보 암호화 및 현재 로그인시 평문전송(RSA 암호화...?)
    + 실제 네이버 로그인 사이트의 미디어 쿼리를 이용하여 반응형 웹사이트로 구현하였음
