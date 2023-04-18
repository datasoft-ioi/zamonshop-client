import { useEffect, useState } from 'react'
import '../styles/productLists.css'
import ProductList from '../components/Ul/ProductList';
import axios from 'axios';

export default function ProductLists() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const setProducts = async () => {
            const response = await axios.get('https://api.zamonshop.uz/products/?cat_id=1')
            setProduct(response.data)
            console.log(response.data);
        }
        setProducts();
    }, [])
    
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
                        {
                            product.map(item => (
                                <div className="product-item" key={item.id}>
                                    <div className="new">NEW</div>
                                    <div className="product-img">
                                        <img src={item.image} />
                                    </div>
                                    <div className="product__info">
                                        <div className="product-card_top">
                                            <h3 className='product_name'>{item.name}</h3>
                                            <span className='company'>company name</span>
                                            <span className='category'>sdfsdf</span>
                                        </div>
                                        <div className="product-card_bottom">
                                            <div className="price_box">
                                                <span className="price_sale">{item.price}000 so'm</span>
                                                <span className="price">{item.price}.000 so'm</span>
                                            </div>
                                            <span className='buy__item '>
                                                <i class="fa-solid fa-cart-plus"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}