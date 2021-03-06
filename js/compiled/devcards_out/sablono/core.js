// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23644__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23643 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__23643,(0),null);
var body = cljs.core.nthnext.call(null,vec__23643,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23645__i = 0, G__23645__a = new Array(arguments.length -  0);
while (G__23645__i < G__23645__a.length) {G__23645__a[G__23645__i] = arguments[G__23645__i + 0]; ++G__23645__i;}
  args = new cljs.core.IndexedSeq(G__23645__a,0);
} 
return G__23644__delegate.call(this,args);};
G__23644.cljs$lang$maxFixedArity = 0;
G__23644.cljs$lang$applyTo = (function (arglist__23646){
var args = cljs.core.seq(arglist__23646);
return G__23644__delegate(args);
});
G__23644.cljs$core$IFn$_invoke$arity$variadic = G__23644__delegate;
return G__23644;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17577__auto__ = (function sablono$core$update_arglists_$_iter__23651(s__23652){
return (new cljs.core.LazySeq(null,(function (){
var s__23652__$1 = s__23652;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23652__$1);
if(temp__4425__auto__){
var s__23652__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23652__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23652__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23654 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23653 = (0);
while(true){
if((i__23653 < size__17576__auto__)){
var args = cljs.core._nth.call(null,c__17575__auto__,i__23653);
cljs.core.chunk_append.call(null,b__23654,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23655 = (i__23653 + (1));
i__23653 = G__23655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23654),sablono$core$update_arglists_$_iter__23651.call(null,cljs.core.chunk_rest.call(null,s__23652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23654),null);
}
} else {
var args = cljs.core.first.call(null,s__23652__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23651.call(null,cljs.core.rest.call(null,s__23652__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23661 = arguments.length;
var i__17864__auto___23662 = (0);
while(true){
if((i__17864__auto___23662 < len__17863__auto___23661)){
args__17870__auto__.push((arguments[i__17864__auto___23662]));

var G__23663 = (i__17864__auto___23662 + (1));
i__17864__auto___23662 = G__23663;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17577__auto__ = (function sablono$core$iter__23657(s__23658){
return (new cljs.core.LazySeq(null,(function (){
var s__23658__$1 = s__23658;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23658__$1);
if(temp__4425__auto__){
var s__23658__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23658__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23658__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23660 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23659 = (0);
while(true){
if((i__23659 < size__17576__auto__)){
var style = cljs.core._nth.call(null,c__17575__auto__,i__23659);
cljs.core.chunk_append.call(null,b__23660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23664 = (i__23659 + (1));
i__23659 = G__23664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23660),sablono$core$iter__23657.call(null,cljs.core.chunk_rest.call(null,s__23658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23660),null);
}
} else {
var style = cljs.core.first.call(null,s__23658__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23657.call(null,cljs.core.rest.call(null,s__23658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq23656){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23656));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23665 = (function sablono$core$link_to23665(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23668 = arguments.length;
var i__17864__auto___23669 = (0);
while(true){
if((i__17864__auto___23669 < len__17863__auto___23668)){
args__17870__auto__.push((arguments[i__17864__auto___23669]));

var G__23670 = (i__17864__auto___23669 + (1));
i__17864__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.link_to23665.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.link_to23665.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23665.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23665.cljs$lang$applyTo = (function (seq23666){
var G__23667 = cljs.core.first.call(null,seq23666);
var seq23666__$1 = cljs.core.next.call(null,seq23666);
return sablono.core.link_to23665.cljs$core$IFn$_invoke$arity$variadic(G__23667,seq23666__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23665);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23671 = (function sablono$core$mail_to23671(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23676 = arguments.length;
var i__17864__auto___23677 = (0);
while(true){
if((i__17864__auto___23677 < len__17863__auto___23676)){
args__17870__auto__.push((arguments[i__17864__auto___23677]));

var G__23678 = (i__17864__auto___23677 + (1));
i__17864__auto___23677 = G__23678;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.mail_to23671.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.mail_to23671.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23674){
var vec__23675 = p__23674;
var content = cljs.core.nth.call(null,vec__23675,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16805__auto__ = content;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23671.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23671.cljs$lang$applyTo = (function (seq23672){
var G__23673 = cljs.core.first.call(null,seq23672);
var seq23672__$1 = cljs.core.next.call(null,seq23672);
return sablono.core.mail_to23671.cljs$core$IFn$_invoke$arity$variadic(G__23673,seq23672__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23671);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23679 = (function sablono$core$unordered_list23679(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17577__auto__ = (function sablono$core$unordered_list23679_$_iter__23684(s__23685){
return (new cljs.core.LazySeq(null,(function (){
var s__23685__$1 = s__23685;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23685__$1);
if(temp__4425__auto__){
var s__23685__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23685__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23685__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23687 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23686 = (0);
while(true){
if((i__23686 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__23686);
cljs.core.chunk_append.call(null,b__23687,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23688 = (i__23686 + (1));
i__23686 = G__23688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23687),sablono$core$unordered_list23679_$_iter__23684.call(null,cljs.core.chunk_rest.call(null,s__23685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23687),null);
}
} else {
var x = cljs.core.first.call(null,s__23685__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23679_$_iter__23684.call(null,cljs.core.rest.call(null,s__23685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23679);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23689 = (function sablono$core$ordered_list23689(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17577__auto__ = (function sablono$core$ordered_list23689_$_iter__23694(s__23695){
return (new cljs.core.LazySeq(null,(function (){
var s__23695__$1 = s__23695;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23695__$1);
if(temp__4425__auto__){
var s__23695__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23695__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23695__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23697 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23696 = (0);
while(true){
if((i__23696 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__23696);
cljs.core.chunk_append.call(null,b__23697,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23698 = (i__23696 + (1));
i__23696 = G__23698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23697),sablono$core$ordered_list23689_$_iter__23694.call(null,cljs.core.chunk_rest.call(null,s__23695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23697),null);
}
} else {
var x = cljs.core.first.call(null,s__23695__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23689_$_iter__23694.call(null,cljs.core.rest.call(null,s__23695__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23689);
/**
 * Create an image element.
 */
sablono.core.image23699 = (function sablono$core$image23699(var_args){
var args23700 = [];
var len__17863__auto___23703 = arguments.length;
var i__17864__auto___23704 = (0);
while(true){
if((i__17864__auto___23704 < len__17863__auto___23703)){
args23700.push((arguments[i__17864__auto___23704]));

var G__23705 = (i__17864__auto___23704 + (1));
i__17864__auto___23704 = G__23705;
continue;
} else {
}
break;
}

var G__23702 = args23700.length;
switch (G__23702) {
case 1:
return sablono.core.image23699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23700.length)].join('')));

}
});

sablono.core.image23699.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23699.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23699.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23699);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23707_SHARP_,p2__23708_SHARP_){
return [cljs.core.str(p1__23707_SHARP_),cljs.core.str("["),cljs.core.str(p2__23708_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23709_SHARP_,p2__23710_SHARP_){
return [cljs.core.str(p1__23709_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23710_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field23711 = (function sablono$core$color_field23711(var_args){
var args23712 = [];
var len__17863__auto___23779 = arguments.length;
var i__17864__auto___23780 = (0);
while(true){
if((i__17864__auto___23780 < len__17863__auto___23779)){
args23712.push((arguments[i__17864__auto___23780]));

var G__23781 = (i__17864__auto___23780 + (1));
i__17864__auto___23780 = G__23781;
continue;
} else {
}
break;
}

var G__23714 = args23712.length;
switch (G__23714) {
case 1:
return sablono.core.color_field23711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23712.length)].join('')));

}
});

sablono.core.color_field23711.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.color_field23711.call(null,name__23632__auto__,null);
});

sablono.core.color_field23711.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.color_field23711.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23711);

/**
 * Creates a date input field.
 */
sablono.core.date_field23715 = (function sablono$core$date_field23715(var_args){
var args23716 = [];
var len__17863__auto___23783 = arguments.length;
var i__17864__auto___23784 = (0);
while(true){
if((i__17864__auto___23784 < len__17863__auto___23783)){
args23716.push((arguments[i__17864__auto___23784]));

var G__23785 = (i__17864__auto___23784 + (1));
i__17864__auto___23784 = G__23785;
continue;
} else {
}
break;
}

var G__23718 = args23716.length;
switch (G__23718) {
case 1:
return sablono.core.date_field23715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23716.length)].join('')));

}
});

sablono.core.date_field23715.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.date_field23715.call(null,name__23632__auto__,null);
});

sablono.core.date_field23715.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.date_field23715.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23715);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23719 = (function sablono$core$datetime_field23719(var_args){
var args23720 = [];
var len__17863__auto___23787 = arguments.length;
var i__17864__auto___23788 = (0);
while(true){
if((i__17864__auto___23788 < len__17863__auto___23787)){
args23720.push((arguments[i__17864__auto___23788]));

var G__23789 = (i__17864__auto___23788 + (1));
i__17864__auto___23788 = G__23789;
continue;
} else {
}
break;
}

var G__23722 = args23720.length;
switch (G__23722) {
case 1:
return sablono.core.datetime_field23719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23720.length)].join('')));

}
});

sablono.core.datetime_field23719.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.datetime_field23719.call(null,name__23632__auto__,null);
});

sablono.core.datetime_field23719.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.datetime_field23719.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23719);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23723 = (function sablono$core$datetime_local_field23723(var_args){
var args23724 = [];
var len__17863__auto___23791 = arguments.length;
var i__17864__auto___23792 = (0);
while(true){
if((i__17864__auto___23792 < len__17863__auto___23791)){
args23724.push((arguments[i__17864__auto___23792]));

var G__23793 = (i__17864__auto___23792 + (1));
i__17864__auto___23792 = G__23793;
continue;
} else {
}
break;
}

var G__23726 = args23724.length;
switch (G__23726) {
case 1:
return sablono.core.datetime_local_field23723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23724.length)].join('')));

}
});

sablono.core.datetime_local_field23723.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.datetime_local_field23723.call(null,name__23632__auto__,null);
});

sablono.core.datetime_local_field23723.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.datetime_local_field23723.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23723);

/**
 * Creates a email input field.
 */
sablono.core.email_field23727 = (function sablono$core$email_field23727(var_args){
var args23728 = [];
var len__17863__auto___23795 = arguments.length;
var i__17864__auto___23796 = (0);
while(true){
if((i__17864__auto___23796 < len__17863__auto___23795)){
args23728.push((arguments[i__17864__auto___23796]));

var G__23797 = (i__17864__auto___23796 + (1));
i__17864__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var G__23730 = args23728.length;
switch (G__23730) {
case 1:
return sablono.core.email_field23727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23728.length)].join('')));

}
});

sablono.core.email_field23727.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.email_field23727.call(null,name__23632__auto__,null);
});

sablono.core.email_field23727.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.email_field23727.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23727);

/**
 * Creates a file input field.
 */
sablono.core.file_field23731 = (function sablono$core$file_field23731(var_args){
var args23732 = [];
var len__17863__auto___23799 = arguments.length;
var i__17864__auto___23800 = (0);
while(true){
if((i__17864__auto___23800 < len__17863__auto___23799)){
args23732.push((arguments[i__17864__auto___23800]));

var G__23801 = (i__17864__auto___23800 + (1));
i__17864__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var G__23734 = args23732.length;
switch (G__23734) {
case 1:
return sablono.core.file_field23731.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23732.length)].join('')));

}
});

sablono.core.file_field23731.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.file_field23731.call(null,name__23632__auto__,null);
});

sablono.core.file_field23731.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.file_field23731.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23731);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23735 = (function sablono$core$hidden_field23735(var_args){
var args23736 = [];
var len__17863__auto___23803 = arguments.length;
var i__17864__auto___23804 = (0);
while(true){
if((i__17864__auto___23804 < len__17863__auto___23803)){
args23736.push((arguments[i__17864__auto___23804]));

var G__23805 = (i__17864__auto___23804 + (1));
i__17864__auto___23804 = G__23805;
continue;
} else {
}
break;
}

var G__23738 = args23736.length;
switch (G__23738) {
case 1:
return sablono.core.hidden_field23735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23736.length)].join('')));

}
});

sablono.core.hidden_field23735.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.hidden_field23735.call(null,name__23632__auto__,null);
});

sablono.core.hidden_field23735.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.hidden_field23735.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23735);

/**
 * Creates a month input field.
 */
sablono.core.month_field23739 = (function sablono$core$month_field23739(var_args){
var args23740 = [];
var len__17863__auto___23807 = arguments.length;
var i__17864__auto___23808 = (0);
while(true){
if((i__17864__auto___23808 < len__17863__auto___23807)){
args23740.push((arguments[i__17864__auto___23808]));

var G__23809 = (i__17864__auto___23808 + (1));
i__17864__auto___23808 = G__23809;
continue;
} else {
}
break;
}

var G__23742 = args23740.length;
switch (G__23742) {
case 1:
return sablono.core.month_field23739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23740.length)].join('')));

}
});

sablono.core.month_field23739.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.month_field23739.call(null,name__23632__auto__,null);
});

sablono.core.month_field23739.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.month_field23739.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23739);

/**
 * Creates a number input field.
 */
sablono.core.number_field23743 = (function sablono$core$number_field23743(var_args){
var args23744 = [];
var len__17863__auto___23811 = arguments.length;
var i__17864__auto___23812 = (0);
while(true){
if((i__17864__auto___23812 < len__17863__auto___23811)){
args23744.push((arguments[i__17864__auto___23812]));

var G__23813 = (i__17864__auto___23812 + (1));
i__17864__auto___23812 = G__23813;
continue;
} else {
}
break;
}

var G__23746 = args23744.length;
switch (G__23746) {
case 1:
return sablono.core.number_field23743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23744.length)].join('')));

}
});

