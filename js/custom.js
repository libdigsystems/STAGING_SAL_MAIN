(function () {
    "use strict";
    'use strict';


    var app = angular.module('viewCustom', ['angularLoad']);
	
	app.component('prmFinesAfter', {
		template: "<div id='sal_wpm'><h2>Online Charge Payment</h2><ul><li style='padding-bottom: 0.5em;'>By clicking on Pay Charges you are agreeing to the University's <a href=\'http://shop.salford.ac.uk/help/?HelpID=1\' target=\'_blank\'>terms and conditions</a></li><li style='padding-bottom:0.5em;'>For information about charges and refunds see <a href=\'http://www.salford.ac.uk/library/use/library-account#tab_fines\' target=\'_blank\'>Fines Information</a></li><li style='padding-bottom:0.5em;'>You can be confident that your personal details are safe when making library payments online. All website transactions are secure and encrypted by Thawte.<br /><img src=\'custom/SAL_MAIN/img/44SAL_logo_mcsc.gif\' style='padding:0.5em;'><img src=\'custom/SAL_MAIN/img/44SAL_logo_vbv.gif\'style='padding:0.5em;'></li></ul></div>"
	});

	app.component('prmBriefResultAfter', {
		bindings: { parentCtrl: '<' },
		controller: function controller($scope) {
			var bp = this;
			var bpp = this;
			var hc = this;

			hc.url = 'http://www.salford.ac.uk/alumni/giving-to-salford';
			bp.urlvalue = '';
			bpp.bookplateexists = '';
			bpp.bookplatemessage = 'This book has been funded by donations to the Salford Advantage Fund';

			bp.urlvalue = bp.parentCtrl.item.pnx.display.lds07;
			if (bp.urlvalue == '<br/><p>This book is available for your studies thanks to donors to the Salford Advantage Fund</p>') {
				bpp.bookplateexists = true;
			}
		},
		template: '<div ng-if="$ctrl.bookplateexists"><p style="border: 2px solid #c60c30;color: #c60c30;margin: 5px 170px 5px 0px;padding: 5px 0px 5px 25px;border-radius:5px;"><a ng-href="{{$ctrl.url}}" target="_blank" ng-click="$event.stopPropagation()">{{$ctrl.bookplatemessage}}</a></p></div>'

	});

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/

	
})();

function signIn (){

		var checkGuest = document.body.innerHTML.toString().search('user-name');
if (checkGuest > -1){
var isGuest = angular.element( document.querySelector( '.user-name' ) )[0].innerHTML;
//alert(isGuest);
if ((isGuest.indexOf('Sign in') > -1)||(isGuest.indexOf('Guest') > -1)){
            
			var elementRemove = document.getElementsByTagName('prm-user-area')[0];
			angular.element(elementRemove).remove();

			var elem = document.getElementsByClassName('view-switcher')[0];
			var btn = document.createElement("div");
			var a = document.createElement('a');
			var linkText = document.createTextNode("Sign in");
			a.appendChild(linkText);
			btn.className = "signIn";

			var currentWindow = document.location;
			var currentUrl = encodeURI(currentWindow);
			a.href = 'https://sal-shib-test.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=44SAL&lang=eng&url=http://sal-primo-staging.hosted.exlibrisgroup.com/primo_library/libweb/pdsLogin?targetURL='+currentUrl+'&from-new-ui=1&authenticationProfile=Profile+1';
			a.className = "signInLink";       
			elem.appendChild(btn);
			btn.appendChild(a);
  
		}


		
		  //if (isGuest < 1){
		  
		  if ((isGuest.indexOf('Sign in' < 1))||(isGuest.indexOf('Guest' < 1))){
			var signOutCheck = document.getElementsByClassName('signOut')[0];
			 var removeSignOut = document.getElementsByTagName('md-fab-toolbar')[0];
			    angular.element(removeSignOut).remove();
				if (typeof signOutCheck == 'undefined'){ 	
					var userName = document.getElementsByClassName('user-name')[1]; 
					var btn = document.createElement("div");
					btn.className = "signOut";
					var a = document.createElement('a');
					a.href = 'https://sal-shib-test.hosted.exlibrisgroup.com/pds?func=logout&calling_system=primo&institute=44SAL&url=http://sal-primo-staging.hosted.exlibrisgroup.com:80/primo-explore/search?vid=SAL_MAIN%26performLogout=true';
                    var linkText = document.createTextNode("Sign out");
					a.appendChild(linkText);
					
					userName.appendChild(btn);
					btn.appendChild(a); 
				
		}

	}

}

}

/*
setTimeout(function(){
var w = window.innerWidth;

if (w > 598){
	signIn();
	}
}, 1000)
*/
window.setInterval(function(){

	var currentWindowUpdate = document.location;
	var currentUrlUpdate = encodeURI(currentWindowUpdate);
	
	if (document.querySelector('.signInLink') !== null) {
		var link = document.getElementsByClassName('signInLink')[0];
		//if not link variable not undefined then set url attribute of href
			if (typeof link !== 'undefined') {
				link.setAttribute('href', 'https://sal-shib-test.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=44SAL&lang=eng&url=http://sal-primo-staging.hosted.exlibrisgroup.com/primo_library/libweb/pdsLogin?targetURL='+currentUrlUpdate+'&from-new-ui=1&authenticationProfile=Profile+1');
                //link.setAttribute('href', 'https://sal-shib.hosted.exlibrisgroup.com/pds?func=load-login&calling_system=primo&institute=44SAL&lang=eng&url=http://sal-primo-production.hosted.exlibrisgroup.com/primo_library/libweb/pdsLogin?targetURL='+currentUrlUpdate+'&from-new-ui=1&authenticationProfile=Profile+1');
   
			}
		}
}, 500);



