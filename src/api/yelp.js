import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3aTEjWF3DHYon2RtzSBSU2u060qQs8rosJMIVg-px4dZmLwF9HfCpsQdUNPcq5CUPMy_BBUlagoXPEIBapPZCZfQ3MStcgurdzy0X3GaXPzX0-ec2js7wvYRAknSYXYx",
  },
});
