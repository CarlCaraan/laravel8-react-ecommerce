class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getvisitor";
  static PostContact = this.BaseURL + "/postcontact";
  static SiteInfo = this.BaseURL + "/getsiteinfo";
}

export default AppURL;
