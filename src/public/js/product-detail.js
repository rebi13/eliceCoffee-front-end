// 가격 데이터 로드 및 가격 업데이트
function loadPrices() {
    // 가격 데이터 비동기 요청
    // 가져온 데이터를 사용하여 가격 변수 업데이트 할 예정

    let productPrice = 3400; // 상품 가격
    let optionPrices = {
        "**": 0, // 기본 옵션
        "**": 7400, // 500g 옵션 추가금
        "**": 17200 // 1kg 옵션 추가금
    };

    // 총 상품 금액 업데이트
    updateTotalPrice(productPrice, optionPrices);
}

// 수량 및 옵션 선택에 따라 총 가격을 업데이트
function updateTotalPrice(productPrice, optionPrices) {
    const quantity = parseInt(document.getElementById("quantity").value);
    const optionValue = document.getElementById("product-option1").value;
    const optionPrice = optionPrices[optionValue] || 0;

    const totalPrice = (productPrice + optionPrice) * quantity;
    const totalMileage = Math.round(totalPrice * 0.01);

    document.getElementById("productExample").innerHTML = `
        <tr>
            <td>브라질 세하도</td>
            <td>
                <span class="quantity">
                    <input id="quantity" name="quantity_name" value="${quantity}" type="tel">
                    <button onclick="increaseQuantity()"> + </button>
                    <button onclick="decreaseQuantity()"> - </button>
                    <button onclick="removeProduct()"> X </button>
                </span>
            </td>
            <td class="right">
                <span class="quantity_price">${totalPrice.toLocaleString()}원</span> 
                <span class="mileage">(적립금 ${totalMileage.toLocaleString()}원)</span>
            </td>
        </tr>
    `;

    document.getElementById("totalPrice").innerHTML = `
        <strong>총 상품 금액</strong>
        <span class="total">
            <strong class="price">${totalPrice.toLocaleString()}원</strong>
        </span>
    `;
}

// 수량 증가
function increaseQuantity() {
    const quantity = parseInt(document.getElementById("quantity").value);
    document.getElementById("quantity").value = quantity + 1;
    updateTotalPrice();
}

// 수량 감소
function decreaseQuantity() {
    const quantity = parseInt(document.getElementById("quantity").value);
    if (quantity > 1) {
        document.getElementById("quantity").value = quantity - 1;
        updateTotalPrice();
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

// 페이지 로드 시 가격 데이터 로드 및 초기 총 상품 금액 업데이트
document.addEventListener("DOMContentLoaded", function() {
    loadPrices();
});