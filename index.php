<!DOCTYPE html>
<html>

<head>
	<title>Home | fogg.me.uk</title>
	<?php include "http://fogg.me.uk/php/meta.php";?>
</head>

<body>

<?php include "http://fogg.me.uk/php/navbar.php";?>

<br><br>

<div class="outer-main">
	<div class="inner-main">
		<h1>Welcome!</h1>
		<h2>Simple Beginings</h2>
		<p>This is the personal website where you can find my blogs &amp; writing, my work, and my contact details.</p>

		<p>This website still is in beta but should function now as normal. All the beta status means is that I'm still working out all the little bugs and exactly what should go where (note the unused comic tab). The content is also still quite slim but that will hopefully change pretty quickly.This website still is in beta but should function now as normal. All the beta status means is that I'm still working out all the little bugs and exactly what should go where (note the unused comic tab). The content is also still quite slim but that will hopefully change pretty quickly.</p>

		<p>Anyway, thanks for coming! Please make yourself at home :)</p>
	</div>
</div>

<!-- Konami -->
<script type="text/javascript">
	if ( window.addEventListener ) {  
		var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];  
		window.addEventListener("keydown", function(e) {  
		if ( e.keyCode == konami[state] ) state++;  
				else state = 0;  
				if ( state == 10 )  
					window.location = "console";
				}, true);  
	}  
</script>
<!-- End Konami -->

<footer>
	<?php include "http://fogg.me.uk/php/foot.php";?>
</footer>

</body>

</html>
