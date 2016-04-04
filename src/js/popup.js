$(function () {
    "use strict";

    var ue = null;

    /**
     * 初始化所有模板
     */
    function initTemplates() {

        var tabHeader = $('.tab-header ul');
        var tabContainer = $('.tab-container');
        var groupName, groupId, group;
        var groupContainer, html, item;

        for (var i = 0; i < templates.length; i++) {
            group = templates[i];
            groupName = group.groupName;
            groupId = group.groupId;

            tabHeader.append('<li data-href="#category_' + groupId + '">' + groupName + '</li>');
            tabContainer.append('<div id="category_' + groupId + '" class="tab-content" style="display: none;"><ul class="item-list"></ul></div>');

            groupContainer = $('#category_' + groupId + ' ul');

            for (var j = 0; j < group.items.length; j++) {
                item = group.items[j];
                html = '<li class="item clearfix"><div class="item-preview">';
                html += item.html;
                html += '</div>';
                html += '<div class="item-action">';
                html += '    <button data-template="' + item.id + '">插入</button>';
                html += '    </div>';
                html += '    </li>';

                groupContainer.append(html);
            }
        }


        //ue = UE.getEditor('editorContainer');

        initEvents();
        $('.tab-header li').first().click();
    }

    /**
     * 初始化事件监听
     */
    function initEvents() {

        $('.tab-header li').on('click', function () {
            $('.tab-header li').removeClass('active');
            $(this).addClass('active');

            $('.tab-container .tab-content').hide();
            $($(this).attr('data-href')).show();
        });

        $('button[data-template]').on('click', function () {
            var templateId = $(this).attr('data-template');
            if (templateId) {
                var template = $(this).parent().parent().find('.item-preview').html();
                pasteTemplate(templateId, template);
            }
        });

    }

    /**
     * 将选择的模板粘贴到微信编辑器
     */
    function pasteTemplate(templateId, template) {
        chrome.tabs.getSelected(function (tab) {
            console.log(tab);
            var url = tab && tab.url || '';
            if (url.indexOf('mp.weixin.qq.com') < 0) {
                setMessage('本插件仅适用于微信公众平台页面。', 'error');
                return;
            }

            chrome.tabs.sendRequest(tab.id,
                {
                    type: 'WeChatMPTool_content',
                    content: template
                });

            setMessage('内容已发至剪贴板，如果没能正确粘贴到编辑器，请手动粘贴。')
        });
    }


    /**
     * 设置错误消息
     * @param msg
     */
    function setMessage(msg, type) {
        $('#errorMessage').text(msg);
        if(type === 'error') {
            $('#errorMessage').addClass('red').removeClass('blue');
        } else {
            $('#errorMessage').addClass('blue').removeClass('red');
        }
    }

    initTemplates();

});