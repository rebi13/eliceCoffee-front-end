import { validateRegex } from "/constants/index.js"; // 정규표현식
import { makeTemplate } from "./common/template.js";
import g from "./common/common.js";
import Api from "./common/api.js";

const content = `
  <main>
    <section class="signin-page account">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="block text-center">
                        <h2 class="text-center">회원가입</h2>
                        <form id="form" class="text-left clearfix">
                            <div class="form-group form-flex">
                                <input type="text" class="form-control"  placeholder="아이디" id="userId">
                                <button type="button" class="btn btn-small text-center" id="idDuplicateButton">중복확인</button>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control"  placeholder="비밀번호" id="userPwd">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control"  placeholder="비밀번호 재확인" id="userPwdChk">
                                </div>
                            <div class="form-group">
                                <input type="text" class="form-control"  placeholder="이름" id="userName">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control"  placeholder="이메일 | test@example.com" id="userEmail">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control"  placeholder="전화번호 | 000-0000-0000" id="userTel">
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-main text-center" id="signinButton">가입하기</button>
                            </div>
                        </form>
                        <p class="mt-20">이미 계정이 있으신가요?<a href="/login" class="textCoffee"> 로그인</a></p>
                        <!-- <p><a href="forget-password.html">비밀번호를 잊으셨나요?</a></p> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
  </main>
`;

const body = document.querySelector("body");
makeTemplate(body, content);

const idInput = document.querySelector("#userId");
const pwInput = document.querySelector("#userPwd");
const pwChkInput = document.querySelector("#userPwdChk");
const nameInput = document.querySelector("#userName");
const emailInput = document.querySelector("#userEmail");
const phoneInput = document.querySelector("#userTel");

const signinButton = document.querySelector("#signinButton"); // 회원가입 버튼
const idDuplicateButton = document.querySelector("#idDuplicateButton"); // 아이디 중복체크 버튼
let idValidation = false; // 아이디 중복체크 통과상태

// 회원가입 유효성 검사
const regexCheck = () => {
  const id = idInput.value;
  const pw = pwInput.value;
  const pwChk = pwChkInput.value;
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  // 유효성 체크
  const idCheck = validateRegex.id.test(id);
  const pwdCheck = validateRegex.pw.test(pw);
  const pwdDoubleCheck = pw === pwChk;
  const emailCheck = validateRegex.email.test(email);
  const telCheck = validateRegex.tel.test(phone);

  if (!id) {
    alert("아이디를 입력해주세요.");
    return g.centerFocus(idInput.id);
  }

  if (!idCheck) {
    alert("아이디는 영소문자 및 숫자, 8자 이상 12자 이하로 입력해주세요.");
    return g.centerFocus(idInput.id);
  }

  // 아이디 중복체크
  if (!idValidation) {
    alert("아이디 중복확인이 필요합니다.");
    return g.centerFocus(idDuplicateButton.id);
  }

  if (!pw) {
    alert("비밀번호를 입력해주세요.");
    return g.centerFocus(pwInput.id);
  }

  // 유효성 검사
  if (!pwdCheck) {
    alert(
      "비밀번호는 최소 8자, 하나 이상의 대소문자와 숫자, 특수문자를 포함해야 합니다."
    );
    return g.centerFocus(pwInput.id);
  }

  if (!pwChk) {
    alert("비밀번호를 입력해주세요.");
    return g.centerFocus(pwChkInput.id);
  }

  if (!pwdDoubleCheck) {
    alert("비밀번호가 일치하지 않습니다.");
    return g.centerFocus(pwChkInput.id);
  }

  if (!name) {
    alert("이름을 입력해주세요.");
    return g.centerFocus(nameInput.id);
  }

  if (!email) {
    alert("이메일을 입력해주세요.");
    return g.centerFocus(emailInput.id);
  }

  if (!emailCheck) {
    alert("올바른 이메일 형식이 아닙니다. 다시 확인해주세요.");
    return g.centerFocus(emailInput.id);
  }

  if (!phone) {
    alert("전화번호를 입력해주세요.");
    return g.centerFocus(phoneInput.id);
  }
  if (!telCheck) {
    alert("올바른 전화번호 형식이 아닙니다. 다시 확인해주세요.");
    return g.centerFocus(phoneInput.id);
  }

  // 회원가입 정보
  const registerInfo = {
    id,
    pw,
    name,
    email,
    phone,
  };

  postRegister(registerInfo);
};

// 아이디창 데이터 변경 시
idInput.addEventListener("input", () => {
  idValidation = false; // 아이디 중복체크 통과상태 false로 변경
});

// 아이디 중복체크
const idDuplicateCheck = async (idInput) => {
  // const userId = userIdIFnput.value;
  const id = idInput.value;

  const idDupStatus = await Api.post("/auth/checkDupId", { id }); // 아이디 중복 상태값 받아오기

  // 아이디 중복체크
  if (idDupStatus.data) {
    idValidation = true; // 아이디 중복체크 통과
    alert("사용 가능한 아이디입니다.");
  } else {
    idValidation = false;
    alert("사용 불가능한 아이디입니다.");
  }
};

// 회원가입 데이터 전송
const postRegister = async (registerInfo) => {
  const res = await Api.post("auth/register", registerInfo);
  if (res.data) {
    g.redirectUserPage("/register-complete");
  }

  return;
};

idDuplicateButton.addEventListener("click", () => idDuplicateCheck(idInput)); // 중복체크 버튼
signinButton.addEventListener("click", function (event) {
  event.preventDefault();
  regexCheck();
}); // 회원가입 버튼

// 엔터키를 눌러도 회원가입이 가능하게 한다.
let form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  regexCheck();
});
