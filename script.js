function formatJSON(json)
{
    console.log(json);

    let html="";
    for(let i of json)
    {
        if(i.type=="normal")
        {
            html+="<div class='normal' id='n"+i.id+"'><div><a>&gt;&gt;";
        }
        else if(i.type=="grave")
        {
            html+="<div class='grave' id='+"+i.id+"'><div><a>&gt;&gt;+";
        }
        else if(i.type=="secret")
        {
            html+="<div class='secret' id='s"+i.id+"'><div><a>&gt;&gt;s";
        }
        else if(i.type=="creator")
        {
            html+="<div class='creator' id='#"+i.id+"'><div><a>&gt;&gt;#";
        }
        html+="<span>"+i.id+"</span></a><span>"+i.name+"</span></div><div>";
        if(i.type!="creator")
        {
            html+="<span class='face'><img src='"+i.face+"'></span>";
        }
        html+="<span class='text'>"+i.text+"</span></div></div>";
    }
    document.getElementById("result").innerHTML=html;
}

window.addEventListener("load",()=>
{
    fetch("data_day1.json")
        .then( response => response.json())
        .then( data => formatJSON(data));
});
