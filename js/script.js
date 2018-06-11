//google homepage script

//alert('loaded')
//every time you make new js script, this will make a little pop-up window, telling you it's linked correctly


$(window).resize(function() {
  let height=$(window).height()
  if(height>587){
    $("footer").css("position", "fixed")
  }
  else {
    $("footer").css("position", "relative")
  }
  console.log(height)
})
