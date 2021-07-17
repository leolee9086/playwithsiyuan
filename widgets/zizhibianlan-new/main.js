var symain = document.getElementById("ifram");

$("#refreshbutton").bind("click",getarr2);

var mainhost = window.location.host
var hosturl = "http://"+mainhost  
var srcmokuaiurl = (hosturl +"/widgets/zizhibianlan-new/mokuai/")  
console.log(srcmokuaiurl)
function getarr2 (){
    var sydoc = $(symain.contentDocument);
    var datas = ($(sydoc).find("html   div[class='fn__flex-1 protyle'] div[data-node-index='0']"))
    var docconten = ($(sydoc).find("html   div[class='fn__flex-1 protyle'] div[data-node-index='0']"))
    var currentid = ($(datas).attr("data-node-id"))
    var iid = ($(docconten).attr("class"))
    var widgeturl1 = hosturl+"/widgets/note-views/?blockid="
    var widgeturl2 = hosturl+"/widgets/little-things/?blockid="
    var finalurl1 = widgeturl1+currentid
    var finalurl2 = widgeturl2+currentid
    $('#widgets1',parent.document.body).attr("src",finalurl1)
    $('#widgets2',parent.document.body).attr("src",finalurl2)
    var currenturl = ($('#ifram',parent.document.body).attr("src"))
    if (currenturl != (hosturl+"/stage/build/desktop/")) {
    $('#ifram',parent.document.body).attr("src", (hosturl+"/stage/build/desktop/"))}
    $('#mainscript',parent.document.body).attr("src", (hosturl+"/widgets/zizhibianlan-new/main.js"))
    console.log("data",currenturl)
    console.log("url1",finalurl1)
    console.log("url2",finalurl2)
    console.log("iid",iid)
    console.log("main",hosturl)
    return currentid

}




function fuxikapian () {
    symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    var systyle = ($(sydoc1).find("html style[id = 'editorFontSize']"))

    if ($("#fuxikapian").prop("checked"))  {
        var fuxistyle = "<link class='ccfuxi'" +  "href='"+ hosturl +"/widgets/zizhibianlan-new/mokuai/fuxikapian/fuxikapian.css' rel='stylesheet'>"
        $(systyle).after(fuxistyle)
     }
    else {
        var cclink1 = ($(sydoc1).find(".ccfuxi"))
        cclink1.remove()
     }
}

function liebiaobiaoge () {
    symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    var systyle = ($(sydoc1).find("html style[id = 'editorFontSize'"))

    if ($("#liebiaobiaoge").prop("checked"))  {
        var biaogestyle = ("<link class='ccbiaoge'" +  "href='"+ hosturl +"/widgets/zizhibianlan-new/mokuai/liebiaobiaoge/liebiaobiaoge.css' rel='stylesheet'>")
        $(systyle).after(biaogestyle)
     }
    else {
        var cclink2 = ($(sydoc1).find(".ccbiaoge"))
        cclink2.remove()
     }
}

function suojin () {
    symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    var suojinzhi = document.getElementById("suojin").value
    var systyle = ($(sydoc1).find("html style[id = 'editorFontSize'"))
    if ($("#suojinkaiguan").prop("checked"))  {
        console.log("缩进",suojinzhi)
        var cclink2 = ($(sydoc1).find(".suojin"))
        cclink2.remove()
        var suojin =("<style class='suojin' type='text/css'>.protyle-wysiwyg>.p{text-Indent:"+suojinzhi+"em !important;} .protyle-wysiwyg>.p  kbd{text-Indent:0em !important;}</style>")
        $(systyle).after(suojin)

     }
    else {
        var cclink2 = ($(sydoc1).find(".suojin"))
        cclink2.remove()
     }

}

function xingbiao () {
    symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    var systyle = ($(sydoc1).find("html style[id = 'editorFontSize'"))

    if ($("#xingbiao").prop("checked"))  {
        var starstyle = ("<link class='ccstar'" +  "href='"+ hosturl +"/widgets/zizhibianlan-new/mokuai/xingbiao/xingbiao.css' rel='stylesheet'>")
        $(systyle).after(starstyle)
     }
    else {
        var cclink = ($(sydoc1).find(".ccstar"))
        cclink.remove()
     }
}




