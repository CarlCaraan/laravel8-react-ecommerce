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
}

export default AppURL;
