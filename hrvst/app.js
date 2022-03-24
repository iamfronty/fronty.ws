if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
} else {
    alert('Попробуй другой браузер, в этом работа с фаилами не работает');
}

function handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);
            //showing file converted to base64
            // document.getElementById('base64').value = base64String;
            if ($('#speed').val()){
                $('.wall').css('animation', 'fade ' + $('#speed').val() + 's infinite linear');
                $('.wrap').css('animation', 'move ' + $('#speed').val() + 's infinite linear');
            }
            if ($('#route').is(":checked")){
                $('.wall').css('animation-direction', 'reverse');
                $('.wrap').css('animation-direction', 'reverse');
            }
            if ($('#glow').val()){
                $('.glow').css('filter', 'blur(' + $('#glow').val() + 'px)');
                $('.glow').css('opacity', $('#glow').val() / 100);
            } else {
                $('.glow').hide();
            }
            
            $('.build').hide();
            $('.wall').css('background', 'url("data:image/png;base64,' + base64String + '")');
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
}