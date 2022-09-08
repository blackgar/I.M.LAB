## 홈 페이지

> 홈 페이지는 크게 3개의 파트로 나눌 수 있습니다.
>
> 1. 인기 영화 Top5 배너
> 2. 현재 상영중 영화 / 평점 높은 영화 / 개봉예정 영화 탭
> 3. 인기 영화 리스트

### 영화 목록 Summary 탭

- 홈 페이지에서 현재 상영중인 영화 / 평점 높은 영화 / 개봉예정 영화를 초기 데이터 각 20개씩 볼 수 있도록 구현
- 탭을 가로로 스크롤하면 끝에 전체 목록을 볼 수 있는 버튼을 추가
- 각 탭에 1시간으로 stale time을 설정해두어, 한 시간마다 캐시에 데이터 존재 여부와 상관없이 데이터가 갱신되도록 처리

### 인기 영화 목록

- 인기 영화를 20개씩 불러와 무한 스크롤 구현
- 반응형 UI를 적용

### 영화 목록 카드

- 영화 포스터에 커서를 올리면 영화의 제목 / 개봉일 / 장르 / 영화 설명을 볼 수 있음
- 애니메이션으로 부드러운 UI 구현
- 영화의 장르가 id값으로 넘어와, 사람이 읽을 수 있는 형태로 표시될 수 있도록 함수를 별도로 구현
- 영화 카드를 클릭하면 영화 상세 화면으로 이동 처리

----

### 신이재 회고록

- 이번에는 페이지 단위로 소단위로 팀을 나누어 동일한 페이지를 작업하는 방식을 채택했었는데, 작업 방식에 대해 논의하고 협업하는 과정이 재미있었다.
- 정해진 UI 디자인 시안이 없다보니, 자유롭게 스타일링을 구현해볼 수 있어 새롭게 배우게 된 것들이 많았다.