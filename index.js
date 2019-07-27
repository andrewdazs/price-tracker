const request = require('request');
var afterLoad = require('after-load');
const JSSoup = require('jssoup').default;

const options = {
  url: 'https://www.amazon.com/Sony-WH1000XM3-Canceling-Headphones-WH-1000XM3/dp/B07HGT1PW2/ref=lp_509318_1_61?s=aht&ie=UTF8&qid=1564263378&sr=1-61',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0'
  }
};

const page = afterLoad(options.url);
const soup = new JSSoup(page);
const productTitle = soup.find('span', { 'id': 'productTitle' }).text;

console.log(productTitle);
