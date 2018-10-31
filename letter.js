function Letter(x){
    this.under = x;
    
    this.corr=false;
    //Letter(variable).show() will either show "_ " or correct letter
    this.show=function(){
        if (this.corr==false){return "_"+" "}else{return this.under+" "}
    }
    //Letter(variable).chk(variable) will change this.corr to true
    this.chk=function(a){
        if(a==this.under){this.corr=true}
    }
}

module.exports = Letter;

