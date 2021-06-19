// stopWatch assign
function stopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("stopWatch has already started");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("STOPwatch already sarted");

    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    }
  });
}


// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj);
// value are primittives value types copied by value
// array obj function array are reference type passed by ref
// **********************************************************************************
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(10);

// *********************** IRATING OVER OBJ
for (let key in another) {
  if (typeof another[key] === "function")
    //to check the type of the keys we can use it
    console.log(key, another[key]); // obj[key] 2nd arg will give the value of keys as well alone jey will give keys only
}
// ******************
const keys = Object.keys(Circle);
console.log(keys);
// *************
// **************check the existncere of the prop or method
if ("radius" in another) {
  console.log("radius");
}

// encapulation hiding some of the data form outside
// by making them local instead of property we can on the
// object we assign locally with let
function Olo(radius) {
  this.radius = radius;
  let defaultlocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultlocation;
    // coloure
  };
  this.draw = function () {
    // computeOptimumLocation(0.1); ///  it will work bz of clouser
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultlocation;
    }, // read only property
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");

      defaultlocation = value;
    }
  });
}
const polo = new Olo(10);
polo.defaultlocation = 1;

// polo.getDefaultLocation(); Readonly by get method
polo.draw();

// ************************** ADD
Circle.location = { X: 1 };
//*************************** ADD
Circle["location"] = {
  x: 1
};
// ********************* DLETETE
delete Circle.location;

// *********************** CALL
Circle.call({}, 1, 2, 3);
// {}- 1sr arg create new object this will refernce {} and dertermin the context foir for this ex this.era

// ******************** APPLY
Circle.apply({}, [1, 2, 3]);
// same but array is passed as 2 argument

// functions are object
// const circle = {
// radius:1,
// location:{
// x:1,
// y:2
// },
// draw: function(){
//   console.log('draw')
// }
// };

// circle.draw();
// // object literalas
// // if object is going to becareted again and agin it will cause isuue in maintaining it if oject has one or more method its having bheviour

// //  solution factory function or
// function createCircle(radius){
//   return {
//     radius,
//    draw: function(){
// console.log("draw");
//    }
//     }
//   }
// const circle2 = createCircle(1);
// circle2.draw();
// // return the properties - factory function

// //constructor fun
// function Circle(radius){
//   this.radius= radius;
// this.draw= function(){
//   console.log("draw");

// //this passes the refrencee to the function that is going excute this function
// }
// }
// const another = new Circle(1);

// // new create empty obj {} and set this point to that obj {}obj and will return another obj from orignal
// // usess this and new constructor function as it cleartes the instance of using class

// function Square(length){
// this.length =length;
// this.draw = function(){
//   console.log("hello sqaure")
// }
// }
// const second = new Square(30);
// return second;

// // every object has constructor property that refrences to the function that was used to create that object
