var currencyApiKey = "128aac56ae6565f2be2401c18d3568d0";
var curencyCountryName = "USA";
var curencyCountryName = "Eur";
var currencyApiUrl = `http://data.fixer.io/api/latest?access_key=${currencyApiKey}`;

// convert data from string into json   
$.ajax({
    url:currencyApiUrl,
    type:'get',
    dataType:'json',
    success:function(data){
        console.log(data);

        var currencytr1=document.createElement('tr');//create row1
        var currencytr2=document.createElement('tr');//create row2
        var currencytr3=document.createElement('tr');//create row3
        var currencytr4=document.createElement('tr');//create row4
        var currencytr5=document.createElement('tr');//create row5

        

        var td_EGP_price=document.createElement('td');//create td1 
        var td_EUR_price=document.createElement('td');//create td2
        var td_SAR_price=document.createElement('td');//create td3
        var td_GBP_price=document.createElement('td');//create td4
        var td_KWD_price=document.createElement('td');//create td5

        
         
         
        var td_Name_EGP=document.createElement('td');//create td1 name
        var td_Name_EUR=document.createElement('td');//create td2 name
        var td_Name_SAR=document.createElement('td');//create td3 name
        var td_Name_GBP=document.createElement('td');//create td4 name
        var td_Name_KWD=document.createElement('td');//create td5 name
       
        
        td_Name_EGP.innerHTML = `<img src="image/egp.jpg" alt="EGP" style="width:50px; height:50px; margin-right:8px;"> EGP`;
        td_Name_EUR.innerHTML = `<img src="image/eur.webp" alt="EUR" style="width:50px; height:50px; margin-right:8px;"> EUR`;
        td_Name_SAR.innerHTML = `<img src="image/sar.png" alt="SAR" style="width:50px; height:50px; margin-right:8px;"> SAR`;
        td_Name_GBP.innerHTML = `<img src="image/gbp.png" alt="GBP" style="width:50px; height:50px; margin-right:8px;"> GBP`;
        td_Name_KWD.innerHTML = `<img src="image/kwd.png" alt="KWD" style="width:50px; height:50px; margin-right:8px;"> KWD`;


        
        
        var currencyEGP=data.rates.EGP;//value of cuurency egp
        var currencyEUR=data.rates.EUR;//value of cuurency eur
        var currencySAR=data.rates.SAR;//value of cuurencysar
        var currencyGBP=data.rates.GBP;//value of cuurency gbp
        var currencyKWD=data.rates.KWD;//value of cuurency kwd
       
       
        
        td_EGP_price.innerHTML=currencyEGP;//inside td put value of currency_EGP
        td_EUR_price.innerHTML=currencyEUR;//inside td put value of currency_EUR
        td_SAR_price.innerHTML=currencySAR;//inside td put value of currency_SAR
        td_GBP_price.innerHTML=currencyGBP;//inside td put value of currency_GBP
        td_KWD_price.innerHTML=currencyKWD;//inside td put value of currency_KWD

        currencytr1.appendChild(td_Name_EGP);//put row td_Name inside it
        currencytr2.appendChild(td_Name_EUR);//put row td_Name inside it
        currencytr3.appendChild(td_Name_SAR);//put row td_Name inside it
        currencytr4.appendChild(td_Name_GBP);//put row td_Name inside it
        currencytr5.appendChild(td_Name_KWD);//put row td_Name inside it
       
       currencytr1.appendChild(td_EGP_price);//put row td_EGP_price inside it
       currencytr2.appendChild(td_EUR_price);//put row td_EGP_price inside it
       currencytr3.appendChild(td_SAR_price);//put row td_EGP_price inside it
       currencytr4.appendChild(td_GBP_price);//put row td_EGP_price inside it
       currencytr5.appendChild(td_KWD_price);//put row td_EGP_price inside it
       
       document.querySelector('table').appendChild(currencytr1);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr2);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr3);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr4);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr5);//put tr(row)inside table
        
    },
    error:function(){
        console.log('error');
    }
});



