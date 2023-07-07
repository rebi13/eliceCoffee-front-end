import { makeTemplate } from "../../common/template.js"

const API_URL = "http://localhost:3000/api/v1/products";

const content = `
    <!-- product list -->
    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="content">
                        <h1 class="page-name">원두커피</h1>
                        <ol class="breadcrumb">
                            <!-- <li><a href="#">Home</a></li> -->
                            <li class="active">나라별 커피</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="products section">
        <div class="container">
            <div class="row">
                
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <span class="bage">Best</span>
                            <img class="img-responsive" src="../../../assets/thumbnail/brazil-cerrado.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <!-- <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li> -->
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-heart" style="color: black;"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-cart-shopping" style="color: black;"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Brazil Cerrado</a></h4>
                            <p class="taste">
                                #적절한 바디와 너티함<br>
                                #고소하고 무난한 맛을 찾으시는 분
                            </p>
                            <p class="price">₩3,400</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img class="img-responsive" src="../../../assets/thumbnail/brazil-santos.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <!-- <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li> -->
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-heart" style="color: black;"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-cart-shopping" style="color: black;"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Brazil Santos</a></h4>
                            <p class="taste">
                                #은은한 산미와 너티의 마일드함<br>
                                #부드럽고 마일드한 맛을 찾으시는 분
                            </p>
                            <p class="price">₩3,200</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img class="img-responsive" src="../../../assets/thumbnail/colombia-madellin.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <!-- <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li> -->
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-heart" style="color: black;"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-cart-shopping" style="color: black;"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Colombia Madellin</a></h4>
                            <p class="taste">
                                #호두의 고소함, 코코아의 단맛<br>
                                #기분 좋은 바디감과 단맛을 원하시는 분
                            </p>
                            <p class="price">₩4,200</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img class="img-responsive" src="../../../assets/thumbnail/colombia-supremo.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <!-- <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li> -->
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-heart" style="color: black;"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-cart-shopping" style="color: black;"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Colombia Supremo</a></h4>
                            <p class="taste">
                                #은은한 허브향과 단맛의 조화<br>
                                #어디에나 어울리는 커피를 찾으시는 분
                            </p>
                            <p class="price">₩4,500</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img class="img-responsive" src="../../../assets/thumbnail/costarica-tarrazu.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <!-- <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li> -->
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-heart" style="color: black;"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fa-solid fa-cart-shopping" style="color: black;"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Costarica Tarrazu</a></h4>
                            <p class="taste">
                                #<br>
                                #
                            </p>
                            <p class="price">₩4,500</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img class="img-responsive" src="../../../assets/thumbnail/elsalvador-apaneca.jpg" alt="product-img" />
                            <div class="preview-meta">
                                <ul>
                                    <li>
                                        <span  data-toggle="modal" data-target="#product-modal">
                                            <i class="tf-ion-ios-search-strong"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#" ><i class="tf-ion-ios-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="tf-ion-android-cart"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <h4><a href="product-single.html">Rainbow Shoes</a></h4>
                            <p class="price">₩5,000</p>
                        </div>
                    </div>
                </div>
                
                
                
            
            <!-- Modal -->
            <div class="modal product-modal fade" id="product-modal">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="tf-ion-close"></i>
                </button>
                <div class="modal-dialog " role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-8 col-sm-6 col-xs-12">
                                    <div class="modal-image">
                                        <img class="img-responsive" src="images/shop/products/modal-product.jpg" alt="product-img" />
                                    </div>
                                </div>
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
            </div><!-- /.modal -->

            </div>
        </div>
    </section>
`;

const body = document.querySelector('body');
makeTemplate(body, content);

fetch(`${API_URL}`)
    .then( res => {
        res.json()
    })
    .then( data => {
        console.log(data);
    })