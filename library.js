/*export*/ let message = "ES6 Modules";

/*export*/ function user(name){
    return `Hello Everyone ${name}`;
}
/*export*/ class test{
    constructor(){
        console.log("Constructor Method");
    }
}

export{message,user,test};