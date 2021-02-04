import axios from "axios";

const CORS_ANYWHERE = "http://cors-anywhere.herokuapp.com/";

export const dict = {
  async bing(word: string) {
    const bingUrl = "https://cn.bing.com/dict/search?q=" + word;
    const result = await axios.get(CORS_ANYWHERE + bingUrl);
    console.log(result);
  },

  async youdao(word: string) {
    const url =
      "http://dict.youdao.com/fsearch?client=deskdict&" +
      "keyfrom=chrome.extension&pos=-1" +
      "&doctype=xml&dogVersion=1.0&vendor=unknown&appVer=3.1.17.4208&le=eng&q=" +
      word;
    const result = await axios.get(url);
    console.log("youdoa", result);
  },
};
