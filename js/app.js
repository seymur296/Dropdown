$("#msearch_brand").on("change",function(){
    const brandName=$(this).val()
    let brandId=brandName.split("|")
    $.ajax({
        url:"http://www.auto.az/ajax/?act=models&bid="+brandId[0]+"&mid=-1&ifads=1&ifsearch=1",
        success:function(res){
            $("#model").html("")
            $("#model").append(res)
        },
    })
    var response= fetch("https://jsonplaceholder.typicode.com/user/");
    response.then(c=>c.json())
    .then(x=>console.log(x))

    localStorage,sessionStorage

})



var getAd=sessionStorage.getItem("adi");    
$(".h").text(getAd)


