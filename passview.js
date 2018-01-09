/* 
 * Password viewer by Sergio Abreu
 * 06-12-2017
 * Updated: 09-01-2018
 * http://sites.sitesbr.net
 * Requires glyphicons  
 */

var SA_PassView = {
   add: function(obj){           
     var sp = document.createElement('span'), action='visualizar';
     if(! obj.iconTarget){
       obj.iconTarget = obj.domElem.parentNode;
       obj.style = 'margin-left: 10px';
     }
     if( obj.style) sp.setAttribute("style", obj.style);
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
   /* Basic obj is:
    * { 
    *   domElem: (the form field)
    * }
    *  
    * If you want to place the eye in a specific DOM element, use iconTarget property.
    * 
    *    iconTarget: (dom element to place the icon)
    *  
    * If ommited iconTarget, the domElem.parentNode will be used and margin-left is added automatically.
    *  
    * Accepts also a style property, holding the string for initial style for the eye: 
    *   style: 'margin-left: 10px' 
    */
  
};

