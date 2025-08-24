// ***************************************************************************************************************************
// --------------------<--    part of  News    --->--------------------------------------------------------------------
// *************************************************************************************************************************
var apiKeyNews='621bf684f8ef4339853aa3de56e3473f';
var source_country="eg";
var language="ar";
var date="2025-08-22";

var urlApiNews=`https://api.worldnewsapi.com/top-news?source-country=${source_country}&language=${language}&date=${date}&api-key=${apiKeyNews}`;

console.log(urlApiNews);


$.ajax({
    url: urlApiNews,
    type: 'get',
    dataType: 'json',
    success: function(data) {
        console.log(data);

        // الخبر الأول
        var image1 = data.top_news[0].news[0].image;
        var paragraph1 = data.top_news[0].news[0].summary;
        var link1 = data.top_news[0].news[0].url;

        $('#first-section img').attr('src', image1);
        $('#first-section h2').text(paragraph1);
        $('#first-section a').click(function() {
            window.open(link1,'_blank' );
        });

        // الخبر الثاني
        var image2 = data.top_news[0].news[1].image;
        var paragraph2 = data.top_news[0].news[1].summary;
        var link2 = data.top_news[0].news[1].url;

        $('#second-section img').attr('src', image2);
        $('#second-section h2').text(paragraph2);
        $('#second-section a').click(function() {
            window.open(link2, '_blank');
        });
    }
});



var apiKeyNews2='pub_3223f1c815734685a710f9b8f8e27ac6';
var source_country="eg";
var language="ar";
var date="2025-08-22";
var urlApiNews2=`https://newsdata.io/api/1/latest?apikey=${apiKeyNews2}&language=${language}&country=${source_country}`;

console.log(urlApiNews2);

$.ajax({
    url:urlApiNews2,
    type:'get',
    dataType:'json',
    success:function(data){
        console.log(data);

        var image3=data.results[0].image_url;
        var paragraph3=data.results[0].title;

        $('#third-section img').attr('src',image3);
        $('#third-section h2').text(paragraph3);
        $('#third-section a').click(function() {
            window.open(data.results[1].link,'_blank');
        })

        var image4=data.results[1].image_url;
        var paragraph4=data.results[1].title;
        $('#fourth-section img').attr('src',image4);
        $('#fourth-section h2').text(paragraph4);
        $('#fourth-section a').click(function() {
            window.open(data.results[1].link,'_blank');
        })

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
       
       currencytr1.appendChild(td_EGP_price );//put row td_EGP_price inside it
       currencytr2.appendChild(td_EUR_price );//put row td_EGP_price inside it
       currencytr3.appendChild(td_SAR_price );//put row td_EGP_price inside it
       currencytr4.appendChild(td_GBP_price );//put row td_EGP_price inside it
       currencytr5.appendChild(td_KWD_price );//put row td_EGP_price inside it
       
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




    }});

var weatherApiKey = '699d680d5db248b82ef2ae80283c5812';
var cityName = 'Cairo';
var countryCode = 'EG';

var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${weatherApiKey}&units=metric`;
console.log(weatherURL);

$.ajax({
    url: weatherURL,
    type: 'get',
    dataType: 'json',
    success: function(dataWeather) {
        console.log(dataWeather);
        
        // تحديث درجة الحرارة
        var temp = dataWeather.main.temp;
        $('#degree h1').html(temp + '&deg;C');
        
        // تحديث أيقونة الطقس
        var icons = dataWeather.weather[0].icon;
        var weatherICONS = `https://openweathermap.org/img/wn/${icons}@2x.png`;
        $('#degree img').attr('src', weatherICONS);
        
        // تحديث اسم المدينة
        var city = dataWeather.name;
        $('#degree p').text(city);
        
        // تحديث الرطوبة
        var humidity = dataWeather.main.humidity;
        $('#humidity h4').text(humidity + '%');
    },
});
// ***************************************************************************************************************************
//--------------------<-- part of currency --->--------------------------------------------------------------------
// *************************************************************************************************************************