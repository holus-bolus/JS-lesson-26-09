const obj={name:"Oleksii",lastName:"Ustinov",age:31};function keys(e){const r=[];for(let t in e)r.push(t);return r}function values(e){const r=[];for(let t in e)r.push(e[t]);return r}function entriesOfObject(e){const r=[];for(let t in e)r.push([t,e[t]]);return r}Object.keys(obj),Object.values(obj),Object.entries(obj);const objectOfUsers={Oleksii:{name:"Oleksii",age:31},John:{name:"John",age:23},Alexander:{name:"Alexander",age:16}},entries=Object.entries(objectOfUsers),modifiedEntries=entries.map((e=>[e[0],{name:e[1].name,age:e[1].age,isAdult:e[1].age>18}]));Object.fromEntries(modifiedEntries);const objectMap=new Map;objectMap.set(0,"number"),objectMap.get(0),objectMap.size,objectMap.has(0),objectMap.keys();const mappedObj=new Map;mappedObj.set(mappedObj,"Object");const arrayOfNumbers=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],set=new Set(arrayOfNumbers),newUserArray=["Oleksii","Ustinov",31],[Firstname,lastName]=newUserArray,[firstname,...rest]=newUserArray,[...args]=newUserArray;function getFullName([e="John",r="Doe"],t=!1){const n=`${e} ${r}`;return t?n.toUpperCase():n}const objectUserExample={name:"Oleksii",lastName:"Ustinov",age:31},{name="John",...other}=objectUserExample;function etFullName({name:e="John",lastName:r="Doe"}={},t=!1){return t&&console.log("Hello World"),`${e} ${r}`}const numberedArray=[1,2,3],copiedArrAy=[...numberedArray],AddedNumbersArray=[...copiedArrAy,4,5,6],start=[1,2,3],middle=[5,6,7],end=[9,10,11],fullNumbersRow=[0,...start,4,...middle,8,...end],arr=[1,2,3,[4,5,6,[7,8,9]]];arr.flat(4);