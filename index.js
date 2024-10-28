var API_KEY = "YOUR_API_KEY"

// how to get api, open google devleopers console, sign up, get youtube api data, service and api section/ library, get api key, generate api key

$(document).ready(function() {
	$(".btn-success").click(function() {
		var let1 = $(".form-control").val();
		if(let1 != ""){
			$.ajax({
				type: "GET",
				url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${let1}&key=${API_KEY}`,
				success: function(data){
			//		console.log(data["items"][0])
					$(".card").html(
						`<img src="${data['items'][0]['snippet']['thumbnails']['high']['url']}" alt="YouTube Video">
						      <div class="card-content">
					          <div class="card-title">${data["items"][0]["snippet"]["title"]}</div>
						      <div class="card-description">
						      		${data["items"][0]["snippet"]["description"]}
						       </div>
						     <a class="card-button" href="https://www.youtube.com/watch?v=${data['items'][0]['id']['videoId']}" target="_blank">Watch on YouTube</a>
						 </div>`
					)
				}
			})
		}
	})
})
