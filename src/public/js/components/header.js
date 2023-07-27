import g from "../common/common.js";

function logout() {
  const token = g.getCookie("loginToken");

  if (token) {
    g.deleteCookie("loginToken");
    window.alert("로그아웃 되었습니다.");
    g.redirectUserPage("/");
  }
}

function header() {
  const token = g.getCookie("loginToken");
  let header = `
        <header>
            <div class="logo">
              <a href="/">☕️ Elice Coffee</a>
            </div>
            <nav>
              <ul class="gnb">
                <li class="dropdown">
                  <a href="/product?categoryId=country">추천원두</a>
                </li>
                <li class="dropdown">
                  <a href="/product?categoryId=blend">원두커피</a>
                </li>
                <li class="dropdown">
                  <a href="/product?categoryId=drip">드립커피</a>
                </li>
                <li class="dropdown">
                  <a href="/product?categoryId=supplies">커피용품</a>
                </li>
              </ul>
            </nav>
            <div class="info">
              <ul class="user-nav">
              ${
                token
                  ? `<li><a href='/mypage' class='btn btn-cart'></a></li>
                  <li><a href='/cart' class='btn btn-user'></a></li>
                  <li><a id='login-control-btn' href="/login">로그아웃</a></li>`
                  : `<li><a id='login-control-btn' href='/login'>로그인</a></li>`
              }
                
              </ul>
            </div>
          </header>
    `;
  return header;
}

export { header, logout };