sablono.core.number_field23743.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.number_field23743.call(null,name__23632__auto__,null);
});

sablono.core.number_field23743.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.number_field23743.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23743);

/**
 * Creates a password input field.
 */
sablono.core.password_field23747 = (function sablono$core$password_field23747(var_args){
var args23748 = [];
var len__17863__auto___23815 = arguments.length;
var i__17864__auto___23816 = (0);
while(true){
if((i__17864__auto___23816 < len__17863__auto___23815)){
args23748.push((arguments[i__17864__auto___23816]));

var G__23817 = (i__17864__auto___23816 + (1));
i__17864__auto___23816 = G__23817;
continue;
} else {
}
break;
}

var G__23750 = args23748.length;
switch (G__23750) {
case 1:
return sablono.core.password_field23747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23748.length)].join('')));

}
});

sablono.core.password_field23747.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.password_field23747.call(null,name__23632__auto__,null);
});

sablono.core.password_field23747.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.password_field23747.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23747);

/**
 * Creates a range input field.
 */
sablono.core.range_field23751 = (function sablono$core$range_field23751(var_args){
var args23752 = [];
var len__17863__auto___23819 = arguments.length;
var i__17864__auto___23820 = (0);
while(true){
if((i__17864__auto___23820 < len__17863__auto___23819)){
args23752.push((arguments[i__17864__auto___23820]));

var G__23821 = (i__17864__auto___23820 + (1));
i__17864__auto___23820 = G__23821;
continue;
} else {
}
break;
}

var G__23754 = args23752.length;
switch (G__23754) {
case 1:
return sablono.core.range_field23751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23752.length)].join('')));

}
});

