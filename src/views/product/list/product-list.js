import { makeTemplate } from "../../common/template.js"
import {setParseStringAmount} from '../../common/common.js';

const API_URL = "http://localhost:3000/api/v1/products";


let content = `
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
                            <h4><a href="product-single.html">{name}</a></h4>
                            <p class="taste">
                                {discription}
                            </p>
                            <p class="price">{price}</p>
                        </div>
                    </div>
                </div>

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
                            <h4><a href="product-single.html">{name}</a></h4>
                            <p class="taste">
                                {discription}
                            </p>
                            <p class="price">{price}</p>
                        </div>
                    </div>
                </div>

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
                            <h4><a href="product-single.html">{name}</a></h4>
                            <p class="taste">
                                {discription}
                            </p>
                            <p class="price">{price}</p>
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


// 기존
let result = fetch(API_URL);

fetch(API_URL)
    .then( res => res.json())
    .then( data => {
        let result = data.data;

        result.forEach( e => {
            console.log(e);
            content = content.replace('{name}', e.name);
            content = content.replace('{discription}', e.description);
            content = content.replace('{price}', setParseStringAmount(e.price));
            
        });

    const body = document.querySelector('body');
    makeTemplate(body, content);

    });
