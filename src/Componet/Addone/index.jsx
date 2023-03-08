import React, { Component } from "react";
import dtl_img from "../../assets/imge/newimages/Group 20955.png";
import collapse_icon from "../../assets/imge/womans_hair_200px.png";
import { Card, Accordion } from "react-bootstrap";
import { FiChevronLeft } from "react-icons/fi";
import { HiOutlineChevronDown } from "react-icons/hi";
import home_icon from "../../assets/imge/newimages/Group 20923.png";
import { AiFillCloseCircle } from "react-icons/ai";

class Addone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAll: "",
    };
  }

  render() {
    // let products = [];
    // this.props.bookingDetail.Products &&
    //   this.props.bookingDetail.Products?.map((data) => {
    //     products.push(data._id);
    //   })(products);
    return (
      <>
        <div className="tabbed_wizard">
          <div className="head_backarrow">
            <div className="align_skip_button">
              <button
                type="button"
                className="btn"
                onClick={this.props.changeTab}
              >
                {" "}
                <FiChevronLeft /> <img src={home_icon} alt="" />{" "}
              </button>
              <button
                onClick={() => {
                  this.props.updateTabs(2);
                }}
                type="button"
                className="btn skip_btn"
              >
                Skip Ad-Ons
              </button>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-8">
              <div className="serv_wizards">
                <Accordion className="privacyContainer" defaultActiveKey="0">
                  {this.props.allData.Products &&
                    this.props.allData.Products.map((data, i) => {
                      return (
                        <Card className="main_tabbs_one">
                          <Accordion.Toggle eventKey={i}

                            as={Card.Header}
                          >
                            <div className="custom_head_collapse">
                              <div className="main_services_cards">
                                <div className="servuces_cards_image">
                                  <div className="collapse_img">
                                    <img
                                      src={collapse_icon}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="collapse_titles">
                                    <p>Product Type</p>
                                    <h3>{data.Category.title}</h3>
                                  </div>
                                </div>
                                <div className="chevron_icons_serv">
                                  <HiOutlineChevronDown />
                                </div>
                              </div>
                            </div>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={i}>
                            <Card.Body className="adjust_padding">
                              {/* <div className="heading_main_tabbed_wizrda">
                                                        <div className="icon_heading_wizard">
                                                            <FiChevronLeft />
                                                        </div>
                                                        <div className="text_wizard_main">
                                                            <h3>Body Care</h3>
                                                        </div>
                                                    </div> */}
                              {data.products &&
                                data.products.map((data1) => {
                                  return (
                                    <div className="description_collapse">
                                      <div className="collapsed_viewd">
                                        <div className="checkbox_collapsed">
                                          <div className="custom_ceckbox_description">
                                            <div class="form-group mb-0">
                                              <input
                                                onChange={(e) => {
                                                  let dat = [];
                                                  if (
                                                    this.props.bookingDetail.Products?.some(
                                                      (m) => m._id == data1._id
                                                    )
                                                  ) {
                                                    dat =
                                                      this.props.bookingDetail.Products.filter(
                                                        (dd) =>
                                                          dd._id !== data1._id
                                                      );
                                                  } else {
                                                    dat?.push({
                                                      _id: data1._id,
                                                      Name: data1.Name,
                                                      Price: data1.Price,
                                                      Quantity: 1,
                                                    });
                                                  }
                                                  this.props.setBookingDetail(
                                                    "Products",
                                                    dat
                                                  );
                                                }}

                                                type="checkbox"
                                                id={data1._id}
                                                checked={
                                                  this.props.bookingDetail.Products?.some(
                                                    (m) => m._id == data1._id
                                                  )
                                                }

                                              />
                                              <label
                                                htmlFor={data1._id}
                                              ></label>
                                            </div>
                                            <div className="name_checkbox">
                                              <h3>{data1.Name}</h3>
                                              <p>{data1.Description}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      );
                    })}
                </Accordion>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_detail_show">
                {this.props.bookingDetail.Services ? (
                  <>
                    <div className="heade_dtl_sho">
                      <h3>Summary</h3>
                    </div>
                    <div className="main_summary_added">
                      <div className="heading_added">
                        <h3>Services</h3>
                      </div>
                      <div className="listing_added_summa">
                        <div className="main_added_summary">
                          <h5>{this.props.bookingDetail.Services.Name}</h5>
                          {/* <AiFillCloseCircle style={{cursor:"pointer"}} onClick={()=>{this.props.setBookingDetail("Services",null)}} /> */}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="strt_continue_btn">
                  <button
                    onClick={() => {
                      this.props.updateTabs(2);
                    }}
                    type="button"
                    className="btn btn-block btn-primary"
                  >
                    Continue to select time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Addone;
