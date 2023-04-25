import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import products from "../../assets/data/products"
import { BiSearchAlt2 } from 'react-icons/bi'
import { TbCategory2 } from 'react-icons/tb'
import { BsChevronRight } from 'react-icons/bs'
import logo from '../../img/logo.png'
import axios from "axios";
import { Link } from "react-router-dom";
import usericon from './usericon.png'

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
const url = 'products/?cat_id='

const Header = ({ setProductsData , productUrl , setProductUrl , setIsOpen , isOpen}) => {

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


  const [categoryOnOf, setCategoryOnOf] = useState('')

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('')
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <header className="header">
      <div className="nav-wrapper">
        <NavLink to='/'>
          <div className="logo">
            <img src={logo} className='logoimg' />
          </div>
        </NavLink>
        <div className="navigation ">
          <Link to='productList'>
            <button 
              onClick={() => setProductUrl('productList')}
              className="categoryBtn">
              <TbCategory2 className="categoryIcon" />  
              <span>Kategory</span>
            </button>
          </Link>
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
        
            <span className="fav-icon" to="cart" 
              onClick={
                () => setIsOpen('loginClose')
              }
            >
              <img style={{width: '25px'}} src={usericon} alt="" />
              <span className="korzina korzinanone">Kirish</span>
            </span>
        
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
          <li key={item.id} onClick={() => setProductUrl(url + item.id)} >
            <Link to={url + item.id}>{item.name}</Link>
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