sablono.core.range_field23751.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.range_field23751.call(null,name__23632__auto__,null);
});

sablono.core.range_field23751.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.range_field23751.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23751);

/**
 * Creates a search input field.
 */
sablono.core.search_field23755 = (function sablono$core$search_field23755(var_args){
var args23756 = [];
var len__17863__auto___23823 = arguments.length;
var i__17864__auto___23824 = (0);
while(true){
if((i__17864__auto___23824 < len__17863__auto___23823)){
args23756.push((arguments[i__17864__auto___23824]));

var G__23825 = (i__17864__auto___23824 + (1));
i__17864__auto___23824 = G__23825;
continue;
} else {
}
break;
}

var G__23758 = args23756.length;
switch (G__23758) {
case 1:
return sablono.core.search_field23755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23756.length)].join('')));

}
});

sablono.core.search_field23755.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.search_field23755.call(null,name__23632__auto__,null);
});

sablono.core.search_field23755.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.search_field23755.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23755);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23759 = (function sablono$core$tel_field23759(var_args){
var args23760 = [];
var len__17863__auto___23827 = arguments.length;
var i__17864__auto___23828 = (0);
while(true){
if((i__17864__auto___23828 < len__17863__auto___23827)){
args23760.push((arguments[i__17864__auto___23828]));

var G__23829 = (i__17864__auto___23828 + (1));
i__17864__auto___23828 = G__23829;
continue;
} else {
}
break;
}

var G__23762 = args23760.length;
switch (G__23762) {
case 1:
return sablono.core.tel_field23759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23760.length)].join('')));

}
});

