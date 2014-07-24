$(function() {
	$('#create').click(function(){ 
		$('#result').val('');
		$('div#results').attr('style','display:block;');
		$('body').append('');
		var kw1 = $('#kw1').val().split('\n');
		var kw2 = $('#kw2').val().split('\n');
		var kw3 = $('#kw3').val().split('\n');
		var count = 0;		
		$.each(kw1, function(index1, value1) {
			$.each(kw2, function(index2, value2) {
				$.each(kw3, function(index3, value3) {
					count++;
					content = $('#result').val();
					$('#result').val(content + value1 + " " + value2 + " " + value3 + "\r\n");
				});
			});
		});
		$('span#kw_num').html(' (no. of keywords: ' + count + ')');
	});
});