// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25498_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25498_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25503 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25504 = null;
var count__25505 = (0);
var i__25506 = (0);
while(true){
if((i__25506 < count__25505)){
var n = cljs.core._nth.call(null,chunk__25504,i__25506);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25507 = seq__25503;
var G__25508 = chunk__25504;
var G__25509 = count__25505;
var G__25510 = (i__25506 + (1));
seq__25503 = G__25507;
chunk__25504 = G__25508;
count__25505 = G__25509;
i__25506 = G__25510;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25503);
if(temp__4425__auto__){
var seq__25503__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25503__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__25503__$1);
var G__25511 = cljs.core.chunk_rest.call(null,seq__25503__$1);
var G__25512 = c__17608__auto__;
var G__25513 = cljs.core.count.call(null,c__17608__auto__);
var G__25514 = (0);
seq__25503 = G__25511;
chunk__25504 = G__25512;
count__25505 = G__25513;
i__25506 = G__25514;
continue;
} else {
var n = cljs.core.first.call(null,seq__25503__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25515 = cljs.core.next.call(null,seq__25503__$1);
var G__25516 = null;
var G__25517 = (0);
var G__25518 = (0);
seq__25503 = G__25515;
chunk__25504 = G__25516;
count__25505 = G__25517;
i__25506 = G__25518;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25557_25564 = cljs.core.seq.call(null,deps);
var chunk__25558_25565 = null;
var count__25559_25566 = (0);
var i__25560_25567 = (0);
while(true){
if((i__25560_25567 < count__25559_25566)){
var dep_25568 = cljs.core._nth.call(null,chunk__25558_25565,i__25560_25567);
topo_sort_helper_STAR_.call(null,dep_25568,(depth + (1)),state);

var G__25569 = seq__25557_25564;
var G__25570 = chunk__25558_25565;
var G__25571 = count__25559_25566;
var G__25572 = (i__25560_25567 + (1));
seq__25557_25564 = G__25569;
chunk__25558_25565 = G__25570;
count__25559_25566 = G__25571;
i__25560_25567 = G__25572;
continue;
} else {
var temp__4425__auto___25573 = cljs.core.seq.call(null,seq__25557_25564);
if(temp__4425__auto___25573){
var seq__25557_25574__$1 = temp__4425__auto___25573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25557_25574__$1)){
var c__17608__auto___25575 = cljs.core.chunk_first.call(null,seq__25557_25574__$1);
var G__25576 = cljs.core.chunk_rest.call(null,seq__25557_25574__$1);
var G__25577 = c__17608__auto___25575;
var G__25578 = cljs.core.count.call(null,c__17608__auto___25575);
var G__25579 = (0);
seq__25557_25564 = G__25576;
chunk__25558_25565 = G__25577;
count__25559_25566 = G__25578;
i__25560_25567 = G__25579;
continue;
} else {
var dep_25580 = cljs.core.first.call(null,seq__25557_25574__$1);
topo_sort_helper_STAR_.call(null,dep_25580,(depth + (1)),state);

var G__25581 = cljs.core.next.call(null,seq__25557_25574__$1);
var G__25582 = null;
var G__25583 = (0);
var G__25584 = (0);
seq__25557_25564 = G__25581;
chunk__25558_25565 = G__25582;
count__25559_25566 = G__25583;
i__25560_25567 = G__25584;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25561){
var vec__25563 = p__25561;
var x = cljs.core.nth.call(null,vec__25563,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25563,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25563,x,xs,get_deps__$1){
return (function (p1__25519_SHARP_){
return clojure.set.difference.call(null,p1__25519_SHARP_,x);
});})(vec__25563,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25597 = cljs.core.seq.call(null,provides);
var chunk__25598 = null;
var count__25599 = (0);
var i__25600 = (0);
while(true){
if((i__25600 < count__25599)){
var prov = cljs.core._nth.call(null,chunk__25598,i__25600);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25601_25609 = cljs.core.seq.call(null,requires);
var chunk__25602_25610 = null;
var count__25603_25611 = (0);
var i__25604_25612 = (0);
while(true){
if((i__25604_25612 < count__25603_25611)){
var req_25613 = cljs.core._nth.call(null,chunk__25602_25610,i__25604_25612);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25613,prov);

var G__25614 = seq__25601_25609;
var G__25615 = chunk__25602_25610;
var G__25616 = count__25603_25611;
var G__25617 = (i__25604_25612 + (1));
seq__25601_25609 = G__25614;
chunk__25602_25610 = G__25615;
count__25603_25611 = G__25616;
i__25604_25612 = G__25617;
continue;
} else {
var temp__4425__auto___25618 = cljs.core.seq.call(null,seq__25601_25609);
if(temp__4425__auto___25618){
var seq__25601_25619__$1 = temp__4425__auto___25618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25601_25619__$1)){
var c__17608__auto___25620 = cljs.core.chunk_first.call(null,seq__25601_25619__$1);
var G__25621 = cljs.core.chunk_rest.call(null,seq__25601_25619__$1);
var G__25622 = c__17608__auto___25620;
var G__25623 = cljs.core.count.call(null,c__17608__auto___25620);
var G__25624 = (0);
seq__25601_25609 = G__25621;
chunk__25602_25610 = G__25622;
count__25603_25611 = G__25623;
i__25604_25612 = G__25624;
continue;
} else {
var req_25625 = cljs.core.first.call(null,seq__25601_25619__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25625,prov);

var G__25626 = cljs.core.next.call(null,seq__25601_25619__$1);
var G__25627 = null;
var G__25628 = (0);
var G__25629 = (0);
seq__25601_25609 = G__25626;
chunk__25602_25610 = G__25627;
count__25603_25611 = G__25628;
i__25604_25612 = G__25629;
continue;
}
} else {
}
}
break;
}

var G__25630 = seq__25597;
var G__25631 = chunk__25598;
var G__25632 = count__25599;
var G__25633 = (i__25600 + (1));
seq__25597 = G__25630;
chunk__25598 = G__25631;
count__25599 = G__25632;
i__25600 = G__25633;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25597);
if(temp__4425__auto__){
var seq__25597__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25597__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__25597__$1);
var G__25634 = cljs.core.chunk_rest.call(null,seq__25597__$1);
var G__25635 = c__17608__auto__;
var G__25636 = cljs.core.count.call(null,c__17608__auto__);
var G__25637 = (0);
seq__25597 = G__25634;
chunk__25598 = G__25635;
count__25599 = G__25636;
i__25600 = G__25637;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25597__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25605_25638 = cljs.core.seq.call(null,requires);
var chunk__25606_25639 = null;
var count__25607_25640 = (0);
var i__25608_25641 = (0);
while(true){
if((i__25608_25641 < count__25607_25640)){
var req_25642 = cljs.core._nth.call(null,chunk__25606_25639,i__25608_25641);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25642,prov);

var G__25643 = seq__25605_25638;
var G__25644 = chunk__25606_25639;
var G__25645 = count__25607_25640;
var G__25646 = (i__25608_25641 + (1));
seq__25605_25638 = G__25643;
chunk__25606_25639 = G__25644;
count__25607_25640 = G__25645;
i__25608_25641 = G__25646;
continue;
} else {
var temp__4425__auto___25647__$1 = cljs.core.seq.call(null,seq__25605_25638);
if(temp__4425__auto___25647__$1){
var seq__25605_25648__$1 = temp__4425__auto___25647__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25605_25648__$1)){
var c__17608__auto___25649 = cljs.core.chunk_first.call(null,seq__25605_25648__$1);
var G__25650 = cljs.core.chunk_rest.call(null,seq__25605_25648__$1);
var G__25651 = c__17608__auto___25649;
var G__25652 = cljs.core.count.call(null,c__17608__auto___25649);
var G__25653 = (0);
seq__25605_25638 = G__25650;
chunk__25606_25639 = G__25651;
count__25607_25640 = G__25652;
i__25608_25641 = G__25653;
continue;
} else {
var req_25654 = cljs.core.first.call(null,seq__25605_25648__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25654,prov);

var G__25655 = cljs.core.next.call(null,seq__25605_25648__$1);
var G__25656 = null;
var G__25657 = (0);
var G__25658 = (0);
seq__25605_25638 = G__25655;
chunk__25606_25639 = G__25656;
count__25607_25640 = G__25657;
i__25608_25641 = G__25658;
continue;
}
} else {
}
}
break;
}

