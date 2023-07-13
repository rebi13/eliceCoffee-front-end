import { API_END_POINT } from "/constants/index.js";
import { makeTemplate } from "/js/common/template.js";
import g from '/js/common/common.js';




const productId = (window.location.pathname).split('/')[2];     // 마지막 pathname 
const API_URL = `${API_END_POINT}/products/${productId}`;

fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        let result = data.data;
        console.log(result);

            
    
        const body = document.querySelector('body');
        makeTemplate(body, productContent(result));

        const tbody = document.querySelector('tbody');
        document.querySelector('#product-option').addEventListener('change', function () {

            tbody.insertAdjacentHTML('beforeend', addItem(result));

            quantityInput = document.querySelector('#option-count-input');
            quantityButton = document.querySelector('.option-count-button');
            quantityIncreaseButton = quantityButton.firstElementChild;
            quantityDecreaseButton = quantityButton.lastElementChild;
            // console.log(quantityButton);
            
        });
        quantityIncreaseButton.addEventListener('click', increaseQuantity(result.price));
        quantityDecreaseButton.addEventListener('click', decreaseQuantity(result.price));
            
    }) 
    
let quantityInput = ""; 
let quantityButton = "";
let quantityIncreaseButton = "";
let quantityDecreaseButton = "";


// 상품정보
function productContent (data) {

    const { categoryId, id, description, keyWord, name, price, option, mainImage, subImage, _id } = data;

    const mainImgSrc = `/assets/thumbnail/${ categoryId }/${ id }/${ mainImage }`;
    const subImgSrc1 = `/assets/thumbnail/${ categoryId }/${ id }/${ subImage[0] }`;
    const subImgSrc2 = `/assets/thumbnail/${ categoryId }/${ id }/${ subImage[1] }` || '';
    let totalPrice = 0;

    let keyword = '';
    keyWord.forEach( e => {
        keyword += `#${e}`;
    })

    return `
        <section class="single-product">
        <div class="container">

            <div class="product-info row mt-20">
                <!-- 사진 -->
                <div class="col-md-5">
                    <div class="single-product">
                        <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
                            <div class='carousel-outer'>
                                <!-- me art lab slider -->
                                <div class='carousel-inner '>
                                    <div class='item active'>
                                        <img src='${ mainImgSrc }'
                                            style="width: 100%; height: auto;" alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 상품 정보 -->
                <div class="col-md-7">
                    <div class="buy-wrapper">
                        <div class="buy-scroll-box">
                            <h2 class="item_name">${ name }</h2>
                            <p class="taste">
                                #${ description }<br>
                                ${ keyword }
                            </p>
                            <!-- 상품명 -->
                            <div style="border-top: 1px solid #ccc; padding-top: 10px;">
                                <div class="color displaynone"></div>
                            </div>
                            <div class="product-detail-list mb-4">
                                <dl>
                                    <dt>판매가</dt>
                                    <dd id="product-price">${ g.setParseStringAmount(price) }원</dd>
                                </dl>
                                <dl>
                                    <dt>적립금</dt>
                                    <dd>${ g.setParseStringAmount(price * 0.01) }원</dd>
                                </dl>
                                <dl>
                                    <dt>옵션<span>(필수)</span></dt>
                                    <dd>
                                        <select name="product-option-select" required="true" id="product-option">
                                            <option value="*" selected>-- 옵션을 선택해 주세요 --</option>
                                            <option value="**" disabled>-----------------------</option>
                                            <option value="**">${ option }</option>
                                        </select>
                                    </dd>
                                </dl>
                            </div>

                            <div class="option-area">
                                <table>
                                    <colgroup>
                                        <col style="width: auto">
                                        <col style="width: 65px;">
                                        <col style="width: 85px;">
                                        <col style="width: 30px;">
                                    </colgroup>
                                    <tbody>
                                    </tbody>
                                    </table>
                                </div>
                                <div class="price-area">
                                    <dl class="total-amount">
                                        <dt>총 상품금액</dt>
                                        <dd>${ totalPrice }원</dd>
                                    </dl>
                                </div>
                                <div class="buy-button">
                                    <button>장바구니</button>
                                    <button>바로구매</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div style="border-top: 1px solid #ccc; padding-top: 10px;">
                    <div class="color displaynone"></div>
                </div>

                <div class="row">
                    <div class="detail-container mt-20">
                        <a style="font-size: 30px; margin-top: 10%;">Details</a>
                        <div class="details-img">
                            <img src="${ subImgSrc1 }">
                            <img src="${ subImgSrc2 }">
                        </div>
                    </div>
                </div>
        </section>
    `;
}


// 상품 담기
function addItem (data) {

    const { option, price } = data;
    console.log(option, price);

    return `
        <tr>
            <td class="option-name">
                <div>${ option }</div>
            </td>
            <td>
                <div class="option-count">
                    <input type="text" size="1" value="1" id="option-count-input">
                    <span class="option-count-button">
                        <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_up.gif" alt="수량증가">
                        <img src="https://img.echosting.cafe24.com/design/skin/default/product/btn_count_down.gif" alt="수량감소">
                    </span>
                </div>
            </td>
            <td id="product-amount">${ g.setParseStringAmount(price) }원</td>
            <td>
                <button id="delete-button">
                    <img src="https://cdn-pro-web-216-165.cdn-nhncommerce.com/xnshtr1333_godomall_com/data/skin/front/mo_designart_1/img/icon/shop_cart/ico_cart_del.png" alt="삭제">
                </button>
            </td>
        </tr>
    `;
}


// 수량 및 옵션 선택에 따라 총 가격을 업데이트
function updateTotalPrice(price) {
    const quantity = Number(document.querySelector('#option-count-input').value);
    const productAmount = document.querySelector('#product-amount');
    const totalAmount = document.querySelector('.total-amount').lastElementChild;
    const totalPrice = quantity * price;
    productAmount.textContent = `${g.setParseStringAmount(totalPrice)}원`;
    totalAmount.textContent = `${g.setParseStringAmount(totalPrice)}원`;

    return totalPrice;
   
}

// 수량 증가
function increaseQuantity(price) {
    const quantity = Number(document.querySelector('#option-count-input').value);
    document.querySelector('#option-count-input').value = quantity + 1;

    updateTotalPrice(price);
}

// 수량 감소
function decreaseQuantity(price) {
    const quantity = Number(document.querySelector('#option-count-input').value);
    if (quantity > 1) {
        document.querySelector('#option-count-input').value = quantity - 1;
        updateTotalPrice(price);
    } else {
        alert("최소 주문수량은 1개입니다.");
    }
}

// 상품 삭제
function removeProduct() {
    const productElement = document.getElementById("productExample");
    productElement.parentNode.removeChild(productElement);
    updateTotalPrice();
}

// 바로 주문하기
function productSubmit() {
    const optionValue = document.getElementById("product-option1").value;
    if (optionValue === "*") {
        alert("필수 옵션을 선택해주세요.");
    } else {
        // 주문 페이지로 이동..
    }
}

// 장바구니에 추가
function addToCart() {
    const optionValue = document.getElementById("product-option1").value;
    if (optionValue === "*") {
        alert("필수 옵션을 선택해주세요.");
    } else {
        // 장바구니에 상품 추가하는 로직 구현..
    }
}

// // 페이지 로드 시 가격 데이터 로드 및 초기 총 상품 금액 업데이트
// document.addEventListener("DOMContentLoaded", function() {
//     loadPrices();
// });

