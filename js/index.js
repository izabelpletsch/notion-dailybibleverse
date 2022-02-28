/**
 * TheBible.life Verse of the Day
 *
 * Display a bible verse nominated for verse of the day from TheBible.life
 *
 * Author Bryant Sharp - Cyber Oceans LLC.
 */



 function tb_verse_of_the_day(type, callback) {

    var container1 = document.getElementById('the-bible-life-verse-of-the-day');

    function callbackwidget1(response1, obj) {
        /*add verse from json data*/
        var verse = JSON.parse(response1);
        var vt = document.createElement('p');
        vt.setAttribute("id", "verseText");
        vt.innerHTML = verse.VerseText;

        var vc = document.createElement('p');
        vc.setAttribute("id", "verseChapter");
        vc.innerHTML = verse.BookName + ' ' + verse.ChapterNumber + ':' + verse.VerseNumber
        
        container1.appendChild(vt);
        container1.appendChild(vc);

    }//end of cb

	/*
	 * 
	 * Set up the AJAX request, call the callback function,
	 * and take care of any error handling we need to do.
	 * 
	 */
    try {
        var request1 = new (this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        request1.open('GET', 'https://thebible.life/widget/VerseOfTheDayWidget?type=' + type, 1);
        request1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request1.onreadystatechange = function () {
            
            if (request1.readyState > 3) {

                callbackwidget1(request1.responseText, request1);

                var span = document.createElement('span');
                container1.appendChild(span);
            }
        };

        request1.send();
    }
    catch (e) {
        window.console && console.log(e);
    }
    
    
}