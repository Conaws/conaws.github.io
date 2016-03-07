// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26522_26536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26523_26537 = null;
var count__26524_26538 = (0);
var i__26525_26539 = (0);
while(true){
if((i__26525_26539 < count__26524_26538)){
var f_26540 = cljs.core._nth.call(null,chunk__26523_26537,i__26525_26539);
cljs.core.println.call(null,"  ",f_26540);

var G__26541 = seq__26522_26536;
var G__26542 = chunk__26523_26537;
var G__26543 = count__26524_26538;
var G__26544 = (i__26525_26539 + (1));
seq__26522_26536 = G__26541;
chunk__26523_26537 = G__26542;
count__26524_26538 = G__26543;
i__26525_26539 = G__26544;
continue;
} else {
var temp__4425__auto___26545 = cljs.core.seq.call(null,seq__26522_26536);
if(temp__4425__auto___26545){
var seq__26522_26546__$1 = temp__4425__auto___26545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26522_26546__$1)){
var c__17608__auto___26547 = cljs.core.chunk_first.call(null,seq__26522_26546__$1);
var G__26548 = cljs.core.chunk_rest.call(null,seq__26522_26546__$1);
var G__26549 = c__17608__auto___26547;
var G__26550 = cljs.core.count.call(null,c__17608__auto___26547);
var G__26551 = (0);
seq__26522_26536 = G__26548;
chunk__26523_26537 = G__26549;
count__26524_26538 = G__26550;
i__26525_26539 = G__26551;
continue;
} else {
var f_26552 = cljs.core.first.call(null,seq__26522_26546__$1);
cljs.core.println.call(null,"  ",f_26552);

var G__26553 = cljs.core.next.call(null,seq__26522_26546__$1);
var G__26554 = null;
var G__26555 = (0);
var G__26556 = (0);
seq__26522_26536 = G__26553;
chunk__26523_26537 = G__26554;
count__26524_26538 = G__26555;
i__26525_26539 = G__26556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26557);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26557)))?cljs.core.second.call(null,arglists_26557):arglists_26557));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26526 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26527 = null;
var count__26528 = (0);
var i__26529 = (0);
while(true){
if((i__26529 < count__26528)){
var vec__26530 = cljs.core._nth.call(null,chunk__26527,i__26529);
var name = cljs.core.nth.call(null,vec__26530,(0),null);
var map__26531 = cljs.core.nth.call(null,vec__26530,(1),null);
var map__26531__$1 = ((((!((map__26531 == null)))?((((map__26531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26531):map__26531);
var doc = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26558 = seq__26526;
var G__26559 = chunk__26527;
var G__26560 = count__26528;
var G__26561 = (i__26529 + (1));
seq__26526 = G__26558;
chunk__26527 = G__26559;
count__26528 = G__26560;
i__26529 = G__26561;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26526);
if(temp__4425__auto__){
var seq__26526__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26526__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__26526__$1);
var G__26562 = cljs.core.chunk_rest.call(null,seq__26526__$1);
var G__26563 = c__17608__auto__;
var G__26564 = cljs.core.count.call(null,c__17608__auto__);
var G__26565 = (0);
seq__26526 = G__26562;
chunk__26527 = G__26563;
count__26528 = G__26564;
i__26529 = G__26565;
continue;
} else {
var vec__26533 = cljs.core.first.call(null,seq__26526__$1);
var name = cljs.core.nth.call(null,vec__26533,(0),null);
var map__26534 = cljs.core.nth.call(null,vec__26533,(1),null);
var map__26534__$1 = ((((!((map__26534 == null)))?((((map__26534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534):map__26534);
var doc = cljs.core.get.call(null,map__26534__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26534__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26566 = cljs.core.next.call(null,seq__26526__$1);
var G__26567 = null;
var G__26568 = (0);
var G__26569 = (0);
seq__26526 = G__26566;
chunk__26527 = G__26567;
count__26528 = G__26568;
i__26529 = G__26569;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1457370619113