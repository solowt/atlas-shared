"use strict";

(function(){
  angular
  .module("users")
  .factory("UserFactory", [
    "$resource","$http",
    UserFactoryFunction
  ]);

  function UserFactoryFunction($resource,$http){
    return $resource("http://127.0.0.1:3000/users/:id.json", {}, {
      update: {method: "PUT"}
    });
  }
}());
