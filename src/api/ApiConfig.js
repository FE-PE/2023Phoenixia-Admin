const BASE_URL = "https://www.fepe-server.com/";
const CONFIG = {
    headers: {
      "Access-Control-Allow-Origin": BASE_URL,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Access-Control-Allow-Credentials':"true",
    }
};

export {BASE_URL, CONFIG}