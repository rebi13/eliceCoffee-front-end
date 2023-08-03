import { makeTemplate } from "./common/template.js";
import g from "./common/common.js";
import Api from "./common/api.js";

const loginHTML = `
    <main>
      <section class="signin-page account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="block text-center">
                        <h2 class="text-center">WELCOME ☕️ Elice Coffee</h2>
                        <form id="form" class="text-left clearfix" action="index.html">
                            <div class="form-group">
                                <input type="text" id="idInput" class="form-control" placeholder="아이디">
                            </div>
                            <div class="form-group">
                                <input type="password" id="passwordInput" class="form-control"
                                    placeholder="비밀번호">
                            </div>
                            <div class="text-center">
                                <button type="submit" id="submitButton" class="btn btn-main text-center">LOGIN</button>
                            </div>
                        </form>
                        <p class="mt-20">처음 이신가요 ? <a href="/register"> 회원가입</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
`;

const body = document.querySelector("body");
makeTemplate(body, loginHTML);

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // 이메일과 비밀번호 입력란의 값을 변수에 저장
    let userId = document.querySelector("#idInput"); //.value;
    let userPw = document.querySelector("#passwordInput"); //.value;

    // 입력 값이 조건에 맞지 않을 경우(공백) 사용자에게 알려주고 focus한다.
    if (!userId.value.trim()) {
      alert("아이디를 입력해주세요.");
      return g.centerFocus(userId.id);
    }

    if (!userPw.value.trim()) {
      alert("비밀번호를 입력해주세요.");
      return g.centerFocus(userPw.id);
    }

    // 입력 값이 조건에 맞을 경우, 로그인 처리를 진행합니다.
    // 로그인 처리를 완료한 후 메인 페이지로 이동합니다.
    postLogin(userId.value, userPw.value);
  });

// 엔터키를 눌러도 로그인이 가능하게 한다.
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  if (event.key === 13) {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});

const postLogin = async (id, pw) => {
  const res = await Api.post("auth/login", { id, pw });
  const login = await res.json();

  if (login.data.isLogin) {
    g.redirectUserPage("/");
  }

  return;
};
