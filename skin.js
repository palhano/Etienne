// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: simplex_cell.ggsk
// Generated sáb 15. fev 17:36:11 2014

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId='controller';
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-145 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -145px;';
		hs+='top:  -65px;';
		hs+='width: 331px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId='up';
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId='down';
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId='left';
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId='right';
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId='zoomin';
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'images/zoomin__o.png';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'images/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin.ggId='tt_zoomin';
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -59px;';
		hs+='top:  35px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		this._tt_zoomin.innerHTML="Ampliar";
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white.ggId='tt_zoomin_white';
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white.setAttribute('style',hs);
		this._tt_zoomin_white.innerHTML="Ampliar";
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId='zoomout';
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'images/zoomout__o.png';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'images/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout.ggId='tt_zoomout';
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  35px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		this._tt_zoomout.innerHTML="Reduzir";
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white.ggId='tt_zoomout_white';
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white.setAttribute('style',hs);
		this._tt_zoomout_white.innerHTML="Reduzir";
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId='fullscreen';
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 232px;';
		hs+='top:  11px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen.ggId='tt_fullscreen';
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  34px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		this._tt_fullscreen.innerHTML="Tela Cheia";
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white.ggId='tt_fullscreen_white';
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		this._tt_fullscreen_white.innerHTML="Tela Cheia";
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this._button_home=document.createElement('div');
		this._button_home.ggId='button_home';
		this._button_home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_home.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 198px;';
		hs+='top:  11px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_home.setAttribute('style',hs);
		this._button_home__img=document.createElement('img');
		this._button_home__img.setAttribute('src',basePath + 'images/button_home.png');
		this._button_home__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_home.appendChild(this._button_home__img);
		this._button_home.onclick=function () {
			me.player.openNext("{node1}","");
		}
		this._button_home.onmouseover=function () {
			me._tt_home.style[domTransition]='none';
			me._tt_home.style.visibility='inherit';
			me._tt_home.ggVisible=true;
			me._button_home__img.src=basePath + 'images/button_home__o.png';
		}
		this._button_home.onmouseout=function () {
			me._tt_home.style[domTransition]='none';
			me._tt_home.style.visibility='hidden';
			me._tt_home.ggVisible=false;
			me._button_home__img.src=basePath + 'images/button_home.png';
		}
		this._tt_home=document.createElement('div');
		this._tt_home.ggId='tt_home';
		this._tt_home.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_home.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -69px;';
		hs+='top:  34px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_home.setAttribute('style',hs);
		this._tt_home.innerHTML="Inicio";
		this._tt_home_white=document.createElement('div');
		this._tt_home_white.ggId='tt_home_white';
		this._tt_home_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_home_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_home_white.setAttribute('style',hs);
		this._tt_home_white.innerHTML="Inicio";
		this._tt_home.appendChild(this._tt_home_white);
		this._button_home.appendChild(this._tt_home);
		this._controller.appendChild(this._button_home);
		this._button_map=document.createElement('div');
		this._button_map.ggId='button_map';
		this._button_map.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_map.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 268px;';
		hs+='top:  11px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_map.setAttribute('style',hs);
		this._button_map__img=document.createElement('img');
		this._button_map__img.setAttribute('src',basePath + 'images/button_map.png');
		this._button_map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._button_map.appendChild(this._button_map__img);
		this._button_map.onclick=function () {
			flag=(me._maps.style.visibility=='hidden');
			me._maps.style[domTransition]='none';
			me._maps.style.visibility=flag?'inherit':'hidden';
			me._maps.ggVisible=flag;
		}
		this._button_map.onmouseover=function () {
			me._tt_planta.style[domTransition]='none';
			me._tt_planta.style.visibility='inherit';
			me._tt_planta.ggVisible=true;
			me._button_map__img.src=basePath + 'images/button_map__o.png';
		}
		this._button_map.onmouseout=function () {
			me._tt_planta.style[domTransition]='none';
			me._tt_planta.style.visibility='hidden';
			me._tt_planta.ggVisible=false;
			me._button_map__img.src=basePath + 'images/button_map.png';
		}
		this._tt_planta=document.createElement('div');
		this._tt_planta.ggId='tt_planta';
		this._tt_planta.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_planta.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -61px;';
		hs+='top:  34px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_planta.setAttribute('style',hs);
		this._tt_planta.innerHTML="Planta";
		this._tt_planta_white=document.createElement('div');
		this._tt_planta_white.ggId='tt_planta_white';
		this._tt_planta_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_planta_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_planta_white.setAttribute('style',hs);
		this._tt_planta_white.innerHTML="Planta";
		this._tt_planta.appendChild(this._tt_planta_white);
		this._button_map.appendChild(this._tt_planta);
		this._controller.appendChild(this._button_map);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId='autorotate';
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 161px;';
		hs+='top:  11px;';
		hs+='width: 33px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 33px;height: 32px;');
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.png';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate.ggId='tt_autorotate';
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -67px;';
		hs+='top:  34px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		this._tt_autorotate.innerHTML="Rodar";
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white.ggId='tt_autorotate_white';
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white.setAttribute('style',hs);
		this._tt_autorotate_white.innerHTML="Rodar";
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId='loading';
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-105 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-30 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -105px;';
		hs+='top:  -30px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading.setAttribute('style',hs);
		this._loading.onclick=function () {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId='loadingbg';
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingbrd=document.createElement('div');
		this._loadingbrd.ggId='loadingbrd';
		this._loadingbrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbrd.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbrd);
		this._loadingtext=document.createElement('div');
		this._loadingtext.ggId='loadingtext';
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  12px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			this.innerHTML="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
		}
		this._loadingtext.ggUpdateText();
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId='loadingbar';
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  35px;';
		hs+='width: 181px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-color: #ffffff;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._userdata=document.createElement('div');
		this._userdata.ggId='userdata';
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-120 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-80 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -80px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdata.onclick=function () {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId='userdatabg';
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._title=document.createElement('div');
		this._title.ggId='title';
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			this.innerHTML="<b>"+me.player.userdata.title+"<\/b>";
		}
		this._title.ggUpdateText();
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description.ggId='description';
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  29px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.description;
		}
		this._description.ggUpdateText();
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author.ggId='author';
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.author;
		}
		this._author.ggUpdateText();
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime.ggId='datetime';
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.datetime;
		}
		this._datetime.ggUpdateText();
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright.ggId='copyright';
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  104px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			this.innerHTML="&#169; "+me.player.userdata.copyright;
		}
		this._copyright.ggUpdateText();
		this._userdata.appendChild(this._copyright);
		this.divSkin.appendChild(this._userdata);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId='hide_template';
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId='markertemplate';
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='inherit';
			me._marker_title8.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title8.style[domTransition]='none';
			me._marker_title8.style.visibility='hidden';
			me._marker_title8.ggVisible=false;
		}
		this._marker_title8=document.createElement('div');
		this._marker_title8.ggId='marker_title';
		this._marker_title8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title8.ggVisible=false;
		this._marker_title8.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title8.setAttribute('style',hs);
		this._marker_title8.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.title;
		this.ggUpdatePosition();
		}
		this._marker_title8.ggUpdateText();
		this._markertemplate.appendChild(this._marker_title8);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId='marker_active';
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.png');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;');
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId='marker_normal';
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.png');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;');
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._maps=document.createElement('div');
		this._maps.ggId='Maps';
		this._maps.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._maps.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 404px;';
		hs+='height: 337px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._maps.setAttribute('style',hs);
		this._map_tipo=document.createElement('div');
		this._map_tipo.ggId='map_tipo';
		this._map_tipo.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7 };
		this._map_tipo.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 400px;';
		hs+='height: 332px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_tipo.ggParameter) + ';';
		hs+='opacity: 0.9;';
		hs+='visibility: hidden;';
		this._map_tipo.setAttribute('style',hs);
		this._map_tipo__img=document.createElement('img');
		this._map_tipo__img.setAttribute('src',basePath + 'images/map_tipo.png');
		this._map_tipo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._map_tipo__img);
		this._map_tipo.appendChild(this._map_tipo__img);
		this._marker_node8=document.createElement('div');
		this._marker_node8.ggId='marker_node8';
		this._marker_node8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node8.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 91px;';
		hs+='top:  239px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node8.setAttribute('style',hs);
		this._marker_node8.ggMarkerNodeId='{node8}';
		nodeMarker.push(this._marker_node8);
		this._marker_node8.onclick=function () {
			me.player.openNext('{node8}');
		}
		this._marker_node8.onmouseover=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='inherit';
			me._marker_title7.ggVisible=true;
		}
		this._marker_node8.onmouseout=function () {
			me._marker_title7.style[domTransition]='none';
			me._marker_title7.style.visibility='hidden';
			me._marker_title7.ggVisible=false;
		}
		this._marker_title7=document.createElement('div');
		this._marker_title7.ggId='marker_title';
		this._marker_title7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title7.ggVisible=false;
		this._marker_title7.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title7.setAttribute('style',hs);
		this._marker_title7.innerHTML="Quarto";
		this._marker_node8.appendChild(this._marker_title7);
		this._map_tipo.appendChild(this._marker_node8);
		this._marker_node10=document.createElement('div');
		this._marker_node10.ggId='marker_node10';
		this._marker_node10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node10.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 30px;';
		hs+='top:  152px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node10.setAttribute('style',hs);
		this._marker_node10.ggMarkerNodeId='{node10}';
		nodeMarker.push(this._marker_node10);
		this._marker_node10.onclick=function () {
			me.player.openNext('{node10}');
		}
		this._marker_node10.onmouseover=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='inherit';
			me._marker_title6.ggVisible=true;
		}
		this._marker_node10.onmouseout=function () {
			me._marker_title6.style[domTransition]='none';
			me._marker_title6.style.visibility='hidden';
			me._marker_title6.ggVisible=false;
		}
		this._marker_title6=document.createElement('div');
		this._marker_title6.ggId='marker_title';
		this._marker_title6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title6.ggVisible=false;
		this._marker_title6.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title6.setAttribute('style',hs);
		this._marker_title6.innerHTML="Banho Suite";
		this._marker_node10.appendChild(this._marker_title6);
		this._map_tipo.appendChild(this._marker_node10);
		this._marker_node1=document.createElement('div');
		this._marker_node1.ggId='marker_node1';
		this._marker_node1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node1.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 287px;';
		hs+='top:  234px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node1.setAttribute('style',hs);
		this._marker_node1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_node1);
		this._marker_node1.onclick=function () {
			me.player.openNext('{node1}');
		}
		this._marker_node1.onmouseover=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='inherit';
			me._marker_title5.ggVisible=true;
		}
		this._marker_node1.onmouseout=function () {
			me._marker_title5.style[domTransition]='none';
			me._marker_title5.style.visibility='hidden';
			me._marker_title5.ggVisible=false;
		}
		this._marker_title5=document.createElement('div');
		this._marker_title5.ggId='marker_title';
		this._marker_title5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title5.ggVisible=false;
		this._marker_title5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title5.setAttribute('style',hs);
		this._marker_title5.innerHTML="Jantar";
		this._marker_node1.appendChild(this._marker_title5);
		this._map_tipo.appendChild(this._marker_node1);
		this._marker_node3=document.createElement('div');
		this._marker_node3.ggId='marker_node3';
		this._marker_node3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node3.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 278px;';
		hs+='top:  93px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node3.setAttribute('style',hs);
		this._marker_node3.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._marker_node3);
		this._marker_node3.onclick=function () {
			me.player.openNext('{node3}');
		}
		this._marker_node3.onmouseover=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='inherit';
			me._marker_title4.ggVisible=true;
		}
		this._marker_node3.onmouseout=function () {
			me._marker_title4.style[domTransition]='none';
			me._marker_title4.style.visibility='hidden';
			me._marker_title4.ggVisible=false;
		}
		this._marker_title4=document.createElement('div');
		this._marker_title4.ggId='marker_title';
		this._marker_title4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title4.ggVisible=false;
		this._marker_title4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title4.setAttribute('style',hs);
		this._marker_title4.innerHTML="Estar";
		this._marker_node3.appendChild(this._marker_title4);
		this._map_tipo.appendChild(this._marker_node3);
		this._marker_node9=document.createElement('div');
		this._marker_node9.ggId='marker_node9';
		this._marker_node9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node9.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 308px;';
		hs+='top:  185px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node9.setAttribute('style',hs);
		this._marker_node9.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._marker_node9);
		this._marker_node9.onclick=function () {
			me.player.openNext('{node9}');
		}
		this._marker_node9.onmouseover=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='inherit';
			me._marker_title3.ggVisible=true;
		}
		this._marker_node9.onmouseout=function () {
			me._marker_title3.style[domTransition]='none';
			me._marker_title3.style.visibility='hidden';
			me._marker_title3.ggVisible=false;
		}
		this._marker_title3=document.createElement('div');
		this._marker_title3.ggId='marker_title';
		this._marker_title3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title3.ggVisible=false;
		this._marker_title3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title3.setAttribute('style',hs);
		this._marker_title3.innerHTML="Cozinha";
		this._marker_node9.appendChild(this._marker_title3);
		this._map_tipo.appendChild(this._marker_node9);
		this._marker_node6=document.createElement('div');
		this._marker_node6.ggId='marker_node6';
		this._marker_node6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node6.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 85px;';
		hs+='top:  96px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node6.setAttribute('style',hs);
		this._marker_node6.ggMarkerNodeId='{node6}';
		nodeMarker.push(this._marker_node6);
		this._marker_node6.onclick=function () {
			me.player.openNext('{node6}');
		}
		this._marker_node6.onmouseover=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='inherit';
			me._marker_title2.ggVisible=true;
		}
		this._marker_node6.onmouseout=function () {
			me._marker_title2.style[domTransition]='none';
			me._marker_title2.style.visibility='hidden';
			me._marker_title2.ggVisible=false;
		}
		this._marker_title2=document.createElement('div');
		this._marker_title2.ggId='marker_title';
		this._marker_title2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title2.ggVisible=false;
		this._marker_title2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title2.setAttribute('style',hs);
		this._marker_title2.innerHTML="Suite Closet";
		this._marker_node6.appendChild(this._marker_title2);
		this._map_tipo.appendChild(this._marker_node6);
		this._marker_node5=document.createElement('div');
		this._marker_node5.ggId='marker_node5';
		this._marker_node5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node5.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 91px;';
		hs+='top:  23px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node5.setAttribute('style',hs);
		this._marker_node5.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._marker_node5);
		this._marker_node5.onclick=function () {
			me.player.openNext('{node5}');
		}
		this._marker_node5.onmouseover=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='inherit';
			me._marker_title1.ggVisible=true;
		}
		this._marker_node5.onmouseout=function () {
			me._marker_title1.style[domTransition]='none';
			me._marker_title1.style.visibility='hidden';
			me._marker_title1.ggVisible=false;
		}
		this._marker_title1=document.createElement('div');
		this._marker_title1.ggId='marker_title';
		this._marker_title1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title1.ggVisible=false;
		this._marker_title1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title1.setAttribute('style',hs);
		this._marker_title1.innerHTML="Suite";
		this._marker_node5.appendChild(this._marker_title1);
		this._map_tipo.appendChild(this._marker_node5);
		this._marker_node7=document.createElement('div');
		this._marker_node7.ggId='marker_node7';
		this._marker_node7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node7.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 177px;';
		hs+='top:  81px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node7.setAttribute('style',hs);
		this._marker_node7.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_node7);
		this._marker_node7.onclick=function () {
			me.player.openNext('{node7}');
		}
		this._marker_node7.onmouseover=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='inherit';
			me._marker_title0.ggVisible=true;
		}
		this._marker_node7.onmouseout=function () {
			me._marker_title0.style[domTransition]='none';
			me._marker_title0.style.visibility='hidden';
			me._marker_title0.ggVisible=false;
		}
		this._marker_title0=document.createElement('div');
		this._marker_title0.ggId='marker_title';
		this._marker_title0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title0.ggVisible=false;
		this._marker_title0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title0.setAttribute('style',hs);
		this._marker_title0.innerHTML="Quarto";
		this._marker_node7.appendChild(this._marker_title0);
		this._map_tipo.appendChild(this._marker_node7);
		this._marker_node20=document.createElement('div');
		this._marker_node20.ggId='marker_node20';
		this._marker_node20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_node20.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 180px;';
		hs+='top:  242px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_node20.setAttribute('style',hs);
		this._marker_node20.ggMarkerNodeId='{node20}';
		nodeMarker.push(this._marker_node20);
		this._marker_node20.onclick=function () {
			me.player.openNext('{node20}');
		}
		this._marker_node20.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._marker_node20.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title.ggId='marker_title';
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.left=(-60 + (151-this.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='background-image:url(images/alpha_background_ffffff_180.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title.setAttribute('style',hs);
		this._marker_title.innerHTML="WC Social";
		this._marker_node20.appendChild(this._marker_title);
		this._map_tipo.appendChild(this._marker_node20);
		this._maps.appendChild(this._map_tipo);
		this._marker_46=document.createElement('div');
		this._marker_46.ggId='Marker 46';
		this._marker_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_46.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 740px;';
		hs+='top:  187px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_46.setAttribute('style',hs);
		this._marker_46.ggMarkerNodeId='apto';
		nodeMarker.push(this._marker_46);
		this._marker_46.onclick=function () {
			me.player.openNext('apto');
		}
		this._marker_46.ggActivate=function () {
			me._map_tipo.style[domTransition]='none';
			me._map_tipo.style.visibility='inherit';
			me._map_tipo.ggVisible=true;
		}
		this._marker_46.ggDeactivate=function () {
			me._map_tipo.style[domTransition]='none';
			me._map_tipo.style.visibility='hidden';
			me._map_tipo.ggVisible=false;
		}
		this._maps.appendChild(this._marker_46);
		this._marker_47=document.createElement('div');
		this._marker_47.ggId='Marker 47';
		this._marker_47.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_47.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 740px;';
		hs+='top:  187px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_47.setAttribute('style',hs);
		this._marker_47.ggMarkerNodeId='terreo';
		nodeMarker.push(this._marker_47);
		this._marker_47.onclick=function () {
			me.player.openNext('terreo');
		}
		this._maps.appendChild(this._marker_47);
		this.divSkin.appendChild(this._maps);
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this._marker_node8__normal=this._marker_normal.cloneNode(true);
		this._marker_node8__normal.style.visibility='inherit';
		this._marker_node8__normal.style.left=0;
		this._marker_node8__normal.style.top=0;
		this._marker_node8.ggMarkerNormal=this._marker_node8__normal;
		this._marker_node8__active=this._marker_active.cloneNode(true);
		this._marker_node8__active.style.visibility='hidden';
		this._marker_node8__active.style.left=0;
		this._marker_node8__active.style.top=0;
		this._marker_node8.ggMarkerActive=this._marker_node8__active;
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__active,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__active);
		}
		if (this._marker_node8.firstChild) {
			this._marker_node8.insertBefore(this._marker_node8__normal,this._marker_node8.firstChild);
		} else {
			this._marker_node8.appendChild(this._marker_node8__normal);
		}
		this._marker_node10__normal=this._marker_normal.cloneNode(true);
		this._marker_node10__normal.style.visibility='inherit';
		this._marker_node10__normal.style.left=0;
		this._marker_node10__normal.style.top=0;
		this._marker_node10.ggMarkerNormal=this._marker_node10__normal;
		this._marker_node10__active=this._marker_active.cloneNode(true);
		this._marker_node10__active.style.visibility='hidden';
		this._marker_node10__active.style.left=0;
		this._marker_node10__active.style.top=0;
		this._marker_node10.ggMarkerActive=this._marker_node10__active;
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__active,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__active);
		}
		if (this._marker_node10.firstChild) {
			this._marker_node10.insertBefore(this._marker_node10__normal,this._marker_node10.firstChild);
		} else {
			this._marker_node10.appendChild(this._marker_node10__normal);
		}
		this._marker_node1__normal=this._marker_normal.cloneNode(true);
		this._marker_node1__normal.style.visibility='inherit';
		this._marker_node1__normal.style.left=0;
		this._marker_node1__normal.style.top=0;
		this._marker_node1.ggMarkerNormal=this._marker_node1__normal;
		this._marker_node1__active=this._marker_active.cloneNode(true);
		this._marker_node1__active.style.visibility='hidden';
		this._marker_node1__active.style.left=0;
		this._marker_node1__active.style.top=0;
		this._marker_node1.ggMarkerActive=this._marker_node1__active;
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__active,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__active);
		}
		if (this._marker_node1.firstChild) {
			this._marker_node1.insertBefore(this._marker_node1__normal,this._marker_node1.firstChild);
		} else {
			this._marker_node1.appendChild(this._marker_node1__normal);
		}
		this._marker_node3__normal=this._marker_normal.cloneNode(true);
		this._marker_node3__normal.style.visibility='inherit';
		this._marker_node3__normal.style.left=0;
		this._marker_node3__normal.style.top=0;
		this._marker_node3.ggMarkerNormal=this._marker_node3__normal;
		this._marker_node3__active=this._marker_active.cloneNode(true);
		this._marker_node3__active.style.visibility='hidden';
		this._marker_node3__active.style.left=0;
		this._marker_node3__active.style.top=0;
		this._marker_node3.ggMarkerActive=this._marker_node3__active;
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__active,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__active);
		}
		if (this._marker_node3.firstChild) {
			this._marker_node3.insertBefore(this._marker_node3__normal,this._marker_node3.firstChild);
		} else {
			this._marker_node3.appendChild(this._marker_node3__normal);
		}
		this._marker_node9__normal=this._marker_normal.cloneNode(true);
		this._marker_node9__normal.style.visibility='inherit';
		this._marker_node9__normal.style.left=0;
		this._marker_node9__normal.style.top=0;
		this._marker_node9.ggMarkerNormal=this._marker_node9__normal;
		this._marker_node9__active=this._marker_active.cloneNode(true);
		this._marker_node9__active.style.visibility='hidden';
		this._marker_node9__active.style.left=0;
		this._marker_node9__active.style.top=0;
		this._marker_node9.ggMarkerActive=this._marker_node9__active;
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__active,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__active);
		}
		if (this._marker_node9.firstChild) {
			this._marker_node9.insertBefore(this._marker_node9__normal,this._marker_node9.firstChild);
		} else {
			this._marker_node9.appendChild(this._marker_node9__normal);
		}
		this._marker_node6__normal=this._marker_normal.cloneNode(true);
		this._marker_node6__normal.style.visibility='inherit';
		this._marker_node6__normal.style.left=0;
		this._marker_node6__normal.style.top=0;
		this._marker_node6.ggMarkerNormal=this._marker_node6__normal;
		this._marker_node6__active=this._marker_active.cloneNode(true);
		this._marker_node6__active.style.visibility='hidden';
		this._marker_node6__active.style.left=0;
		this._marker_node6__active.style.top=0;
		this._marker_node6.ggMarkerActive=this._marker_node6__active;
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__active,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__active);
		}
		if (this._marker_node6.firstChild) {
			this._marker_node6.insertBefore(this._marker_node6__normal,this._marker_node6.firstChild);
		} else {
			this._marker_node6.appendChild(this._marker_node6__normal);
		}
		this._marker_node5__normal=this._marker_normal.cloneNode(true);
		this._marker_node5__normal.style.visibility='inherit';
		this._marker_node5__normal.style.left=0;
		this._marker_node5__normal.style.top=0;
		this._marker_node5.ggMarkerNormal=this._marker_node5__normal;
		this._marker_node5__active=this._marker_active.cloneNode(true);
		this._marker_node5__active.style.visibility='hidden';
		this._marker_node5__active.style.left=0;
		this._marker_node5__active.style.top=0;
		this._marker_node5.ggMarkerActive=this._marker_node5__active;
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__active,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__active);
		}
		if (this._marker_node5.firstChild) {
			this._marker_node5.insertBefore(this._marker_node5__normal,this._marker_node5.firstChild);
		} else {
			this._marker_node5.appendChild(this._marker_node5__normal);
		}
		this._marker_node7__normal=this._marker_normal.cloneNode(true);
		this._marker_node7__normal.style.visibility='inherit';
		this._marker_node7__normal.style.left=0;
		this._marker_node7__normal.style.top=0;
		this._marker_node7.ggMarkerNormal=this._marker_node7__normal;
		this._marker_node7__active=this._marker_active.cloneNode(true);
		this._marker_node7__active.style.visibility='hidden';
		this._marker_node7__active.style.left=0;
		this._marker_node7__active.style.top=0;
		this._marker_node7.ggMarkerActive=this._marker_node7__active;
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__active,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__active);
		}
		if (this._marker_node7.firstChild) {
			this._marker_node7.insertBefore(this._marker_node7__normal,this._marker_node7.firstChild);
		} else {
			this._marker_node7.appendChild(this._marker_node7__normal);
		}
		this._marker_node20__normal=this._marker_normal.cloneNode(true);
		this._marker_node20__normal.style.visibility='inherit';
		this._marker_node20__normal.style.left=0;
		this._marker_node20__normal.style.top=0;
		this._marker_node20.ggMarkerNormal=this._marker_node20__normal;
		this._marker_node20__active=this._marker_active.cloneNode(true);
		this._marker_node20__active.style.visibility='hidden';
		this._marker_node20__active.style.left=0;
		this._marker_node20__active.style.top=0;
		this._marker_node20.ggMarkerActive=this._marker_node20__active;
		if (this._marker_node20.firstChild) {
			this._marker_node20.insertBefore(this._marker_node20__active,this._marker_node20.firstChild);
		} else {
			this._marker_node20.appendChild(this._marker_node20__active);
		}
		if (this._marker_node20.firstChild) {
			this._marker_node20.insertBefore(this._marker_node20__normal,this._marker_node20.firstChild);
		} else {
			this._marker_node20.appendChild(this._marker_node20__normal);
		}
		this._marker_46.ggMarkerNormal=null;
		this._marker_46.ggMarkerActive=null;
		this._marker_47.ggMarkerNormal=null;
		this._marker_47.ggMarkerActive=null;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='inherit';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTilt(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTilt(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePan(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePan(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._title.ggUpdateText();
		this._description.ggUpdateText();
		this._author.ggUpdateText();
		this._datetime.ggUpdateText();
		this._copyright.ggUpdateText();
		this._marker_title8.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 350px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId='hsimage';
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext.ggId='hstext';
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='background-image:url(images/alpha_background_ffffff_180.png);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext.setAttribute('style',hs);
			this._hstext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};