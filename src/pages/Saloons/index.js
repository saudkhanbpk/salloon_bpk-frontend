import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../../Componet/Headers/Header";
import Footer from "../../Componet/Footer/Footer";
import sideImge from "../../assets/imge/newimages/photo-1560066984-138dadb4c035.png";
import pic1 from "../../assets/imge/newimages/4.png";
import { useLocation } from 'react-router-dom'

import backSlash from "../../assets/imge/backSlash.png";
import { FaFilter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { connect } from "react-redux";
import ProductCardList from "../../Componet/ProductsCards/ProductCarasoleCard/ProductCardList";
import CategorieCardList from "../../Componet/ProductsCards/CategoriesList/CategorieCardLists";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import ProductFilters from "../../Componet/ProductFilters";
import AllProducts from "../../api/products";
import SliderPlaceHolder from "../../Componet/SliderPlaceHolder";
import { AiOutlineSearch } from "react-icons/ai";
import salons_img from "../../assets/imge/newimages/saloonslist.png";
import { RiTimeFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import multi_loca from "../../assets/imge/newimages/location (1).png";
import { GiRoundStar } from "react-icons/gi";
import color_loca from "../../assets/imge/newimages/Path 29010.png";
import color_timw from "../../assets/imge/newimages/clock (1).png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import InputRange from "react-input-range";
import "../../../node_modules/react-input-range/src/scss/index.scss";
import Saloon from "../../api/saloon";
import Api from "../../api/landingPage";
import LikeSaloon from "../../Componet/LikeSaloon";
// import { data } from "jquery";
// import { IoLocationSharp } from "react-icons/io5";

class Saloons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      search: "",
      apiLoader: true,
      ratings: 0,
      ditanceValue: { min: 0, max: 0 },
      saloons: [],
      like: false,
      CustomTabs: 1,
      location:"",
      filters: {
        Categories: [],
        Rating: 0,
        Gender: [],
        Distance: { min: 0, max: 0 },
        Price: { min: 0, max: 0 },
        Sort_by: "Most_Popular",
      },
    };
    this.btn1 = React.createRef()
    this.btn2 = React.createRef()
    this.btn3 = React.createRef()
    this.btn4 = React.createRef()
    this.btn5 = React.createRef()
    this.btn6 = React.createRef()
  }

 

