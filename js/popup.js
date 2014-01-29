var markdownlinker = function (title, url) {
    return "[" + title + "](" + url + ")";
}
var htmllinker = function (title, url) {
    return "<a href='" + url + "' target='_blank'>" + title + "</a>";
}
var textlinker = function (title, url) {
    return title + "\n" + url;
}


$(function () {
    chrome.tabs.getSelected(null, function(tab) {
        var markdown = markdownlinker(tab.title, tab.url);
        var html = htmllinker(tab.title, tab.url);
        var text = textlinker(tab.title, tab.url);
        $('#markdownlink').val(markdown);
        $('#htmllink').val(html);
        $('#textlink').val(text);
    });
});