document.getElementById('btn-withdraw').addEventListener('click',function(){
     const withdrawElement = document.getElementById('withdraw-field');
     const withdraValueStr = withdrawElement.value;
     //console.log(withdraValueStr);
     const withdraValue = parseFloat(withdraValueStr);
     withdrawElement.value = '';
     //balance for check
     const balanceElement = document.getElementById('balance-total');
     const preBalanceStr = balanceElement.innerText;
    // console.log(preBalanceStr);
     const preBalance = parseFloat(preBalanceStr);
   //  console.log(preBalance);
   if(isNaN(withdraValue))
   {
      alert('should be a number ')
      return ;
   }
    if(preBalance < withdraValue){
        alert('You do not have enough money')
        return;
     }
    

     //console.log(withdraValue);

     const totalWithdrawE  = document.getElementById('withdraw-total');
     const totalWithdrawStr = totalWithdrawE.innerText;
     console.log(totalWithdrawStr);
     const totalWithdraw =parseFloat(totalWithdrawStr);
    
     const currentWithdraw = totalWithdraw + withdraValue;
     console.log(currentWithdraw);
     totalWithdrawE.innerText = currentWithdraw ;


     

     const currentBalance = preBalance -   withdraValue;
    // console.log(currentBalance);
     balanceElement.innerText = currentBalance;





})