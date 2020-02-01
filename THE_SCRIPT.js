var image=document.getElementById('bulb');
var i=0;
function change_the_bulb(){

  if(i%2===0){ image.src="https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/413/original/pic_bulbon.gif";
    i=i+1;
    console.log(i);
  }
  else{ image.src="https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/412/original/pic_bulboff.gif";
    i=i+1;
    console.log(i);
  }
}
