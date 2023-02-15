import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideImge from "../../assets/imge/photo1.jpeg";
import OtpInput from "react-otp-input";
import logo from "../../assets/imge/Biglogo.png";
import AuthApi from "../../api/authApi";
import BtnLoader from "../../Componet/loaders/btnLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Auth } from "../../firebase";
import PhoneInput from "react-phone-number-input";
import { FaTimesCircle } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
toast.configure();

export class VarificationPin extends Component {
  constructor() {
    super();
    this.state = {
      otp: "",
      timer: 30,
      msg: "",
      error_msg: "",
      apiLoader: false,
      result: "",
      value: "",
      apiError: "",
      number: "",
      flag: false,
      error: "",
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("mobile_number")) {
      this.props.history.push("/signup");
    }
    this.countDown();
  }
  countDown = () => {
    let times = setInterval(() => {
      let num = this.state.timer - 1;
      //  if(num<10){
      //     "0"+num
      //  }
      this.setState({ timer: num });
      if (this.state.timer == 0) {
        clearInterval(times);
      }
    }, 1000);
  };

  resendCode = () => {
    if (this.state.timer == 0) {
      this.setState({ timer: 30, otp: "" });

      this.resendOtp();
    }
  };

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
  };
  otp = async (e) => {
    // this.setState({ otp: e, error_msg: "" });
    // if (e.length == 6) {
    //   // this.setState({ apiLoader: true })(`Otp is submited ${e}`);
    //   let mobile_number = localStorage.getItem("mobile_number");
    //   let object = {
    //     mobile_number: mobile_number,
    //     otp: e,
    //   };
    //   AuthApi.varify_pin(object)
    //     .then((res) => {
    //       if (res.data.token) {
    //         this.setState({ apiLoader: false });
    //         this.setState({
    //           msg: "Otp varifid success fully.",
    //           error_msg: "",
    //         });
    //         localStorage.setItem("token", res.data.token);
    //         let updating_password = localStorage.getItem("updating_password");
    //         if (updating_password == "true") {
    //           localStorage.removeItem("updating_password");
    //           this.props.history.push("/update-password");
    //         } else {
    //           localStorage.removeItem("updating_password");
    //           this.props.history.push("/");
    //         }
    //       } else {
    //         this.setState({
    //           apiLoader: false,
    //           error_msg: res.data.msg,
    //         });
    //       }
    //     })
    //     .catch((error) => {
    //       if (error.response) {
    //         this.setState({ apiLoader: false });
    //         this.setState({
    //           error_msg: error.response.data.msg,
    //           msg: "",
    //         });
    //       }
    //     });
    // }

    console.log(this.state.otp);
    if (this.state.otp === "" || this.state.otp === null) {
      this.setState({ error_msg: "Please enter otp" });
    }
    try {
      let confirm = this.state;
      console.log(confirm);
      await this.state.result.confirm(this.state.otp);
      this.setState({ error_msg: "" });
      this.props.history.push("/");
    } catch (e) {
      this.setState({ error_msg: e.message });

      console.log(e);
    }
  };

  resendOtp = () => {
    this.setState({
      apiLoader: true,
      error_msg: "",
    });
    let mobile_number = localStorage.getItem("mobile_number");
    let object = {
      mobile_number: mobile_number,
    };
    AuthApi.res_end_otp_mobile(object)
      .then((res) => {
        if (res.data.Error == false) {
          this.countDown();
          this.setState({ apiLoader: false });
        }
      })
      .catch((error) => {});
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
      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: err.message });
    }
    console.log(this.state);
  };
  render() {
    return (
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-md-6 px-0">
      //       <div className="sideImgeContainer">
      //         <img src={sideImge} />
      //       </div>
      //     </div>
      //     <div className="col-md-6 LoginContainer bg-white">
      //       <div
      //         className="logoContainer"
      //         onClick={() => this.props.history.push("/")}
      //       >
      //         <img src={logo} />
      //       </div>
      //       {this.state.valir}
      //       <h3 className="py-2">Phone verification</h3>
      //       <p className="varifyPoneNumber pb-4">Enter your OTP Code here</p>
      //       <div className="loginInerContainer">
      //         <div className="py-1 mb-3  formBtns">
      //           <div className="w-100">
      //             <div className="otpContainer">
      //               {/* <OtpInput
      //                 value={this.state.otp}
      //                onChange={(e) => this.otp(e)}
      //                 placeholder="_ _ _ _ _ _"
      //                 isInputNum={true}
      //                 numInputs={6}
      //               /> */}
      //               <input
      //                 type="number"
      //                 className="form-control"
      //                 placeholder="Enter your Otp"
      //                 value={this.state.otp}
      //                 onChange={(e) => this.setState({ otp: e.target.value })}
      //               />
      //             </div>
      //             <p className="text-success">{this.state.msg}</p>
      //             <p className="text-danger">{this.state.error_msg}</p>

      //             {this.state.apiLoader && <BtnLoader />}
      //             {!this.state.apiLoader && (
      //               <>
      //                 <p className="otpResend text-center ">
      //                   00:{this.state.timer < 10 ? 0 : ""}
      //                   {this.state.timer}
      //                 </p>
      //                 <p className="otpResend text-center ">
      //                   Didn't receive any code?
      //                 </p>

      //                 <p
      //                   onClick={() => {
      //                     this.resendCode();
      //                   }}
      //                   className={`otpResend text-center pb-4 ${
      //                     this.state.timer > 0 ? "disable" : ""
      //                   }`}
      //                 >
      //                   <span> Resend a new code</span>
      //                 </p>
      //                 <button
      //                   className="active mx-0 "
      //                   onClick={() => {
      //                     this.otp();
      //                   }}
      //                 >
      //                   Continue
      //                 </button>
      //               </>
      //             )}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
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
                {/* {this.state.value && this.state.value.length > 0
                ? localStorage.getItem("mobile_number")
                : "+00 0000 000 ..."} */}
                {localStorage.getItem("mobile_number")
                  ? localStorage.getItem("mobile_number")
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
                        value={localStorage.getItem("mobile_number")}
                        international
                        // defaultCountry="pk"
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

export default withRouter(VarificationPin);
