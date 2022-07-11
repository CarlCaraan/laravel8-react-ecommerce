class Validation {
  // static NameRegex = /^[A-Za-z\'\s\.\:\-]+$/;
  static NameRegex =
    /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;
}

export default Validation;
