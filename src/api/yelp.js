import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer rBjGeVB2HsbRfCiY0AjJQ3AjdIZTC4aMu-NdMJj58m3JTnLyXHjpsAZlcCRr-_JZY8lmbN5-UdDJLHC1kvapg22PJ5hNe6_Yx71hd2tgolzVgCjoJMA5eXtiIxl4X3Yx",
  },
});
