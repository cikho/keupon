document.observe("dom:loaded", function() {    
  //This section is for ajax pagination
  // the element in which we will observe all clicks and capture
  // ones originating from pagination links
  var container = $(document.body)

  if (container) {
    var img = new Image
    img.src = '/images/spinner.gif'

    function createSpinner() {
      new Element('img', { src: img.src, 'class': 'spinner' })
    }

    container.observe('click', function(e) {
      var el = e.element()
      if (el.match('.pagination a')) {
        el.up('.pagination').insert(createSpinner())
        new Ajax.Request(el.href, { method: 'get' })
        e.stop()
      }
    })
  }
  //ajax pagination section ends
});

// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function showViewDeal(elementID, deal_id)
{
    new Ajax.Request('/deals/view_basic_info?deal='+deal_id, {asynchronous:true, evalScripts:true, parameters:'authenticity_token=' + encodeURIComponent('f7451406a5f3527c920b15eb7f63840280305729')});
    document.getElementById(elementID).style.display = "block";
}

function showCreateDeal(elementID, deal_date)
{
    new Ajax.Request('/deals/view_create_deal?date='+deal_date, {asynchronous:true, evalScripts:true, parameters:'authenticity_token=' + encodeURIComponent('f7451406a5f3527c920b15eb7f63840280305729')});
    document.getElementById(elementID).style.display = "block";
}

function hideElt(elementID)
{
	document.getElementById(elementID).style.display = "none";
}