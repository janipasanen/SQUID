			$(document).ready(function(){
				$(".info-icon").click(function(){
					$(".info-icon").removeClass("on");
  					$(this).toggleClass("on");
					$('.wrapper-dropdown-3').removeClass('active');
				});
			});

			function DropDown(el) {
				this.dd = el;
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
		
			DropDown.prototype = {
				initEvents : function() {
					this.dd.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}
			$(function() {
				var dd = new DropDown( $('.dd') );
				$(document).click(function() {
					$(".info-icon").removeClass("on");
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});