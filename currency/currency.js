var currencyApiKey = "128aac56ae6565f2be2401c18d3568d0";
var curencyCountryName = "USA";
var currencyApiUrl = `http://data.fixer.io/api/latest?access_key=${currencyApiKey}`;

// convert data from string into json   
$.ajax({
    url:currencyApiUrl,
    type:'get',
    dataType:'json',
    success:function(data){
        console.log(data);

        var currencytr=document.createElement('tr');//create row
        var td_EGP_price=document.createElement('td');//create td 
        var td_Name=document.createElement('td');
        var currencyEgpt=data.rates.EGP;
        
        td_Name.innerHTML="Egypt";
        td_EGP_price.innerHTML=currencyEgpt;//inside td put value of currency_EGP

        currencytr.appendChild(td_Name);//put row td_Name inside it
       currencytr.appendChild(td_EGP_price);//put row td_EGP_price inside it
       document.querySelector('table').appendChild(currencytr);//put tr(row)inside table
        
    },
    error:function(){
        console.log('error');
    }
});

    