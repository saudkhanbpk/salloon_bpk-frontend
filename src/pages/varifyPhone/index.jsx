import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import sideImge from "../../assets/imge/varifyPhone.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import logo from "../../assets/imge/Biglogo.png";
import BtnLoader from "../../Componet/loaders/btnLoader";
import { Auth } from "../../firebase";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
toast.configure();

export class VarifyPhone extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      apiError: "",
      apiLoader: false,
      result: "",
      number: "",
      flag: false,
      error: "",
    };
  }
  responseGoogle = (response) => {};
  responseFacebook = (response) => {};
  submitNumber = () => {
    if (this.state.number == "") {
      this.setState({ error: "Phone number is required." });
    } else {
      this.forgetBtn();
    }
  };

  forgetBtn = async (e) => {
    try {
      const response = await this.setUpRecaptcha(this.state.number);
      console.log(response);
      this.setState({ result: response });
      this.setState({ flag: true });
      localStorage.setItem("mobile_number", this.state.number);
    } catch (err) {
      toast.error("Login failed");
      this.setState({ error: err.message });
    }

    // this.setState({ apiLoader: true, apiError: "" });
    // let values = {
    //   mobile_number: this.state.value,
    // };
    // localStorage.setItem("mobile_number", this.state.value);
    // AuthApi.forgotpassword(values)
    //   .then((response) => {
    //     this.setState({
    //       apiError: response.data.msg,
    //       apiLoader: false,
    //     });

    //     localStorage.setItem("updating_password", true);
    //     setTimeout(() => {
    //       this.props.history.push("/varifiy_pin/:user");
    //     }, 1000);
    //   })
    //   .catch((error) => {
    //     "error"(error);
    //     this.setState({
    //       apiLoader: false,
    //     });
    //     // if(error.response.status==400){
    //     // }
    //   });
  };

  async setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      Auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(Auth, number, recaptchaVerifier);
  }

  verifyOtp = async (e) => {
    this.setState({ error: "" });
    if (this.state.otp === "" || this.state.otp === null) return;
    try {
      await this.state.result.confirm(this.state.otp);
      this.props.history.push("/update-password");
    } catch (err) {
      this.setState({ error: err.message });
    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="sideImgeContainer forgot_image">
              <img src={sideImge} />
            </div>
          </div>
          <div className="col-md-6 LoginContainer bg-white">
            <div className="logoContainer">
              <img src={logo} />
            </div>
            {this.state.valir}
            <h3 className="py-2">Verify your phone number</h3>
            <p className="varifyPoneNumber pb-4">
              We have sent you an SMS with a code to number{" "}
              <span>
                {this.state.value && this.state.value.length > 0
                  ? this.state.value
                  : "+00 0000 000 ..."}
              </span>
            </p>
            <div className="loginInerContainer">
              <div
                className="py-2 mb-3 mt-1 formBtns"
                style={{
                  display: this.state.flag ? "none" : "block",
                }}
              >
                <div className="w-100">
                  <div className="vairfyPhoneContainer mb-0">
                    <div className="flex-grow-1">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={this.state.number}
                        international
                        onChange={(e) => this.setState({ number: e })}
                      />
                    </div>

                    <div>
                      {this.state.value && this.state.value.length > 0 && (
                        <FaTimesCircle
                          onClick={() => {
                            this.setState({ value: "" });
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-danger">{this.state.apiError}</div>
                  <div className="loader_forget_btn">
                    {this.state.apiLoader && <BtnLoader />}
                  </div>
                  <div id="recaptcha-container"></div>
                  &nbsp;
                  {!this.state.apiLoader && (
                    <button
                      className="active mx-0 "
                      onClick={() => {
                        this.submitNumber();
                      }}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
              <div style={{ display: this.state.flag ? "block" : "none" }}>
                <Form.Group className="mb-3" controlId="formBasicOtp">
                  <Form.Control
                    type="otp"
                    placeholder="Enter OTP"
                    onChange={(e) => this.setState({ otp: e.target.value })}
                  />
                </Form.Group>
                <div className="button-right">
                  <Link to="/">
                    <Button variant="secondary">Cancel</Button>
                  </Link>
                  &nbsp;
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={() => {
                      this.verifyOtp();
                    }}
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VarifyPhone;
