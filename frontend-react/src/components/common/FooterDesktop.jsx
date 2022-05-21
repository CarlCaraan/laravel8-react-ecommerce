import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./FooterDesktop.module.css";

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        {/* Start Footer One */}
        <div className={`${classes["footer-one"]}`}>
          <Container>
            <Row>
              <Col className="mt-4" xl={6} lg={6} md={12}>
                <h4 className={`${classes["footer-title"]}`}>
                  Payment Methods
                </h4>
                <Row>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-1.png")}
                      alt="delivery-services-1"
                      width="90px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-2.png")}
                      alt="delivery-services-1"
                      width="65px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-3.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-4.png")}
                      alt="delivery-services-1"
                      width="60px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-5.png")}
                      alt="delivery-services-1"
                      width="70px"
                    />
                  </Col>
                  <Col>
                    <img
                      src={require("../../assets/images/common/footer/payment/payment-method-6.png")}
                      alt="delivery-services-1"
                      width="45px"
                    />
                  </Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <Row>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Delivery Services
                    </h4>
                    <div className="vstack gap-3">
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-1.png")}
                        alt="delivery-services-1"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-2.png")}
                        alt="delivery-services-2"
                        width="142px"
                      />
                      <img
                        src={require("../../assets/images/common/footer/delivery/delivery-services-3.png")}
                        alt="delivery-services-3"
                        width="142px"
                      />
                      <span>
                        <img
                          className="me-2"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-4.png")}
                          alt="delivery-services-4"
                          width="142px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-5.png")}
                          alt="delivery-services-5"
                          width="80px"
                        />
                      </span>
                      <span>
                        <img
                          className="me-3"
                          src={require("../../assets/images/common/footer/delivery/delivery-services-6.png")}
                          alt="delivery-services-6"
                          width="75px"
                        />
                        <img
                          src={require("../../assets/images/common/footer/delivery/delivery-services-7.png")}
                          alt="delivery-services-7"
                          width="120px"
                        />
                      </span>
                    </div>
                  </Col>
                  <Col className="mt-4" xl={6} lg={6} md={6} sm={12}>
                    <h4 className={`${classes["footer-title"]}`}>
                      Verified by
                    </h4>
                    <img
                      className="me-3"
                      src={require("../../assets/images/common/footer/verified/verified-by-1.png")}
                      alt="delivery-services-1"
                      width="100px"
                    />
                    <img
                      src={require("../../assets/images/common/footer/verified/verified-by-2.png")}
                      alt="delivery-services-2"
                      width="92px"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer One */}

        {/* Start Footer Two */}
        <div className={`${classes["footer-two"]}`}>
          <Container>
            <Row>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-title"]}`}>
                  The Top Online Shopping <br /> Experience with Lazada
                  Philippines
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Lazada Philippines, the top online shopping in the country,
                  has made several contributions to the growing e-commerce
                  community in the Philippines, creating an avenue for sellers
                  to promote their items online, while also giving Filipinos new
                  ways to discover and buy the best products for themselves.
                  Lazada continues its growth after nine years of quality
                  service, constantly expanding our assortment of products and
                  offering convenient payment options and delivery anywhere in
                  the country. The true effortless shopping experience always
                  begins with Lazada, since everything you want, whether it is
                  fast service or the best products at the lowest prices, it's
                  assured, Nasa Lazada Yan! <br /> <br />
                  Lazada's Logo doesn't just symbolize the love for e-commerce
                  but also symbolizes a corner of the roup's vision to provide
                  excellent service and opportunities for sellers and customers
                  to interact. The online shopping platform also values customer
                  satisfaction through a positive experience long-term. Led by
                  experienced professionals and progressive thinkers, the
                  company has grown to showcase new brands, support new
                  competitive sellers, and provide the best deals that buyers
                  can easily make use of during the special campaigns. <br />{" "}
                  <br />
                  Committed to both quantity and quality, Lazada continues to
                  provide its customers with a diverse selection of products at
                  the lowest prices every time. Through partnerships with brands
                  and suppliers, many of the products sold on the platform are
                  also assured to be 100% legit and authentic, providing the
                  trust that customers will get the original and top-quality
                  selections every time. Top it all off with the numerous deals,
                  surprises, and free shipping vouchers from the fun campaigns,
                  and you get much of your money's worth online!
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-title"]}`}>
                  The Best Products and Deals? <br />
                  Nasa Lazada Yan!
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  For many years, the phrase "Effortless Shopping" has proven
                  the company's constant desire to delight its customers. With a
                  continuously growing product assortment and the best deals,
                  customers can always anticipate an exciting and convenient
                  shopping experience. Today, with online shopping growing in
                  the country, Lazada also matches the growing expectations from
                  its customers when it comes to the best products that people
                  can buy online. "Nasa Lazada Yan" is not just a tagline but a
                  mindset that the platform wants to instill in both new and
                  tenured buyers. Whether you are into the latest fashion trends
                  or looking for the latest gadgets or simply settling in with
                  family or baby needs, the Lazada Group's got the right brands
                  and competitive categories sorted for you any time, assuring
                  you that everything you need is all in Lazada!
                </p>
                <h6 className={`${classes["footer-two-sub-title"]}`}>
                  From Products to Services, It is Assured,
                  <br /> Sure Ka Sa Lazada!
                </h6>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Lazada's continuous growth in product inventory also allows
                  the platform to improve its services to better suit the
                  growing needs of its various customers. Trust is always
                  essential when it comes to Lazada's value for customers.
                  Through the different services and perks the platform
                  provides, Filipinos can always remember Sure Ka Sa Lazada!
                  Especially when it comes to these valued services. LAZWALL
                </p>
                <h6 className={`${classes["footer-two-sub-title"]}`}>
                  LAZWALLET CONVENIENCE
                </h6>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Online shopping and transactions are made simpler as Lazada
                  brings out the LazWallet function online. This digital wallet
                  lets you load up online credits and use them to effortlessly
                  pay for the items you want online. You can also avail of other
                  added vouchers, deals, and even cashback through this
                  function, giving you more ways to save more when buying
                  through Lazada!
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  SECURED PAYMENT AND CASH ON <br /> DELIVERY
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Convenience and security are always prioritized within the
                  platform, especially when it comes to online transactions and
                  payments. Today, Lazada now boasts multiple secured and
                  convenient payment channels through various credit cards
                  companies, banks, and even other online credit. <br /> <br />
                  Similarly, Lazada continues to offer cash on delivery in the
                  Philippines, with the option also being open for traditional
                  ways of exchanging cash for the items delivered online.
                  Whether you want to do the traditional way of shopping, or
                  using the digital platform to pay, you can be assured that
                  these options will not only be safe but easier to do.
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  SOLID CUSTOMER COMMUNICATION
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  The best way to shop online is to know more about the products
                  that you are buying. Fortunately, Lazada continues to improve
                  its communication with buyers through live-chats and customer
                  care. You can now directly message the sellers offering you
                  the products that you want and ask them more about the
                  products live. You can also communicate with Lazada's own
                  customer care service, answering all of your inquiries with
                  delivery dates and other important questions.
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  AUTHENTIC PRODUCT GUARANTEED
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Customers have 24/7 access to the top brands and over 10
                  million products through Lazada online. Alongside this, there
                  is also The{" "}
                  <span className={`${classes["footer-link-text"]}`}>
                    LazMall
                  </span>
                  , which also holds some of the competitive sellers, ranging
                  from the small groups to the biggest brands, giving customers
                  many more options to choose from. Accessed through the
                  intuitive and efficient Lazada App, you can also get the
                  latest updates on the top products sold, the upcoming
                  campaigns, as well as avail app-exclusive deals just for you.
                </p>
              </Col>
              <Col className="mt-5" xl={3} lg={3} md={6} sm={12}>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  CONVENIENT RETURNS
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  Any product can be returned within 7 or 14 days upon delivery
                  depending on the type of product purchased. The Customer
                  Service team can also assist you with any of your questions.
                  Thesse policies also fall under guaranteed services as trusted
                  merchants and service providers can sell in the platform so
                  that every item purchased will lead to a happy customer.
                </p>
                <h5 className={`${classes["footer-two-sub-title"]}`}>
                  THE HOTTEST CAMPAIGNS
                </h5>
                <p className={`${classes["footer-two-body-text"]}`}>
                  A staple of the Lazada Group, customers can check out the
                  latest deals and upcoming surprises offered through the
                  hottest campaigns that comes each year! Experience the biggest
                  sales like the{" "}
                  <span className={`${classes["footer-link-text"]}`}>
                    Lazada Birthday Sale
                  </span>
                  , the competitive midyear campaign, and largest online
                  shopping festivals: the{" "}
                  <span className={`${classes["footer-link-text"]}`}>
                    11.11
                  </span>{" "}
                  and{" "}
                  <span className={`${classes["footer-link-text"]}`}>
                    12.12 Sale
                  </span>
                  ! Grab the best deals and free shipping vouchers from the fun
                  campaigns, and you get much of your money's worth online!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer Two */}

        {/* Start Footer Three */}
        <div className={`${classes["footer-three"]}`}>
          <Container className={`${classes["responsive-footer"]}`}>
            <Row>
              <Col className="mt-5" xl={5} lg={5} md={12} sm={12}>
                <h4 className={`${classes["footer-three-title"]}`}>
                  Lazada Southeast Asia
                </h4>

                {/* Start Map Grid */}
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/indonesia.png")}
                  alt="indonesia.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/malaysia.png")}
                  alt="malaysia.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/philippines.png")}
                  alt="philippines.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/singapore.png")}
                  alt="singapore.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/thailand.png")}
                  alt="thailand.png"
                  width="30px"
                />
                <img
                  className={`${classes["footer-icon"]} img-fluid`}
                  src={require("../../assets/images/common/footer/map/vietnam.png")}
                  alt="vietnam.png"
                  width="30px"
                />
                {/* End Map Grid */}
                <h4 className={`${classes["footer-copyright"]}`}>
                  &copy; Lazapee 2022
                </h4>
              </Col>
              <Col className="mt-5" xl={7} lg={7} md={12} sm={12}>
                <Row>
                  <Col className="mb-4" xl={6} lg={6} md={12} sm={12}>
                    <h4 className={`${classes["footer-three-title"]}`}>
                      Follow Us
                    </h4>
                    {/* Start Social Icon Grid */}
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/facebook.png")}
                      alt="facebook.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/twitter.png")}
                      alt="twitter.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/google-plus.png")}
                      alt="google-plus.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/instagram.png")}
                      alt="instagram.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/youtube.png")}
                      alt="youtube.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/pinterest.png")}
                      alt="pinterest.png"
                      width="30px"
                    />
                    <img
                      className={`${classes["social-icon"]} img-fluid me-1`}
                      src={require("../../assets/images/common/footer/social/blogger.png")}
                      alt="blogger.png"
                      width="30px"
                    />
                    {/* End Social Icon Grid */}
                  </Col>
                  <Col xl={6} lg={6} md={12} sm={12}>
                    <div
                      class={`${classes["responsive-download-wrapper"]} hstack gap-1`}
                    >
                      <img
                        className={`${classes["responsive-lazada-icon"]} img-fluid me-1`}
                        src={require("../../assets/images/common/footer/lazada-icon.png")}
                        alt="lazada-icon.png"
                        width="60px"
                      />
                      <div>
                        <span className={`${classes["download-text-1"]}`}>
                          Go where your heart beats
                          <br />
                        </span>
                        <span className={`${classes["download-text-2"]}`}>
                          {" "}
                          Download the App
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <img
                        className={`${classes["download-icon"]} me-2`}
                        src={require("../../assets/images/common/footer/appstore.png")}
                        alt="appstore.png"
                        width="130px"
                      />
                      <img
                        className={`${classes["download-icon"]}`}
                        src={require("../../assets/images/common/footer/googleplay.png")}
                        alt="googleplay.png"
                        width="135px"
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* End Footer Three */}
      </Fragment>
    );
  }
}

export default FooterDesktop;
