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
  static UserResetPassword = this.BaseURL + "/resetpassword";

  // Similar Product
  static SimilarProduct(code) {
    return this.BaseURL + "/similar/" + code;
  }

  // Review List
  static ReviewList(id) {
    return this.BaseURL + "/reviewlist/" + id;
  }

  // Add to Cart
  static AddToCart = this.BaseURL + "/addtocart";

  // Cart Count
  static CartCount(product_code) {
    return this.BaseURL + "/cartcount/" + product_code;
  }

  // Add Favourite
  static AddFavourite(product_code, email) {
    return this.BaseURL + "/favourite/" + product_code + "/" + email;
  }

  // Favourite List
  static FavouriteList(email) {
    return this.BaseURL + "/favouritelist/" + email;
  }
}

export default AppURL;
