const header = document.querySelector('#header');

const head = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <a class="navbar-brand" href="../home/home.html">☕️ Elice Coffee</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="../login/login.html">로그인</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../register/register.html">회원가입</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          마이페이지
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="../mypage/list/mypage-list.html">나의 정보</a>
          <a class="dropdown-item" href="../mypage/order/mypage-order.html">주문목록</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="../cart/cart.html">장바구니</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">로그아웃</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="다양한 커피를 검색해보세요!" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">검색</button>
    </form>
  </div>
</nav>
`;

header.innerHTML = head;
