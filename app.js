function getBILL(AMOUNT){
    return AMOUNT;
}
const billHandler ={
    apply:function(target,content,args){
        console.log(`Appling Discount of 35%`);
        return args[0] -(args[0]*0.35)
    }
}
const billingProxy =new Proxy(getBILL,billHandler);
console.log(billingProxy(500))