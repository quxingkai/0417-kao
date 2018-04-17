define(['jquery'],function($){
    var fn = function(){
        $.ajax({
            url:"info",
            success:function(data){
                var data = JSON.parse(data);
                console.log(data);
                var html ="";
                data.list.forEach(function(v,i){
                    console.log(v);
                    html += `<li>
                        <h1><img src="${v.img}" alt=""></h1>
                        <p>${v.main}</p>
                    </li>`;
                });
                $('.list').html(html);
            }
        })
    }
    return fn;
})