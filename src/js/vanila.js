  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
      return new ActiveXObject(
        navigator.userAgent.indexOf("MSIE 5") >=0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP"
      );
    }
  }

    function ajax( options ) {
      options = {
        type: options.type || "POST",
        url: options.url || "",
        onComplete: options.onComplete || function(){},
        onError: options.onError || function(){},
        onSuccess: options.onSuccess || function(){},
        dataType: options.dataType || "text"
    };

      var xml = new XMLHttpRequest();
      xml.open(options.type, options.url, true);
      xml.onreadystatechange = function(){
        if ( xml.readyState == 4) {
          if ( httpSuccess( xml ) ) {
            var returnData = (options.dataType=="xml")? xml.responseXML : xml.responseText
              options.onSuccess( returnData );
            } else {
              options.onError();
            }
          options.onComplete();
          xml = null;
        }
      }
      xml.send();

    function httpSuccess(r) {
        try {
            return ( r.status >= 200 && r.status < 300 || r.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined")
        } catch(e) {
            return false;
        }
      }
    };
    function insertContent(response){
      var response2= JSON.parse(response);
      console.log(response2);
      for (let id of response2){
        var li =document.createElement('li');
        li.innerHTML=id.category;
        //addClass(li,'ajax-nav-item'); .classList.add('good')
        list.appendChild(li);
      }
    };
    document.getElementById('first-section').addEventListener('click', function() {
        var loading = document.createElement('span');
            loading.appendChild(document.createTextNode('loading'));
            loading.className = 'loading';
            this.parentNode.insertBefore(loading,this);
});
ajax({
  type: "GET",
  url:'http://localhost:3000/categories',
  dataType: "JSON",
  onError: function(msg) {console.log(msg)},
  onSuccess: function(resp) {
    var list=document.getElementById('nav-ajax');
    insertContent(resp);
  }
});
list = document.getElementById('nav-ajax');
