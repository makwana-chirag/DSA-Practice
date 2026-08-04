const students = [{name : "chirag", id :1},{name : "blue", id :2},{name : "skyler",id:3},{name : "taylor",id:4}]

const linearSearchArrayObject = (arr,targetId) => {
     
    for(let i = 0; i < arr.length; i ++ ){
        
        if(arr[i].id === targetId) {
            return arr[i].name
        }
    }
    return "No results found"
}

console.log(linearSearchArrayObject(students,3))