// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20827 = arguments.length;
var i__17864__auto___20828 = (0);
while(true){
if((i__17864__auto___20828 < len__17863__auto___20827)){
args__17870__auto__.push((arguments[i__17864__auto___20828]));

var G__20829 = (i__17864__auto___20828 + (1));
i__17864__auto___20828 = G__20829;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20825){
var vec__20826 = p__20825;
var default$ = cljs.core.nth.call(null,vec__20826,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq20823){
var G__20824 = cljs.core.first.call(null,seq20823);
var seq20823__$1 = cljs.core.next.call(null,seq20823);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__20824,seq20823__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20834 = arguments.length;
var i__17864__auto___20835 = (0);
while(true){
if((i__17864__auto___20835 < len__17863__auto___20834)){
args__17870__auto__.push((arguments[i__17864__auto___20835]));

var G__20836 = (i__17864__auto___20835 + (1));
i__17864__auto___20835 = G__20836;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20832){
var vec__20833 = p__20832;
var default$ = cljs.core.nth.call(null,vec__20833,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq20830){
var G__20831 = cljs.core.first.call(null,seq20830);
var seq20830__$1 = cljs.core.next.call(null,seq20830);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__20831,seq20830__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20839 = arguments.length;
var i__17864__auto___20840 = (0);
while(true){
if((i__17864__auto___20840 < len__17863__auto___20839)){
args__17870__auto__.push((arguments[i__17864__auto___20840]));

var G__20841 = (i__17864__auto___20840 + (1));
i__17864__auto___20840 = G__20841;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq20837){
var G__20838 = cljs.core.first.call(null,seq20837);
var seq20837__$1 = cljs.core.next.call(null,seq20837);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20838,seq20837__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20842_SHARP_){
return cljs.core.assoc_in.call(null,p1__20842_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20847 = arguments.length;
var i__17864__auto___20848 = (0);
while(true){
if((i__17864__auto___20848 < len__17863__auto___20847)){
args__17870__auto__.push((arguments[i__17864__auto___20848]));

var G__20849 = (i__17864__auto___20848 + (1));
i__17864__auto___20848 = G__20849;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20845){
var vec__20846 = p__20845;
var default$ = cljs.core.nth.call(null,vec__20846,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq20843){
var G__20844 = cljs.core.first.call(null,seq20843);
var seq20843__$1 = cljs.core.next.call(null,seq20843);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20844,seq20843__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20854 = arguments.length;
var i__17864__auto___20855 = (0);
while(true){
if((i__17864__auto___20855 < len__17863__auto___20854)){
args__17870__auto__.push((arguments[i__17864__auto___20855]));

var G__20856 = (i__17864__auto___20855 + (1));
i__17864__auto___20855 = G__20856;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__20852){
var vec__20853 = p__20852;
var default$ = cljs.core.nth.call(null,vec__20853,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq20850){
var G__20851 = cljs.core.first.call(null,seq20850);
var seq20850__$1 = cljs.core.next.call(null,seq20850);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20851,seq20850__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20861 = arguments.length;
var i__17864__auto___20862 = (0);
while(true){
if((i__17864__auto___20862 < len__17863__auto___20861)){
args__17870__auto__.push((arguments[i__17864__auto___20862]));

var G__20863 = (i__17864__auto___20862 + (1));
i__17864__auto___20862 = G__20863;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__20857_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__20857_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq20858){
var G__20859 = cljs.core.first.call(null,seq20858);
var seq20858__$1 = cljs.core.next.call(null,seq20858);
var G__20860 = cljs.core.first.call(null,seq20858__$1);
var seq20858__$2 = cljs.core.next.call(null,seq20858__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20859,G__20860,seq20858__$2);
});

//# sourceMappingURL=session.js.map?rel=1457371263913