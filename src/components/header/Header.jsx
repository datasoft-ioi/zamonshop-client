import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import Logo from '../../assets/images/logotip.png'
import products from "../../assets/data/products"
import { BiSearchAlt2 } from 'react-icons/bi'
import { TbCategory2 } from 'react-icons/tb'
import { BsChevronRight } from 'react-icons/bs'
import elektronika from '../../img/elektronika.png'
import book from '../../img/book.png'
import sport from '../../img/sport.png'
import car from '../../img/car.png'
import blender from '../../img/blender.png'
import Kiyimlar from '../../img/kiyim.png'
import logo from '../../img/logo.png'
import axios from "axios";
import { Link } from "react-router-dom";

const nav__link = [
  {
    path: "/",
    display: 'Asosiy'
  },
  {
    path: "shop",
    display: 'Do`kon'
  },
  {
    path: "Cart",
    display: 'Sotib Olish'
  },
]


const Header = ({ setProductsData }) => {

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  const [categories, setCategories] = useState([]);
  const [headerCat, setHeaderCat] = useState([])

  useEffect(() => {
    axios.get('https://api.zamonshop.uz/categories/')
      .then(response => {
        setHeaderCat(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const [categoryOnOf, setCategoryOnOf] = useState('categorys none')

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <header className="header">
      <div className="nav-wrapper">
        <NavLink to='/'>
          <div className="logo">
            <img src={logo} className='logoimg' />
          </div>
        </NavLink>
        <div className="navigation " ref={menuRef} onClick={menuToggle}>
          <button onClick={
            () => categoryOnOf == 'categorys none' ? setCategoryOnOf('categorys')
              : setCategoryOnOf('categorys none')
          }
            className="categoryBtn">
            <TbCategory2 className="categoryIcon" />
            <span>Kategory</span>
          </button>
          <div className="navsearch">
            <input type="text" placeholder="Izlash..." />
            <button><BiSearchAlt2 /></button>
          </div>
        </div>
        <div className="nav-icons">
          {/* <NavLink to="/">
            <span className="fav-icon">
              <i class="ri-home-line"></i>
            </span>
          </NavLink> */}
          <NavLink to="/shop">
            <span className="fav-icon" to="cart">
              <i class="ri-shopping-bag-line" to={nav__link.path}></i>
              <span className="korzina korzinanone">Все товары</span>
            </span>
          </NavLink>
          <NavLink to="/cart">
            <span className="cart-icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="korzina">Корзина</span>
              <span className="badge">{totalQuantity}</span>
            </span>
          </NavLink>
          <div className="mobile-menu">
            <span onClick={menuToggle}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
      <ul className="hederCategory">
        {headerCat.map(item => (
          <li key={item.id}>
            <Link to={`productList/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className={categoryOnOf}>
        <ul className="categoryList">
          {/* Render categories dynamically from the state */}
          {categories.map(category => (
            <li key={category.id}>
              <img src={category.image} alt="" />
              <span>{category.name}</span>
              <BsChevronRight className="categorylistNextBtn" />
            </li>
          ))}
        </ul>
        {/* Render category products dynamically from the state */}
        <div className="categoryProducts">
          {categories.map(category => (
            <div key={category.id} className="categoryProducts_product">
              <ul>
                {/* Render subcategories dynamically */}
                {category.subcategories.map(subcategory => (
                  <>
                    <span className="categoryProductsTitle">{subcategory.name}</span>
                    <li key={subcategory.id}>{subcategory.children.name}</li>
                  </>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;