var G__25659 = cljs.core.next.call(null,seq__25597__$1);
var G__25660 = null;
var G__25661 = (0);
var G__25662 = (0);
seq__25597 = G__25659;
chunk__25598 = G__25660;
count__25599 = G__25661;
i__25600 = G__25662;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25667_25671 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25668_25672 = null;
var count__25669_25673 = (0);
var i__25670_25674 = (0);
while(true){
if((i__25670_25674 < count__25669_25673)){
var ns_25675 = cljs.core._nth.call(null,chunk__25668_25672,i__25670_25674);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25675);

var G__25676 = seq__25667_25671;
var G__25677 = chunk__25668_25672;
var G__25678 = count__25669_25673;
var G__25679 = (i__25670_25674 + (1));
seq__25667_25671 = G__25676;
chunk__25668_25672 = G__25677;
count__25669_25673 = G__25678;
i__25670_25674 = G__25679;
continue;
} else {
var temp__4425__auto___25680 = cljs.core.seq.call(null,seq__25667_25671);
if(temp__4425__auto___25680){
var seq__25667_25681__$1 = temp__4425__auto___25680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25667_25681__$1)){
var c__17608__auto___25682 = cljs.core.chunk_first.call(null,seq__25667_25681__$1);
var G__25683 = cljs.core.chunk_rest.call(null,seq__25667_25681__$1);
var G__25684 = c__17608__auto___25682;
var G__25685 = cljs.core.count.call(null,c__17608__auto___25682);
var G__25686 = (0);
seq__25667_25671 = G__25683;
chunk__25668_25672 = G__25684;
count__25669_25673 = G__25685;
i__25670_25674 = G__25686;
continue;
} else {
var ns_25687 = cljs.core.first.call(null,seq__25667_25681__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25687);

var G__25688 = cljs.core.next.call(null,seq__25667_25681__$1);
var G__25689 = null;
var G__25690 = (0);
var G__25691 = (0);
seq__25667_25671 = G__25688;
chunk__25668_25672 = G__25689;
count__25669_25673 = G__25690;
i__25670_25674 = G__25691;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25692__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25693__i = 0, G__25693__a = new Array(arguments.length -  0);
while (G__25693__i < G__25693__a.length) {G__25693__a[G__25693__i] = arguments[G__25693__i + 0]; ++G__25693__i;}
  args = new cljs.core.IndexedSeq(G__25693__a,0);
} 
return G__25692__delegate.call(this,args);};
G__25692.cljs$lang$maxFixedArity = 0;
G__25692.cljs$lang$applyTo = (function (arglist__25694){
var args = cljs.core.seq(arglist__25694);
return G__25692__delegate(args);
});
G__25692.cljs$core$IFn$_invoke$arity$variadic = G__25692__delegate;
return G__25692;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25696 = cljs.core._EQ_;
var expr__25697 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25697))){
var path_parts = ((function (pred__25696,expr__25697){
return (function (p1__25695_SHARP_){
return clojure.string.split.call(null,p1__25695_SHARP_,/[\/\\]/);
});})(pred__25696,expr__25697))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25696,expr__25697){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25699){if((e25699 instanceof Error)){
var e = e25699;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25699;

}
}})());
});
;})(path_parts,sep,root,pred__25696,expr__25697))
} else {
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25697))){
return ((function (pred__25696,expr__25697){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25696,expr__25697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25696,expr__25697))
);

return deferred.addErrback(((function (deferred,pred__25696,expr__25697){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25696,expr__25697))
);
});
;})(pred__25696,expr__25697))
} else {
return ((function (pred__25696,expr__25697){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25696,expr__25697))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25700,callback){
var map__25703 = p__25700;
var map__25703__$1 = ((((!((map__25703 == null)))?((((map__25703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25703):map__25703);
var file_msg = map__25703__$1;
var request_url = cljs.core.get.call(null,map__25703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25703,map__25703__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25703,map__25703__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__){
return (function (state_25727){
var state_val_25728 = (state_25727[(1)]);
if((state_val_25728 === (7))){
var inst_25723 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
var statearr_25729_25749 = state_25727__$1;
(statearr_25729_25749[(2)] = inst_25723);

(statearr_25729_25749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (1))){
var state_25727__$1 = state_25727;
var statearr_25730_25750 = state_25727__$1;
(statearr_25730_25750[(2)] = null);

(statearr_25730_25750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (4))){
var inst_25707 = (state_25727[(7)]);
var inst_25707__$1 = (state_25727[(2)]);
var state_25727__$1 = (function (){var statearr_25731 = state_25727;
(statearr_25731[(7)] = inst_25707__$1);

return statearr_25731;
})();
if(cljs.core.truth_(inst_25707__$1)){
var statearr_25732_25751 = state_25727__$1;
(statearr_25732_25751[(1)] = (5));

} else {
var statearr_25733_25752 = state_25727__$1;
(statearr_25733_25752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (6))){
var state_25727__$1 = state_25727;
var statearr_25734_25753 = state_25727__$1;
(statearr_25734_25753[(2)] = null);

(statearr_25734_25753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (3))){
var inst_25725 = (state_25727[(2)]);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25727__$1,inst_25725);
} else {
if((state_val_25728 === (2))){
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25728 === (11))){
var inst_25719 = (state_25727[(2)]);
var state_25727__$1 = (function (){var statearr_25735 = state_25727;
(statearr_25735[(8)] = inst_25719);

return statearr_25735;
})();
var statearr_25736_25754 = state_25727__$1;
(statearr_25736_25754[(2)] = null);

(statearr_25736_25754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (9))){
var inst_25711 = (state_25727[(9)]);
var inst_25713 = (state_25727[(10)]);
var inst_25715 = inst_25713.call(null,inst_25711);
var state_25727__$1 = state_25727;
var statearr_25737_25755 = state_25727__$1;
(statearr_25737_25755[(2)] = inst_25715);

(statearr_25737_25755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (5))){
var inst_25707 = (state_25727[(7)]);
var inst_25709 = figwheel.client.file_reloading.blocking_load.call(null,inst_25707);
var state_25727__$1 = state_25727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25727__$1,(8),inst_25709);
} else {
if((state_val_25728 === (10))){
var inst_25711 = (state_25727[(9)]);
var inst_25717 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25711);
var state_25727__$1 = state_25727;
var statearr_25738_25756 = state_25727__$1;
(statearr_25738_25756[(2)] = inst_25717);

(statearr_25738_25756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25728 === (8))){
var inst_25713 = (state_25727[(10)]);
var inst_25707 = (state_25727[(7)]);
var inst_25711 = (state_25727[(2)]);
var inst_25712 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25713__$1 = cljs.core.get.call(null,inst_25712,inst_25707);
var state_25727__$1 = (function (){var statearr_25739 = state_25727;
(statearr_25739[(9)] = inst_25711);

(statearr_25739[(10)] = inst_25713__$1);

return statearr_25739;
})();
if(cljs.core.truth_(inst_25713__$1)){
var statearr_25740_25757 = state_25727__$1;
(statearr_25740_25757[(1)] = (9));

} else {
var statearr_25741_25758 = state_25727__$1;
(statearr_25741_25758[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20327__auto__))
;
return ((function (switch__20215__auto__,c__20327__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20216__auto__ = null;
var figwheel$client$file_reloading$state_machine__20216__auto____0 = (function (){
var statearr_25745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25745[(0)] = figwheel$client$file_reloading$state_machine__20216__auto__);

(statearr_25745[(1)] = (1));

return statearr_25745;
});
var figwheel$client$file_reloading$state_machine__20216__auto____1 = (function (state_25727){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_25727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e25746){if((e25746 instanceof Object)){
var ex__20219__auto__ = e25746;
var statearr_25747_25759 = state_25727;
(statearr_25747_25759[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25760 = state_25727;
state_25727 = G__25760;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20216__auto__ = function(state_25727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20216__auto____1.call(this,state_25727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20216__auto____0;
figwheel$client$file_reloading$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20216__auto____1;
return figwheel$client$file_reloading$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__))
})();
var state__20329__auto__ = (function (){var statearr_25748 = f__20328__auto__.call(null);
(statearr_25748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_25748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__))
);

return c__20327__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25761,callback){
var map__25764 = p__25761;
var map__25764__$1 = ((((!((map__25764 == null)))?((((map__25764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25764):map__25764);
var file_msg = map__25764__$1;
var namespace = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25764,map__25764__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25764,map__25764__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25766){
var map__25769 = p__25766;
var map__25769__$1 = ((((!((map__25769 == null)))?((((map__25769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25769):map__25769);
var file_msg = map__25769__$1;
var namespace = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25771,callback){
var map__25774 = p__25771;
var map__25774__$1 = ((((!((map__25774 == null)))?((((map__25774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25774):map__25774);
var file_msg = map__25774__$1;
var request_url = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25774__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20327__auto___25862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___25862,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___25862,out){
return (function (state_25844){
var state_val_25845 = (state_25844[(1)]);
if((state_val_25845 === (1))){
var inst_25822 = cljs.core.nth.call(null,files,(0),null);
var inst_25823 = cljs.core.nthnext.call(null,files,(1));
var inst_25824 = files;
var state_25844__$1 = (function (){var statearr_25846 = state_25844;
(statearr_25846[(7)] = inst_25824);

(statearr_25846[(8)] = inst_25823);

(statearr_25846[(9)] = inst_25822);

return statearr_25846;
})();
var statearr_25847_25863 = state_25844__$1;
(statearr_25847_25863[(2)] = null);

(statearr_25847_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (2))){
var inst_25824 = (state_25844[(7)]);
var inst_25827 = (state_25844[(10)]);
var inst_25827__$1 = cljs.core.nth.call(null,inst_25824,(0),null);
var inst_25828 = cljs.core.nthnext.call(null,inst_25824,(1));
var inst_25829 = (inst_25827__$1 == null);
var inst_25830 = cljs.core.not.call(null,inst_25829);
var state_25844__$1 = (function (){var statearr_25848 = state_25844;
(statearr_25848[(10)] = inst_25827__$1);

(statearr_25848[(11)] = inst_25828);

return statearr_25848;
})();
if(inst_25830){
var statearr_25849_25864 = state_25844__$1;
(statearr_25849_25864[(1)] = (4));

} else {
var statearr_25850_25865 = state_25844__$1;
(statearr_25850_25865[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (3))){
var inst_25842 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25844__$1,inst_25842);
} else {
if((state_val_25845 === (4))){
var inst_25827 = (state_25844[(10)]);
var inst_25832 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25827);
var state_25844__$1 = state_25844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25844__$1,(7),inst_25832);
} else {
if((state_val_25845 === (5))){
var inst_25838 = cljs.core.async.close_BANG_.call(null,out);
var state_25844__$1 = state_25844;
var statearr_25851_25866 = state_25844__$1;
(statearr_25851_25866[(2)] = inst_25838);

(statearr_25851_25866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (6))){
var inst_25840 = (state_25844[(2)]);
var state_25844__$1 = state_25844;
var statearr_25852_25867 = state_25844__$1;
(statearr_25852_25867[(2)] = inst_25840);

(statearr_25852_25867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25845 === (7))){
var inst_25828 = (state_25844[(11)]);
var inst_25834 = (state_25844[(2)]);
var inst_25835 = cljs.core.async.put_BANG_.call(null,out,inst_25834);
var inst_25824 = inst_25828;
var state_25844__$1 = (function (){var statearr_25853 = state_25844;
(statearr_25853[(7)] = inst_25824);

(statearr_25853[(12)] = inst_25835);

return statearr_25853;
})();
var statearr_25854_25868 = state_25844__$1;
(statearr_25854_25868[(2)] = null);

(statearr_25854_25868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20327__auto___25862,out))
;
return ((function (switch__20215__auto__,c__20327__auto___25862,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____0 = (function (){
var statearr_25858 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25858[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__);

(statearr_25858[(1)] = (1));

return statearr_25858;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____1 = (function (state_25844){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_25844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e25859){if((e25859 instanceof Object)){
var ex__20219__auto__ = e25859;
var statearr_25860_25869 = state_25844;
(statearr_25860_25869[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25870 = state_25844;
state_25844 = G__25870;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__ = function(state_25844){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____1.call(this,state_25844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___25862,out))
})();
var state__20329__auto__ = (function (){var statearr_25861 = f__20328__auto__.call(null);
(statearr_25861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___25862);

return statearr_25861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___25862,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25871,opts){
var map__25875 = p__25871;
var map__25875__$1 = ((((!((map__25875 == null)))?((((map__25875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25875):map__25875);
var eval_body__$1 = cljs.core.get.call(null,map__25875__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25877){var e = e25877;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25878_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25878_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25883){
var vec__25884 = p__25883;
var k = cljs.core.nth.call(null,vec__25884,(0),null);
var v = cljs.core.nth.call(null,vec__25884,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25885){
var vec__25886 = p__25885;
var k = cljs.core.nth.call(null,vec__25886,(0),null);
var v = cljs.core.nth.call(null,vec__25886,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25890,p__25891){
var map__26138 = p__25890;
var map__26138__$1 = ((((!((map__26138 == null)))?((((map__26138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26138):map__26138);
var opts = map__26138__$1;
var before_jsload = cljs.core.get.call(null,map__26138__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26138__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26138__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26139 = p__25891;
var map__26139__$1 = ((((!((map__26139 == null)))?((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var msg = map__26139__$1;
var files = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26292){
var state_val_26293 = (state_26292[(1)]);
if((state_val_26293 === (7))){
var inst_26153 = (state_26292[(7)]);
var inst_26155 = (state_26292[(8)]);
var inst_26154 = (state_26292[(9)]);
var inst_26156 = (state_26292[(10)]);
var inst_26161 = cljs.core._nth.call(null,inst_26154,inst_26156);
var inst_26162 = figwheel.client.file_reloading.eval_body.call(null,inst_26161,opts);
var inst_26163 = (inst_26156 + (1));
var tmp26294 = inst_26153;
var tmp26295 = inst_26155;
var tmp26296 = inst_26154;
var inst_26153__$1 = tmp26294;
var inst_26154__$1 = tmp26296;
var inst_26155__$1 = tmp26295;
var inst_26156__$1 = inst_26163;
var state_26292__$1 = (function (){var statearr_26297 = state_26292;
(statearr_26297[(11)] = inst_26162);

(statearr_26297[(7)] = inst_26153__$1);

(statearr_26297[(8)] = inst_26155__$1);

(statearr_26297[(9)] = inst_26154__$1);

(statearr_26297[(10)] = inst_26156__$1);

return statearr_26297;
})();
var statearr_26298_26384 = state_26292__$1;
(statearr_26298_26384[(2)] = null);

(statearr_26298_26384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (20))){
var inst_26196 = (state_26292[(12)]);
var inst_26204 = figwheel.client.file_reloading.sort_files.call(null,inst_26196);
var state_26292__$1 = state_26292;
var statearr_26299_26385 = state_26292__$1;
(statearr_26299_26385[(2)] = inst_26204);

(statearr_26299_26385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (27))){
var state_26292__$1 = state_26292;
var statearr_26300_26386 = state_26292__$1;
(statearr_26300_26386[(2)] = null);

(statearr_26300_26386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (1))){
var inst_26145 = (state_26292[(13)]);
var inst_26142 = before_jsload.call(null,files);
var inst_26143 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26144 = (function (){return ((function (inst_26145,inst_26142,inst_26143,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25887_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25887_SHARP_);
});
;})(inst_26145,inst_26142,inst_26143,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26145__$1 = cljs.core.filter.call(null,inst_26144,files);
var inst_26146 = cljs.core.not_empty.call(null,inst_26145__$1);
var state_26292__$1 = (function (){var statearr_26301 = state_26292;
(statearr_26301[(14)] = inst_26142);

(statearr_26301[(15)] = inst_26143);

(statearr_26301[(13)] = inst_26145__$1);

return statearr_26301;
})();
if(cljs.core.truth_(inst_26146)){
var statearr_26302_26387 = state_26292__$1;
(statearr_26302_26387[(1)] = (2));

} else {
var statearr_26303_26388 = state_26292__$1;
(statearr_26303_26388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (24))){
var state_26292__$1 = state_26292;
var statearr_26304_26389 = state_26292__$1;
(statearr_26304_26389[(2)] = null);

(statearr_26304_26389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (39))){
var inst_26246 = (state_26292[(16)]);
var state_26292__$1 = state_26292;
var statearr_26305_26390 = state_26292__$1;
(statearr_26305_26390[(2)] = inst_26246);

(statearr_26305_26390[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (46))){
var inst_26287 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26306_26391 = state_26292__$1;
(statearr_26306_26391[(2)] = inst_26287);

(statearr_26306_26391[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (4))){
var inst_26190 = (state_26292[(2)]);
var inst_26191 = cljs.core.List.EMPTY;
var inst_26192 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26191);
var inst_26193 = (function (){return ((function (inst_26190,inst_26191,inst_26192,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25888_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25888_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25888_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_26190,inst_26191,inst_26192,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26194 = cljs.core.filter.call(null,inst_26193,files);
var inst_26195 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26196 = cljs.core.concat.call(null,inst_26194,inst_26195);
var state_26292__$1 = (function (){var statearr_26307 = state_26292;
(statearr_26307[(17)] = inst_26190);

(statearr_26307[(18)] = inst_26192);

(statearr_26307[(12)] = inst_26196);

return statearr_26307;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26308_26392 = state_26292__$1;
(statearr_26308_26392[(1)] = (16));

} else {
var statearr_26309_26393 = state_26292__$1;
(statearr_26309_26393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (15))){
var inst_26180 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26310_26394 = state_26292__$1;
(statearr_26310_26394[(2)] = inst_26180);

(statearr_26310_26394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (21))){
var inst_26206 = (state_26292[(19)]);
var inst_26206__$1 = (state_26292[(2)]);
var inst_26207 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26206__$1);
var state_26292__$1 = (function (){var statearr_26311 = state_26292;
(statearr_26311[(19)] = inst_26206__$1);

return statearr_26311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(22),inst_26207);
} else {
if((state_val_26293 === (31))){
var inst_26290 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26292__$1,inst_26290);
} else {
if((state_val_26293 === (32))){
var inst_26246 = (state_26292[(16)]);
var inst_26251 = inst_26246.cljs$lang$protocol_mask$partition0$;
var inst_26252 = (inst_26251 & (64));
var inst_26253 = inst_26246.cljs$core$ISeq$;
var inst_26254 = (inst_26252) || (inst_26253);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26254)){
var statearr_26312_26395 = state_26292__$1;
(statearr_26312_26395[(1)] = (35));

} else {
var statearr_26313_26396 = state_26292__$1;
(statearr_26313_26396[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (40))){
var inst_26267 = (state_26292[(20)]);
var inst_26266 = (state_26292[(2)]);
var inst_26267__$1 = cljs.core.get.call(null,inst_26266,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26268 = cljs.core.get.call(null,inst_26266,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26269 = cljs.core.not_empty.call(null,inst_26267__$1);
var state_26292__$1 = (function (){var statearr_26314 = state_26292;
(statearr_26314[(21)] = inst_26268);

(statearr_26314[(20)] = inst_26267__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26269)){
var statearr_26315_26397 = state_26292__$1;
(statearr_26315_26397[(1)] = (41));

} else {
var statearr_26316_26398 = state_26292__$1;
(statearr_26316_26398[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (33))){
var state_26292__$1 = state_26292;
var statearr_26317_26399 = state_26292__$1;
(statearr_26317_26399[(2)] = false);

(statearr_26317_26399[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (13))){
var inst_26166 = (state_26292[(22)]);
var inst_26170 = cljs.core.chunk_first.call(null,inst_26166);
var inst_26171 = cljs.core.chunk_rest.call(null,inst_26166);
var inst_26172 = cljs.core.count.call(null,inst_26170);
var inst_26153 = inst_26171;
var inst_26154 = inst_26170;
var inst_26155 = inst_26172;
var inst_26156 = (0);
var state_26292__$1 = (function (){var statearr_26318 = state_26292;
(statearr_26318[(7)] = inst_26153);

(statearr_26318[(8)] = inst_26155);

(statearr_26318[(9)] = inst_26154);

(statearr_26318[(10)] = inst_26156);

return statearr_26318;
})();
var statearr_26319_26400 = state_26292__$1;
(statearr_26319_26400[(2)] = null);

(statearr_26319_26400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (22))){
var inst_26209 = (state_26292[(23)]);
var inst_26214 = (state_26292[(24)]);
var inst_26210 = (state_26292[(25)]);
var inst_26206 = (state_26292[(19)]);
var inst_26209__$1 = (state_26292[(2)]);
var inst_26210__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26209__$1);
var inst_26211 = (function (){var all_files = inst_26206;
var res_SINGLEQUOTE_ = inst_26209__$1;
var res = inst_26210__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26209,inst_26214,inst_26210,inst_26206,inst_26209__$1,inst_26210__$1,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25889_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25889_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26209,inst_26214,inst_26210,inst_26206,inst_26209__$1,inst_26210__$1,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26212 = cljs.core.filter.call(null,inst_26211,inst_26209__$1);
var inst_26213 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26214__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26213);
var inst_26215 = cljs.core.not_empty.call(null,inst_26214__$1);
var state_26292__$1 = (function (){var statearr_26320 = state_26292;
(statearr_26320[(26)] = inst_26212);

(statearr_26320[(23)] = inst_26209__$1);

(statearr_26320[(24)] = inst_26214__$1);

(statearr_26320[(25)] = inst_26210__$1);

return statearr_26320;
})();
if(cljs.core.truth_(inst_26215)){
var statearr_26321_26401 = state_26292__$1;
(statearr_26321_26401[(1)] = (23));

} else {
var statearr_26322_26402 = state_26292__$1;
(statearr_26322_26402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (36))){
var state_26292__$1 = state_26292;
var statearr_26323_26403 = state_26292__$1;
(statearr_26323_26403[(2)] = false);

(statearr_26323_26403[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (41))){
var inst_26267 = (state_26292[(20)]);
var inst_26271 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26272 = cljs.core.map.call(null,inst_26271,inst_26267);
var inst_26273 = cljs.core.pr_str.call(null,inst_26272);
var inst_26274 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26273)].join('');
var inst_26275 = figwheel.client.utils.log.call(null,inst_26274);
var state_26292__$1 = state_26292;
var statearr_26324_26404 = state_26292__$1;
(statearr_26324_26404[(2)] = inst_26275);

(statearr_26324_26404[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (43))){
var inst_26268 = (state_26292[(21)]);
var inst_26278 = (state_26292[(2)]);
var inst_26279 = cljs.core.not_empty.call(null,inst_26268);
var state_26292__$1 = (function (){var statearr_26325 = state_26292;
(statearr_26325[(27)] = inst_26278);

return statearr_26325;
})();
if(cljs.core.truth_(inst_26279)){
var statearr_26326_26405 = state_26292__$1;
(statearr_26326_26405[(1)] = (44));

} else {
var statearr_26327_26406 = state_26292__$1;
(statearr_26327_26406[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (29))){
var inst_26212 = (state_26292[(26)]);
var inst_26246 = (state_26292[(16)]);
var inst_26209 = (state_26292[(23)]);
var inst_26214 = (state_26292[(24)]);
var inst_26210 = (state_26292[(25)]);
var inst_26206 = (state_26292[(19)]);
var inst_26242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26245 = (function (){var all_files = inst_26206;
var res_SINGLEQUOTE_ = inst_26209;
var res = inst_26210;
var files_not_loaded = inst_26212;
var dependencies_that_loaded = inst_26214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26246,inst_26209,inst_26214,inst_26210,inst_26206,inst_26242,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26244){
var map__26328 = p__26244;
var map__26328__$1 = ((((!((map__26328 == null)))?((((map__26328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26328):map__26328);
var namespace = cljs.core.get.call(null,map__26328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26246,inst_26209,inst_26214,inst_26210,inst_26206,inst_26242,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26246__$1 = cljs.core.group_by.call(null,inst_26245,inst_26212);
var inst_26248 = (inst_26246__$1 == null);
var inst_26249 = cljs.core.not.call(null,inst_26248);
var state_26292__$1 = (function (){var statearr_26330 = state_26292;
(statearr_26330[(16)] = inst_26246__$1);

(statearr_26330[(28)] = inst_26242);

return statearr_26330;
})();
if(inst_26249){
var statearr_26331_26407 = state_26292__$1;
(statearr_26331_26407[(1)] = (32));

} else {
var statearr_26332_26408 = state_26292__$1;
(statearr_26332_26408[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (44))){
var inst_26268 = (state_26292[(21)]);
var inst_26281 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26268);
var inst_26282 = cljs.core.pr_str.call(null,inst_26281);
var inst_26283 = [cljs.core.str("not required: "),cljs.core.str(inst_26282)].join('');
var inst_26284 = figwheel.client.utils.log.call(null,inst_26283);
var state_26292__$1 = state_26292;
var statearr_26333_26409 = state_26292__$1;
(statearr_26333_26409[(2)] = inst_26284);

(statearr_26333_26409[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (6))){
var inst_26187 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26334_26410 = state_26292__$1;
(statearr_26334_26410[(2)] = inst_26187);

(statearr_26334_26410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (28))){
var inst_26212 = (state_26292[(26)]);
var inst_26239 = (state_26292[(2)]);
var inst_26240 = cljs.core.not_empty.call(null,inst_26212);
var state_26292__$1 = (function (){var statearr_26335 = state_26292;
(statearr_26335[(29)] = inst_26239);

return statearr_26335;
})();
if(cljs.core.truth_(inst_26240)){
var statearr_26336_26411 = state_26292__$1;
(statearr_26336_26411[(1)] = (29));

} else {
var statearr_26337_26412 = state_26292__$1;
(statearr_26337_26412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (25))){
var inst_26210 = (state_26292[(25)]);
var inst_26226 = (state_26292[(2)]);
var inst_26227 = cljs.core.not_empty.call(null,inst_26210);
var state_26292__$1 = (function (){var statearr_26338 = state_26292;
(statearr_26338[(30)] = inst_26226);

return statearr_26338;
})();
if(cljs.core.truth_(inst_26227)){
var statearr_26339_26413 = state_26292__$1;
(statearr_26339_26413[(1)] = (26));

} else {
var statearr_26340_26414 = state_26292__$1;
(statearr_26340_26414[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (34))){
var inst_26261 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26261)){
var statearr_26341_26415 = state_26292__$1;
(statearr_26341_26415[(1)] = (38));

} else {
var statearr_26342_26416 = state_26292__$1;
(statearr_26342_26416[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (17))){
var state_26292__$1 = state_26292;
var statearr_26343_26417 = state_26292__$1;
(statearr_26343_26417[(2)] = recompile_dependents);

(statearr_26343_26417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (3))){
var state_26292__$1 = state_26292;
var statearr_26344_26418 = state_26292__$1;
(statearr_26344_26418[(2)] = null);

(statearr_26344_26418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (12))){
var inst_26183 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26345_26419 = state_26292__$1;
(statearr_26345_26419[(2)] = inst_26183);

(statearr_26345_26419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (2))){
var inst_26145 = (state_26292[(13)]);
var inst_26152 = cljs.core.seq.call(null,inst_26145);
var inst_26153 = inst_26152;
var inst_26154 = null;
var inst_26155 = (0);
var inst_26156 = (0);
var state_26292__$1 = (function (){var statearr_26346 = state_26292;
(statearr_26346[(7)] = inst_26153);

(statearr_26346[(8)] = inst_26155);

(statearr_26346[(9)] = inst_26154);

(statearr_26346[(10)] = inst_26156);

return statearr_26346;
})();
var statearr_26347_26420 = state_26292__$1;
(statearr_26347_26420[(2)] = null);

(statearr_26347_26420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (23))){
var inst_26212 = (state_26292[(26)]);
var inst_26209 = (state_26292[(23)]);
var inst_26214 = (state_26292[(24)]);
var inst_26210 = (state_26292[(25)]);
var inst_26206 = (state_26292[(19)]);
var inst_26217 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26219 = (function (){var all_files = inst_26206;
var res_SINGLEQUOTE_ = inst_26209;
var res = inst_26210;
var files_not_loaded = inst_26212;
var dependencies_that_loaded = inst_26214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26217,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26218){
var map__26348 = p__26218;
var map__26348__$1 = ((((!((map__26348 == null)))?((((map__26348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26348):map__26348);
var request_url = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26217,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26220 = cljs.core.reverse.call(null,inst_26214);
var inst_26221 = cljs.core.map.call(null,inst_26219,inst_26220);
var inst_26222 = cljs.core.pr_str.call(null,inst_26221);
var inst_26223 = figwheel.client.utils.log.call(null,inst_26222);
var state_26292__$1 = (function (){var statearr_26350 = state_26292;
(statearr_26350[(31)] = inst_26217);

return statearr_26350;
})();
var statearr_26351_26421 = state_26292__$1;
(statearr_26351_26421[(2)] = inst_26223);

(statearr_26351_26421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (35))){
var state_26292__$1 = state_26292;
var statearr_26352_26422 = state_26292__$1;
(statearr_26352_26422[(2)] = true);

(statearr_26352_26422[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (19))){
var inst_26196 = (state_26292[(12)]);
var inst_26202 = figwheel.client.file_reloading.expand_files.call(null,inst_26196);
var state_26292__$1 = state_26292;
var statearr_26353_26423 = state_26292__$1;
(statearr_26353_26423[(2)] = inst_26202);

(statearr_26353_26423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (11))){
var state_26292__$1 = state_26292;
var statearr_26354_26424 = state_26292__$1;
(statearr_26354_26424[(2)] = null);

(statearr_26354_26424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (9))){
var inst_26185 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26355_26425 = state_26292__$1;
(statearr_26355_26425[(2)] = inst_26185);

(statearr_26355_26425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (5))){
var inst_26155 = (state_26292[(8)]);
var inst_26156 = (state_26292[(10)]);
var inst_26158 = (inst_26156 < inst_26155);
var inst_26159 = inst_26158;
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26159)){
var statearr_26356_26426 = state_26292__$1;
(statearr_26356_26426[(1)] = (7));

} else {
var statearr_26357_26427 = state_26292__$1;
(statearr_26357_26427[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (14))){
var inst_26166 = (state_26292[(22)]);
var inst_26175 = cljs.core.first.call(null,inst_26166);
var inst_26176 = figwheel.client.file_reloading.eval_body.call(null,inst_26175,opts);
var inst_26177 = cljs.core.next.call(null,inst_26166);
var inst_26153 = inst_26177;
var inst_26154 = null;
var inst_26155 = (0);
var inst_26156 = (0);
var state_26292__$1 = (function (){var statearr_26358 = state_26292;
(statearr_26358[(7)] = inst_26153);

(statearr_26358[(8)] = inst_26155);

(statearr_26358[(32)] = inst_26176);

(statearr_26358[(9)] = inst_26154);

(statearr_26358[(10)] = inst_26156);

return statearr_26358;
})();
var statearr_26359_26428 = state_26292__$1;
(statearr_26359_26428[(2)] = null);

(statearr_26359_26428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (45))){
var state_26292__$1 = state_26292;
var statearr_26360_26429 = state_26292__$1;
(statearr_26360_26429[(2)] = null);

(statearr_26360_26429[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (26))){
var inst_26212 = (state_26292[(26)]);
var inst_26209 = (state_26292[(23)]);
var inst_26214 = (state_26292[(24)]);
var inst_26210 = (state_26292[(25)]);
var inst_26206 = (state_26292[(19)]);
var inst_26229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26231 = (function (){var all_files = inst_26206;
var res_SINGLEQUOTE_ = inst_26209;
var res = inst_26210;
var files_not_loaded = inst_26212;
var dependencies_that_loaded = inst_26214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26229,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26230){
var map__26361 = p__26230;
var map__26361__$1 = ((((!((map__26361 == null)))?((((map__26361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26361):map__26361);
var namespace = cljs.core.get.call(null,map__26361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26229,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26232 = cljs.core.map.call(null,inst_26231,inst_26210);
var inst_26233 = cljs.core.pr_str.call(null,inst_26232);
var inst_26234 = figwheel.client.utils.log.call(null,inst_26233);
var inst_26235 = (function (){var all_files = inst_26206;
var res_SINGLEQUOTE_ = inst_26209;
var res = inst_26210;
var files_not_loaded = inst_26212;
var dependencies_that_loaded = inst_26214;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26229,inst_26231,inst_26232,inst_26233,inst_26234,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26212,inst_26209,inst_26214,inst_26210,inst_26206,inst_26229,inst_26231,inst_26232,inst_26233,inst_26234,state_val_26293,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26236 = setTimeout(inst_26235,(10));
var state_26292__$1 = (function (){var statearr_26363 = state_26292;
(statearr_26363[(33)] = inst_26234);

(statearr_26363[(34)] = inst_26229);

return statearr_26363;
})();
var statearr_26364_26430 = state_26292__$1;
(statearr_26364_26430[(2)] = inst_26236);

(statearr_26364_26430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (16))){
var state_26292__$1 = state_26292;
var statearr_26365_26431 = state_26292__$1;
(statearr_26365_26431[(2)] = reload_dependents);

(statearr_26365_26431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (38))){
var inst_26246 = (state_26292[(16)]);
var inst_26263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26246);
var state_26292__$1 = state_26292;
var statearr_26366_26432 = state_26292__$1;
(statearr_26366_26432[(2)] = inst_26263);

(statearr_26366_26432[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (30))){
var state_26292__$1 = state_26292;
var statearr_26367_26433 = state_26292__$1;
(statearr_26367_26433[(2)] = null);

(statearr_26367_26433[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (10))){
var inst_26166 = (state_26292[(22)]);
var inst_26168 = cljs.core.chunked_seq_QMARK_.call(null,inst_26166);
var state_26292__$1 = state_26292;
if(inst_26168){
var statearr_26368_26434 = state_26292__$1;
(statearr_26368_26434[(1)] = (13));

} else {
var statearr_26369_26435 = state_26292__$1;
(statearr_26369_26435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (18))){
var inst_26200 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26200)){
var statearr_26370_26436 = state_26292__$1;
(statearr_26370_26436[(1)] = (19));

} else {
var statearr_26371_26437 = state_26292__$1;
(statearr_26371_26437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (42))){
var state_26292__$1 = state_26292;
var statearr_26372_26438 = state_26292__$1;
(statearr_26372_26438[(2)] = null);

(statearr_26372_26438[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (37))){
var inst_26258 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26373_26439 = state_26292__$1;
(statearr_26373_26439[(2)] = inst_26258);

(statearr_26373_26439[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (8))){
var inst_26166 = (state_26292[(22)]);
var inst_26153 = (state_26292[(7)]);
var inst_26166__$1 = cljs.core.seq.call(null,inst_26153);
var state_26292__$1 = (function (){var statearr_26374 = state_26292;
(statearr_26374[(22)] = inst_26166__$1);

return statearr_26374;
})();
if(inst_26166__$1){
var statearr_26375_26440 = state_26292__$1;
(statearr_26375_26440[(1)] = (10));

} else {
var statearr_26376_26441 = state_26292__$1;
(statearr_26376_26441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20215__auto__,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____0 = (function (){
var statearr_26380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26380[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__);

(statearr_26380[(1)] = (1));

return statearr_26380;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____1 = (function (state_26292){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_26292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object)){
var ex__20219__auto__ = e26381;
var statearr_26382_26442 = state_26292;
(statearr_26382_26442[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26443 = state_26292;
state_26292 = G__26443;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__ = function(state_26292){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____1.call(this,state_26292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20329__auto__ = (function (){var statearr_26383 = f__20328__auto__.call(null);
(statearr_26383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__,map__26138,map__26138__$1,opts,before_jsload,on_jsload,reload_dependents,map__26139,map__26139__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20327__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26446,link){
var map__26449 = p__26446;
var map__26449__$1 = ((((!((map__26449 == null)))?((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var file = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26449,map__26449__$1,file){
return (function (p1__26444_SHARP_,p2__26445_SHARP_){
if(cljs.core._EQ_.call(null,p1__26444_SHARP_,p2__26445_SHARP_)){
return p1__26444_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26449,map__26449__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26455){
var map__26456 = p__26455;
var map__26456__$1 = ((((!((map__26456 == null)))?((((map__26456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26456):map__26456);
var match_length = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26456__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26451_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26451_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26458 = [];
var len__17863__auto___26461 = arguments.length;
var i__17864__auto___26462 = (0);
while(true){
if((i__17864__auto___26462 < len__17863__auto___26461)){
args26458.push((arguments[i__17864__auto___26462]));

var G__26463 = (i__17864__auto___26462 + (1));
i__17864__auto___26462 = G__26463;
continue;
} else {
}
break;
}

var G__26460 = args26458.length;
switch (G__26460) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26458.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26465_SHARP_,p2__26466_SHARP_){
return cljs.core.assoc.call(null,p1__26465_SHARP_,cljs.core.get.call(null,p2__26466_SHARP_,key),p2__26466_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26467){
var map__26470 = p__26467;
var map__26470__$1 = ((((!((map__26470 == null)))?((((map__26470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26470):map__26470);
var f_data = map__26470__$1;
var file = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26472,files_msg){
var map__26479 = p__26472;
var map__26479__$1 = ((((!((map__26479 == null)))?((((map__26479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26479):map__26479);
var opts = map__26479__$1;
var on_cssload = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26481_26485 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26482_26486 = null;
var count__26483_26487 = (0);
var i__26484_26488 = (0);
while(true){
if((i__26484_26488 < count__26483_26487)){
var f_26489 = cljs.core._nth.call(null,chunk__26482_26486,i__26484_26488);
figwheel.client.file_reloading.reload_css_file.call(null,f_26489);

var G__26490 = seq__26481_26485;
var G__26491 = chunk__26482_26486;
var G__26492 = count__26483_26487;
var G__26493 = (i__26484_26488 + (1));
seq__26481_26485 = G__26490;
chunk__26482_26486 = G__26491;
count__26483_26487 = G__26492;
i__26484_26488 = G__26493;
continue;
} else {
var temp__4425__auto___26494 = cljs.core.seq.call(null,seq__26481_26485);
if(temp__4425__auto___26494){
var seq__26481_26495__$1 = temp__4425__auto___26494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26481_26495__$1)){
var c__17608__auto___26496 = cljs.core.chunk_first.call(null,seq__26481_26495__$1);
var G__26497 = cljs.core.chunk_rest.call(null,seq__26481_26495__$1);
var G__26498 = c__17608__auto___26496;
var G__26499 = cljs.core.count.call(null,c__17608__auto___26496);
var G__26500 = (0);
seq__26481_26485 = G__26497;
chunk__26482_26486 = G__26498;
count__26483_26487 = G__26499;
i__26484_26488 = G__26500;
continue;
} else {
var f_26501 = cljs.core.first.call(null,seq__26481_26495__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26501);

var G__26502 = cljs.core.next.call(null,seq__26481_26495__$1);
var G__26503 = null;
var G__26504 = (0);
var G__26505 = (0);
seq__26481_26485 = G__26502;
chunk__26482_26486 = G__26503;
count__26483_26487 = G__26504;
i__26484_26488 = G__26505;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26479,map__26479__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26479,map__26479__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457370618978