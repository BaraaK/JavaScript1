'use strict';

let nameList = ['Alaa','Baraa','Alex','Mo','Anna'];
let childrenList = [1,2,3,4,5,6,7];
let locationList = ['Amsterdam','Utrecht','Den Hague'];
let jobList = ['Software Developer','Doctor','Teacher','CEO']


function tellFortune(children,name,location,job) {
let numOfChildren , myName, myLocation , myJob;
 for (let item of children)
 { numOfChildren = children[Math.floor(Math.random() * children.length)];
 }
 for (let item of name)
 { myName = name[Math.floor (Math.random() * name.length)];
 }
 for (let item of location)
 { myLocation = location[Math.floor (Math.random() * location.length)];
 }
 for (let item of job)
 { myJob = job[Math.floor (Math.random() * job.length)];
 }
 return `You will be a ${myJob} in ${myLocation}, and married to ${myName} with ${numOfChildren} kids.`;
}

console.log(tellFortune (childrenList,nameList,locationList,jobList) );
console.log(tellFortune (childrenList,nameList,locationList,jobList) );
console.log(tellFortune (childrenList,nameList,locationList,jobList) );