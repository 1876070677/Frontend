# React를 이용하여 Front 해보기!!

## 1. Naver 로그인 페이지 클론코딩([SourceCode](https://github.com/1876070677/Frontend/tree/main/src/naver), [WebPage](https://blog.shbox.kr/login))
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

### 문제파악 및 해결과정
1. State를 이용하여 유저 정보를 저장하려고 하였음 -> 상위 컴포넌트에 저장된 state를 하위 컴포넌트가 사용하기 위해서는 상속이 필요함
    -> React-Redux를 이용하면 Provider를 이용하여 특정 요소들이 한꺼번에 사용할 수 있는 Store를 생성할 수 있음 -> 사용방식의 어려움, 너무 많은 미들웨어, 코드의 복잡함으로 인해 Redux-Toolkit으로 교체
    -> 현재 Redux-Toolkit으로 필요한 정보들의 집합 Slice를 만들고, 그 Slice들을 하나로 합쳐서 Store를 생성하였음 -> 유저의 기본 정보를 저장함(nickname) or 코드에서 변화를 감지하기 위한 변수들을 저장
2. React에서 Style 지정을 원래 하던대로 하면 문제가 생김 -> 컴포넌트 단위로 관리해야하는데 똑같은 클래스명이 있으면 꼬이게 됨 -> Styled-Component를 이용하여 관리
    -> 랜더링 될 때 클래스명이 랜덤으로 지정됨
3. 처음에는 클래스형 컴포넌트로 구현하였음 -> 현재 참고할 수 있는 자료들과 대부분이 hook이라고 하여 함수를 이용하여 컴포넌트를 제작할 수 있게 되었음 -> 사용이 훨씬 용이함, 생명주기에 영향을 받지 않음
4. 로그인은 간단하게 할 수 있으나, 프론트에서 로그인을 유지할 수 있는 기술이 필요하였음 -> 현재 개발중인 서버에서 jwt 토큰을 생성하도록 작성
5. Access-Token의 경우 만료시간을 짧게 하고, Refresh-Token은 만료시간을 길게 하여 구현, Refresh-Token만으로는 사용자 인증을 받을 수 없음. access-token이 만료되어야지만 Refresh-Token을 제시하여
   사용자 인증을 받을 수 있음.
6. 굉장히 많은 시간을 고민하였던 것인데, token 보관장소가 문제가 되었음. cookie와 local storage 둘 중에 고민하였는데 결과적으로는 Access-Token은 만료시간을 짧게하여 cookie에 보관,
   Refresh-Token은 만료시간을 길게하여 local storage에 보관하였음
   1. access-token : httpOnly와 Secure 속성을 주어서 보안을 강화하였음. 만료시간이 매우 짧음(15m)
   2. refresh-token : 탈취되어도 access-token이 없으면 아무 의미가 없기에 만료시간을 길게 주고 local storage에 담았음
   3. !!중요한점!! : refresh-token이 유효한지 판단은 어떻게 하는가?
      1. 처음에 토큰을 발급받을 때, refresh-token의 경우 사용자의 DB에 같이 담음 -> access-token이 만료되어 refresh-token을 프론트가 서버에게 건내게 되는데 이 때 사용자의 DB에 있는 refresh-token
         과 비교하여 일치하는지 유효성을 검증함(refresh-Token에 따로 정보를 담지 않기 때문에, 사용자가 로그인 시에 발급받은 토큰이 맞는지 확인하기 위하여 이런 과정을 중간에 삽입함)
7. 도커에 서버와 프론트를 올리고 원래의 서버에서 역프록시로 도커의 컨테이너 로컬 포트를 연결하였음. 그리고 와일드카드 ssl 인증서를 발급받아 적용하였음. https 통신으로는 보안이 꽤 안전하다고 생각함.
   하지만 네이버나 카카오 등 자체 로그인 시스템이 있는 곳에서는 RSA 비대칭 암호화 기법을 사용한다고 함 -> 사용자가 로그인 or 회원가입을 할 때 공개키로 암호화를 하여 서버에 전달하면 서버는 개인키로
   복호화를 하는 형태 -> 현재 나의 프론트는 로그인 시 평문을 전송하고 있음 -> react와 node.js에서 동시에 사용할 수 있는 RSA 모듈(라이브러리)를 찾아야함.

## 2. 포트폴리오 페이지 제작()
### 기능
    - 방명록
    - 로그인, 로그아웃, 회원가입
    - 사진 업로드 or 동영상
    - 애니메이션 모션 사용

### 문제점
    + Fade in, Fade out 효과 적용하기
    + SetTimeOut or SetInterval 이용하여 일정시간 이후에 자동으로 Element 전환효과 주기