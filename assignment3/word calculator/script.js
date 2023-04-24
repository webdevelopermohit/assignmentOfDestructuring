
//Count the occurrences

let lines="my name is Mohit . Mohit is a very bed boy"
let count= new Map()
function counte(){
    let words=lines.split(' ')
    for(let i=0;i<words.length;i++){
        let word=words[i];
        if(count.has(word)){
            count.set(word,count.get(word)+1)
        }else{
            count.set(word,1)
        }
    }

    console.log(count)
}
counte()
