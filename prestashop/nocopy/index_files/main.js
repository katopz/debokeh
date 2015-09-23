/**
 * 2015 DEBOKEH
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Attribution-NonCommercial-NoDerivatives 4.0 International
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to contact@debokeh.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    katopz <contact@debokeh.com>
 * @copyright 2015 DEBOKEH
 * @license   https://creativecommons.org/licenses/by-nc-nd/4.0/
 */

window.jQuery || document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">\x3C/script>');
var _root = this;
_root.config = (typeof(config) != "undefined" && config) || {
        noti: "alert",
        type: "warning",
        title: "Sorry",
        text: "Not allowed action. All content is protected by copyright.",
        confirmButtonText: "OK",
        confirmButtonColor: "#8CD4F5",
        timer: 2400,
        captures: "contextmenu copy cut dragstart",
        block_keys: ['S'.charCodeAt(0), 'I'.charCodeAt(0), 'J'.charCodeAt(0), 'U'.charCodeAt(0), 'K'.charCodeAt(0), 'C'.charCodeAt(0), 123],
        disable: false
    };

_root.nocopy_dialog_show = function () {
    switch (_root.config.noti) {
        case  "alert":
            swal(_root.config);
            break;
        case  "toast":
            toastr[_root.config.type](_root.config.text, _root.config.title, {
                timeOut: _root.config.timer
            });
            break;
    }
};

_root.warn = function (e) {
    if (_root.config.disable === true) {
        return;
    }

    e.preventDefault();
    _root.nocopy_dialog_show();
};

$(document).bind(_root.config.captures, _root.warn);

$(document).keydown(function (e) {
    var isCtrlOrCommandKey = (e.metaKey || e.ctrlKey);
    if ((_root.config.block_keys.indexOf(e.keyCode) > -1) && isCtrlOrCommandKey) {
        _root.warn(e);
    }
});