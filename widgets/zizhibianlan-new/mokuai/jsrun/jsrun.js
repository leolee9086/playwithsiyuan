

function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}

var templ1 = heredoc(function(){/*
    var a = document.getElementsByClassName("hljs protyle-linenumber")
    var runbutton = document.createElement('button')
    runbutton.className=runbutton
    a[0].appendChild(runbutton)
 */});