/*function zeroResults(){
//function to check for zero results and display tips
       
	      //setTimeout(function(){
		  var checkResultPage = document.body.innerHTML.toString().search('results-count');
		   if (checkResultPage > -1){
		       var newDiv2 = angular.element("<div id ='no_results'><ul><li><span>Make sure all words are spelled correctly and try different keywords</span></li><li><span>For more help and support <a target='_blank' href='http://www.salford.ac.uk/library/help'>contact the Library</a></span></li><li><span>If you need help with finding resources contact your <a target='_blank' href='http://www.salford.ac.uk/library/help/academic-support'>Academic Support Librarian</a></span></li><li><span>You can request items not held in Library stock via <a target='_blank' href='http://www.salford.ac.uk/library/use/document-delivery'>Document Delivery</a> for personal use</span></li><li><span>Use <a target='_blank' href='http://www.salford.ac.uk/library/use/you-want-it-well-get-it'>You want it? We\'ll get it?</a> to request the Library buys extra books to add to stock</span></li></ul></div>");
	           var resultCount = angular.element( document.querySelector( '.results-count' ) )[0].innerHTML;
               resultCount = resultCount.replace(/\D/g,'');
               if (resultCount == 0){
			       //var checkDiv = angular.element( document.querySelector( '#no_results' ) );
                   var checkDiv = document.body.innerHTML.toString().search('Make sure all words are spelled correctly and try different keywords');
                    
                    if (checkDiv == -1){					
					var getElement2 = angular.element( document.querySelector( '.list-spacer' ) );
                    getElement2.append(newDiv2);   
                }
				
}
                if (resultCount != 0){
				
				var elemRemove = angular.element(document.querySelector('#no_results'));
				angular.element(elemRemove).remove();
				//document.querySelector( '#no_results' ).remove();
                    //remove zero results message 
					


                }				
		 
		 
		 //},2000)


   }

} //end of zero result message */



function openLinkNewTab(){
//function to open link in My Account in new tab by setting attribute
    var pageConfirm = document.body.innerHTML.toString().search('prm-account-links');
       //check if elements on page 
		if (pageConfirm > -1){
			var elem = document.getElementsByClassName('bold-text md-primoExplore-theme');
			//get elements into an array
			var arrayLength = elem.length; 
			//iterate over array to add target attribute with -blank value to each URL
			for (var i = 0; i < arrayLength; i++) {
					elem[i].setAttribute('target', '_blank'); 
  
				} //end for loop
			} // end if statement
}//end openLinkNewTab function  



function runWpmBuild (){
               //temporary link to SOLAR to pay fines
			   //var newDiv = angular.element("<div id='sal_wpm'><h2>Online Charge Payment</h2><ul><li style='padding-bottom: 0.5em;'>Please follow this <a href=\'http://sal-primo-production.hosted.exlibrisgroup.com/primo_library/libweb/action/login.do?vid=SAL_MAIN&loginFn=signin&vid=SAL_MAIN&targetURL=http://sal-primo-production.hosted.exlibrisgroup.com/primo_library/libweb/action/myAccountMenu.do?activity=fees&fromLink=menu.myaccount.fines' target=\'_blank\'>link</a> if you wish to pay a library charge</li></ul></div>")[0];
               var newDiv = angular.element("<div id='sal_wpm'><h2>Online Charge Payment</h2><ul><li style='padding-bottom: 0.5em;'>By clicking on Pay Charges you are agreeing to the University's <a href=\'http://shop.salford.ac.uk/help/?HelpID=1\' target=\'_blank\'>terms and conditions</a></li><li style='padding-bottom:0.5em;'>For information about charges and refunds see <a href=\'http://www.salford.ac.uk/library/use/library-account#tab_fines\' target=\'_blank\'>Fines Information</a></li><li style='padding-bottom:0.5em;'>You can be confident that your personal details are safe when making library payments online. All website transactions are secure and encrypted by Thawte.<br /><img src=\'custom/SAL_MAIN/img/44SAL_logo_mcsc.gif\' style='padding:0.5em;'><img src=\'custom/SAL_MAIN/img/44SAL_logo_vbv.gif\'style='padding:0.5em;'></li></ul></div>")[0];
                  setTimeout(function(){
					var getElement = angular.element( document.querySelector( 'prm-fines' ) );
					//var getOverviewElement = angular.element(document.querySelector('.tiles-grid'));
					var checkText = document.body.innerHTML.toString().search('Current fees balance is');
						if (checkText > -1){
						//var wpm_check_text = document.body.innerHTML.toString().search('Please follow this');
						    
						  var wpm_check_text = document.body.innerHTML.toString().search('By clicking on Pay Charges you are agreeing to the University');
						    if (wpm_check_text == -1){
							//document.body.appendChild(newDiv);
							getElement.append(newDiv); 
							}
							//getOverviewElement.append(newDiv);
                         }					
					 }, 1000)
                } //end of wpm function
function changeText(){
  // this is to check the label 'primo help' to library search help that appears as a submenu element in the main main menu
var textValue = document.body.innerHTML.toString().search('md-subhead');
   if (textValue > -1){
        var checkText = document.getElementsByClassName('md-subhead')[7].innerHTML;

if (checkText.indexOf('primo help') > -1){
  
  //alert(checkText);
  document.getElementsByClassName('md-subhead')[7].innerHTML = "library search help";
  
}
   }

}			

function loadFunctions(){
     openLinkNewTab();
     //signIn();
	 //changeText();
     //zeroResults();
	 runWpmBuild();
}


