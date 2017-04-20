Highcharts.setOptions({
    colors: [ '#73d7f6','#94c62a']
});
var chart = new Highcharts.Chart('main', {
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
        data: [30,40,100,80,50]
    }, {
        name: '血压',
        data: [10,30,110,70,30]
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
        data: [30,40,100,80,50]
    }, {
        name: '血压',
        data: [10,30,110,70,30]
    }]
});

$('.dataImg').css('width',$('.dataImg').children('div.chart').offset().width*$('.dataImg').children().length);

function d2a(n){
    return n*Math.PI/180;
}
var oC = document.getElementById('c1');
var gd = oC.getContext('2d');
var gd = oC.getContext('2d');

var cx = oC.width/2,
    cy = oC.height/2;
    

var lg = gd.createLinearGradient(300,200,600,400);
lg.addColorStop(0,'#1dd9d2');
lg.addColorStop(0.5,'#6fe7ca');
lg.addColorStop(1,'#8fedc7');
    

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
    gd.fillText(str,cx,cy);
    if(i==360){
        clearInterval(timer);
    }
},16);


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


        
