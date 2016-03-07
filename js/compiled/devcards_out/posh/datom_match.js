// Compiled by ClojureScript 1.7.170 {}
goog.provide('posh.datom_match');
goog.require('cljs.core');
goog.require('datascript.core');
posh.datom_match.query_symbol_QMARK_ = (function posh$datom_match$query_symbol_QMARK_(s){
return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
posh.datom_match.tx_item_match_q_QMARK_ = (function posh$datom_match$tx_item_match_q_QMARK_(pattern_item,tx_datom_item){
if(cljs.core._EQ_.call(null,pattern_item,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return true;
} else {
if(cljs.core.truth_(posh.datom_match.query_symbol_QMARK_.call(null,pattern_item))){
return cljs.core.PersistentArrayMap.fromArray([pattern_item,tx_datom_item], true, false);
} else {
if(cljs.core.coll_QMARK_.call(null,pattern_item)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tx_datom_item], true),pattern_item);
} else {
if(cljs.core.fn_QMARK_.call(null,pattern_item)){
return pattern_item.call(null,tx_datom_item);
} else {
return cljs.core._EQ_.call(null,pattern_item,tx_datom_item);

}
}
}
}
});
posh.datom_match.tx_pattern_match_q_QMARK_ = (function posh$datom_match$tx_pattern_match_q_QMARK_(pattern,tx_datom){
var pattern__$1 = pattern;
var tx_datom__$1 = tx_datom;
var vars = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pattern__$1)){
return vars;
} else {
var temp__4425__auto__ = posh.datom_match.tx_item_match_q_QMARK_.call(null,cljs.core.first.call(null,pattern__$1),cljs.core.first.call(null,tx_datom__$1));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
var G__24533 = cljs.core.rest.call(null,pattern__$1);
var G__24534 = cljs.core.rest.call(null,tx_datom__$1);
var G__24535 = ((cljs.core.map_QMARK_.call(null,v))?cljs.core.merge.call(null,v,vars):vars);
pattern__$1 = G__24533;
tx_datom__$1 = G__24534;
vars = G__24535;
continue;
} else {
return null;
}
}
break;
}
});
posh.datom_match.build_query = (function posh$datom_match$build_query(vars,query){
var ks = cljs.core.keys.call(null,vars);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,ks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),ks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"where","where",-2044795965)], null),query));
});
posh.datom_match.query_unifies_QMARK_ = (function posh$datom_match$query_unifies_QMARK_(db,vars,query){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,posh.datom_match.build_query.call(null,vars,query)),cljs.core.cons.call(null,db,cljs.core.vals.call(null,vars)))));
});
posh.datom_match.datom_pattern_match = (function posh$datom_match$datom_pattern_match(db,pattern,datom,vars,queries){
var temp__4425__auto__ = posh.datom_match.tx_pattern_match_q_QMARK_.call(null,pattern,datom);
if(cljs.core.truth_(temp__4425__auto__)){
var ret_vars = temp__4425__auto__;
var all_vars = cljs.core.merge.call(null,vars,ret_vars);
if(cljs.core.empty_QMARK_.call(null,ret_vars)){
return vars;
} else {
if(cljs.core.empty_QMARK_.call(null,queries)){
return all_vars;
} else {
if(cljs.core.truth_(posh.datom_match.query_unifies_QMARK_.call(null,db,all_vars,queries))){
return all_vars;
} else {
return null;
}

}
}
} else {
return null;
}
});
posh.datom_match.datom_match_QMARK_ = (function posh$datom_match$datom_match_QMARK_(var_args){
var args24536 = [];
var len__17863__auto___24543 = arguments.length;
var i__17864__auto___24544 = (0);
while(true){
if((i__17864__auto___24544 < len__17863__auto___24543)){
args24536.push((arguments[i__17864__auto___24544]));

var G__24545 = (i__17864__auto___24544 + (1));
i__17864__auto___24544 = G__24545;
continue;
} else {
}
break;
}

var G__24538 = args24536.length;
switch (G__24538) {
case 3:
return posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24536.length)].join('')));

}
});

posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,datom){
return posh.datom_match.datom_match_QMARK_.call(null,db,patterns,datom,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (db,patterns,datom,vars){
return posh.datom_match.datom_match_QMARK_.call(null,db,patterns,datom,vars,cljs.core.PersistentVector.EMPTY);
});

posh.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (db,patterns,datom,vars,queries){
if(cljs.core.map_QMARK_.call(null,patterns)){
return posh.datom_match.datom_match_QMARK_.call(null,db,cljs.core.first.call(null,cljs.core.keys.call(null,patterns)),datom,vars,cljs.core.vec.call(null,cljs.core.concat.call(null,queries,cljs.core.first.call(null,cljs.core.vals.call(null,patterns)))));
} else {
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__17577__auto__ = (function posh$datom_match$iter__24539(s__24540){
return (new cljs.core.LazySeq(null,(function (){
var s__24540__$1 = s__24540;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24540__$1);
if(temp__4425__auto__){
var s__24540__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24540__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24540__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24542 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24541 = (0);
while(true){
if((i__24541 < size__17576__auto__)){
var p = cljs.core._nth.call(null,c__17575__auto__,i__24541);
cljs.core.chunk_append.call(null,b__24542,((cljs.core.map_QMARK_.call(null,p))?posh.datom_match.datom_match_QMARK_.call(null,db,p,datom,vars,queries):posh.datom_match.datom_pattern_match.call(null,db,p,datom,vars,queries)));

var G__24547 = (i__24541 + (1));
i__24541 = G__24547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24542),posh$datom_match$iter__24539.call(null,cljs.core.chunk_rest.call(null,s__24540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24542),null);
}
} else {
var p = cljs.core.first.call(null,s__24540__$2);
return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,p))?posh.datom_match.datom_match_QMARK_.call(null,db,p,datom,vars,queries):posh.datom_match.datom_pattern_match.call(null,db,p,datom,vars,queries)),posh$datom_match$iter__24539.call(null,cljs.core.rest.call(null,s__24540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,patterns);
})()));
}
});

posh.datom_match.datom_match_QMARK_.cljs$lang$maxFixedArity = 5;
posh.datom_match.any_datoms_match_QMARK_ = (function posh$datom_match$any_datoms_match_QMARK_(var_args){
var args24548 = [];
var len__17863__auto___24555 = arguments.length;
var i__17864__auto___24556 = (0);
while(true){
if((i__17864__auto___24556 < len__17863__auto___24555)){
args24548.push((arguments[i__17864__auto___24556]));

var G__24557 = (i__17864__auto___24556 + (1));
i__17864__auto___24556 = G__24557;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
case 3:
return posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

}
});

posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,datoms){
return posh.datom_match.any_datoms_match_QMARK_.call(null,db,patterns,datoms,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (db,patterns,datoms,vars){
return posh.datom_match.any_datoms_match_QMARK_.call(null,db,patterns,datoms,vars,cljs.core.PersistentVector.EMPTY);
});

posh.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (db,patterns,datoms,vars,queries){
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__17577__auto__ = (function posh$datom_match$iter__24551(s__24552){
return (new cljs.core.LazySeq(null,(function (){
var s__24552__$1 = s__24552;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24552__$1);
if(temp__4425__auto__){
var s__24552__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24552__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24552__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24554 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24553 = (0);
while(true){
if((i__24553 < size__17576__auto__)){
var d = cljs.core._nth.call(null,c__17575__auto__,i__24553);
cljs.core.chunk_append.call(null,b__24554,posh.datom_match.datom_match_QMARK_.call(null,db,patterns,d,vars,queries));

var G__24559 = (i__24553 + (1));
i__24553 = G__24559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24554),posh$datom_match$iter__24551.call(null,cljs.core.chunk_rest.call(null,s__24552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24554),null);
}
} else {
var d = cljs.core.first.call(null,s__24552__$2);
return cljs.core.cons.call(null,posh.datom_match.datom_match_QMARK_.call(null,db,patterns,d,vars,queries),posh$datom_match$iter__24551.call(null,cljs.core.rest.call(null,s__24552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,datoms);
})()));
});

posh.datom_match.any_datoms_match_QMARK_.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=datom_match.js.map?rel=1457371273758