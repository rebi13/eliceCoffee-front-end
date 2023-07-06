const header = document.querySelector('#header');

const head = `
<h1>Elice Coffee</h1>

<nav class="py-2 bg-light border-bottom">
  <div class="container d-flex flex-wrap">
    <ul class="nav me-auto">
      <li class="nav-item">
        <a href="../home/home.html" class="nav-link link-dark px-2 active" aria-current="page">
          <img src="../img/coffee-emoji.png">
          Elice Coffee ☕️
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark px-2">
          마이페이지
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark px-2">
          주문목록
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link link-dark px-2">
          장바구니
        </a>
      </li>
    </ul>
    <ul class="nav">
      <li class="nav-item">
        <a href="../login/login.html" class="nav-link link-dark px-2">
          로그인
        </a>
      </li>
      <li class="nav-item">
        <a href="../register/register.html" class="nav-link link-dark px-2">
          회원가입
        </a>
      </li>
    </ul>
  </div>
  <form class="col-12 col-lg-auto mb-3 mb-lg-0">
    <input type="search" class="form-control" placeholder="다양한 커피를 검색해보세요!" aria-label="Search"></input>
  </form>
</nav>
`;

header.innerHTML = head;
