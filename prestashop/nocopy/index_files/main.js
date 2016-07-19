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
(function (self, configString) {
    'use strict';

    if ($ === undefined) {
        document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
    }

    self.nocopy_dialog_show = function () {
        switch (self.config.noti) {
            case "alert":
                swal(self.config);
                break;
            case "toast":
                toastr[self.config.type](self.config.text, self.config.title, {
                    timeOut: self.config.timer
                });
                break;
        }
    }

    self.warn = function (e) {
        e.preventDefault();
        self.nocopy_dialog_show();
    }

    self.on_keydown = function (e) {
        var isHit = (self.config.block_keys.indexOf(e.keyCode) > -1);
        var isCtrlOrCommandKey = (e.metaKey || e.ctrlKey);
        if (isHit && isCtrlOrCommandKey) {
            self.warn(e);
        }
        // F12
        if (isHit && e.keyCode === 123) {
            self.warn(e);
        }
    }

    self.applyConfig = function (configString) {
        try {
            if (!configString) {
                return;
            }

            if (configString === undefined) {
                return;
            }

            if (Storage !== undefined) {
                localStorage.setItem("config", configString);
            }

            var new_config = JSON.parse(configString);

            if (self.config !== undefined) {
                $(document).unbind(self.config.captures, self.warn);
            }

            $(document).unbind('keydown', self.on_keydown);

            self.config = new_config;

            $(document).bind(self.config.captures, self.warn);
            $(document).keydown(self.on_keydown);
        } catch (e) {
            console.log(e);
        }
    }

    if (Storage !== undefined) {
        var configString = localStorage.getItem("config");
        self.applyConfig(configString);
    }

    self.applyConfig(JSON.stringify({
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
    }));
} (this));