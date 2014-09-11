"use strict";

var productionMode = false;
if (process.env.DEVELOPMENT!=null || process.env.DEVELOPMENT !=='undefined') {
  if (process.env.DEVELOPMENT==='1') {
      productionMode = true;
  };
}

require("./grid").run({
  "developmentPort":80,
	"port":443,
  "secret": "c821a09ebf01e090a46b6bbe8b21bcb36eb5b432265a51a76739c20472908989",
  "salt": "5eWIYXeepr0Gvy7wwPKPTQ0aW+wIjbRjjCCLfNRo2AI=",
  'allowDestroy': true,
  'allowDrop': true,
  'productionMode':productionMode,
  'mongoURI':'mongodb://localhost:27017/grid',
  'push_dev_key':"./push_development_ssl/key.pem",
  'push_dev_cert':"./push_development_ssl/cert.pem",
  'ca':'./ssl/ca.ca-bundle',
  "key":"./ssl/server.key",
  "cert":"./ssl/server.crt",
  'push_key':"./push_production_ssl/key.pem",
  'push_cert':"./push_production_ssl/cert.pem"

});
