function picker(picker){
    $(picker).picker({
      value:'',
      title: "请选择时间",
      cols: [
        {
          textAlign: 'center',
          values: ['00','01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
          //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
        },
        {
          textAlign: 'center',
          values: [':']
        },
        {
          textAlign: 'center',
          values: ['00','01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']
        },
      ]
    });
}
picker('#picker');
picker('#picker2');
picker('#picker3');


$.each($('.remindImg'),function(i,item){
    $(this).on('tap',function(){
      var remindTime = $(this).parent().parent().next();
        var oRemindImg = $(this).attr('src');
        if(oRemindImg == 'img/on@2x.png'){
            $(this).attr('src','img/off@2x.png');
            if(remindTime.attr('class') && remindTime.attr('class').indexOf('hide') == -1){
                remindTime.addClass('hide');
                remindTime.removeClass('show');
            }
        }else{
          $(this).attr('src','img/on@2x.png');
          if(remindTime.attr('class') && remindTime.attr('class').indexOf('show') == -1){
                remindTime.addClass('show');
                remindTime.removeClass('hide');
            }
        }
    })
});