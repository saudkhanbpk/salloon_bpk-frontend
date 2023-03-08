import React from "react";
import { Component } from "react";
import Footer from "../../Componet/Footer/Footer";
import Header from "../../Componet/Headers/Header";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { FiPhone, RiLockPasswordLine, FaRegAddressCard } from "react-icons/all";
// import RiLockPasswordLine from "react-icons/ri"
import login_img from "../../assets/imge/newimages/dummy-image.jpg";

import {MdDateRange} from 'react-icons/md'
import { FaEdit } from "react-icons/fa";
import dummy_img from "../../assets/imge/portrait-young-pretty-girl-using-mobile-phone_171337-11435.jpg";
import AuthApi from "../../api/authApi";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      file: null,
      hideImg: false,
      image: "",
      password: "",
      mag: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      image: event.target.files[0],
    });
    if (event.target.files[0]) {
      this.setState({
        hideImg: true,
      });
    }
  };

  componentDidMount() {
    AuthApi.getCustomerDetail().then((res) => {
      console.log("res", res)
      if (res.data.Error == false) {
        this.setState({ profile: res.data.Data });
        console.log("password", this.state.profile.password)
      }
    });

  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }
  update = () => {
    this.setState({
      msg: "",
    });

    let data;
    if (this.state.password) {

      data = {
        name: this.state.profile.name,
        LastName: this.state.profile.LastName,
        email: this.state.profile.email,
        password: this.state.password,
        mobile_number: this.state.profile.mobile_number,
        Profile_Pic: this.state.image.name,
        Address: this.state.Address
      };
    } else {
      data = {
        name: this.state.profile.name,
        LastName: this.state.profile.LastName,
        email: this.state.profile.email,
        mobile_number: this.state.profile.mobile_number,
        Profile_Pic: this.state.image.name,
        Address: this.state.Address
      };
    }
    AuthApi.updateCustomerDetail(data).then((res) => {
      const data1 = new FormData();
      data1.append("file", this.state.image);
      AuthApi.updateCustomerDetail(data1).then((res) => {
        this.setState({
          image: res.data.image,
        });
      });
      if (res.data.Error == false) {
        this.setState({
          msg: "Profile Updated Successfully",
        });
      }
    });
  };

  render() {
    return (
      <>
        <div className="bgDarkHeader">
          <Header />
        </div>
        <div className="container " style={{ marginTop: "6rem" }}>
          <div className="main_profile">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body p-0">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <div className="main_edit_profile">
                            {this.state.profile.Profile_Pic ? (
                              <img
                                src={
                                  this.state.file
                                    ? this.state.file
                                    : `${process.env.REACT_APP_BASE_URL}/${this.state.profile.Profile_Pic}`
                                }
                                alt=""
                              />
                            ) : (
                              <img
                                      src={login_img}
                                      className="img-fluid"
                                      alt=""
                                    />
                            )}
                            <div
                              className="chose_img_icon"
                              onClick={this.handleClick}
                            >
                              <FaEdit />
                            </div>
                            <input
                              type="file"
                              ref="fileUploader"
                              accept="image/*"
                              name="Profile_Pic"
                              id="file"
                              style={{ display: "none" }}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>

                        <h5>{this.state.profile.name} {this.state.profile.lastName}  </h5>
                        <h6>{this.state.profile.email}</h6>
                      </div>
                      <div className="profilelinks">
                        <div className="main_links_profile">
                          <ul>
                            {/* <li>
                                                        <a href="#"> < AiOutlineDashboard /> Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> < RiEditLine /> Edit Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> < AiOutlineDashboard /> Dashboard</a>
                                                    </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="main_title_profile_page">
                      <h6 className="mb-3">Personal Details</h6>
                      {this.state.msg ? (
                        <p
                          style={{
                            color: "green",
                            fontWeight: "600",
                            letterSpacing: "1px",
                          }}
                        >
                          {this.state.msg}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="row gutters">
                      {/* {JSON.stringify(this.state.data,null,2)} */}

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="fullName">First Name</label>
                          <input
                            type="text"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  name: e.target.value,
                                },
                              }));
                            }}
                            value={this.state.profile.name}
                            id="fullName"
                            placeholder="Enter First Name"
                          />
                          <FaUserAlt className=" icon" />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="lastname">Last Name</label>
                          <input
                            value={this.state.profile.lastName}
                            type="text"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  lastName: e.target.value,
                                },
                              }));
                            }}
                            id="lastname"
                            placeholder="Enter Last Name"
                          />
                          <FaUserAlt className="icon" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms">
                          <label for="eMail">Email</label>
                          <input
                            value={this.state.profile.email}
                            type="email"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  email: e.target.value,
                                },
                              }));
                            }}
                            id="eMail"
                            placeholder="Enter Email"
                          />

                          <MdDateRange className="icon" />

                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="phone">Date Of Birth</label>
                          <input
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  password: e.target.value,
                                },
                              }));
                            }}
                            // value={this.state.profile.password}
                            type="text"
                            id="dateofbirth"
                            placeholder="Enter Date Of Birth"
                          />

                          <RiLockPasswordLine className="icon" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="eMail">Phone</label>
                          <input
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  mobile_number: e.target.value,
                                },
                              }));
                            }}
                            value={this.state.profile.mobile_number}
                            id="phone"
                            placeholder="Enter Phone Number"
                          />
                          <FiPhone className="icon" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group form_main profile_forms ">
                          <label for="address">Address</label>
                          <input
                            value={this.state.profile.Address}
                            type="address"
                            onChange={(e) => {
                              this.setState((prevState) => ({
                                profile: {
                                  ...prevState.profile,
                                  Address: e.target.value,
                                },
                              }));
                            }}
                            id="address"
                            placeholder="Enter Address"
                          />
                          <FaRegAddressCard className="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="update_btns_profile">
                          <button
                            onClick={() => {
                              this.update();
                            }}
                            type="button"
                            id="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Profile;
