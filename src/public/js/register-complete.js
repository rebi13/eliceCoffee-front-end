import { makeTemplate } from "./common/template.js";

const content = `
            <main>
                <div class="container">
                    <div>
                        <img src="/assets/registerComplete.png">
                    </div>
                    <div class="text">
                        <p style="text-align: center;"><strong>회원가입이 완료되었습니다.</strong></p>
                    </div>
                    <div class="button">
                        <span>
                                <a class="btn-group" href="/">홈으로</a>
                                <a class="btn-group" href="/login">로그인</a>    
                        </span>
                    </div>
                </div>
            </main>
`;

const body = document.querySelector('body');
makeTemplate(body, content);
