$(document).ready(function () {
    let batarasa = $('body > div.main > div.blocks > div.blockRight > li:nth-child(2)');
    
    batarasa.click(function() {
        $('#photoBatarasa').attr('src', "C:/Users/user/Desktop/palawan/images/batarasa/m_2.jpg");  
    });

    var batarasaArray = new Array();
    batarasaArray[0]=new Image();
    batarasaArray[0].src='C:/Users/user/Desktop/palawan/images/batarasa/m_2.jpg';
    batarasaArray[1]=new Image();
    batarasaArray[1].src='C:/Users/user/Desktop/palawan/images/batarasa/m_1.jpg';
    batarasaArray[2]=new Image();
    batarasaArray[2].src='C:/Users/user/Desktop/palawan/images/batarasa/1.jpg';
    batarasaArray[3]=new Image();
    batarasaArray[3].src='C:/Users/user/Desktop/palawan/images/batarasa/2.jpg';
    batarasaArray[4]=new Image();
    batarasaArray[4].src='C:/Users/user/Desktop/palawan/images/batarasa/3.jpg';
    batarasaArray[5]=new Image();
    batarasaArray[5].src='C:/Users/user/Desktop/palawan/images/batarasa/4.jpg';
    batarasaArray[6]=new Image();
    batarasaArray[6].src='C:/Users/user/Desktop/palawan/images/batarasa/5.jpg';
    batarasaArray[7]=new Image();
    batarasaArray[7].src='C:/Users/user/Desktop/palawan/images/batarasa/6.jpg';
    batarasaArray[8]=new Image();
    batarasaArray[8].src='C:/Users/user/Desktop/palawan/images/batarasa/7.jpg';
    batarasaArray[9]=new Image();
    batarasaArray[9].src='C:/Users/user/Desktop/palawan/images/batarasa/8.jpg';
    batarasaArray[10]=new Image();
    batarasaArray[10].src='C:/Users/user/Desktop/palawan/images/batarasa/9.jpg';
    batarasaArray[11]=new Image();
    batarasaArray[11].src='C:/Users/user/Desktop/palawan/images/batarasa/10.jpg';
    

    $('.next').click(function nextImage(photo) {
        
        var img=document.getElementById('photoBatarasa');
        for (var i=0; i<batarasaArray.length; i++) {
           if(batarasaArray[i].src==img.src) {
               if(i===batarasaArray.length) {
                   document.getElementById('photoBatarasa').src=batarasaArray[0].src;
                   break;
               }
               document.getElementById('photoBatarasa').src=batarasaArray[i+1].src;
               break;
            }
            
           }
   

    })

    $('.prev').click(function nextImage(photo) {
        
        var img=document.getElementById('photoBatarasa');
        for (var i=0; i<batarasaArray.length; i++) {
           if(batarasaArray[i].src==img.src) {
               if(i===batarasaArray.length) {
                   document.getElementById('photoBatarasa').src=batarasaArray[0].src;
                   break;
               }
               document.getElementById('photoBatarasa').src=batarasaArray[i-1].src;
               break;
            }
            
           }
   

    })

        


    

        
    

});