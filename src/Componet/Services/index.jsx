import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";
import colapse_icon from "../../assets/imge/womans_hair_200px.png";
import colapse_icon2 from "../../assets/imge/straight_razor_200px.png";
import colapse_icon3 from "../../assets/imge/barbershop5.png";
import colapse_icon4 from "../../assets/imge/makeup_100px.png";
import colapse_icon5 from "../../assets/imge/hair_dryer_240px.png";
import { Tab, Tabs } from "react-bootstrap";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Modal, Button } from "react-bootstrap";
import WizardFrom from "../../Componet/WizardFrom";
import { GrFormClose } from "react-icons/gr";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
      status:false,




    };
  }
 handleCloseModal = () => {
    this.setState({ showmodal: false });
  };
  updateTabe = (value) => {
    if (value.activeTab == this.state.activeTab) {
      this.setState({ activeTab: null });
    } else {
      this.setState({ activeTab: value.activeTab });
    }
  };

  handleShowModal = () => {
    this.setState({ showmodal: true, checked: !this.state.checked });
  };
  render() {
    console.log(this.props)
    let { activeTab } = this.state;

    return (
      <>



        <div className="main_servies_tabs">
          <div className="main_header_name_tabs">
            <h3>Services </h3>
          </div>

          <Tabs
            defaultActiveKey="Services"
            id="uncontrolled-tab-example"
            className="services_tabs"
          >
            <Tab eventKey="Services" title="Services">
              <Accordion className="privacyContainer" defaultActiveKey="0">
                {this.props.data &&
                  this.props.data.map((data, index) => {
                    return (
                      <Card
                        className={`${activeTab == index ? "tabActive" : ""}`}
                      >
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey={`1${index}`}
                        >
                          <div
                            className="custom_head_collapse"
                            onClick={() => {
                              this.updateTabe({ activeTab: index });
                            }}
                          >
                            <div className="main_services_cards">
                              <div className="servuces_cards_image">
                                <div className="collapse_img">
                                  {data.Category.Icon ?  (
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}/${data.Category.Icon}`}
                                      alt="image"
                                      className="img-fluid"
                                    />
                                  ) : (
                                    <img
                                      src={this.props.noImage}
                                      alt="noimage"
                                    />
                                  )}
                                </div>
                                <div className="collapse_titles">
                                  <p>Service Type</p>
                                  <h3>{data.Category?.title}</h3>
                                </div>
                              </div>

                              <div className="chevron_icons_serv">
                                <HiOutlineChevronDown />
                              </div>
                            </div>
                          </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={`1${index}`}>
                          <Card.Body className="adjust_padding">
                            <div className="description_collapse">
                              <div className="main_custom_chk_desri">
                                {data.services &&
                                  data.services.map((data1) => {
                                    return (
                                      <div className="custom_ceckbox_description">
                                        <div class="form-group mb-0">
                                          <input type="checkbox" id="2" onChange={this.props.handleChange}/>
                                          <label htmlFor="2"></label>
                                        </div>
                                        <div className="name_checkbox">
                                          <h3>
                                            {data1.Name}, {data1.Time_required}{" "}
                                            min
                                          </h3>
                                          <p>{data1.Description}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
              </Accordion>
            </Tab>

            {/* <Tab eventKey="Package & Offers" title="Package & Offers" className="add_border">

                    </Tab>
                    <Tab eventKey="Price Table" title="Price Table">

                    </Tab> */}
          </Tabs>


        </div>

        <Modal
          size="lg"
          show={this.state.showmodal}
          className="custom_modal_tabed"
          onHide={this.handleCloseModal}
        >
          <Modal.Body>
            <div className="main_tabbed_modal">
              <WizardFrom
                selectionStaff={this.state.selectionStaff}
                reserve_id={this.state.reserve_id}
                allData={this.state.allData}
              />
            </div>
            <div className="close_icon_modal" onClick={this.handleCloseModal}>
              <GrFormClose />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Services;
