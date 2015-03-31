/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(window) {
    'use strict';

    if (!window.isFirefox()) {
        renderFirefoxLogo();
        renderSubHead();
        renderDownloadButton();
        renderSecondaryCopy();
    }

    function getText(string) {
        return $('<div/>').html(window.trans(string)).text();
    }

    function renderSubHead() {
        var subHeadText = getText('subHead');
        $('header[role="content-info"] > p').html(subHeadText);
    }

    function renderFirefoxLogo() {
        var url = window.trans('firefoxUrl');
        var img = window.trans('firefoxLogo');
        var $masthead = $('#masthead');
        var $logo = $('<h2><a href="' + url + '"><img src="' + img + '" alt="Mozilla Firefox" height="70" width="185"></a></h2>');
        $masthead.append($logo);
    }

    function renderDownloadButton() {
        var $browserImg = $('header[role="content-info"] > img');
        var text = getText('downloadBtn');
        var url = window.trans('downloadUrl');

        $('<a href="' + url + '" class="button-get-firefox">' + text + '</a>').insertBefore($browserImg);
    }

    function renderSecondaryCopy() {
        var $features = $('.features');
        var beforeText = getText('before');
        var afterText = getText('after');
        var busyImage = window.trans('busyImage');
        var cleanImage = window.trans('cleanImage');

        $features.find('ul').remove();
        $features.addClass('compare');

        var $busyPage = $('<figure class="busy"><figcaption>' + beforeText + '</figcaption><img src="' + busyImage + '" alt="" width="220"></figure>');
        var $cleanPage = $('<figure class="clean"><figcaption>' + afterText + '</figcaption><img src="' + cleanImage + '" alt="" width="220"></figure>');

        $features.append($busyPage);
        $features.append($cleanPage);
    }

})(window);
