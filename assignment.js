// https://github.com/mahamudul9/assignment-3
//number-1
function kilometerToMeter(num){
    if(num<=0){ //checking for wrong input
        return "Wrong input! Try again."
    }
    return num*1000;
}
var meter= kilometerToMeter(5);
console.log(meter);

//number-2
watch=50;
phone=100;
laptop=500;
function budgetCalculator(watchNo,phoneNo,laptopNo){
    if(watchNo<=0 || phoneNo<=0 || laptopNo<=0){ //checking for wrong input
        return "If you want to see your cost then give correct information."
    }
    var total= (watchNo*watch)+(phoneNo*phone)+(laptopNo*laptop);
    return total;
}
var cost=budgetCalculator(3,5,7);
console.log(cost);

// number-3
var feeBasic=100;
var feeStandard=80;
var feePremium=50;
var price=0;
function hotelCost(day){
    if(day<=0){ //checking for wrong input
        return "You have not stayed here. Why you want to see cost?"
    }
    else if(day>0 && day<=10){
        price=feeBasic*day;
    }
    else if(day>10 && day<=20){
        var basicPrice=feeBasic*10;
        price=basicPrice+(feeStandard*(day-10));
    }
    else{
        var standardPrice=(feeBasic*10)+(feeStandard*10);
        price=standardPrice+(feePremium*(day-20));
    }
    return price;
}
var fee=hotelCost(23);
console.log(fee);

// number-4
var friends=["Rana", "Faysal","Mahamudul", "Sadek", "Taizuddin", "Riad"];
function megaFriend(names){
    var max=0;
    for(var i=0;i<names.length;i++){
        var input=names[i];
        var word=input.length;
        if(word>max){
            max=word;
        }
    }
    for(var i=0;i<names.length;i++){
        if(names[i].length==max){
            return names[i];
        }
    }
}
var larger= megaFriend(friends);
console.log(larger);
