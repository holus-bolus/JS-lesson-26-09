const obj={name:"Oleksii",lastName:"Ustinov",age:31};function keys(e){const t=[];for(let s in e)t.push(s);return t}function values(e){const t=[];for(let s in e)t.push(e[s]);return t}function entriesOfObject(e){const t=[];for(let s in e)t.push([s,e[s]]);return t}Object.keys(obj),Object.values(obj),Object.entries(obj);const objectOfUsers={Oleksii:{name:"Oleksii",age:31},John:{name:"John",age:23},Alexander:{name:"Alexander",age:16}},entries=Object.entries(objectOfUsers),modifiedEntries=entries.map((e=>[e[0],{name:e[1].name,age:e[1].age,isAdult:e[1].age>18}]));Object.fromEntries(modifiedEntries);const objectMap=new Map;objectMap.set(0,"number"),objectMap.get(0),objectMap.size,objectMap.has(0),objectMap.keys();const mappedObj=new Map;mappedObj.set(mappedObj,"Object");const arrayOfNumbers=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5],set=new Set(arrayOfNumbers),newUserArray=["Oleksii","Ustinov",31],[name,lastName]=newUserArray,[firstname,...rest]=newUserArray,[...args]=newUserArray;