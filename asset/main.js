var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var items = $$('.tab-item')
var panes = $$('.tab-pane')

var line = $(' .tabs .line ')

items.forEach((item,index) => {
    item.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        this.classList.add('active')
        panes[index].classList.add('active')
    }
});

