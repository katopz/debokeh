if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // for mobile verison
    $(document).ready(function() {
	$(".mobile_canvas").css("display", "block");
	$(".flash_canvas").css("display", "none");
    });
} else {
    // For version detection, set to min. required Flash Player version, or 0
    // (or 0.0.0), for no version detection.
    var swfVersionStr = "11.4.0";
    // To use express install, set to playerProductInstall.swf, otherwise the
    // empty string.
    var xiSwfUrlStr = "";
    var flashvars = {
	src : "PostCat.swf?v=1.0.0"
    };
    var params = {};
    params.quality = "high";
    params.bgcolor = "#ffffff";
    params.allowscriptaccess = "sameDomain";
    params.allowfullscreen = "true";
    var attributes = {};
    attributes.id = "shell";
    attributes.name = "shell";
    attributes.align = "middle";
    swfobject.embedSWF("shell.swf", "flashContent", "320", "430",
	    swfVersionStr, xiSwfUrlStr, flashvars, params, attributes);
    // JavaScript enabled so display the flashContent div in case it is not
    // replaced with a swf object.
    swfobject.createCSS("#flashContent",
	    "display:block;text-align:left; width: 320px; height: 430px");

    $(document).ready(function() {
	$(".mobile_canvas").css("display", "none");
	$(".flash_canvas").css("display", "block");
    });
}