checkClick() {
  // console.log('clicked')
}
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.getSaloons()("hhh");

  }

  getSaloons = () => {
    Saloon.allSaloons().then((res) => {
      if (res.data.Error == false) {
        this.setState({
          saloons: res.data.Data,
        });
      }
    });
  };
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.getSaloons("all");
  }

  getSaloons = (status) => {
    ("func called");
    if (status == "all") {
      Saloon.allSaloons()
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    } else if (status == "Barber") {
      let data = {
        Status: "Barber",
      };
      Saloon.allSaloons(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    } else if (status == "Hairs") {
      let data = {
        Status: "Hairs",
      };
      Saloon.allSaloons(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    } else if (status == "beauty") {
      let data = {
        Status: "beauty",
      };
      Saloon.allSaloons(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    } else if (status == "Nail") {
      let data = {
        Status: "Nail",
      };
      Saloon.allSaloons(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    } else if (status == "Spa") {
      let data = {
        Status: "Spa",
      };
      Saloon.allSaloons(data)
        .then((res) => {
          if (res.data.Error == false) {
            this.setState({ apiLoader: false, saloons: res.data.Data });
          }
        })
        .catch((error) => { });
    }
  };
  handlePageClick = (page) => {
    this.setState({
      pageNumber: page.selected,
    });
    setTimeout(() => {
      this.allSaloons();
    }, 200);
  };

  getProducts = () => {
    // this.setState({
    //    loading: true
    // })
    // AllProducts.getAllProducts().then((res) => {
    //    if (res.data.Error == false) {
    //       this.setState({
    //          topRated: res.data.data
    //       })
    //    }
    //    this.setState({
    //       loading: false
    //    })
    // })
  };

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => ("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  filterData = (dat) => {
    // let data = {
    //    Category: dat.products,
    //    Rating: dat.ratings
    // }
    // AllProducts.filterproduct(data).then(res => {
    //    if (res.data.Error == false) {
    //       this.setState({
    //          topRated: res.data.data
    //       })
    //    }
    // })
  };

  controlFilter = (name) => {
    this.setState({ showFilters: false });
  };
  changeFilters = (name, value) => {
    let Categories = this.state.filters.Categories;
    if (Categories.includes(value)) {
      Categories = Categories.filter((data) => {
        return data !== value;
      });
    } else {
      Categories.push(value);
    }
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: Categories,
      },
    }));
  };
  genderFilter = (name, value) => {
    let Gender = this.state.filters.Gender;
    if (Gender.includes(value)) {
      Gender = Gender.filter((data) => {
        return data !== value;
      });
    } else {
      Gender.push(value);
    }
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [name]: Gender,
      },
    }));
  };
  clearFilters = () => {
    this.setState({
      filters: {
        Services: [],
        Rating: 0,
        Distance: { min: 0, max: 0 },
        Price: { min: 0, max: 0 },
        Sort_by: "Most_Popular",
      },
    });
  };
  applyFilters = () => {
    let { Categories, Price, Rating, Distance, Sort_by } = this.state.filters;
    let data = {
      Categories: Categories,
      Price: Price.max,
      Rating: Rating,
      Distance: Distance.max,
      Sort_by: Sort_by,
      Coordinates:
        this.props.locationData &&
          this.props.locationData.lat &&
          this.props.locationData &&
          this.props.locationData.lat
          ? [this.props.locationData.lng, this.props.locationData.lat]
          : [],
    }("data", data);
    Saloon.filtersaloon(this.state.filters).then((res) => {
      if (res.data.Error == false) {
        this.setState({
          saloons: res.data.Top,
        });
      }
    })(this.state.filters);
  };

    // handleSearch = () => {
    //   this.state.saloons.filter((valu) => {
    //     if(this.state.search == "") {
    //       return valu
    //     } else if (this.data.name.toUpperCase().includes(this.state.search.toUpperCase())) {
    //       return valu
    //     }
    //   })
    //   console.log(this.setState)

    // }
    componentDidMount() {
      if(this.props.location?.state?.state=="Hairs"){
          this.btn1.current.click()
          // console.log("click btn")
        }
        else if(this.props.location?.state?.state=="Nail"){
          this.btn2.current.click()
        }else if(this.props.location?.state?.state=="Barber"){
          this.btn3.current.click()
        }else if(this.props.location?.state?.state=="beauty"){
          this.btn4.current.click()
        }else if(this.props.location?.state?.state=="Spa"){
          this.btn5.current.click()
        }else if(this.props.location?.state?.state=="all"){
          this.btn6.current.click()
        }
        else{
          this.btn6.current.click()
        }
  }
  render() {

    return (
      <>
        <section
          className="headerSections"
          style={{ backgroundImage: `url('${sideImge}')` }}
        >
          <Header />
          <div className="soloneHeaderCon">
            <div>
              <h1>
                Book an appointment for <br></br>
                Salloon, Spa & Barber
              </h1>
              <p>
                Book your favorite by looking through <br></br>
                variety of latest salloons in your nearby location
              </p>
            </div>
          </div>
        </section>

        <div className="top_filters">
          <div className="container">
            {/* <--------------------- OLD CODE ----------------------> */}

            {/* <div className="row">
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">All</button>
                        </div>
                     </div>
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">Hair Saloon</button>
                        </div>
                     </div>
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">Nail Saloon</button>
                        </div>
                     </div>
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">Barber Shop</button>
                        </div>
                     </div>
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">Beauty Saloon</button>
                        </div>
                     </div>
                     <div className="col-md-2 col-4">
                        <div className="top_filter_btn" data-aos="flip-down" data-aos-duration="800">
                           <button type="button" className="btn">Spa</button>
                        </div>
                     </div>
                  </div> */}

            {/* <--------------------- OLD CODE ----------------------> */}

            <div className="row">
              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    ref={this.btn6}
                    href="#"
                    onClick={() => {
                      this.setState({ CustomTabs: 1 });
                      this.getSaloons("all");
                      this.checkClick()

                    }}   
                    autoFocus
                  >
                    All
                  </button>
                </div>
              </div>

              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    href="#"
                    ref={this.btn1}
                    onClick={() => {
                      this.setState({ CustomTabs: 2 });
                      this.getSaloons("Hairs");
                      this.checkClick()
                     
                    }} 
                    autoFocus={this.props.location?.state?.state==="Hairs" }
                  >
                    HAIR SALLOON
                  </button>
                </div>
              </div>

              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    href="#"
                    ref={this.btn2}

                    onClick={() => {
                      this.setState({ CustomTabs: 3 });
                      this.getSaloons("Nail");
                      this.checkClick()

                    }}autoFocus={this.props.location?.state?.state==="Nail"}
                  >
                    NAIL SALLOON
                  </button>
                </div>
              </div>

              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    ref={this.btn3}

                    href="#"
                    onClick={() => {
                      this.setState({ CustomTabs: 4 });
                      this.getSaloons("Barber");
                      this.checkClick()

                    }}autoFocus={this.props.location?.state?.state==="Barber"}
                  >
                    BARBER SHOP
                  </button>
                </div>
              </div>

              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    ref={this.btn4}

                    href="#"
                    onClick={() => {
                      this.setState({ CustomTabs: 5 });
                      this.getSaloons("beauty");
                      this.checkClick()

                    }}autoFocus={this.props.location?.state?.state==="beauty"}
                  >
                    BEAUTY SALLOON
                  </button>
                </div>
              </div>

              <div className="col-md-2 col-4">
                <div className="all-btn">
                  <button
                    ref={this.btn5}

                    href="#"
                    onClick={() => {
                      this.setState({ CustomTabs: 6 });
                      this.getSaloons("Spa");
                      this.checkClick()

                    }}autoFocus={this.props.location?.state?.state==="Spa"}
                  >
                    SPA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="saloons_listing">
          <div className="row m-0">
            <div className="col-md-3">
              <div className="main_saloons_lfilter">
                <div className="static_filters">
                  <div className="main_title_filter">
                    <h3>Filters</h3>
                  </div>

                  {/* <------------------ OLD CODE --------------------> */}

                  {/* <div className="categories_title_main">
                              <div className="categories_title">
                                 <h4>Categories</h4>
                              </div>
                              <div className="listing_categories_filters">
                                 {
                                    this.props.services.categories && this.props.services.categories.map((data)=>{
                                       return(
                                          <div className="form-group">
                                    <div class="chiller_cb">
                                       <input checked={this.state.filters.Categories.includes(data._id)} onChange={(e)=>{this.changeFilters("Categories",data._id)}} id={`myCheckbox${data._id}`} type="checkbox" />
                                       <label for={`myCheckbox${data._id}`}>{data.title}</label>
                                       <span></span>
                                    </div>
                                 </div>
                                       )
                                    })
                                 }
                              </div>
                           </div> */}
                  {/* <------------------ OLD CODE --------------------> */}

                  {/* <------------------ OLD CODE --------------------> */}

                  {/* <div className="categories_title_main">
                              <div className="categories_title">
                                 <h4>Products</h4>
                              </div>
                              <div className="listing_categories_filters">
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input id="myCheckbox5" type="checkbox" />
                                       <label for="myCheckbox5">Body lotion</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input id="myCheckbox6" type="checkbox" />
                                       <label for="myCheckbox6">Makeup</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input id="myCheckbox7" type="checkbox" />
                                       <label for="myCheckbox7">Brush</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input id="myCheckbox8" type="checkbox" />
                                       <label for="myCheckbox8">Cutting Toolkit</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input id="myCheckbox9" type="checkbox" />
                                       <label for="myCheckbox9">Acne Cream</label>
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div> */}

                  {/* <------------------ OLD CODE --------------------> */}

                  <div className="categories_title_main">
                    <div className="categories_title">
                      <h4>Services</h4>
                    </div>
                    <div className="listing_categories_filters">
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Hairstyle
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Makeup
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Hair Coloring
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Spa
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Facial Makeup
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Trim & Shaving
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Hair Bonding
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Keratin
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Face Cleansing
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="categories_title_main">
                    <div className="categories_title">
                      <h4>Products</h4>
                    </div>
                    <div className="listing_categories_filters">
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Body Iotion
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Makeup
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Brush
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Cutting Toolkit
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Acne Cream
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Razors
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Shampoos
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Lipsticks
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Aprons
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="ratings_main_cls">
                    <div className="categories_title">
                      <h4>Ratings</h4>
                    </div>
                    <div className="ratingStars mt-n3">
                      <ReactStars
                        count={5}
                        onChange={(e) => {
                          this.setState((prevState) => ({
                            filters: {
                              ...prevState.filters,
                              Rating: e,
                            },
                          }));
                        }}
                        value={this.state.ratings}
                        size={26}
                        activeColor="#F9D63E"
                        isHalf={true}
                      />
                      <span className="res">{this.state.ratings}</span>
                    </div>
                  </div>

                  {/* <----------------------- OLD CODE --------------------> */}

                  {/* <div className="categories_title_main">
                              <div className="categories_title">
                                 <h4>Gender</h4>
                              </div>
                              <div className="listing_categories_filters">
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input
                                       checked={this.state.filters.Gender.includes("male")}
                                       onChange={()=>{
                                       this.genderFilter("Gender","male")
                                       }}
                                          id="gender1" type="checkbox" />
                                       <label for="gender1">Male</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input
                                        checked={this.state.filters.Gender.includes("female")}

                                        onChange={()=>{
                                         this.genderFilter("Gender","female")
                                       }}
                                       id="gender2" type="checkbox" />
                                       <label for="gender2">Female</label>
                                       <span></span>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div class="chiller_cb">
                                       <input
                                        checked={this.state.filters.Gender.includes("other")}
                                        onChange={()=>{
                                          this.genderFilter("Gender","other")
                                          }}
                                       id="gender3" type="checkbox" />
                                       <label for="gender3">Other</label>
                                       <span></span>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                  {/* <----------------------- OLD CODE --------------------> */}

                  <div className="categories_title_main">
                    <div className="categories_title">
                      <h6 className="font-weight-bold mt-3 ">Gender</h6>
                    </div>
                    <div className="listing_categories_filters mt-4">
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          {" "}
                          Male
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Female
                        </label>
                      </div>
                      <div className="form-group">
                        <input className="checkbox1" type="checkbox" />
                        <label className="ml-3" for="">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="distance_main">
                    <div className="">
                      <div className="categories_title ratings_title">
                        <h4>Distance</h4>
                      </div>
                      <div className="rating_star_main add_margin_range_top">
                        <InputRange
                          maxValue={100}
                          minValue={0}
                          value={this.state.filters.Distance}
                          onChange={(value) => {
                            this.setState((prevState) => ({
                              filters: {
                                ...prevState.filters,
                                Distance: value,
                              },
                            }));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="distance_main">
                    <div className="">
                      {/* <div className="categories_title ratings_title">
                                    <div className='align_price'>
                                    <h4>Price</h4>
                                    <p>100k</p>
                                    </div>
                                 </div>
                                 <div className="rating_star_main add_margin_range_top">
                                    <InputRange
                                       maxValue={100}
                                       minValue={0}
                                       value={this.state.filters.Price}
                                       onChange={(value)=>{
                                          this.setState(prevState => ({
                                             filters: {
                                                 ...prevState.filters,
                                                 Price: value
                                             }
                                         }))
                                       }} />
                                 </div> */}
                    </div>
                  </div>
                  <div className="button_filters_side_main">
                    <button
                      onClick={this.clearFilters}
                      type="button"
                      className="btn btn-primary"
                    >
                      Clear Filters
                    </button>
                    <button
                      onClick={this.applyFilters}
                      type="button"
                      className="btn btn-primary ml-2"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
                {/* <ProductFilters controlFilter={this.controlFilter} filterData={(data)=>this.filterData(data)} comp={"product"} /> */}
              </div>
            </div>
            <div className="col-md-7">
              <div className="main_start_listing_salo">
                <div className="main_align_filter">
                  <div className="top_dilter_salon">
                    <div style={{ visibility: "" }} className="input_fil_salon">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search your salloon here"
                       value={this.state.search}
                        onChange={(event) => this.setState({search: event.target.value})}
                      />
                      <AiOutlineSearch />
                    </div>
                    <div className="sorting_div">
                      <p>Sort by</p>
                      <select
                        onChange={(e) => {
                          this.setState((prevState) => ({
                            filters: {
                              ...prevState.filters,
                              Sort_by: e.target.value,
                            },
                          }));
                        }}
                        name="Sort_by"
                        id=""
                        className="form-control"
                      >
                        <option value="Most_Popular">Most Popular</option>
                        <option value="Cost_High_To_Low">
                          Cost High To Low
                        </option>
                        <option value="Cost_Low_To_High">
                          Cost Low To High
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="titkle_listing_slist">
                  <h3>Popular Salloons Nearby</h3>
                </div>
                {/* <div className="saloon-nearby">
                           <div className='col-3 image_nearby'>
                           </div>
                           <div className='col-9'>
                              <div className='row-unisex'>
                                 <div className="col-8">
                                 <h6 className='unisex-saloon'>LOOKS UNISEX SALOON</h6>
                                 <p className='unisex-p mt-2'>Looks unisex saloon is providing the best service
                                         in the saloon marketplace. Providing many
                                          products and services
                                     </p>
                                     </div>
                                     <div className="col-4 main-unisex-icon">
                                       <div className="unisex-icon">
                                          <AiFillHeart className='icon-unisex'/>
                                       </div>
                                     </div>
                              </div>
                              `   <div className="row-locations mt-1">
                                    <div className="col-6">
                                       <IoLocationSharp/>
                                       <label>288 Empola Street, NewYork</label>
                                    </div>
                                    <div className="col-6"></div>
                                 </div>`
                                 <div className="row-locations mt-2"></div>
                           </div>

                        </div> */}
                {/* <=========== OLD CODE ==============> */}

                {this.state.saloons.length == 0 ? (
                  <div className="no_data">
                    <h4>No Data Found</h4>
                  </div>
                ) : (
                  ""
                )}
                {this.state.saloons &&
                  this.state.saloons.filter((item) => {
                    return this.state.search.toLowerCase() == '' ?
                    item
                    :
                    item.Name.toLowerCase().includes(this.state.search);
                  }).map((data) => {
                    return (
                      <div className="start_slisting">
                        <div
                          className="main_list_salons"
                          onClick={() =>
                            this.props.history.push(`/saloon/${data._id}`)
                          }
                          data-aos="fade-up"
                          data-aos-duration="900"
                        >
                          <div className="img_sec_salon">
                            {/* <img src={`${process.env.REACT_APP_BASE_URL}/${data.Profile_Pic}`} alt="" className="img-fluid" /> */}
                            <img className="img-fluid" src={pic1} />
                            <div className="image_tag">
                              <p>New</p>
                            </div>
                          </div>
                          <div className="salon_content_list">
                            <div className="top_salons_list_content">
                              <h3>{data.Name}</h3>
                              <p>
                                {data.Description
                                  ? `${data.Description.substring(0, 150)}...`
                                  : ""}
                              </p>
                            </div>
                            <div className="timer_salons">
                              <p>
                                {" "}
                                <img src={color_loca} alt="" />{" "}
                                {data.Address && data.Address.Address}
                              </p>
                              <p>
                                {" "}
                                <img src={color_timw} alt="" /> Open Now{" "}
                                {data.Open_Time} - {data.Close_Time}
                              </p>
                            </div>
                            <div className="timer_salons with_img">
                              <div className="ratingStars">
                                {/* <p> <img src={multi_loca} alt="" /> 288 Empola Street, NewYork</p> */}
                                {[1, 1, 1, 1, 1].map((dat, i) => {
                                  if (i < data.Rating) {
                                    return (
                                      <span>
                                        <GiRoundStar />
                                      </span>
                                    );
                                  }
                                })}
                                {[1, 1, 1, 1, 1].map((dat, i) => {
                                  if (i < 5 - data.Rating) {
                                    return (
                                      <span>
                                        <GiRoundStar className="half_star" />
                                      </span>
                                    );
                                  }
                                })}
                                <p>{parseFloat(data.Rating)}</p>
                              </div>
                            </div>
                            <div className="add_saloon_fav added_fav">
                              <AiFillHeart />
                            </div>
                          </div>
                          <LikeSaloon
                            customerDetail={this.props.customerDetail}
                            saloon={data._id}
                          />
                        </div>
                      </div>
                    );
                  })}

                {/* <=========== OLD CODE ==============> */}
              </div>
            </div>
          </div>
        </section>

        {/* <section className='navigaitonCon'>
               <div className='container'>
                  <div className='row'>
                     <div className='col-12'>
                        <div className='divWithFilters py-3'>
                           <div>
                              <ul className='navPath'>
                                 <li style={{cursor:"pointer"}} onClick={()=>{this.props.history.push("/")}}>Home</li>
                                 <li><img src={backSlash} /></li>
                                 <li>Saloons</li>
                              </ul>
                           </div>
                           <div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='row'>
                  </div>
               </div>
            </section> */}

        {/* Categories */}

        {/* <section>
               <div className='container mt-4'>
                  <div className='row'>
                     <div className='col-12'>
                        <h4 className='font-weight-bold'>Categories</h4>
                     </div>
                  </div>
                  <div className='row'>
                     <div className='col-12'>
                        <CategorieCardList  />
                     </div>
                  </div>

               </div>
            </section> */}

        {/* <section>
               <div className='container mt-4'>
                  <div className='row'>
                     <div className='col-12'>
                        <h4 className='font-weight-bold'>Popular Saloons Nearby</h4>
                     </div>
                  </div>
                  {!this.props.SaloonList.Popular && <SliderPlaceHolder />}
                  {this.props.SaloonList.Popular  && (
                     <div className='row'>
                        <div className='col-12'>
                           <ProductCardList data={this.props.SaloonList.Popular} />
                        </div>
                     </div>
                  )}


               </div>
            </section>  */}

        {/* <section>
               <div className='container mt-4'>
                  <div className='row'>
                     <div className='col-12'>
                        <h4 className='font-weight-bold'>Favorite saloons</h4>
                     </div>
                  </div>
                  {!this.props.SaloonList.Favorite && <SliderPlaceHolder />}
                  {this.props.SaloonList.Favorite && (
                     <div className='row'>
                        <div className='col-12'>
                           <ProductCardList data={this.props.SaloonList.Favorite} />
                        </div>
                     </div>
                  )}
                  <div className='row'>
                     <div className='col-12'>

                     </div>
                  </div>

               </div>
            </section> */}

        {/* <section>
               <div className='container mt-4'>
                  <div className='row'>
                     <div className='col-12'>
                        <h4 className='font-weight-bold'>Recommended saloons</h4>
                     </div>
                  </div>
                  {!this.props.SaloonList.Recommended && <SliderPlaceHolder />}
                  {this.props.SaloonList.Recommended && (
                     <div className='row'>
                        <div className='col-12'>
                           <ProductCardList data={this.props.SaloonList.Recommended} />
                        </div>
                     </div>
                  )}
                  <div className='row'>
                     <div className='col-12'>

                     </div>
                  </div>

               </div>
            </section> */}

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SaloonList: state.SaloonList,
    services: state.categoriesList,
    locationData: state.Location,
    customerDetail: state.CustomerDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateFilters: (data) => {
    //    dispatch(ACTIONS.update_filters(data))
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Saloons));
