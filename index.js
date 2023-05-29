//1st problem
    // function greet(name){
    //     console.log(name);
    // }
    // greet("satyanarayan");
//2nd problem
    // function getSquare(num){
    //     let square = num**2;
    //     return square;
    // }
    // console.log(getSquare(6));
//3rd problem
    // function countLetter(str){
    //     let count = {}
    //     for(let i=0; i<=str.length; i++){
    //         let char = str[i];
    //         if(count[char]){
    //             count[char]++;
    //         }
    //         else{
    //             count[char] = 1;
    //         }
    //     }
    //     return count;
    // }
    // console.log(countLetter("satyanarayan"));
//4th problem
    // function createCounter(){
    //     let count = 0
    //     return () => {
    //         count++;
    //         return count;
    //     }
    // }
    // let counter = createCounter();
    // console.log(counter());
    // console.log(counter());
//5th problem
    // function sumEvenNumber(arr){
    //     let sum = 0;
    //     for(let value of arr){
    //         if(value % 2===0){
    //             sum +=value;
    //         }
    //     }
    //     return sum;
    // }
    // let arr = [20,20,60,39,10,87,49];
    // console.log(sumEvenNumber(arr));
//6th problem
    // function sumOfArray(arr){
    //     let sum = 0;
    //     for(let value of arr){
    //         sum += value;
    //     }
    //     return sum;
    // }
    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // console.log(sumOfArray(arr));
//7th problem
    // function strFilter(arrStr){ 
    //     let newArr = [];
    //     for(let value of arrStr){
    //         if(value.length>5){
    //             newArr.push(value);
    //         }
    //     }  
    //     console.log(newArr);   
    // }
    // let arrStr = ["Satya","Satyanarayan","akash","amit","ritwick"];
    // strFilter(arrStr);
//8th problem
    // function objAcess(obj){
    //     let newArr = [];
    //     let newArr2 = [];
    //     for(let value in obj){
    //         newArr.push(value);
    //     }
    //     console.log(newArr);
        
    // }
    // let obj = {
    //     fname: "satyanarayan",
    //     lname: "sen",
    //     roll: "20cs68"
    // }
    // objAcess(obj);
//9th problem
    // function getPropertyValue(arr, propName){
    //     let values = arr.map((obj)=> obj[propName]);
    //     console.log(values);
    // }
    // let people = [
    //     {name:"Satya",age:"23",gender:"male"},
    //     {name:"Dharma",age:"21",gender:"male"},
    //     {name:"sonakhshi",age:"21",gender:"female"}        
    // ];
    // getPropertyValue(people, "name");
    // getPropertyValue(people, "age");
    // getPropertyValue(people, "gender");
//10th problem
        // function gethigestValue(arr, propName){
        //     if(arr.length==0){
        //         return null;
        //     }
        //     let maxObj = arr[0];
        //     for(let i=0; i<arr.length; i++){
        //         if(arr[i][propName]>maxObj[propName]){
        //             maxObj = arr[i];
        //         }
        //     }
        //     return maxObj;
        // }
        // let people = [
        //     {name:"Satya",age:"23"},
        //     {name:"Dharma",age:"21"},
        //     {name:"sonakhshi",age:"22"}        
        // ];
        // console.log(gethigestValue(people,"age"));
        