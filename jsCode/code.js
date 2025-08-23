// ***************************************************************************************************************************
//--------------------<--    part of  News    --->--------------------------------------------------------------------
// *************************************************************************************************************************
// var apiKeyNews='eb55787068f04b929b65aa41bfb6d62f ';
// var source_country="eg";
// var language="ar";
// var date="2025-08-22";

// var urlApiNews=`https://api.worldnewsapi.com/top-news?source-country=${source_country}&language=${language}&date=${date}&api-key=${apiKeyNews}`;

// console.log(urlApiNews);



// $.ajax({
//     url:urlApiNews,
//     type:'get',
//     dataType:'json',
//     success:function(data){
//         console.log(data);
//         // first new
//         var image1=data.top_news[0].news[0].image;
//         var header1=data.top_news[0].news[0].title;
//         var paragraph1=data.top_news[0].news[0].summary;
//         $('section img').attr('src',image1);
//         $('section h4').text(header1);
//         $('section p').text(paragraph1); 
        
//         // second new
//         var image2=data.top_news[0].news[1].image;
//         var header2=data.top_news[0].news[1].title;
//         var paragraph2=data.top_news[0].news[1].summary;
//         $('section img').attr('src',image2);
//         $('section h4').text(header2);
//         $('section p').text(paragraph2); 
//     },

// });

// ***************************************************************************************************************************
//--------------------<--  part of  weather   --->--------------------------------------------------------------------
// *************************************************************************************************************************
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
