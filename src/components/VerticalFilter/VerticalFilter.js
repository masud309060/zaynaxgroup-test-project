import React from 'react';
import { Form } from 'react-bootstrap';
import './VerticalFilter.scss';

const VerticalFilter = () => {
  //---> All reUsable data 
  const brandList = ["Aeropostale", "Antony Morato", "Arrow", "Arrow Bue Jeans", "Arrow Sport", 
  "Aeropostale", "Antony Morato", "Arrow", "Arrow Bue Jeans", "Arrow Sport", "Mufti", "Raymond",
  "Mufti", "Raymond", "United Colors of Benetton"];
  const countryList = ["USA", "Germany", "Italy", "UK", "Bangladesh", "India", "Canada", "Singapor"];
  const sizeList = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorList = ["#2f3640", "#4E2E2C", "tan", "#666", "#fff", "#0984e3"];
  const discountList = ["10% - 30%", "30% - 50%", "50% - 70%"];
  const ratingList = [5, 4, 3, 2, 1];
  const fabricList = ["Cotton Blend","Cotton Linen Blend", "Cotton Silk", "Linen Blend", 
  "Nylon Blend", "Poly Silk", "Polycotton", "Pure Cotton", "Rayon", "Polycotton", "Pure Cotton", "Rayon" ];
  const patternList = ["Checkered", "Chevron/Zig Zag", "Color Block", "Floral Print", "Houndstooth",
  "Polka Print", "Printed", "Self Design", "Solid", "Polka Print", "Printed", "Self Design", "Solid" ];
  const servicesList = ["Cach on Delivery", "Free Shipping"];

  return (
    <div className="vertical_filter">
      <div className="all_filters">
        <strong>Filters</strong>
        <div className="filters_option">
          <div>
            <span>Out of Strock</span>
            <span className="delet_btn">x</span>
          </div>
          <div>
            <span>Out of Strock</span>
            <button className="delet_btn">x</button>
          </div>
          <button className="filters_clear_all_btn">
            Clear all
          </button>
        </div>
      </div>
      <div className="vertical_filter_category">
        <div className="category_header">
          <strong>Category</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="category_list">
          <p>Men's Clothing</p>
          <ul>
            <li>
              <strong>Casual Wear</strong>
            </li>
            <ul>
              <li>Shirts</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="vertical_filter_item">
        <div className="filter_item_header">
          <strong>Brand</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="search_bar">
          <input type="text" placeholder="Search by brands"/>
          <img src="/assets/loupe.png" alt=""/>
        </div>
        <Form className="filter_item_form">
        {
          brandList.map((item, i) => 
          <div className="filter_item_radio" key={i}>
            <input type="radio" name="age" value={item}/>
            <label htmlFor="age1">{item}</label>
          </div>
          )
        }
      </Form>
      <button className="see_more">236 More</button>
      </div>
      <div className="vertical_filter_item">
        <div className="filter_item_header">
          <strong>Country</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
        <Form className="filter_item_form">
        {
          countryList.map((item, i) => 
          <div className="filter_item_radio" key={i}>
            <input type="radio" name="age" value={item}/>
            <label htmlFor="age1">{item}</label>
          </div>
          )
        }
        </Form>
        <button className="see_more">2 More</button> 
      </div>
      <div className="vertical_filter_size">
        <div className="size_header">
          <strong>Size</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="size_list">
          {
            sizeList.map((item, i) => <div key={i}>{item}</div>)
          }
        </div>
      </div> 
      <div className="vertical_filter_color">
        <strong>Color</strong>
        <div className="color_list">
          {
            colorList.map((item, i) => 
            <div className="color_box" key={i}>
              <div style={{backgroundColor:`${item}`}}></div>
            </div>
            )
          }
        </div>
      </div> 
      <div className="vertical_filter_discount">
        <div className="discount_header">
          <strong>Discount</strong> 
          <i class="fas fa-chevron-down"></i> 
        </div>
        <Form className="discount_form">
        {
          discountList.map((item, i) => 
          <div className="discount_radio" key={i}>
            <input type="radio" name="age" value={item}/>
            <label htmlFor="age1">{item}</label>
          </div>
          )
        }
        </Form>

      </div> 
      <div className="vertical_filter_price">
        <strong>Price</strong>
        <div className="filter_price">
          <div className="min">Min</div>
          {" - "}
          <div className="max">Max</div>
          <span className="chevron_right_icon">
            <i class="fas fa-chevron-right"></i>
          </span>
        </div>

      </div> 
      <div className="vertical_filter_rating">
        <strong>Rating</strong>
        <Form className="rating_list">
          {
            ratingList.map((item, i) => 
            <div className="rating_radio" key={i}>
              <input type="radio" name="age" value={item}/>
              <label htmlFor="age1">
                {
                Array(item).fill().map((_, i) => (
                  <i 
                  key={i} 
                  class="fas fa-star"
                  style={{color:"#27ae60", marginLeft:"5px"}}
                  ></i>
                ))
                }
              </label>
            </div>
            )
          }
        </Form>
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
            <strong>Fabric</strong>
            <i class="fas fa-chevron-down"></i>
          </div>
          <Form className="filter_item_form">
          {
            fabricList.map((item, i) => 
            <div className="filter_item_radio" key={i}>
              <input type="radio" name="age" value={item}/>
              <label htmlFor="age1">{item}</label>
            </div>
            )
          }
          </Form>
          <button className="see_more">2 More</button> 
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
            <strong>Pattern</strong>
            <i class="fas fa-chevron-down"></i>
          </div>
          <Form className="filter_item_form">
          {
            patternList.map((item, i) => 
            <div className="filter_item_radio" key={i}>
              <input type="radio" name="age" value={item}/>
              <label htmlFor="age1">{item}</label>
            </div>
            )
          }
          </Form>
          <button className="see_more">2 More</button> 
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
            <strong>Service</strong>
            <i class="fas fa-chevron-down"></i>
        </div>
        <Form className="filter_item_form">
        {
          servicesList.map((item, i) => 
          <div className="filter_item_radio" key={i}>
            <input type="radio" name="age" value={item}/>
            <label htmlFor="age1">{item}</label>
          </div>
          )
        }
        </Form>
        <button className="see_more">2 More</button> 
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
          <strong>Clothing Style</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
          <strong>Men's Trend</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div> 
      <div className="vertical_filter_item">
        <div className="filter_item_header">
          <strong>Fit Type</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div> 
    </div>
  );
};

export default VerticalFilter;