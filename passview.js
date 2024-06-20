/* 
 * Password viewer by Sergio Abreu
 * Version 2.0 - with Tab Stop and Accessibility
 * 06-12-2017
 * Updated: 19-06-2024
 * http://sites.sitesbr.net
 * Requires glyphicons css fonts  
 */

var SA_PassView = {
   langs: ['pt-br', 'en'],
   lang: 0,
   wClick: ['Clique para', 'Click to'],
   wPass: ['a senha', 'the password'],
   wShow: ['mostrar', 'show'],
   wHide: ['esconder', 'hide'],
   wHint: ['clicar enter aqui mostra sua senha, aperte tab para pular', 'typing enter now will show your password, press tab to skip'],   
   toggle: function(){
       var sapv = SA_PassView, sp = document.getElementById('sapassview_bt'), cl = sp.getAttribute('class');
       if( cl.match(/close/)) {
         action = ' ' + sapv.wHide[ sapv.lang] + ' '; 
         sp.setAttribute('class', "glyphicon glyphicon-eye-open");
         sapv.domElem.type = "text";
       } else {
         action = ' ' + sapv.wShow[ sapv.lang] + ' '; 
         sp.setAttribute('class', "glyphicon glyphicon-eye-close");
         sapv.domElem.type = "password";
       }
       sp.parentNode.setAttribute("title", sapv.wClick[ sapv.lang] + action + sapv.wPass[ sapv.lang]);
     },
   add: function( obj ){      
     var lk, sapv = SA_PassView, sp = document.createElement('span');     
     if( obj.domElem ) 
       sapv.domElem = obj.domElem; 
     else
       sapv.domElem = document.querySelector('input[type=password]');
       
     if( typeof obj.lang != 'undefined')
       sapv.lang = parseInt(obj.lang);
       
     if(! obj.iconTarget ){
       sapv.iconTarget = sapv.domElem.parentNode;
     } else
       sapv.iconTarget = obj.iconTarget;
       
     sp.style.fontSize = "1.1em";
     
     if( obj.style) 
       sp.setAttribute("style", obj.style);
     else
       sp.setAttribute("style", 'margin-left: 10px');
       
     sp.id = 'sapassview_bt';
     sp.setAttribute('class', "glyphicon glyphicon-eye-close");     
     
     lk = document.createElement('A');
     lk.href="javascript: SA_PassView.toggle()";
     lk.setAttribute("title", sapv.wClick[ sapv.lang] + " " + sapv.wShow[sapv.lang] + " " + sapv.wPass[ sapv.lang]);      
     lk.setAttribute('tabstop', 3); //input input "spav"
     lk.setAttribute('alt', sapv.wHint[sapv.lang] ); 
     lk.appendChild(sp); 
     sapv.iconTarget.appendChild(lk);
   }
   /* 
    * To start it, add the js src:
    * <script src="..your server.../passview.js"></script>
    *
    * On a following script tag do:
    * <script> SA_PassView.add({}); </script> for Portuguese
    * or ...
    * <script> SA_PassView.add({lang: 1}); </script> for English
    *
    * For advanced use, you can also pass lang 0/1, style: "your css" and iconTarget: <dom element>
    *  
    * If you want to place the eye in a specific DOM element, use iconTarget property.
    * 
    *    iconTarget: (dom element to place the icon)
    *  
    * If ommited iconTarget, the domElem.parentNode will be used and margin-left is added automatically.
    *   
    */
  
};