window.setInterval(function(){
     loadFunctions();
	 var w = window.innerWidth;
     var checkUserName = document.body.innerHTML.toString().search('user-name');
if (w > 598){
signIn();

  }
if ((w < 598)&&(checkUserName < 0)){
location.reload(); 

  }   
}, 100);


/*
//lib chat functions
var springSpace = springSpace || {};

(function(){
	
	if (!window.console) {
		var noOp = function(){}; // no-op function
		console = {
			log: noOp,
			warn: noOp,
			error: noOp
		}
	}

	var chat_div, chat_load, chat_timer, chat_self_triggered, chat_button;
	var libchat_options = {"id":"5883","iid":"1358","hash":"651ffb2968446de60d61843f3f9f3da8","name":"Salford 1 (in page chat) (copy)","ts":"2015-08-28T14:14:35.119Z","uid":23567,"ref":"","key":"13f6004ea2d550f","chat_title":"Ask a Librarian","byeMsg":"Thanks for chatting!","dept_label":"Select Department:","name_label":"Name (optional)","name_default":"","guest_label":"Guest","width":"50%","height":340,"is_personal":false,"isBuilding":true,"chat_button":"Start Chat","done_button":"Chat again","press_enter":"Press ENTER to send","submit_button":"Submit","email_trans":"View\/Email Transcript","offline_text":"Ask a Librarian","slidebutton_url":"","slidebutton_text":"Chat","slidebutton_position":"r","slidebutton_bcolor":"#C60C30","slidebutton_color":"#FFFFFF","slidebutton_width":"","slidebutton_height":"","la_hide":true,"la_hide_msg":"Sorry, chat is offline but you can still get help.","la_hide_msg2":"<a href=\"http:\/\/www.salford.ac.uk\/library\/help\/chat\/_nocache\" target=\"_parent\">Click here for chat enquiries outside of staffed hours<\/a>","la_search_opt":{"group_id":0,"button":"Search","placeholder":"","label":""},"la_search_box":"","sound_on":"Sound is On (click to toggle)","sound_off":"Sound is Off (click to toggle)","star_text":"Please rate this chat:","rate_1":"Bad","rate_2":"So-so","rate_3":"Good","rate_4":"Great","trans":"Enter an email address to send this chat transcript to:","error_sess":"Error starting session.","error_send":"Error sending this message.","error_tran":"Error sending transcript.","left":" has left the chat","typing":" is typing...","joined":" has joined the chat","initial_question":true,"initial_question_label":"Your Question","comments_label":"Please comment on why you chose this rating:","comments_button_text":"Submit Feedback","enable_anon":true,"enable_comments":true,"enable_sound":false,"star_ratings":true,"file_uploads":true,"file_title":"Upload File","file_intro":"Note: Maximum file size is 5MB. File is removed after one month, it is not kept permanently.","file_label":"Attach a file","file_action":"Upload","cancel_button":"Cancel","css":"","custom_css":"","color_backg":"#f9f9f9","color_head":"#C60C30","color_btn":"#FFFFFF","color_border":"","user1":{"tag":1,"name":"My email address is...(optional)","id":0,"show":1,"required":0,"type":"t","val":"An undergraduate student, A postgraduate student, An external member of the library, A member of staff, Not a member of the library"},"user2":{"tag":2,"name":"I am...","id":0,"show":1,"required":0,"type":"l","val":"Undergraduate, Postgraduate (taught), Postgraduate (research), External member, Staff member, Not a member of the library"},"user3":{"tag":3,"name":"","id":0,"show":0,"required":0,"type":"t","val":""},"error_off":"Sorry it doesn't appear any librarians are online... Please try again later.","wait":"Please wait... A librarian will connect shortly!","depart_id":[{"u":0,"d":[1677]}],"widget_type":3,"autoload_time":0,"autoload_head":"Do you need help?","autoload_text":"A librarian is online ready to help.","autoload_yes":"Chat Now","autoload_no":"No Thanks","missedchat_time":"60","missedchat_message":"We apologize for the delay. Don't want to wait?","missedchat_link":"Submit your question.","missedchat_queue":"1226","fbwidget":false,"autopop":false,"peel":"","user4":{"tag":4,"name":"click to edit","id":0,"show":0,"required":0,"type":"t","val":""},"user5":{"tag":5,"name":"click to edit","id":0,"show":0,"required":0,"type":"t","val":""},"skip_login":false,"nologin_message":"Type your question in the box below and press Enter to start chatting.","error_message":"Sorry, it looks like you're having a connection issue. Would you like to submit your question for email follow-up?","error_link":"Submit your question.","error_queue":"1226","away_message":"Chat is online but the operator is temporarily away. If you don't want to wait, you can submit your question for email follow-up.","away_link":"Submit your question.","away_queue":0,"reload_button":"Recheck Status","offline_url":"","slidebutton_url_off":"","slidebutton_text_off":"Offline","base_domain":"region-eu.libanswers.com","onlinerules":[{"u":0,"d":[1677]}]};
	var cascadeServer = "https:\/\/cascade2.libchat.com:443";
	
		
	//!check jquery version up to second decimal
	//is the current version >= minimum version
	function minVersion(minv, curr) {
		curr = curr || window.jQuery.fn.jquery;
		var c = curr.split('.');
		var m = minv.split('.');
		
		if (parseInt(c[0], 10) > parseInt(m[0], 10)) { return true; }
		else if (parseInt(c[0], 10) < parseInt(m[0], 10)) { return false; }
		else {
			if (typeof c[1] == 'undefined') { c[1] = 0; }
			if (typeof m[1] == 'undefined') { m[1] = 0; }
			if (parseInt(c[1], 10) > parseInt(m[1], 10)) { return true; }
			else if (parseInt(c[1], 10) < parseInt(m[1], 10)) { return false; }
			else { return true; }
		}
	}

	//get jquery either from namespace, window, or by loading it
	if (typeof springSpace.jq == "undefined") {
		if (window.jQuery === undefined) {
			loadJquery();
		} else {
			if (minVersion('1.7', window.jQuery.fn.jquery)) {
				springSpace.jq = window.jQuery;
				main();
			} else {
				loadJquery();
			}
		}
	} else {
		main();
	}		
	
	//!Load jQuery
	function loadJquery(){
		var script_tag = document.createElement('script');
		script_tag.setAttribute("type","text/javascript");
		script_tag.setAttribute("src", "//code.jquery.com/jquery-1.12.2.min.js");
		if (script_tag.readyState) { // for IE
			script_tag.onreadystatechange = function () {
				if (this.readyState == 'complete' || this.readyState == 'loaded') {
					scriptLoadHandler();
				}
			};
		} else {
			script_tag.onload = scriptLoadHandler;
		}
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	}		
		
	//!Called once jQuery has loaded
	function scriptLoadHandler() {
		springSpace.jq = window.jQuery.noConflict(true);
		main();
	}		

	//!Check online status
	function checkStatus() {
				
			springSpace.jq.ajax({
				url : cascadeServer+'/widget_status',
				dataType : "jsonp",
				data: { iid: libchat_options.iid, rules: JSON.stringify(libchat_options.onlinerules) },
				success : function(data) {
					var online = false;
					if (data.u || data.d) {
						online = true;
					}
					showChat(online);
				},
				timeout: 10000
			}).fail(function(){
				showChat(false);
			});
			}
			
	function main() {
	
		springSpace.jq(document).ready(function(){
		
					
			//change a % width to some standard pixel width for new window
			if (typeof libchat_options.width == 'string' && libchat_options.width.indexOf('%') !== -1) {
				libchat_options.width = '400';
			}
				
		
		//only load a stylesheet if there was a custom one set
		if (libchat_options.css !== '') {
			if(document.createStyleSheet) {
				try { document.createStyleSheet(libchat_options.css); } catch (e) { }
			}
			else {
				var css_tag = document.createElement("link");
				css_tag.setAttribute("rel", "stylesheet");
				css_tag.setAttribute("type", "text/css");
				css_tag.setAttribute("href", libchat_options.css);
				(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(css_tag);
			}
		}			
		if (!libchat_options.color_border || libchat_options.color_border == '') { libchat_options.color_border = 'transparent'; }
		
					
			!function(a){a.fn.tabSlideOut=function(b){var c=a.extend({tabHandle:".lcs_chat_button",content_div:".lcs_load",speed:300,action:"click",tabLocation:"l",topPos:"200px",leftPos:"20px",fixedPosition:!0,positioning:"absolute",pathToTabImage:null,imageHeight:null,imageWidth:null,onLoadSlideOut:!1,buttonBGcolor:null},b||{});c.tabHandle=a(c.tabHandle),c.content_div=a(c.content_div);var d=this;c.positioning=c.fixedPosition===!0?"fixed":"absolute",!document.all||window.opera||window.XMLHttpRequest||(c.positioning="absolute"),null!=c.pathToTabImage&&c.tabHandle.css({background:"url("+c.pathToTabImage+") "+c.buttonBGcolor+" no-repeat",width:c.imageWidth,height:c.imageHeight,textIndent:"-99999px"}),c.tabHandle.css({display:"block",outline:"none",position:"absolute"}),d.css({"line-height":"1",position:c.positioning});var e={containerWidth:parseInt(d.outerWidth(),10)+"px",containerHeight:parseInt(d.outerHeight(),10)+"px",tabWidth:parseInt(c.tabHandle.outerWidth(),10)+"px",tabHeight:parseInt(c.tabHandle.outerHeight(),10)+"px"};("t"===c.tabLocation||"b"===c.tabLocation)&&(d.css({left:c.leftPos}),c.tabHandle.css({right:0})),"t"===c.tabLocation&&(d.css({top:"-"+e.containerHeight}),c.tabHandle.css({bottom:"-"+e.tabHeight})),"b"===c.tabLocation&&(d.css({bottom:"-"+e.containerHeight,position:"fixed"}),c.tabHandle.css({top:"-"+e.tabHeight})),("l"===c.tabLocation||"r"===c.tabLocation)&&d.css({height:e.containerHeight,top:c.topPos}),"l"===c.tabLocation&&(d.css({left:"-"+e.containerWidth}),c.tabHandle.css({right:"-"+e.tabWidth}),c.tabHandle.css(null!=c.pathToTabImage?{top:0}:{top:e.tabWidth})),"r"===c.tabLocation&&(d.css({right:"-"+e.containerWidth}),null!=c.pathToTabImage&&c.tabHandle.css({left:"-"+e.tabWidth}),c.tabHandle.css({top:0}),a("html").css("overflow-x","hidden")),c.tabHandle.click(function(a){a.preventDefault()});var f=function(){"t"===c.tabLocation?d.animate({top:"-"+e.containerHeight},c.speed).removeClass("open"):"l"===c.tabLocation?d.animate({left:"-"+e.containerWidth},c.speed).removeClass("open"):"r"===c.tabLocation?d.animate({right:"-"+e.containerWidth},c.speed).removeClass("open"):"b"===c.tabLocation&&d.animate({bottom:"-"+e.containerHeight},c.speed).removeClass("open"),c.content_div.attr("aria-hidden",!0)},g=function(){"t"==c.tabLocation?d.animate({top:"-3px"},c.speed).addClass("open"):"l"==c.tabLocation?d.animate({left:"-3px"},c.speed).addClass("open"):"r"==c.tabLocation?d.animate({right:"-3px"},c.speed).addClass("open"):"b"==c.tabLocation&&d.animate({bottom:"-3px"},c.speed).addClass("open"),c.content_div.attr("aria-hidden",!1)};c.tabHandle.click(function(){d.hasClass("open")?f():g()}),d.on("tabslideout.toggle",function(){d.hasClass("open")?f():g()})}}(springSpace.jq);
			
			chat_div = springSpace.jq('<div class="lcs_slide_out"></div>').css({
				'width': libchat_options.width,
				'height': '70px',
				'border': '1px solid '+libchat_options.color_border,
				'background-color': libchat_options.color_backg,
				'box-shadow': '0 0 5px #ccc',
				'z-index': '100'
			}).attr('title', "Click to open chat window"); // @todo make this customizable
						
			chat_button = springSpace.jq('<a class="lcs_chat_button" href="#"></a>');			
			chat_load = springSpace.jq('<div class="lcs_load" aria-hidden="true"></div>');
			
			chat_div.append(chat_button);
			chat_div.append(chat_load);
			springSpace.jq('body').append(chat_div);
			
			if (libchat_options.slidebutton_url && libchat_options.slidebutton_url !== '') {
				chat_div.tabSlideOut({
					pathToTabImage: libchat_options.slidebutton_url, 
					imageHeight: libchat_options.slidebutton_height,
					imageWidth: libchat_options.slidebutton_width,
					tabLocation: libchat_options.slidebutton_position,
					topPos: libchat_options.button_top,
					leftPos: libchat_options.button_posLeft,
					buttonBGcolor: libchat_options.slidebutton_bcolor
				});
				chat_button.text(libchat_options.slidebutton_text);
			} else {
				if (!libchat_options.slidebutton_color) { libchat_options.slidebutton_color = '#ffffff'; }
				var chat_button_span = springSpace.jq('<span></span>').html(libchat_options.slidebutton_text).css({ padding: '10px', display: 'block', borderStyle: 'solid', borderColor: libchat_options.slidebutton_color, color: libchat_options.slidebutton_color, backgroundColor: 'transparent', margin: '1px' });
				if ((libchat_options.slidebutton_position == 'b')) {
					chat_button.css({ backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
					chat_button_span.css({ borderWidth: '4px 4px 0px 4px',  });
				} else {
					var rotate = (libchat_options.slidebutton_position == 'l') ? '270deg' : '-270deg';
					chat_button.css({ transformOrigin: 'top left', transform: 'rotate('+rotate+')', backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
					chat_button_span.css({ borderWidth: '0px 4px 4px 4px',  });
				}
				chat_button.append(chat_button_span);
				chat_div.tabSlideOut({
					tabLocation: libchat_options.slidebutton_position,
				});
			}
			
			chat_button.on('click', function(e) {
				window.clearTimeout(chat_timer);
				if(chat_div.hasClass('open')){
					checkStatus();
				} else {
					// window is closing
					chat_div.css({'width': libchat_options.width, 'height': '70px' }).attr('title', "Click to open chat window");
				}
				return true;
			});
			
			//timer
			if (libchat_options.autoload_time && parseInt(libchat_options.autoload_time,10) > 0) {
				chat_timer = window.setTimeout(function(){ chat_self_triggered = true; checkStatus(); }, parseInt(libchat_options.autoload_time, 10) * 1000);
			}
			
					
			}); //end docready
	}//end main

	function showChat(online){
		var qs = window.location.protocol+'//'+libchat_options.base_domain+'/chati.php?';
		qs += "iid=" + libchat_options.iid + 
			 "&hash=" + libchat_options.hash;

		if (typeof libchat_options['template'] !== 'undefined') {
			qs += "&template="+encodeURIComponent(libchat_options['template']);
		}
		
		if (typeof libchat_options['template_css'] !== 'undefined') {
			qs += "&template_css="+encodeURIComponent(libchat_options['template_css']);
		}		
		qs += "&online="+online;
		
		try {
			if ( typeof libchat_options.width === 'string' && libchat_options.width.indexOf("%") == -1 )
				libchat_options.width = parseInt(libchat_options.width,10);
		} catch(e){}

		try {
			if ( typeof libchat_options.height === 'string' && libchat_options.height.indexOf("%") == -1 )
				libchat_options.height = parseInt(libchat_options.height,10);
		} catch(e){}
		
		if (window.document.title) {
			qs += '&referer_title='+encodeURIComponent(window.document.title);
		}
		
						//slideout
				if (online === false && chat_self_triggered === true) { chat_self_triggered = false; return; }
				else if (chat_self_triggered === true) {
					chat_div.trigger('tabslideout.toggle'); chat_self_triggered = false; qs += '&auto=true';
					chat_load.attr('aria-live', 'polite');
					springSpace.jq(window).on('message', function(e){
						var data = e.originalEvent.data;
						if (data == 'closewidget') {
							chat_button.trigger('click');
							chat_load.removeAttr('aria-live');
						} else if (data == 'chatstarted') {
							chat_load.removeAttr('aria-live');
						}
					});
				}
				
				chat_div.css({'width':libchat_options.width, 'height': libchat_options.height });
				
				var $iframe = springSpace.jq('<iframe></iframe>').attr({ 'id': 'iframe_'+libchat_options.hash, 'name': 'iframe_'+libchat_options.hash, 'title': 'Chat widget', 'src': qs, 'frameborder': 0, 'scrolling': 'no' }).css({ 'border': 'none', boxSizing: 'border-box', 'width': '100%', 'height': libchat_options.height });
				chat_load.html($iframe).show();
				
						
		
	}//end showchat

})();
*/ 

