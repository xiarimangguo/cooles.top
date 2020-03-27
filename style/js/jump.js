    window.onload = function(){
        var o = document.getElementById('openUrl');
        o.onclick = function(){
            // 输入的字符与网址的对应关系
            var url = {
                'cooles' : 'file:///H:/error(cooles).html',
            }
            var key = document.getElementById('key').value;
            // 如果存在该对应关系则打开，否则打开默认网址
            window.open(url[key] || 'http://192.168.1.110:8192/search/errors','_parent');
        }
    }