class MyString extends String{
    constructor(){
        super();       
    }

    reverse(str){
        let newStr = '';
        for( let i=str.length-1; i>=0; i--){
          //newStr = str.charAt(i+1).concat(str.charAt(i));
          let char = str.charAt(i);
          newStr = newStr +  char;          
        }
       return newStr;
    }
    ucFirst(str){
        let first = str.charAt(0); 
       let newFirst= first.toUpperCase();
      
        return newFirst+str.slice(1);
    }
    ucWords(str){
        let words = str.split(" ");  
        let arr = [];

        for(let i = 0; i < words.length; i++){
          let first = words[i].charAt(0).toUpperCase();
          let word = first + words[i].slice(1);
          arr.push(word);
        }

        // const newWords = words.map(word => )

        return arr.join(' ');
    }
}
let string = new MyString();
//console.log(string.reverse("abc"));
//console.log(string.ucFirst("abc"));
console.log(string.ucWords("abc abc"));