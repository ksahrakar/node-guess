var ltr=require("./letter");
var scrt=require("random-words")


function Word(){
    var ltrs=[];
    var wrds=[];
    // Generate random word from random-words library
    var wrd=scrt({exactly:1});
    this.word=wrd;
    wrds = wrd[0].split("");

    //Define array of letter objects
    for (i=0;i<wrds.length;i++){
        var temp = new ltr(wrds[i]);
        ltrs[i]=temp;
    }
    
    //Show secret word with guessed letters exposed and underscore otherwise
    this.show = function(){
        var disp=[];
        for(j=0;j<ltrs.length;j++){
            disp.push(ltrs[j].show());
        }
        console.log(disp.join(""));
        //console.log(disp.join("").split(" ").join(""));
    }

    //Check if a guess is contained in the word and set corr attribute
    this.guess = function(guess){
        for (k=0;k<ltrs.length;k++){
            if (ltrs[k].corr==false && ltrs[k].chk(guess)){
                ltrs[k].corr=true;
            }
        }
    }

    //Check if word has been guessed
    this.guessed = function(){
        var temp =true;
        for (m=0;m<ltrs.length;m++){
            if (ltrs[m].corr==false){temp=false;break}
        }
        return temp;
    }
}

module.exports = Word;

