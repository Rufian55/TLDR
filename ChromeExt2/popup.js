/* popup.js is the event handler for TLDRerr's Chrome Extension. [1] 

Chrome Extension setup instructions:

1. Create a directory on your PC such as "ChromeEXT".
2. Add the following files to dir "ChromeEXT".
	a. popup.js  (this file).
	b. manifest.json
	c. popup.html
	d. TC.png
3. Open a chrome browser window.
4. Click the three verticle dots icon top right hand side of the browser.
5. Select "More Tools", then "Extensions".
6. Click Developer mode.
7. Click "Load Unpacked Extensions".
8. Scroll down and find your "ChromeEXT" folder or whatever you named it.
9. Select "ChromeEXT" and click OK.
10. You should see the "TLDRerr Analyser Plugin" box come up.
11. You should also now note a small white box with "TC" in black font inside it.  Click on it!
12. If the TC icon is unresponsive due to 2nd monitor, etc.,
	a. open "Settings", then click on "Show advanced settings".
	b. At the System section, uncheck "Use hardware acceleration when available."
13. Now, reclick the "TC" icon and click the "Check Now!" button.
13. You should see the "TLDRerr FOund the Following Issues:" message.
14. If succesful, this means you sent and received an http request to the TLDRerr site and
	the TLDRerr server / database interface.
15. In a real world scenario, we'd have to setup an extension download in the google app store
	that writes these dir/files to the users hardrive.  Another time for that...
*/

document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
			doc = document;
			var form = doc.createElement('form');
			form.action = 'http://blitspost.com/TLDR.php/';
			form.method = 'post';
			var input = doc.createElement('input');
			input.type = 'hidden';
			input.name = 'url';
			input.value = tab.url;
			form.appendChild(input);
			doc.body.appendChild(form);
			form.submit();
		});
	}, false);
}, false);

/* CITATIONS:
[1] Adapted from https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/
*/