//end anonymous function
//end of lib chat functions
//call lib chat main function to load when page loads 04/10/16 DW
//main();

//lib chat on the left 04/10/16 DW


var springSpace = springSpace || {};

(function(){
	
	if (!window.console) {
		var noOp = function(){}; // no-op function
		console = {
			log: noOp,
			warn: noOp,
			error: noOp
		}
	}

	var chat_div, chat_load, chat_timer, chat_self_triggered, chat_button;
	var libchat_options = {"id":"7171","iid":"1358","hash":"e816b20b8e0ec3dbb01ad9a3fe6a324c","name":"Primo New UI Staging","ts":"2016-10-04T12:50:57.071Z","uid":31002,"ref":"","key":"13f6004ea2d550f","chat_title":"Ask a Librarian","byeMsg":"Thanks for chatting!","dept_label":"Select Department:","name_label":"Name (optional)","name_default":"","guest_label":"Guest","width":"100%","height":340,"is_personal":false,"isBuilding":true,"chat_button":"Start Chat","press_enter":"Press ENTER to send","submit_button":"Submit","email_trans":"View\/Email Transcript","offline_text":"Ask Us","slidebutton_url":"","slidebutton_text":"Chat","slidebutton_position":"l","slidebutton_bcolor":"#C60C30","slidebutton_color":"#FFFFFF","slidebutton_width":"34","slidebutton_height":"125","la_hide":true,"la_hide_msg":"Sorry, chat is offline but you can still get help.","la_hide_msg2":"<a href=\"http:\/\/salford.libanswers.com\" target=\"_parent\">Search our Knowledgebase and\/or submit your question<\/a>","la_search_opt":{"group_id":0,"button":"Search","placeholder":"","label":""},"la_search_box":"","sound_on":"Sound is On (click to toggle)","sound_off":"Sound is Off (click to toggle)","star_text":"Please rate this chat:","rate_1":"Bad","rate_2":"So-so","rate_3":"Good","rate_4":"Great","trans":"Enter an email address to send this chat transcript to:","error_sess":"Error starting session.","error_send":"Error sending this message.","left":" has left the chat","typing":" is typing...","joined":" has joined the chat","initial_question":false,"initial_question_label":"Your Question","comments_label":"Any comments?","comments_button_text":"Submit Feedback","enable_anon":true,"enable_sound":false,"star_ratings":true,"file_uploads":true,"file_title":"Upload File","file_intro":"Note: Maximum file size is 5MB. File is removed after one month, it is not kept permanently.","file_label":"Attach a file","file_action":"Upload","cancel_button":"Cancel","css":"","custom_css":"","color_backg":"#f9f9f9","color_head":"#C60C30","color_btn":"#FFFFFF","color_border":"","user1":{"tag":1,"name":"My email address is...(optional)","id":0,"show":1,"required":0,"type":"t","val":""},"user2":{"tag":2,"name":"I am...","id":0,"show":1,"required":0,"type":"l","val":"Undergraduate\nPostgraduate (taught)\nPostgraduate (research)\nExternal member \nNot a member of the library\n\n"},"user3":{"tag":3,"name":"","id":0,"show":0,"required":0,"type":"t","val":""},"error_off":"Sorry it doesn't appear any librarians are online... Please try again later.","wait":"Please wait... A librarian will connect shortly!","depart_id":[{"u":0,"d":0}],"widget_type":"3","skip_login":false,"nologin_message":"Type your question in the box below and press Enter to start chatting.","autoload_time":0,"autoload_head":"Do you need help?","autoload_text":"A librarian is online ready to help.","autoload_yes":"Chat Now","autoload_no":"No Thanks","missedchat_time":30,"missedchat_message":"We apologize for the delay. Don't want to wait?","missedchat_link":"Submit your question.","missedchat_queue":0,"error_message":"Sorry, it looks like you're having a connection issue. Would you like to submit your question for email follow-up?","error_link":"Submit your question.","error_queue":0,"away_message":"Chat is online but the operator is temporarily away. If you don't want to wait, you can submit your question for email follow-up.","away_link":"Submit your question.","away_queue":0,"reload_button":"Recheck Status","valid_form_q":"Please enter your question.","valid_form_n":"Please enter your name.","fbwidget":false,"autopop":false,"peel":"","user4":{"tag":4,"name":"","id":0,"show":0,"required":0,"type":"t","val":""},"user5":{"tag":5,"name":"","id":0,"show":0,"required":0,"type":"t","val":""},"base_domain":"region-eu.libanswers.com","onlinerules":[{"u":0,"d":0}]};
	var cascadeServer = "https:\/\/cascade2.libchat.com:443";
	
		
	//!check jquery version up to second decimal
	//is the current version >= minimum version
	function minVersion(minv, curr) {
		curr = curr || window.jQuery.fn.jquery;
		var c = curr.split('.');
		var m = minv.split('.');
		
		if (parseInt(c[0], 10) > parseInt(m[0], 10)) { return true; }
		else if (parseInt(c[0], 10) < parseInt(m[0], 10)) { return false; }
		else {
			if (typeof c[1] == 'undefined') { c[1] = 0; }
			if (typeof m[1] == 'undefined') { m[1] = 0; }
			if (parseInt(c[1], 10) > parseInt(m[1], 10)) { return true; }
			else if (parseInt(c[1], 10) < parseInt(m[1], 10)) { return false; }
			else { return true; }
		}
	}

	//get jquery either from namespace, window, or by loading it
	if (typeof springSpace.jq == "undefined") {
		if (window.jQuery === undefined) {
			loadJquery();
		} else {
			if (minVersion('1.7', window.jQuery.fn.jquery)) {
				springSpace.jq = window.jQuery;
				main();
			} else {
				loadJquery();
			}
		}
	} else {
		main();
	}		
	
	//!Load jQuery
	function loadJquery(){
		var script_tag = document.createElement('script');
		script_tag.setAttribute("type","text/javascript");
		script_tag.setAttribute("src", "//code.jquery.com/jquery-1.12.2.min.js");
		if (script_tag.readyState) { // for IE
			script_tag.onreadystatechange = function () {
				if (this.readyState == 'complete' || this.readyState == 'loaded') {
					scriptLoadHandler();
				}
			};
		} else {
			script_tag.onload = scriptLoadHandler;
		}
		(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	}		
		
	//!Called once jQuery has loaded
	function scriptLoadHandler() {
		springSpace.jq = window.jQuery.noConflict(true);
		
		main();
		
	}		

	//!Check online status
	function checkStatus() {
				
			springSpace.jq.ajax({
				url : cascadeServer+'/widget_status',
				dataType : "jsonp",
				data: { iid: libchat_options.iid, rules: JSON.stringify(libchat_options.onlinerules) },
				success : function(data) {
					var online = false;
					if (data.u || data.d) {
						online = true;
					}
					showChat(online);
				},
				timeout: 10000
			}).fail(function(){
				showChat(false);
			});
			}
			
	function main() {
	
		springSpace.jq(document).ready(function(){
		
		    //wpm v2 21/10/16 DW
			
			
			
		
		   
			
			//change a % width to some standard pixel width for new window
			if (typeof libchat_options.width == 'string' && libchat_options.width.indexOf('%') !== -1) {
				libchat_options.width = '400';
			}
				
		
		//only load a stylesheet if there was a custom one set
		if (libchat_options.css !== '') {
			if(document.createStyleSheet) {
				try { document.createStyleSheet(libchat_options.css); } catch (e) { }
			}
			else {
				var css_tag = document.createElement("link");
				css_tag.setAttribute("rel", "stylesheet");
				css_tag.setAttribute("type", "text/css");
				css_tag.setAttribute("href", libchat_options.css);
				(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(css_tag);
			}
		}			
		if (!libchat_options.color_border || libchat_options.color_border == '') { libchat_options.color_border = 'transparent'; }
		
					
			!function(a){a.fn.tabSlideOut=function(b){var c=a.extend({tabHandle:".lcs_chat_button",content_div:".lcs_load",speed:300,action:"click",tabLocation:"l",topPos:"200px",leftPos:"20px",fixedPosition:!0,positioning:"absolute",pathToTabImage:null,imageHeight:null,imageWidth:null,onLoadSlideOut:!1,buttonBGcolor:null},b||{});c.tabHandle=a(c.tabHandle),c.content_div=a(c.content_div);var d=this;c.positioning=c.fixedPosition===!0?"fixed":"absolute",!document.all||window.opera||window.XMLHttpRequest||(c.positioning="absolute"),null!=c.pathToTabImage&&c.tabHandle.css({background:"url("+c.pathToTabImage+") "+c.buttonBGcolor+" no-repeat",width:c.imageWidth,height:c.imageHeight,textIndent:"-99999px"}),c.tabHandle.css({display:"block",outline:"none",position:"absolute"}),d.css({"line-height":"1",position:c.positioning});var e={containerWidth:parseInt(d.outerWidth(),10)+"px",containerHeight:parseInt(d.outerHeight(),10)+"px",tabWidth:parseInt(c.tabHandle.outerWidth(),10)+"px",tabHeight:parseInt(c.tabHandle.outerHeight(),10)+"px"};("t"===c.tabLocation||"b"===c.tabLocation)&&(d.css({left:c.leftPos}),c.tabHandle.css({right:0})),"t"===c.tabLocation&&(d.css({top:"-"+e.containerHeight}),c.tabHandle.css({bottom:"-"+e.tabHeight})),"b"===c.tabLocation&&(d.css({bottom:"-"+e.containerHeight,position:"fixed"}),c.tabHandle.css({top:"-"+e.tabHeight})),("l"===c.tabLocation||"r"===c.tabLocation)&&d.css({height:e.containerHeight,top:c.topPos}),"l"===c.tabLocation&&(d.css({left:"-"+e.containerWidth}),c.tabHandle.css({right:"-"+e.tabWidth}),c.tabHandle.css(null!=c.pathToTabImage?{top:0}:{top:e.tabWidth})),"r"===c.tabLocation&&(d.css({right:"-"+e.containerWidth}),null!=c.pathToTabImage&&c.tabHandle.css({left:"-"+e.tabWidth}),c.tabHandle.css({top:0}),a("html").css("overflow-x","hidden")),c.tabHandle.click(function(a){a.preventDefault()});var f=function(){"t"===c.tabLocation?d.animate({top:"-"+e.containerHeight},c.speed).removeClass("open"):"l"===c.tabLocation?d.animate({left:"-"+e.containerWidth},c.speed).removeClass("open"):"r"===c.tabLocation?d.animate({right:"-"+e.containerWidth},c.speed).removeClass("open"):"b"===c.tabLocation&&d.animate({bottom:"-"+e.containerHeight},c.speed).removeClass("open"),c.content_div.attr("aria-hidden",!0)},g=function(){"t"==c.tabLocation?d.animate({top:"-3px"},c.speed).addClass("open"):"l"==c.tabLocation?d.animate({left:"-3px"},c.speed).addClass("open"):"r"==c.tabLocation?d.animate({right:"-3px"},c.speed).addClass("open"):"b"==c.tabLocation&&d.animate({bottom:"-3px"},c.speed).addClass("open"),c.content_div.attr("aria-hidden",!1)};c.tabHandle.click(function(){d.hasClass("open")?f():g()}),d.on("tabslideout.toggle",function(){d.hasClass("open")?f():g()})}}(springSpace.jq);
			
			chat_div = springSpace.jq('<div class="lcs_slide_out"></div>').css({
				'width': libchat_options.width,
				'height': '70px',
				'border': '1px solid '+libchat_options.color_border,
				'background-color': libchat_options.color_backg,
				'box-shadow': '0 0 5px #ccc',
				'z-index': '100'
			}).attr('title', "Click to open chat window"); // @todo make this customizable
						
			chat_button = springSpace.jq('<a class="lcs_chat_button" href="#"></a>');			
			chat_load = springSpace.jq('<div class="lcs_load" aria-hidden="true"></div>');
			
			chat_div.append(chat_button);
			chat_div.append(chat_load);
			springSpace.jq('body').append(chat_div);
			
			if (libchat_options.slidebutton_url && libchat_options.slidebutton_url !== '') {
				chat_div.tabSlideOut({
					pathToTabImage: libchat_options.slidebutton_url, 
					imageHeight: libchat_options.slidebutton_height,
					imageWidth: libchat_options.slidebutton_width,
					tabLocation: libchat_options.slidebutton_position,
					topPos: libchat_options.button_top,
					leftPos: libchat_options.button_posLeft,
					buttonBGcolor: libchat_options.slidebutton_bcolor
				});
				chat_button.text(libchat_options.slidebutton_text);
			} else {
				if (!libchat_options.slidebutton_color) { libchat_options.slidebutton_color = '#ffffff'; }
				var chat_button_span = springSpace.jq('<span></span>').html(libchat_options.slidebutton_text).css({ padding: '10px', display: 'block', borderStyle: 'solid', borderColor: libchat_options.slidebutton_color, color: libchat_options.slidebutton_color, backgroundColor: 'transparent', margin: '1px' });
				if ((libchat_options.slidebutton_position == 'b')) {
					chat_button.css({ backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
					chat_button_span.css({ borderWidth: '4px 4px 0px 4px',  });
				} else {
					var rotate = (libchat_options.slidebutton_position == 'l') ? '270deg' : '-270deg';
					chat_button.css({ transformOrigin: 'top left', transform: 'rotate('+rotate+')', backgroundColor: libchat_options.slidebutton_bcolor, textDecoration: 'none', boxShadow: 'rgb(204, 204, 204) 0px 0px 5px' });
					chat_button_span.css({ borderWidth: '0px 4px 4px 4px',  });
				}
				chat_button.append(chat_button_span);
				chat_div.tabSlideOut({
					tabLocation: libchat_options.slidebutton_position,
				});
			}
			
			chat_button.on('click', function(e) {
				window.clearTimeout(chat_timer);
				if(chat_div.hasClass('open')){
					checkStatus();
				} else {
					// window is closing
					chat_div.css({'width': libchat_options.width, 'height': '70px' }).attr('title', "Click to open chat window");
				}
				return true;
			});
			
			//timer
			if (libchat_options.autoload_time && parseInt(libchat_options.autoload_time,10) > 0) {
				chat_timer = window.setTimeout(function(){ chat_self_triggered = true; checkStatus(); }, parseInt(libchat_options.autoload_time, 10) * 1000);
			}
			
					
			}); //end docready
	}//end main

	function showChat(online){
		var qs = window.location.protocol+'//'+libchat_options.base_domain+'/chati.php?';
		qs += "iid=" + libchat_options.iid + 
			 "&hash=" + libchat_options.hash;

		if (typeof libchat_options['template'] !== 'undefined') {
			qs += "&template="+encodeURIComponent(libchat_options['template']);
		}
		
		if (typeof libchat_options['template_css'] !== 'undefined') {
			qs += "&template_css="+encodeURIComponent(libchat_options['template_css']);
		}		
		qs += "&online="+online;
		
		try {
			if ( typeof libchat_options.width === 'string' && libchat_options.width.indexOf("%") == -1 )
				libchat_options.width = parseInt(libchat_options.width,10);
		} catch(e){}

		try {
			if ( typeof libchat_options.height === 'string' && libchat_options.height.indexOf("%") == -1 )
				libchat_options.height = parseInt(libchat_options.height,10);
		} catch(e){}
		
		if (window.document.title) {
			qs += '&referer_title='+encodeURIComponent(window.document.title);
		}
		
						//slideout
				if (online === false && chat_self_triggered === true) { chat_self_triggered = false; return; }
				else if (chat_self_triggered === true) {
					chat_div.trigger('tabslideout.toggle'); chat_self_triggered = false; qs += '&auto=true';
					chat_load.attr('aria-live', 'polite');
					springSpace.jq(window).on('message', function(e){
						var data = e.originalEvent.data;
						if (data == 'closewidget') {
							chat_button.trigger('click');
							chat_load.removeAttr('aria-live');
						} else if (data == 'chatstarted') {
							chat_load.removeAttr('aria-live');
						}
					});
				}
				
				chat_div.css({'width':libchat_options.width, 'height': libchat_options.height });
				
				var $iframe = springSpace.jq('<iframe></iframe>').attr({ 'id': 'iframe_'+libchat_options.hash, 'name': 'iframe_'+libchat_options.hash, 'title': 'Chat widget', 'src': qs, 'frameborder': 0, 'scrolling': 'no' }).css({ 'border': 'none', boxSizing: 'border-box', 'width': '100%', 'height': libchat_options.height });
				chat_load.html($iframe).show();
				
						
		
	}//end showchat

})(); //end anonymous function





//START GOOGLE ANALYTICS
	//THIS IS SPECIFIC TO STAGING NEW UI - DO NOT COPY TO PRODUCTION

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85166952-1', 'auto');
  ga('send', 'pageview');



//END GOOGLE ANALYTICS 

main();
