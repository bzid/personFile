Highcharts.setOptions({
    colors: [ '#73d7f6','#94c62a']
});
var chart = new Highcharts.Chart('main', {
    chart:{
        marginRight: 40
    },
    title: {
        text: null,
        x: -20
    },
    subtitle: {
        text: null,
        x: -20
    },
    credits:{
            enabled:false // 禁用版权信息
    },
    xAxis: {
        categories: ['01-19', '01-20', '01-21', '01-22', '01-23'],
    },
    yAxis: {
        title: {
            text: null
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'mmHg'
    },
    plotOptions: {
        series: {
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: null // inherit from series
            }
        }
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '血压',
        data: [110,136,120,158,130]
    }, {
        name: '血压',
        data: [78,59,100,70,90]
    }]
});

var chart = new Highcharts.Chart('main2', {
    title: {
        text: null,
        x: -20
    },
    subtitle: {
        text: null,
        x: -20
    },
    credits:{
            enabled:false // 禁用版权信息
    },
    xAxis: {
        categories: ['01-19', '01-20', '01-21', '01-22', '01-23']
    },
    yAxis: {
        title: {
            text: null
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'mmHg'
    },
    plotOptions: {
        series: {
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: null // inherit from series
            }
        }
    },
    legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '血压',
        data: [110,136,120,158,130]
    }, {
        name: '血压',
        data: [78,59,100,70,90]
    }]
});

// $('.dataImg').css('width',$('.dataImg').children('div.chart').offset().width*$('.dataImg').children().length);

function canvas(){
    var oC = document.getElementById('c1');
    var gd = oC.getContext('2d');
    var gd = oC.getContext('2d');

    var cx = oC.width/2,
        cy = oC.height/2;
        

    var lg = gd.createLinearGradient(0,0,200,0);//创建一个线性渐变
    lg.addColorStop(0,'#1dd8d1');
    lg.addColorStop(0.5,'#40decf');
    lg.addColorStop(1,'#91ecc7');
        

    var i = 180;
    var y = 0;
    var timer = setInterval(function(){
        i++;
        y++;
        gd.clearRect(0,0,oC.width,oC.height);
        drawArc2(100,360,'#eee');
        drawArc(100,i,lg);
        // var str = (y/180*100).toFixed(0)+'%';
        // $('#num').html(str);
        // gd.font = '1.024rem 微软雅黑';
        // gd.textAlign = 'center';
        // gd.textBaseline = 'bottom';
        var str = (y/180*100).toFixed(0)+'%';
        $('#num').html(str);
        gd.fillStyle = lg;
        // gd.fillText(str,cx,cy);
        if(i==360){
            clearInterval(timer);
        }
    },16); 

    function d2a(n){
        return n*Math.PI/180;
    }

    function drawArc(r,d,color){
        gd.beginPath();
        gd.arc(cx,cy,r,d2a(180),d2a(d),false);
        gd.strokeStyle = color;
        gd.lineWidth = 10;
        gd.stroke();
    }

    function drawArc2(r,d,color){
        gd.beginPath();
        gd.arc(cx,cy,r,d2a(180),d2a(d),false);
        gd.strokeStyle = color;
        gd.lineWidth = 10;
        gd.stroke();
    }
}
canvas();



// var oStar = document.querySelector('#star');     
// var oStarImg = document.querySelectorAll('#star .starImg');  
// for (var z = 0; z < oStarImg.length; z++) {
//     (function(index){
//            oStarImg[z].onclick = function(){
//                 for (var y = 0; y < oStarImg.length; y++) {
//                     if(y <= index){
//                         oStarImg[y].setAttribute('src','img/star@2x.png');
//                     }else{
//                         oStarImg[y].setAttribute('src','img/star_no@2x.png');
//                     }
//                 }
//            }
//     })(z);
// }   
