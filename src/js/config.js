var templates = [
    {
        groupName: '标题类',
        groupId: 'headline',
        items: [
            {
                id: '101',
                name: '',
                html: '<p style="text-indent: 2em; line-height: 1.5em;"><strong><span style="font-size: 16px; color: rgb(255, 202, 8);">普通标题</span></strong></p>'
            },
            {
                id: '102',
                name: '',
                html: '<section class="135editor" data-id="86133" style="line-height: 25.6px; white-space: normal; box-sizing: border-box; border: 0px none;"><section style="text-align: center;"><section style="margin-right: 15px; text-align: left; display: inline-block;"><section data-bgless="lighten" data-bglessp="20" style="margin-right: 4px; width: 6px; height: 6px; border-radius: 50%; display: inline-block; color: rgb(255, 255, 255); background-color: rgb(253, 216, 144);"></section><section style="width: 10px; height: 10px; border-radius: 50%; display: inline-block; color: rgb(255, 255, 255); background-color: rgb(252, 180, 43);"></section></section><section style="padding-right: 5px; padding-left: 5px; display: inline-block;"><span style="color: rgb(255, 169, 0);">小标题</span></section><section style="display: inline-block; text-align: left;"><section style="margin-right: 4px; margin-left: 15px; width: 10px; height: 10px; border-radius: 50%; display: inline-block; color: rgb(255, 255, 255); background-color: rgb(252, 180, 43);"></section><section data-bgless="lighten" data-bglessp="20" style="width: 6px; height: 6px; border-radius: 50%; display: inline-block; color: rgb(255, 255, 255); background-color: rgb(253, 216, 144);"></section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section>'
            },
            {
                id: '103',
                name: '',
                html: '<section class="" style=" margin-top: 10px; margin-bottom: 10px; text-align: center;  box-sizing: border-box; "><section class="" style="display: inline-block; box-sizing: border-box;"><img style="box-sizing: border-box; width: 2em !important; float: left; margin-right: -2em; text-align: start; vertical-align: middle; visibility: visible !important; height: auto !important;" data-src="http://mmbiz.qpic.cn/mmbiz/dvGtpGGr6A9Kv4Tzhj5rvJxcdnCEcnxSsAATPfpcszpHdSLypd5INibJfVG155pia9cfp8IFdCCIibPiacUkr558Rg/0?wx_fmt=png" class="" data-type="png" data-ratio="1" data-w="32" _width="2em" src="http://mmbiz.qpic.cn/mmbiz/dvGtpGGr6A9Kv4Tzhj5rvJxcdnCEcnxSsAATPfpcszpHdSLypd5INibJfVG155pia9cfp8IFdCCIibPiacUkr558Rg/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1"> <section class="" style="margin: 0.2em 0.5em -1.8em; padding-right: 5px; padding-left: 5px; color: rgb(95, 156, 239); font-size: 18px; box-sizing: border-box;"><section style="box-sizing: border-box;">小标题</section></section><img style="box-sizing: border-box; width: 2em !important; float: right; text-align: start; vertical-align: middle; visibility: visible !important; height: auto !important;" data-src="http://mmbiz.qpic.cn/mmbiz/dvGtpGGr6A9Kv4Tzhj5rvJxcdnCEcnxSVHYTuZ6NAKjOIRg3q6QozEddqSNzRBB8r6ibQfJRBC8s2svoYxAdDkQ/0?wx_fmt=png" class="" data-type="png" data-ratio="1" data-w="32" _width="2em" src="http://mmbiz.qpic.cn/mmbiz/dvGtpGGr6A9Kv4Tzhj5rvJxcdnCEcnxSVHYTuZ6NAKjOIRg3q6QozEddqSNzRBB8r6ibQfJRBC8s2svoYxAdDkQ/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1"> </section></section>'
            },
            {
                id: '104',
                name: '',
                html: '<section style="padding: 1em; width: 100%; box-sizing: border-box; background-image: url(&quot;http://mmbiz.qpic.cn/mmbiz/zI0oF09scVHTVjVCuAl5w1NAMzNq7WbrLgaKZZADzLFO5Jr6DkWz5uPxhsnggXYnT3LMMQVicRV5OERS2eCEhWg/0?wx_fmt=png&quot;); background-color: rgb(75, 224, 224); background-size: 100% 100%; background-repeat: no-repeat;" class=""><section class="" style="padding: 8px; box-sizing: border-box;"><section class="Powered-by-XIUMI V5" style="box-sizing: border-box;"><section class="" style="   box-sizing: border-box; "><section class="" style="color: rgb(67, 59, 58); font-size: 21px; box-sizing: border-box;"><section style="box-sizing: border-box; text-align: center;"><strong style="box-sizing: border-box;">小标题</strong></section></section></section></section></section></section>'
            },
            {
                id: '105',
                name: '',
                html: '<section class="" style=" margin-top: 10px; margin-bottom: 10px;  box-sizing: border-box; "><section class="" style="width: 2.6em; display: inline-block; vertical-align: middle; box-sizing: border-box;"><section style="width: 2.6em; height: 2.6em; display: inline-block; vertical-align: middle; line-height: 2.6em; text-align: center; border-radius: 50%; box-sizing: border-box; background-color: rgb(75, 224, 224);"><section style="width: 1.8em; height: 1.8em; line-height: 1.8em; border-radius: 50%; margin-top: 0.36em; margin-bottom: 0.35em; margin-left: 0.44em; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section class="" style="width: 100%; height: 100%; box-sizing: border-box;"><section style="box-sizing: border-box;">1</section></section></section></section><section style="margin: -0.5em auto 0.3em; width: 0px; border-top-width: 1.1em; border-top-style: solid; border-top-color: rgb(75, 224, 224); border-left-width: 1em !important; border-left-style: solid !important; border-left-color: transparent !important; border-right-width: 1.12em !important; border-right-style: solid !important; border-right-color: transparent !important; box-sizing: border-box;"></section></section><section class="" style="display: inline-block; vertical-align: middle; margin-bottom: -0.5em; margin-left: -1.5em; padding-right: 10px; border-bottom-width: 1px; border-bottom-style: dashed; border-bottom-color: rgb(75, 224, 224); box-sizing: border-box;"><section class="" style="display: inline-block; margin-left: 1.3em; padding-left: 5px; line-height: 1.5; font-size: 18px; box-sizing: border-box;"><section style="box-sizing: border-box;">小标题 &nbsp;</section></section></section></section>'
            },{
                id: '106',
                name: '',
                html: '<section style="border: none; margin-top: 0.5em; margin-bottom: 0.5em; box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section style="display: inline-block; vertical-align: bottom; width: 100%; margin-right: 1em; box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section style="width: 8px; height: 8px; margin-top: -4px; background-color: rgb(249, 110, 87); border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-right-radius: 100%; border-bottom-left-radius: 100%; float: left; box-sizing: border-box;" class="tn-Powered-by-XIUMI"></section><section style="border-top-width: 1px; border-top-style: solid; border-color: rgb(249, 110, 87); width: 90%; float: left; box-sizing: border-box;" class="tn-Powered-by-XIUMI"></section></section><section style="text-align: right; width: 100%; box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section style="width: 2em; height: 2em; line-height: 2em; display: inline-block; vertical-align: top; margin-top: -1.2em; background-color: rgb(249, 110, 87); border: 1px solid rgb(255, 110, 153); border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-right-radius: 100%; border-bottom-left-radius: 100%; font-size: 1em; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(255, 255, 255); box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section class="tn-Powered-by-XIUMI" style="box-sizing: border-box;">一</section></section><section style="width: 2em; height: 2em; line-height: 2em; display: inline-block; vertical-align: top; margin-top: -1.2em; background-color: rgb(249, 110, 87); border: 1px solid rgb(255, 110, 153); border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-right-radius: 100%; border-bottom-left-radius: 100%; font-size: 1em; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(255, 255, 255); box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section class="tn-Powered-by-XIUMI" style="box-sizing: border-box;">个</section></section><section style="width: 2em; height: 2em; line-height: 2em; display: inline-block; vertical-align: top; margin-top: -1.2em; background-color: rgb(249, 110, 87); border: 1px solid rgb(255, 110, 153); border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-right-radius: 100%; border-bottom-left-radius: 100%; font-size: 1em; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(255, 255, 255); box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section class="tn-Powered-by-XIUMI" style="box-sizing: border-box;">标</section></section><section style="width: 2em; height: 2em; line-height: 2em; display: inline-block; vertical-align: top; margin-top: -1.2em; background-color: rgb(249, 110, 87); border: 1px solid rgb(249, 110, 87); border-top-left-radius: 100%; border-top-right-radius: 100%; border-bottom-right-radius: 100%; border-bottom-left-radius: 100%; font-size: 1em; font-family: inherit; text-align: center; text-decoration: inherit; color: rgb(255, 255, 255); box-sizing: border-box;" class="tn-Powered-by-XIUMI"><section class="tn-Powered-by-XIUMI" style="box-sizing: border-box;">题</section></section></section><section style="width: 0px; height: 0px; clear: both;"></section></section>'
            }
        ]
    },
    {
        groupName: '容器类',
        groupId: 'container',
        items: [
            {
                id: '101',
                name: '',
                html: '<span style="background-color: #ff0000;">CCC</span>'
            },
            {
                id: '102',
                name: '',
                html: '<span style="background-color: #00ff00;">DDD</span>'
            }
        ]
    },
    {
        groupName: '分隔条类',
        groupId: 'dividing',
        items: []
    },
    {
        groupName: '小创意类',
        groupId: 'originality',
        items: []
    },
    {
        groupName: '动画类',
        groupId: 'animation',
        items: []
    }
];