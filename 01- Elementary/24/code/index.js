"use strict";
function print(list) {
  for (let index = 0; index < list.length; index++)
    console.log(`${index} - ${list[index]}`);
}
const cities = ["London", "Manchester", "Paris"];
print(cities);
