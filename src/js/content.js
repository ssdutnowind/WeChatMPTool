console.log('Listen to chrome.extension.onRequest');
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.type === 'WeChatMPTool_content' && request.content) {
        // 将内容复制到剪贴板
        doCopy(request.content);
        // 找到编辑器区域
        var iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; i++) {
            if (iframes[i].id && iframes[i].id.indexOf('ueditor') === 0) {
                // 让窗口获得焦点
                window.focus();
                iframes[i].contentWindow.focus();
                iframes[i].contentDocument.execCommand("Paste", null, null);
            }
        }
    }
});

/**
 * 将内容作为html复制到剪贴板
 * @param str
 */
function doCopy(str) {
    document.oncopy = function (event) {
        console.log(str);
        event.clipboardData.setData('text/html', str);
        event.preventDefault();
    };
    document.execCommand("Copy");
    document.oncopy = undefined;
}