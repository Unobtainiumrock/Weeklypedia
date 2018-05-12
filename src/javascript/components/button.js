

// <button type="button" class="btn btn-warning" data-food="110" >Food and drink</button>
function preferenceButton(text,prefNum,pref) {
   var buttonWarning = $('<button>');
   buttonWarning.addClass('btn btn-warning');
   buttonWarning.attr(`data-${pref}`,prefNum);
   buttonWarning.text(text);
}
