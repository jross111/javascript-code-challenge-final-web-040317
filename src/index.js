
// <form id="photo-form">
//   <label for="image_url">Image Url</label>
//   <input type='text' name='image_url' />
//   <label for="caption">Caption</label>
//   <input type='text' name='caption' />
//   <input type='submit' />
// </form>





$(document).ready(function(){
  $("#photo-form").submit(function(e){
    e.preventDefault()
    let image = $("#image_url").val()
    let caption = $("#caption").val()
    let img = new Image(image, caption)
    $("#photo-list").append(img.render())
  		$("#image_url").val("")
  		$("#caption").val("")
  }
)
}
)