sablono.core.tel_field23759.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.tel_field23759.call(null,name__23632__auto__,null);
});

sablono.core.tel_field23759.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.tel_field23759.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23759);

/**
 * Creates a text input field.
 */
sablono.core.text_field23763 = (function sablono$core$text_field23763(var_args){
var args23764 = [];
var len__17863__auto___23831 = arguments.length;
var i__17864__auto___23832 = (0);
while(true){
if((i__17864__auto___23832 < len__17863__auto___23831)){
args23764.push((arguments[i__17864__auto___23832]));

var G__23833 = (i__17864__auto___23832 + (1));
i__17864__auto___23832 = G__23833;
continue;
} else {
}
break;
}

var G__23766 = args23764.length;
switch (G__23766) {
case 1:
return sablono.core.text_field23763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23764.length)].join('')));

}
});

sablono.core.text_field23763.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.text_field23763.call(null,name__23632__auto__,null);
});

sablono.core.text_field23763.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.text_field23763.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23763);

/**
 * Creates a time input field.
 */
sablono.core.time_field23767 = (function sablono$core$time_field23767(var_args){
var args23768 = [];
var len__17863__auto___23835 = arguments.length;
var i__17864__auto___23836 = (0);
while(true){
if((i__17864__auto___23836 < len__17863__auto___23835)){
args23768.push((arguments[i__17864__auto___23836]));

var G__23837 = (i__17864__auto___23836 + (1));
i__17864__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23770 = args23768.length;
switch (G__23770) {
case 1:
return sablono.core.time_field23767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23768.length)].join('')));

}
});

