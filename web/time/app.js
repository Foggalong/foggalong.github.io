(function(window,undefined)
{
	'use strict';
	$(function(){
		$.get('people.json',function(resp)
		{
			var json=JSON.parse(resp);
			$("#container").html(fetchDateTime(json))

		})
	});
	var fetchTimeZone=function(city,callback)
	{
		var url="http://maps.googleapis.com/maps/api/geocode/json?address=";
		$.get(url+city,function(resp)
		{
			if(!resp.results)
				return;
			var lat=resp.results[0].geometry.location.lat;
			var lng=resp.results[0].geometry.location.lng;
			var latLng=lat+','+lng;
			var url='https://maps.googleapis.com/maps/api/timezone/json?location='+latLng+'&timestamp=1331766000&key=AIzaSyCh78qhRtWIEtKdUkWm1uOHZUzSVgbClaI';
			$.get(url,function(resp)
			{
				if(resp.timeZoneId)
				{
					callback(city,resp.timeZoneId);
				}
			});
		});
	};
	var fetchDateTime=function(obj)
	{
		var html=[];
		var h=[];
		obj.forEach(function(a,b)
		{
			fetchTimeZone(a.city,function(city,timeZone)
			{
				a.tz=moment().tz(timeZone).format('MM-DD-YYYY hh:mm:ss');
				a.timezone=timeZone;
				$.get('https://api.github.com/users/'+a.ghuser,function(resp)
				{
					a.name=resp.name||a.name;
					a.image=resp.avatar_url;
					a.url=resp.html_url;
					$("#container").append(print([a]));
				})
			});
		});
	};

var print=function(obj)
	{
		
		var html=[];
		obj.forEach(function(a,b)
		{
			console.log(a);
			var h=([
				'<div class="user">',
					'<div>',
						'<a href="',
							a.url,
						'">',
						'<img src="',
							a.image,
							'"></a>',
					'</div>',
					'<div>',
						'<span class="name" >',
						a.name,
						"</span>",
					'</div>',
					'<div></div>',
					'<div class="timezone" data-locale='+a.timezone+'>',
						a.tz,
					'</div>',
				'</div>'
			].join(''));
			html.push(h);
		});
		return html.join('');
	};

	window.setInterval(function()
	{
		$(".timezone").each(function()
		{
			var th=$(this);
			var zone=th.data('locale');
			var newTime=moment().tz(zone).format('MM-DD-YYYY hh:mm:ss');
			th.html(newTime);
		});
	},1000)

})(window);