function jsrun(){
    var symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    var clear1 = $(sydoc1).find("html *[class='jsrun']")
    var clear2 = $(sydoc1).find("html *[class='jsrunbutton']")
    console.log("clear",clear1)
    clear1.remove()
    clear2.remove()

    if ($("#jsrun").prop("checked"))  {
        var symain = document.getElementById("ifram");
        var sydoc1 = $(symain.contentDocument);
        var systyle = ($(sydoc1).find("html style[id = 'editorFontSize'"))
        console.log(systyle)
        var jsdaima = ($(sydoc1).find("html   div[class='hljs protyle-linenumber']"))
        var jsruntime1 = ("<script class='jsrun'" +  "href='"+ hosturl +"/widgets/zizhibianlan-new/jquery.js'>")
        var codetext = $(jsdaima).text()
        console.log(codetext)
        codemenu = $(sydoc1).find("div[class='protyle-action protyle-icons'] span:contains(js)")
        codemenu.before("<button class='jsrunbutton'>运行本代码块</button>")
        $(systyle).after("<style class = 'jsrun'>.jsrunbutton{float:right;}<style>")
        buttons = ($(sydoc1).find(".jsrunbutton"))
        $(systyle).after(jsruntime1)
        $(buttons).bind("click",function(){
            jsdaima = $(this).parent().next()
            codetext = $(jsdaima).text()
            $(systyle).after(jsruntime1)
            $(systyle).after("<script class='jsrun'>"+codetext+"</script>")
            var symain = document.getElementById("ifram");
            var sydoc1 = $(symain.contentDocument);
            var clear1 = $(sydoc1).find("html *[class='jsrun']")
            console.log("clear",clear1)
            clear1.remove()
        })
    }
    else {
        var symain = document.getElementById("ifram");
        var sydoc1 = $(symain.contentDocument);
        var clear1 = $(sydoc1).find("html *[class='jsrun']")
        console.log("clear",clear1)
        clear1.remove()
     }
}

function cssadd(){

    if ($("#cssadd").prop("checked"))  {
        var symain = document.getElementById("ifram");
        var sydoc1 = $(symain.contentDocument);
        var systyle = ($(sydoc1).find("html style"))
        buttons = ($(sydoc1).find(".cssaddbutton"))
        buttons.remove()
        console.log(systyle)
        codemenu = $(sydoc1).find("div[class='protyle-action protyle-icons'] span:contains(css)")
        codemenu.before("<button class='cssaddbutton'>应用此自定义css</button>")
        buttons = ($(sydoc1).find(".cssaddbutton"))
        $(buttons).bind("click",function(){
            var symain = document.getElementById("ifram");
            var sydoc1 = $(symain.contentDocument);
            var clear1 = $(sydoc1).find("html *[class='cssadd']")
            clear1.remove()
            console.log("clear",clear1)
            cssdaima = $(this).parent().next()
            codetext = $(cssdaima).text()
            console.log(codetext)
            systyle = ($(sydoc1).find("html style"))
            $(systyle).after("<style class='cssadd'>"+codetext+"</style>")
           
        })
    }
    else {
        var symain = document.getElementById("ifram");
        var sydoc1 = $(symain.contentDocument);
        var clear1 = $(sydoc1).find("html *[class='cssadd']")
        var clear2 = $(sydoc1).find("html *[class='cssaddbutton']")
        console.log("clear",clear1)
        clear1.remove()
        clear2.remove()
     }
}


$("#xingbiao").bind("click",xingbiao); 
$("#fuxikapian").bind("click",fuxikapian)
$("#liebiaobiaoge").bind("click",liebiaobiaoge)
$("#suojinkaiguan").bind("click",suojin)
$("#suojin").bind("click",suojin)
$("#jsrun").bind("click",jsrun)

$("#cssadd").bind("click",cssadd)

symain.onload = function(){
    symain = document.getElementById("ifram");
    var sydoc1 = $(symain.contentDocument);
    $(sydoc1).find("*").bind("click",jsrun)
    $(sydoc1).find("*").bind("click",cssadd)

}  