sablono.core.time_field23767.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.time_field23767.call(null,name__23632__auto__,null);
});

sablono.core.time_field23767.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.time_field23767.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23767);

/**
 * Creates a url input field.
 */
sablono.core.url_field23771 = (function sablono$core$url_field23771(var_args){
var args23772 = [];
var len__17863__auto___23839 = arguments.length;
var i__17864__auto___23840 = (0);
while(true){
if((i__17864__auto___23840 < len__17863__auto___23839)){
args23772.push((arguments[i__17864__auto___23840]));

var G__23841 = (i__17864__auto___23840 + (1));
i__17864__auto___23840 = G__23841;
continue;
} else {
}
break;
}

var G__23774 = args23772.length;
switch (G__23774) {
case 1:
return sablono.core.url_field23771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23772.length)].join('')));

}
});

sablono.core.url_field23771.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.url_field23771.call(null,name__23632__auto__,null);
});

sablono.core.url_field23771.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.url_field23771.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23771);

/**
 * Creates a week input field.
 */
sablono.core.week_field23775 = (function sablono$core$week_field23775(var_args){
var args23776 = [];
var len__17863__auto___23843 = arguments.length;
var i__17864__auto___23844 = (0);
while(true){
if((i__17864__auto___23844 < len__17863__auto___23843)){
args23776.push((arguments[i__17864__auto___23844]));

var G__23845 = (i__17864__auto___23844 + (1));
i__17864__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var G__23778 = args23776.length;
switch (G__23778) {
case 1:
return sablono.core.week_field23775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23776.length)].join('')));

}
});

sablono.core.week_field23775.cljs$core$IFn$_invoke$arity$1 = (function (name__23632__auto__){
return sablono.core.week_field23775.call(null,name__23632__auto__,null);
});

sablono.core.week_field23775.cljs$core$IFn$_invoke$arity$2 = (function (name__23632__auto__,value__23633__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23632__auto__,value__23633__auto__);
});

sablono.core.week_field23775.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23775);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23847 = (function sablono$core$check_box23847(var_args){
var args23848 = [];
var len__17863__auto___23851 = arguments.length;
var i__17864__auto___23852 = (0);
while(true){
if((i__17864__auto___23852 < len__17863__auto___23851)){
args23848.push((arguments[i__17864__auto___23852]));

var G__23853 = (i__17864__auto___23852 + (1));
i__17864__auto___23852 = G__23853;
continue;
} else {
}
break;
}

var G__23850 = args23848.length;
switch (G__23850) {
case 1:
return sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23848.length)].join('')));

}
});

sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box23847.call(null,name,null);
});

sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box23847.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box23847.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23847.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23847);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23855 = (function sablono$core$radio_button23855(var_args){
var args23856 = [];
var len__17863__auto___23859 = arguments.length;
var i__17864__auto___23860 = (0);
while(true){
if((i__17864__auto___23860 < len__17863__auto___23859)){
args23856.push((arguments[i__17864__auto___23860]));

var G__23861 = (i__17864__auto___23860 + (1));
i__17864__auto___23860 = G__23861;
continue;
} else {
}
break;
}

var G__23858 = args23856.length;
switch (G__23858) {
case 1:
return sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23856.length)].join('')));

}
});

sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button23855.call(null,group,null);
});

sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button23855.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button23855.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23855.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23855);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23863 = (function sablono$core$select_options23863(coll){
var iter__17577__auto__ = (function sablono$core$select_options23863_$_iter__23872(s__23873){
return (new cljs.core.LazySeq(null,(function (){
var s__23873__$1 = s__23873;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23873__$1);
if(temp__4425__auto__){
var s__23873__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23873__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23873__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23875 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23874 = (0);
while(true){
if((i__23874 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__23874);
cljs.core.chunk_append.call(null,b__23875,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23878 = x;
var text = cljs.core.nth.call(null,vec__23878,(0),null);
var val = cljs.core.nth.call(null,vec__23878,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23878,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23863.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23880 = (i__23874 + (1));
i__23874 = G__23880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23875),sablono$core$select_options23863_$_iter__23872.call(null,cljs.core.chunk_rest.call(null,s__23873__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23875),null);
}
} else {
var x = cljs.core.first.call(null,s__23873__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23879 = x;
var text = cljs.core.nth.call(null,vec__23879,(0),null);
var val = cljs.core.nth.call(null,vec__23879,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23879,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23863.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23863_$_iter__23872.call(null,cljs.core.rest.call(null,s__23873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23863);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23881 = (function sablono$core$drop_down23881(var_args){
var args23882 = [];
var len__17863__auto___23885 = arguments.length;
var i__17864__auto___23886 = (0);
while(true){
if((i__17864__auto___23886 < len__17863__auto___23885)){
args23882.push((arguments[i__17864__auto___23886]));

var G__23887 = (i__17864__auto___23886 + (1));
i__17864__auto___23886 = G__23887;
continue;
} else {
}
break;
}

var G__23884 = args23882.length;
switch (G__23884) {
case 2:
return sablono.core.drop_down23881.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23881.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23882.length)].join('')));

}
});

sablono.core.drop_down23881.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23881.call(null,name,options,null);
});

sablono.core.drop_down23881.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23881.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23881);
/**
 * Creates a text area element.
 */
sablono.core.text_area23889 = (function sablono$core$text_area23889(var_args){
var args23890 = [];
var len__17863__auto___23893 = arguments.length;
var i__17864__auto___23894 = (0);
while(true){
if((i__17864__auto___23894 < len__17863__auto___23893)){
args23890.push((arguments[i__17864__auto___23894]));

var G__23895 = (i__17864__auto___23894 + (1));
i__17864__auto___23894 = G__23895;
continue;
} else {
}
break;
}

var G__23892 = args23890.length;
switch (G__23892) {
case 1:
return sablono.core.text_area23889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23890.length)].join('')));

}
});

sablono.core.text_area23889.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area23889.call(null,name,null);
});

sablono.core.text_area23889.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area23889.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23889);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23897 = (function sablono$core$label23897(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23897);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23898 = (function sablono$core$submit_button23898(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23898);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23899 = (function sablono$core$reset_button23899(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23899);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23900 = (function sablono$core$form_to23900(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23905 = arguments.length;
var i__17864__auto___23906 = (0);
while(true){
if((i__17864__auto___23906 < len__17863__auto___23905)){
args__17870__auto__.push((arguments[i__17864__auto___23906]));

var G__23907 = (i__17864__auto___23906 + (1));
i__17864__auto___23906 = G__23907;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.form_to23900.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.form_to23900.cljs$core$IFn$_invoke$arity$variadic = (function (p__23903,body){
var vec__23904 = p__23903;
var method = cljs.core.nth.call(null,vec__23904,(0),null);
var action = cljs.core.nth.call(null,vec__23904,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23900.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23900.cljs$lang$applyTo = (function (seq23901){
var G__23902 = cljs.core.first.call(null,seq23901);
var seq23901__$1 = cljs.core.next.call(null,seq23901);
return sablono.core.form_to23900.cljs$core$IFn$_invoke$arity$variadic(G__23902,seq23901__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23900);

//# sourceMappingURL=core.js.map?rel=1457370614862