class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  // Get Visitor Route
  static VisitorDetails = this.BaseURL + "/getvisitor";

  // Contact Page Route
  static PostContact = this.BaseURL + "/postcontact";

  // Site Info Route
  static SiteInfo = this.BaseURL + "/getsiteinfo";

  // All Category Route
  static AllCategoryDetails = this.BaseURL + "/getcategory";

  // ProductList Route
  static ProductListByRemark(remark) {
    return this.BaseURL + "/productlistbyremark/" + remark;
  }
  static ProductListByCategory(category) {
    return this.BaseURL + "/productlistbycategory/" + category;
  }
  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + "/productlistbysubcategory/" + category + "/" + subcategory
    );
  }

  // All Slider
  static AllSlider = this.BaseURL + "/allslider";

  // ProductDetails
  static ProductDetails(code) {
    return this.BaseURL + "/productdetails/" + code;
  }

  // Notification History
  static NotificationHistory = this.BaseURL + "/notification";

  // Search
  static ProductBySearch(searchKey) {
    return this.BaseURL + "/search/" + searchKey;
  }

  // ========= Authentication =========
  static UserLogin = this.BaseURL + "/login";
  static UserData = this.BaseURL + "/user";
  static UserRegister = this.BaseURL + "/register";
  static UserForgotPassword = this.BaseURL + "/forgotpassword";
}

export default AppURL;
