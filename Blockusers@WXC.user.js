// ==UserScript==
// @name         Blockusers@WXC
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block users!
// @author       飞飞54321
// @match        https://bbs.wenxuecity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

   // set a list of IDs you want to block.
   var ids_block=new Array("id1", "id2", "id3")
   var tags=document.getElementsByTagName('a');
   var x=[];
   for(var k=0;k < tags.length; k++)
   {
      if(tags[k].className == 'b' || tags[k].className == 'nickname'){
          x[x.length] = tags[k];
       }
   }
	for (var i = 0; i < x.length; i++) {
		var id_current=x[i].innerText;
		var yes=0;
		for(var j = 0, len = ids_block.length; j < len; j++){
			if(id_current == ids_block[j]){
				yes=1;
				break;
			}
		}
		if(yes ==1){
            // replace user id and comments by specific texts
            //x[i].innerText='大坏蛋';
			//x[i].parentNode.previousElementSibling.innerText="对不起，恭喜你发财";

            // delete the element
            x[i].parentNode.parentNode.remove();
		}
    }
})();