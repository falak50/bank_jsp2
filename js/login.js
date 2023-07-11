//console.log("from js ")
// if submit bnt click check email correct or not
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log("click oise")
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-password').value;   
   console.log(email);
   console.log(pass);
    if(email === 'falakahmedshakib170@gmail.com' && pass === 'mybank123'){
        window.location.href ='bank.html'
    }else{
      alert("WORNG PASSWORD")
    }
})
// document.getElementById('log-out').addEventListener('click',function(){
//   console.log("log out ")
  
// })

