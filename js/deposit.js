document.getElementById('btn-deposit').addEventListener('click',function(){
     const depositField = document.getElementById('deposit-field');
     const depositeStr = depositField.value;
     //console.log(depositeStr)
     const depositeNum = parseFloat(depositeStr);
     depositField.value ='';
     
     if(isNaN(depositeNum))
     {
        alert('should be a number ')
        return ;
     }
     //console.log(depositeNum)
     const depositTotal = document.getElementById('deposite-total');
     const depositTotalstr = depositTotal.innerText;
     const depositTotalNum = parseFloat(depositTotalstr);
    //  console.log(depositTotalNum);
     const currentDeposit = depositeNum + depositTotalNum ;
    //  console.log(currentDeposit);
     depositTotal.innerText = currentDeposit;
    
     const balanceElement = document.getElementById('balance-total');
     const preBalanceStr = balanceElement.innerText;
    // console.log(preBalanceStr);
     const preBalance = parseFloat(preBalanceStr);
   //  console.log(preBalance);

     const currentBalance = preBalance + depositeNum;
    // console.log(currentBalance);
     balanceElement.innerText = currentBalance;


})