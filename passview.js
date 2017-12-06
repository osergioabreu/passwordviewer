/* 
 * Password viewer by Sergio Abreu
 * 06-12-2017
 * http://sites.sitesbr.net
 * Requires glyphicons  
 */

var SA_PassView = {
   add: function(obj){ 
          
     var sp = document.createElement('span'), action='visualizar';
     sp.style.fontSize = "1.1em";
     sp.setAttribute('class', "glyphicon glyphicon-eye-close");
     sp.setAttribute("title", "Clique para "+action+" a senha");
     sp.addEventListener('click', function(e){
       if(!e) e = window.event;
       var cl = e.target.getAttribute('class');
       if(cl.match(/close/)) {
         action = 'esconder';
         sp.setAttribute('class', "glyphicon glyphicon-eye-open");
         obj.domElem.type = "text";
       } else {
         action = 'visualizar';
         sp.setAttribute('class', "glyphicon glyphicon-eye-close");
         obj.domElem.type = "password";
       }
       sp.setAttribute("title", "Clique para "+action+" a senha");
     });
     obj.iconTarget.appendChild(sp);
   },
   /* obj is:
    * { domElem: (the form field), 
    *   iconTarget: (dom element to place the icon)
    *  }
    */
  
};

