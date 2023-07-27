import { makeTemplate } from "./common/template.js";
import g from "./common/common.js";
import Api from "./common/api.js";

let contentHead1 = `
    <!-- product list -->
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="content">
                        <h1 class="page-name">🥇 MD추천상품</h1>
                        <ol class="breadcrumb">
                            <!-- <li><a href="#">Home</a></li> -->
                            <li class="active">커피 상품 목록</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    `;

let contentHead2 = `
    <!-- product list -->
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hr>
                    <div class="content">
                        <h1 class="page-name">🛍️ 커피 용품</h1>
                        <ol class="breadcrumb">
                            <!-- <li><a href="#">Home</a></li> -->
                            <li class="active">커피 용품 목록</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    `;

let contentSlider = `
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../../assets/slider/slider-1.jpg"></div>
        <div class="swiper-slide"><img src="../../../assets/slider/slider-2.jpg"></div>
        <div class="swiper-slide"><img src="../../../assets/slider/slider-3.jpg"></div>
        <div class="swiper-slide"><img src="../../../assets/slider/slider-4.jpg"></div>
      </div>
    </div>
    `;

let contentTail = `
        <section class="products section">
        <div class="container">
            <div class="row">
            <!-- Modal -->
            <div class="modal product-modal fade" id="product-modal">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="tf-ion-close"></i>
                </button>
                <div class="modal-dialog " role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="product-short-details">
                                        <h2 class="product-title">GM Pendant, Basalt Grey</h2>
                                        <p class="product-price">$200</p>
                                        <p class="product-short-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                                        </p>
                                        <a href="cart.html" class="btn btn-main">Add To Cart</a>
                                        <a href="product-single.html" class="btn btn-transparent">View Product Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </section>

    <hr>
<section class="page-write">
	<div class="container">					
				<div class="content">
					<h1 class="coffee-write">About Elice Coffee</h1>
					<ol class="">
						<li class="coffee-write">"커피는 시간과 공간을 초월한 편안함의 청자입니다.<br> 그 향기를 느껴보면 일상에 활력을 불어넣어 새로운 시작으로 당신을 인도합니다."</li>
            <p></p>
            <h4 class="coffee-write">
              지금 이곳에서, 커피를 경험하세요!
            </h4>
					</ol>
				</div>
	</div>
</section>
`;

// append할 body 태그 호출
const body = document.querySelector("body");

// 상품 목록 데이터 받아오기
const coffee = await Api.get("/products/main/coffee");
const product = await Api.get("/products/main/supplies");

let coffeeContent = "";
let productContent = "";

coffee.data.forEach((e) => {
  coffeeContent += itemTemplate(e);
});

product.data.forEach((e) => {
  productContent += itemTemplate(e);
});

makeTemplate(
  body,
  contentSlider +
    contentHead1 +
    coffeeContent +
    contentHead2 +
    productContent +
    contentTail
);

new Swiper(".swiper", {
  // Swiper 옵션을 설정합니다.
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  observer: true,
  observerParents: true,
});

// 상품 데이터를 태그로 만들기
function itemTemplate(e) {
  const { id, categoryId, mainImage, name, description, price } = e;
  let template = `
        <div class="col-md-4">
            <div class="product-item">
                <div class="product-thumb">
                    <a href="/product/${id}"><img class="img-responsive" src="../../../assets/thumbnail/${categoryId}/${id}/${mainImage}" alt="product-img"/></a>
                    <div class="preview-meta">
                    </div>
                </div>
                <div class="product-content">
                    <h4><a href="product/${id}">${name}</a></h4>
                    <p class="taste">
                        ${description}
                    </p>
                    <p class="price">${g.setParseStringAmount(price)}원</p>
                </div>
            </div>
        </div>  
    `;

  return template;
}
