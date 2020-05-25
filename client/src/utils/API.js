import axios from "axios";

const APIKEY = "AIzaSyAW1s4IsUIfvI_oI7U8ctaEnFiKqz1p1Ug";

export default {
    search: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + APIKEY + "&maxResults=10");
    }
}

