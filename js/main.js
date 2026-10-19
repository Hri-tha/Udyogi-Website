document.querySelectorAll('.tabs button').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===b)});
    document.getElementById('w').hidden=b.dataset.t!=='w';
    document.getElementById('e').hidden=b.dataset.t!=='e';
  });
});
var q=document.getElementById('q'),items=document.querySelectorAll('#list details'),none=document.getElementById('none');
q.addEventListener('input',function(){
  var v=q.value.trim().toLowerCase(),shown=0;
  items.forEach(function(d){
    var t=(d.textContent+' '+d.dataset.k).toLowerCase();
    var ok=!v||v.split(/\s+/).some(function(w){return w.length>1&&t.indexOf(w)>-1});
    d.style.display=ok?'':'none';if(ok)shown++;
  });
  none.style.display=shown?'none':'block';
});
