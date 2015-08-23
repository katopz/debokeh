window.jQuery || document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">\x3C/script>');
var _root = this;
_root.config = {
    noti: "alert",
    type: "warning",
    title: "Sorry",
    text: "Not allowed action. All content is protected.",
    confirmButtonText: "OK",
    confirmButtonColor: "#8CD4F5",
    timer: 2400,
    captures: "contextmenu copy cut dragstart"
};

jQuery(document).bind(_root.config.captures, function (e) {
    e.preventDefault();
    swal(_root.config);
});