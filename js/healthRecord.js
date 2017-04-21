
var imgArr = ['img/happy01@2x.png','img/general@2x.png','img/bad@2x.png'];
var img_noArr = ['img/happy_no@2x.png','img/general_no@2x.png','img/bad_no@2x.png'];
var oStatus = document.querySelector('#status');
var oStatusImg = oStatus.querySelectorAll('.statusImg');

$.each($('.delete'),function(index,item){
    $(this).unbind('tap').bind('tap',function(){
        var _this = $(this);
       $('#weui_dialog_confirm').show();

       $('#cans').unbind('tap').bind('tap',function(){
           $('#weui_dialog_confirm').hide();
       })

       $('#sure2').unbind('tap').bind('tap',function(){
           $('#weui_dialog_confirm').hide();
           _this.parent().remove();
       })
    });
});



$.each($('.dietImg'),function(i,item){
    $(this).on('tap',function(){
        var oDietImg = $(this).attr('src');
        if(oDietImg == 'img/select_ed@2x.png'){
            $(this).attr('src','img/select_no@2x.png')
        }else{
          $(this).attr('src','img/select_ed@2x.png')
        }
    })
});

$.each($('.statusImg'),function(i,item){
    $(this).on('tap',function(){
        $.each($('.statusImg'),function(y,items){
            $(this).attr('src',img_noArr[i]);
        })
        $(this).attr('src',imgArr[i]);
    });
});