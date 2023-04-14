import { useState } from 'react'
import '../styles/productLists.css'
import ProductList from '../components/Ul/ProductList';

export default function ProductLists() {

    return (
        <>
            <div className="productLists">
                <div className="productListsHeader">
                    <span>Электроника</span>
                    <select name="" id="">
                        <option value="">Hammasi</option>
                    </select>
                </div>
                <div className="productListsProducts">
                    <div className="productListsProducts_Cat">
                        <ul>
                            <span>Barchasi</span>
                            <li>telefonlar</li>
                            <li>aksesuarlar</li>
                            <li>noutbuklar</li>
                            <li>kabellar</li>
                            <li>quloqchinlar</li>
                            <li>monitorlar</li>
                        </ul>
                    </div>
                    <div className="productListsProduct">
                        <div className="product-item">
                            <div className="new">NEW</div>
                            <div className="product-img">
                                <img src="https://images.uzum.uz/ccolojf0tgqvlm57jrqg/original.jpg" />
                            </div>
                            <div className="product__info">
                                <div className="product-card_top">
                                    <h3 className='product_name'>asdas</h3>
                                    <span className='company'>company name</span>
                                    <span className='category'>sdfsdf</span>
                                </div>

                                <div className="product-card_bottom">
                                    <div className="price_box">
                                        <span className="price_sale">200.000 so'm</span>
                                        <span className="price">11.000 so'm</span>
                                    </div>
                                    <span className='buy__item '>
                                        <i class="fa-solid fa-cart-plus"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}