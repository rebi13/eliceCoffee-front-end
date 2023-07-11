import { orderData } from '../mock/order.js';
import { makeTemplate } from "./common/template.js";
import { deliveryStatus } from '../constants/index.js';
import g from './common/common.js';

/* 렌더링 로직 */
const body = document.querySelector("body");

function renderProduct() {
    return `
        <tr>
            <td>
                <img src="../../../assets/thumbnail/brazil-cerrado.jpg" alt="제품사진" />
            </td>
            <td class="product-info">
                <a href="#">나이키</a>
                <p>[ 옵션: 200g ]</p>
            </td>
            <td>3</td>
            <td>150원</td>
        </tr>
    `;
}

function renderOrder(orderData) {
    const { orderId, items, status, itemTotal, orderDate } = orderData;
    const totalPrice = itemTotal.toLocaleString();
    const displayDate = g.formatDate(orderDate);

    return `
        <div class="block">
            <h4 class="widget-title">${displayDate} (${orderId})</h4>
            <p class="status">${deliveryStatus[status]}</p>
            <table class="table">
                <colgroup>
                    <col style="width: 27px">
                    <col style="width: auto">
                    <col style="width: 75px">
                    <col style="width: 98px">
                </colgroup>
                <thead>
                    <tr>
                        <th></th>
                        <th>제품명</th>
                        <th>수량</th>
                        <th>결제 금액</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map((item) => renderProduct(item)).join("")}
                </tbody>
            </table>
            <div class="footer text-right">
                <p class="total-price">총액 : ${totalPrice}원</p>
                <div>
                    <a href="order.html" class="btn btn-default">주문수정</a>
                    <button class="btn btn-default cancelBtn" disabled>주문취소</button>
                </div>
            </div>
        </div>
    `;
}

{/* <table>
        <colgroup>
            <col style="width:27px">        <!--체크박스-->
            <col style="width:100px">       <!--이미지-->
            <col style="width:auto">        <!--상품정보-->
            <col style="width:98px">        <!--판매가-->
            <col style="width:75px">        <!--수량-->
            <col style="width:85px">        <!--배송비-->
            <col style="width:110px">       <!--합계-->
        </colgroup>
        <thead class="cart-product-header">
            <tr>
                <th scope="col"><input id="select-all-header" type="checkbox"></th>
                <th scope="col">이미지</th>
                <th scope="col">상품정보</th>
                <th scope="col">판매가</th>
                <th scope="col">수량</th>
                <th scope="col">배송비</th>
                <th scope="col">합계</th>
            </tr>
        </thead>
        <tbody>
            <!-- 장바구니 리스트 시작 -->
        <tr>
                <td>
                    <input type="checkbox" class="product-checkbox-input">
                </td>
                <td>
                    <a href="#">
                        <img class="cart-product-image" src="../../assets/thumbnail/brazil-cerrado.jpg" alt="브라질 세라도">
                    </a>
                </td>
                <td class="cart-product-info">
                    <a href="#">Brazil Cerrado</a>
                    <p>[ 옵션: 200g ]</p>
                </td>     
                <td>3,400원</td>
                <td>
                    <div class="cart-count">
                        <input type="text" size="1" value="1" id="cart-count-input">
                        <span class="cart-count-button">
                            <img src="	https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" alt="수량증가">
                            <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" alt="수량감소">
                        </span>
                    </div>
                </td>
                <td>3,000원</td>
                <td id="product-amount">3,400원</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" class="product-checkbox-input">
                </td>
                <td>
                    <a href="#">
                        <img class="cart-product-image" src="../../assets/thumbnail/brazil-santos.jpg" alt="브라질 세라도">
                    </a>
                </td>
                <td class="cart-product-info">
                    <a href="#">Brazil Santos</a>
                    <p>[ 옵션: 300g ]</p>
                </td>     
                <td>3,200원</td>
                <td>
                    <div class="cart-count">
                        <input type="text" size="1" value="1" id="cart-count-input">
                        <span class="cart-count-button">
                            <img src="	https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" alt="수량증가">
                            <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" alt="수량감소">
                        </span>
                    </div>
                </td>
                <td>3,000원</td>
                <td id="product-amount">3,200원</td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" class="product-checkbox-input">
                </td>
                <td>
                    <a href="#">
                        <img class="cart-product-image" src="../../assets/thumbnail/colombia-supremo.jpg" alt="브라질 세라도">
                    </a>
                </td>
                <td class="cart-product-info">
                    <a href="#">colombia-supremo</a>
                    <p>[ 옵션: 400g ]</p>
                </td>     
                <td>5,500원</td>
                <td>
                    <div class="cart-count">
                        <input type="text" size="1" value="3" id="cart-count-input">
                        <span class="cart-count-button">
                            <img src="	https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" alt="수량증가">
                            <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" alt="수량감소">
                        </span>
                    </div>
                </td>
                <td>3,000원</td>
                <td id="product-amount">16,500원</td>
            </tr>
        </tbody>
    </table> 
*/}

function render(orderData) {
    return `
        <main>
            <section class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content">
                                <h1 class="page-name">주문 목록</h1>
                                <ol class="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active">주문 목록</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="user-dashboard page-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="dashboard-wrapper user-dashboard">
                                <div class="table-responsive">
                                    ${renderOrder(orderData)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `;
}

makeTemplate(body, render(orderData));

/* 일반 함수 */
function validateCancel(status) {
    const isCancelable = !(
        deliveryStatus[status] === "배송중" || 
        deliveryStatus[status] === "배송완료"
    );
    
    return isCancelable;
}

function cancelOrder() {
    // 데모
    const product = {
        id: 1,
        status: "shipping"
    }

    // shipping, deliveryComplete인 경우 alert
    if (!validateCancel(product.status)) {
        alert("이미 배송이 시작되어 주문 취소가 불가합니다.");
        return;
    }

    // 배송준비중
    if (deliveryStatus[product.status] === "배송준비중") {
        alert("상품을 준비중이어서 관리자의 승인 여부에 따라 취소가 불가할 수 있습니다.");
        return;
    }

    alert("주문이 취소되었습니다.");
}

// 테스트용
const cancelBtns = document.querySelectorAll('.cancelBtn');
cancelBtns.forEach((btn) => btn.addEventListener('click', cancelOrder));

// 테스트 코드
// console.log(validateCancel("shipping")); // false
// console.log(validateCancel("preparing")); // true