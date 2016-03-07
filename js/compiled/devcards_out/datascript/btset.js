// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.btset');
goog.require('cljs.core');
goog.require('datascript.arrays');
datascript.btset.min_len = (16);
datascript.btset.max_len = (32);
datascript.btset.avg_len = ((datascript.btset.max_len + datascript.btset.min_len) >>> (1));
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__21234_SHARP_){
return ((datascript.btset.max_len & (1 << p1__21234_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function datascript$btset$path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function datascript$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.binary_search_l = (function datascript$btset$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) < (0))){
var G__21235 = (m + (1));
var G__21236 = r__$1;
l = G__21235;
r__$1 = G__21236;
continue;
} else {
var G__21237 = l;
var G__21238 = (m - (1));
l = G__21237;
r__$1 = G__21238;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function datascript$btset$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) > (0))){
var G__21239 = l;
var G__21240 = (m - (1));
l = G__21239;
r__$1 = G__21240;
continue;
} else {
var G__21241 = (m + (1));
var G__21242 = r__$1;
l = G__21241;
r__$1 = G__21242;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function datascript$btset$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if(((idx < arr_l)) && (((0) === cmp.call(null,(arr[idx]),key)))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function datascript$btset$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function datascript$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function datascript$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = datascript.arrays.make_array.call(null,((l1 + xs_l) + l2));
var l__20901__auto___21243 = (splice_from - cut_from);
var n__17708__auto___21244 = l__20901__auto___21243;
var i__20902__auto___21245 = (0);
while(true){
if((i__20902__auto___21245 < n__17708__auto___21244)){
(new_arr[(i__20902__auto___21245 + (0))] = (arr[(i__20902__auto___21245 + cut_from)]));

var G__21246 = (i__20902__auto___21245 + (1));
i__20902__auto___21245 = G__21246;
continue;
} else {
}
break;
}

var l__20901__auto___21247 = (xs_l - (0));
var n__17708__auto___21248 = l__20901__auto___21247;
var i__20902__auto___21249 = (0);
while(true){
if((i__20902__auto___21249 < n__17708__auto___21248)){
(new_arr[(i__20902__auto___21249 + l1)] = (xs[(i__20902__auto___21249 + (0))]));

var G__21250 = (i__20902__auto___21249 + (1));
i__20902__auto___21249 = G__21250;
continue;
} else {
}
break;
}

var l__20901__auto___21251 = (cut_to - splice_to);
var n__17708__auto___21252 = l__20901__auto___21251;
var i__20902__auto___21253 = (0);
while(true){
if((i__20902__auto___21253 < n__17708__auto___21252)){
(new_arr[(i__20902__auto___21253 + l1xs)] = (arr[(i__20902__auto___21253 + splice_to)]));

var G__21254 = (i__20902__auto___21253 + (1));
i__20902__auto___21253 = G__21254;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function datascript$btset$cut(var_args){
var args21255 = [];
var len__17863__auto___21258 = arguments.length;
var i__17864__auto___21259 = (0);
while(true){
if((i__17864__auto___21259 < len__17863__auto___21258)){
args21255.push((arguments[i__17864__auto___21259]));

var G__21260 = (i__17864__auto___21259 + (1));
i__17864__auto___21259 = G__21260;
continue;
} else {
}
break;
}

var G__21257 = args21255.length;
switch (G__21257) {
case 2:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21255.length)].join('')));

}
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datascript.btset.cut.cljs$lang$maxFixedArity = 3;
datascript.btset.splice = (function datascript$btset$splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function datascript$btset$insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function datascript$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = datascript.arrays.make_array.call(null,r1_l);
var r2 = datascript.arrays.make_array.call(null,r2_l);
if((a1_l <= r1_l)){
var l__20901__auto___21262 = (a1_l - (0));
var n__17708__auto___21263 = l__20901__auto___21262;
var i__20902__auto___21264 = (0);
while(true){
if((i__20902__auto___21264 < n__17708__auto___21263)){
(r1[(i__20902__auto___21264 + (0))] = (a1[(i__20902__auto___21264 + (0))]));

var G__21265 = (i__20902__auto___21264 + (1));
i__20902__auto___21264 = G__21265;
continue;
} else {
}
break;
}

var l__20901__auto___21266 = ((r1_l - a1_l) - (0));
var n__17708__auto___21267 = l__20901__auto___21266;
var i__20902__auto___21268 = (0);
while(true){
if((i__20902__auto___21268 < n__17708__auto___21267)){
(r1[(i__20902__auto___21268 + a1_l)] = (a2[(i__20902__auto___21268 + (0))]));

var G__21269 = (i__20902__auto___21268 + (1));
i__20902__auto___21268 = G__21269;
continue;
} else {
}
break;
}

var l__20901__auto___21270 = (a2_l - (r1_l - a1_l));
var n__17708__auto___21271 = l__20901__auto___21270;
var i__20902__auto___21272 = (0);
while(true){
if((i__20902__auto___21272 < n__17708__auto___21271)){
(r2[(i__20902__auto___21272 + (0))] = (a2[(i__20902__auto___21272 + (r1_l - a1_l))]));

var G__21273 = (i__20902__auto___21272 + (1));
i__20902__auto___21272 = G__21273;
continue;
} else {
}
break;
}
} else {
var l__20901__auto___21274 = (r1_l - (0));
var n__17708__auto___21275 = l__20901__auto___21274;
var i__20902__auto___21276 = (0);
while(true){
if((i__20902__auto___21276 < n__17708__auto___21275)){
(r1[(i__20902__auto___21276 + (0))] = (a1[(i__20902__auto___21276 + (0))]));

var G__21277 = (i__20902__auto___21276 + (1));
i__20902__auto___21276 = G__21277;
continue;
} else {
}
break;
}

var l__20901__auto___21278 = (a1_l - r1_l);
var n__17708__auto___21279 = l__20901__auto___21278;
var i__20902__auto___21280 = (0);
while(true){
if((i__20902__auto___21280 < n__17708__auto___21279)){
(r2[(i__20902__auto___21280 + (0))] = (a1[(i__20902__auto___21280 + r1_l)]));

var G__21281 = (i__20902__auto___21280 + (1));
i__20902__auto___21280 = G__21281;
continue;
} else {
}
break;
}

var l__20901__auto___21282 = (a2_l - (0));
var n__17708__auto___21283 = l__20901__auto___21282;
var i__20902__auto___21284 = (0);
while(true){
if((i__20902__auto___21284 < n__17708__auto___21283)){
(r2[(i__20902__auto___21284 + (a1_l - r1_l))] = (a2[(i__20902__auto___21284 + (0))]));

var G__21285 = (i__20902__auto___21284 + (1));
i__20902__auto___21284 = G__21285;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
datascript.btset.eq_arr = (function datascript$btset$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__16793__auto__ = (len === (a2_to - a2_from));
if(and__16793__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)]))))){
return false;
} else {
var G__21286 = (i + (1));
i = G__21286;
continue;

}
}
break;
}
} else {
return and__16793__auto__;
}
});
datascript.btset.check_n_splice = (function datascript$btset$check_n_splice(cmp,arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function datascript$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_21287 = (0);
while(true){
if((i_21287 < len)){
(arr[i_21287] = f.call(null,(arr[i_21287])));

var G__21288 = (i_21287 + (1));
i_21287 = G__21288;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datascript.btset.arr_partition_approx = (function datascript$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.avg_len;
var len = arr.length;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_21289 = (0);
while(true){
var rest_21290 = (len - pos_21289);
if((rest_21290 <= max_len)){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_21289));
} else {
if((rest_21290 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_21289,(pos_21289 + chunk_len)));

var G__21291 = (pos_21289 + chunk_len);
pos_21289 = G__21291;
continue;
} else {
var piece_len_21292 = (rest_21290 >>> (1));
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_21289,(pos_21289 + piece_len_21292)));

var G__21293 = (pos_21289 + piece_len_21292);
pos_21289 = G__21293;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
});
datascript.btset.sorted_arr_distinct_QMARK_ = (function datascript$btset$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
return false;
} else {
var G__21294 = (i + (1));
var G__21295 = e;
i = G__21294;
p = G__21295;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
datascript.btset.sorted_arr_distinct = (function datascript$btset$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(datascript.btset.sorted_arr_distinct_QMARK_.call(null,arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
var G__21296 = acc;
var G__21297 = (i + (1));
var G__21298 = e;
acc = G__21296;
i = G__21297;
p = G__21298;
continue;
} else {
var G__21299 = cljs.core.conj_BANG_.call(null,acc,e);
var G__21300 = (i + (1));
var G__21301 = e;
acc = G__21299;
i = G__21300;
p = G__21301;
continue;
}
}
break;
}
}
});
/**
 * Drop non-nil references and return array of arguments
 */
datascript.btset.return_array = (function datascript$btset$return_array(var_args){
var args21302 = [];
var len__17863__auto___21305 = arguments.length;
var i__17864__auto___21306 = (0);
while(true){
if((i__17864__auto___21306 < len__17863__auto___21305)){
args21302.push((arguments[i__17864__auto___21306]));

var G__21307 = (i__17864__auto___21306 + (1));
i__17864__auto___21306 = G__21307;
continue;
} else {
}
break;
}

var G__21304 = args21302.length;
switch (G__21304) {
case 1:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21302.length)].join('')));

}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datascript.btset.return_array.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
datascript.btset.INode = function(){};

datascript.btset.node_lim_key = (function datascript$btset$node_lim_key(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lim_key$arity$1 == null)))){
return _.datascript$btset$INode$node_lim_key$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_lim_key[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (datascript.btset.node_lim_key["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lim-key",_);
}
}
}
});

datascript.btset.node_len = (function datascript$btset$node_len(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_len$arity$1 == null)))){
return _.datascript$btset$INode$node_len$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_len[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (datascript.btset.node_len["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-len",_);
}
}
}
});

datascript.btset.node_merge = (function datascript$btset$node_merge(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge$arity$2 == null)))){
return _.datascript$btset$INode$node_merge$arity$2(_,next);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_merge[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_,next);
} else {
var m__17461__auto____$1 = (datascript.btset.node_merge["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge",_);
}
}
}
});

datascript.btset.node_merge_n_split = (function datascript$btset$node_merge_n_split(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge_n_split$arity$2 == null)))){
return _.datascript$btset$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_merge_n_split[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_,next);
} else {
var m__17461__auto____$1 = (datascript.btset.node_merge_n_split["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge-n-split",_);
}
}
}
});

datascript.btset.node_lookup = (function datascript$btset$node_lookup(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lookup$arity$3 == null)))){
return _.datascript$btset$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_lookup[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_,cmp,key);
} else {
var m__17461__auto____$1 = (datascript.btset.node_lookup["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lookup",_);
}
}
}
});

datascript.btset.node_conj = (function datascript$btset$node_conj(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_conj$arity$3 == null)))){
return _.datascript$btset$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_conj[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_,cmp,key);
} else {
var m__17461__auto____$1 = (datascript.btset.node_conj["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-conj",_);
}
}
}
});

datascript.btset.node_disj = (function datascript$btset$node_disj(_,cmp,key,root_QMARK_,left,right){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_disj$arity$6 == null)))){
return _.datascript$btset$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (datascript.btset.node_disj[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
var m__17461__auto____$1 = (datascript.btset.node_disj["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-disj",_);
}
}
}
});

datascript.btset.rotate = (function datascript$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((datascript.btset.node_len.call(null,node) > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__16793__auto__ = left;
if(cljs.core.truth_(and__16793__auto__)){
return (datascript.btset.node_len.call(null,left) <= datascript.btset.min_len);
} else {
return and__16793__auto__;
}
})())){
return datascript.btset.return_array.call(null,datascript.btset.node_merge.call(null,left,node),right);
} else {
if(cljs.core.truth_((function (){var and__16793__auto__ = right;
if(cljs.core.truth_(and__16793__auto__)){
return (datascript.btset.node_len.call(null,right) <= datascript.btset.min_len);
} else {
return and__16793__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,datascript.btset.node_merge.call(null,node,right));
} else {
if(cljs.core.truth_((function (){var and__16793__auto__ = left;
if(cljs.core.truth_(and__16793__auto__)){
return ((right == null)) || ((datascript.btset.node_len.call(null,left) < datascript.btset.node_len.call(null,right)));
} else {
return and__16793__auto__;
}
})())){
var nodes = datascript.btset.node_merge_n_split.call(null,left,node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = datascript.btset.node_merge_n_split.call(null,node,right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.datascript$btset$INode$ = true;

datascript.btset.Node.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Node.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Node(datascript.arrays.aconcat.call(null,self__.keys,next.keys),datascript.arrays.aconcat.call(null,self__.pointers,next.pointers)));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return datascript.btset.node_lookup.call(null,(self__.pointers[idx]),cmp,key);
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = datascript.btset.node_conj.call(null,(self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,idx,(idx + (1)),datascript.arrays.amap.call(null,datascript.btset.node_lim_key,nodes));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = datascript.btset.node_disj.call(null,child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,left_idx,right_idx,datascript.arrays.amap.call(null,datascript.btset.node_lim_key,disjned));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function datascript$btset$__GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Leaf = (function (keys){
this.keys = keys;
})
datascript.btset.Leaf.prototype.datascript$btset$INode$ = true;

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Leaf(datascript.arrays.aconcat.call(null,self__.keys,next.keys)));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.Leaf((ks[(0)]))),(new datascript.btset.Leaf((ks[(1)]))));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (((0) === cmp.call(null,key,(self__.keys[idx]))))){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.Leaf(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.Leaf(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

datascript.btset.Leaf.cljs$lang$type = true;

datascript.btset.Leaf.cljs$lang$ctorStr = "datascript.btset/Leaf";

datascript.btset.Leaf.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"datascript.btset/Leaf");
});

datascript.btset.__GT_Leaf = (function datascript$btset$__GT_Leaf(keys){
return (new datascript.btset.Leaf(keys));
});

datascript.btset.btset_conj;

datascript.btset.btset_disj;

datascript.btset.btset_iter;
datascript.btset.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {datascript.btset.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__16805__auto__ = datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return not_found;
}
});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__17240__auto__ = self__.__hash;
if(!((h__17240__auto__ == null))){
return h__17240__auto__;
} else {
var h__17240__auto____$1 = cljs.core.hash_iset.call(null,this$__$1);
self__.__hash = h__17240__auto____$1;

return h__17240__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__21309_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__21309_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),self__.comparator,self__.meta,datascript.btset.uninitialized_hash));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_disj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f);
} else {
return f.call(null);
}
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f,start);
} else {
return start;
}
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_conj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__21312 = null;
var G__21312__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21312__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21312 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21312__2.call(this,self__,k);
case 3:
return G__21312__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21312.cljs$core$IFn$_invoke$arity$2 = G__21312__2;
G__21312.cljs$core$IFn$_invoke$arity$3 = G__21312__3;
return G__21312;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args21311){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21311)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function datascript$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function datascript$btset$alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,datascript.btset.uninitialized_hash));
});
datascript.btset.keys_for = (function datascript$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__21313 = (level - datascript.btset.level_shift);
var G__21314 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__21313;
node = G__21314;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
var roots = datascript.btset.node_conj.call(null,set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,roots),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
var new_roots = datascript.btset.node_disj.call(null,set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && (((1) === new_root.pointers.length))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
});
datascript.btset._next_path = (function datascript$btset$_next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = datascript$btset$_next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datascript.btset.next_path = (function datascript$btset$next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datascript.btset._rpath = (function datascript$btset$_rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__21315 = datascript.btset.alast.call(null,node__$1.pointers);
var G__21316 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__21317 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__21315;
path = G__21316;
level__$1 = G__21317;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function datascript$btset$_prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = datascript$btset$_prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datascript.btset.prev_path = (function datascript$btset$prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});
datascript.btset.iter;

datascript.btset.riter;

datascript.btset.iter_first;

datascript.btset.iter_next;

datascript.btset.iter_chunk;

datascript.btset.iter_chunked_next;

datascript.btset.iter_rseq;

datascript.btset.iter_reduce;
/**
 * Iterator that represents whole set
 */
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
if((datascript.btset.node_len.call(null,set.root) > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset.iter.call(null,set,left,right);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
datascript.btset.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_first.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16805__auto__ = datascript.btset.iter_next.call(null,this$__$1);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunk.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16805__auto__ = cljs.core._chunked_next.call(null,this$__$1);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunked_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f,start);
});

datascript.btset.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_rseq.call(null,this$__$1);
});

datascript.btset.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.Iter.cljs$lang$type = true;

datascript.btset.Iter.cljs$lang$ctorStr = "datascript.btset/Iter";

datascript.btset.Iter.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"datascript.btset/Iter");
});

datascript.btset.__GT_Iter = (function datascript$btset$__GT_Iter(set,left,right,keys,idx){
return (new datascript.btset.Iter(set,left,right,keys,idx));
});

datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return (new datascript.btset.Iter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
if(cljs.core.truth_(iter.keys)){
return (iter.keys[iter.idx]);
} else {
return null;
}
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
if(cljs.core.truth_(keys)){
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
return (new datascript.btset.Iter(set,(left + (1)),right,keys,(idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,set,left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var end_idx = ((cljs.core._EQ_.call(null,(left | datascript.btset.path_mask),(right | datascript.btset.path_mask)))?(right & datascript.btset.path_mask):keys.length);
return cljs.core.array_chunk.call(null,keys,idx,end_idx);
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var left__$1 = datascript.btset.next_path.call(null,set,(left + ((keys.length - idx) - (1))));
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
if(cljs.core.truth_(iter.keys)){
return datascript.btset.riter.call(null,set,datascript.btset.prev_path.call(null,set,left),datascript.btset.prev_path.call(null,set,right));
} else {
return null;
}
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var args21318 = [];
var len__17863__auto___21321 = arguments.length;
var i__17864__auto___21322 = (0);
while(true){
if((i__17864__auto___21322 < len__17863__auto___21321)){
args21318.push((arguments[i__17864__auto___21322]));

var G__21323 = (i__17864__auto___21322 + (1));
i__17864__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var G__21320 = args21318.length;
switch (G__21320) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21318.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
if((iter.keys == null)){
return f.call(null);
} else {
var first = datascript.btset.iter_first.call(null,iter);
var temp__4423__auto__ = datascript.btset.iter_next.call(null,iter);
if(cljs.core.truth_(temp__4423__auto__)){
var next = temp__4423__auto__;
return datascript.btset.iter_reduce.call(null,next,f,first);
} else {
return first;
}
}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
var set = iter.set;
var right = iter.right;
var left = iter.left;
var keys = iter.keys;
var idx = iter.idx;
var acc = start;
while(true){
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
if((keys == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys[idx]));
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
var G__21325 = (left + (1));
var G__21326 = keys;
var G__21327 = (idx + (1));
var G__21328 = new_acc;
left = G__21325;
keys = G__21326;
idx = G__21327;
acc = G__21328;
continue;
} else {
return new_acc;
}
} else {
var new_left = datascript.btset.next_path.call(null,set,left);
if((!(((-1) === new_left))) && ((new_left < right))){
var G__21329 = new_left;
var G__21330 = datascript.btset.keys_for.call(null,set,new_left);
var G__21331 = datascript.btset.path_get.call(null,new_left,(0));
var G__21332 = new_acc;
left = G__21329;
keys = G__21330;
idx = G__21331;
acc = G__21332;
continue;
} else {
return new_acc;
}
}

}
}
break;
}
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;
datascript.btset.riter_first;

datascript.btset.riter_next;

datascript.btset.riter_rseq;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
*/
datascript.btset.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.btset.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_first.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16805__auto__ = datascript.btset.riter_next.call(null,this$__$1);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_next.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_rseq.call(null,this$__$1);
});

datascript.btset.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.ReverseIter.cljs$lang$type = true;

datascript.btset.ReverseIter.cljs$lang$ctorStr = "datascript.btset/ReverseIter";

datascript.btset.ReverseIter.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"datascript.btset/ReverseIter");
});

datascript.btset.__GT_ReverseIter = (function datascript$btset$__GT_ReverseIter(set,left,right,keys,idx){
return (new datascript.btset.ReverseIter(set,left,right,keys,idx));
});

datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return (new datascript.btset.ReverseIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
if(cljs.core.truth_(riter.keys)){
return (riter.keys[riter.idx]);
} else {
return null;
}
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
var set = ri.set;
var left = ri.left;
var right = ri.right;
var keys = ri.keys;
var idx = ri.idx;
if(cljs.core.truth_(keys)){
if(((idx - (1)) >= (0))){
if(((right - (1)) > left)){
return (new datascript.btset.ReverseIter(set,left,(right - (1)),keys,(idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,set,right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > left))){
return datascript.btset.riter.call(null,set,left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
var set = riter.set;
var left = riter.left;
var right = riter.right;
if(cljs.core.truth_(cljs.core.keys)){
var new_left = (((left === (-1)))?(0):datascript.btset.next_path.call(null,set,left));
var new_right = datascript.btset.next_path.call(null,set,right);
var new_right__$1 = (((new_right === (-1)))?(right + (1)):new_right);
return datascript.btset.iter.call(null,set,new_left,new_right__$1);
} else {
return null;
}
});
datascript.btset._distance = (function datascript$btset$_distance(node,left,right,level){
var idx_l = datascript.btset.path_get.call(null,left,level);
var idx_r = datascript.btset.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return datascript$btset$_distance.call(null,(node.pointers[idx_l]),left,right,(level - datascript.btset.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__21333 = (level__$1 - datascript.btset.level_shift);
var G__21334 = (res * datascript.btset.avg_len);
level__$1 = G__21333;
res = G__21334;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datascript.btset.distance = (function datascript$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datascript.btset.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return datascript.btset._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
datascript.btset.est_count = (function datascript$btset$est_count(iter){
return datascript.btset.distance.call(null,iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datascript.btset._seek = (function datascript$btset$_seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__21335 = (node.pointers[idx]);
var G__21336 = datascript.btset.path_set.call(null,path,level,idx);
var G__21337 = (level - datascript.btset.level_shift);
node = G__21335;
path = G__21336;
level = G__21337;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datascript.btset._rseek = (function datascript$btset$_rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__21338 = (node.pointers[idx]);
var G__21339 = datascript.btset.path_set.call(null,path,level,idx);
var G__21340 = (level - datascript.btset.level_shift);
node = G__21338;
path = G__21339;
level = G__21340;
continue;
}
break;
}
});
datascript.btset._slice = (function datascript$btset$_slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.Iter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datascript.btset.slice = (function datascript$btset$slice(var_args){
var args21341 = [];
var len__17863__auto___21344 = arguments.length;
var i__17864__auto___21345 = (0);
while(true){
if((i__17864__auto___21345 < len__17863__auto___21344)){
args21341.push((arguments[i__17864__auto___21345]));

var G__21346 = (i__17864__auto___21345 + (1));
i__17864__auto___21345 = G__21346;
continue;
} else {
}
break;
}

var G__21343 = args21341.length;
switch (G__21343) {
case 2:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21341.length)].join('')));

}
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datascript.btset.slice.call(null,set,key,key);
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return datascript.btset._slice.call(null,set,key_from,key_to);
});

datascript.btset.slice.cljs$lang$maxFixedArity = 3;
datascript.btset._btset_from_sorted_arr = (function datascript$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,(function (p1__21348_SHARP_){
return (new datascript.btset.Leaf(p1__21348_SHARP_));
}),datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__21351 = cljs.core.count.call(null,current_level);
switch (G__21351) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,datascript.btset.uninitialized_hash));

break;
default:
var G__21353 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__21351,leafs){
return (function (p1__21349_SHARP_){
return (new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,p1__21349_SHARP_),p1__21349_SHARP_));
});})(current_level,shift,G__21351,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__21354 = (shift + datascript.btset.level_shift);
current_level = G__21353;
shift = G__21354;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function datascript$btset$_btset_from_seq(seq,cmp){
var arr = datascript.btset.sorted_arr_distinct.call(null,datascript.arrays.asort.call(null,cljs.core.into_array.call(null,seq),cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
datascript.btset.btset_by = (function datascript$btset$btset_by(var_args){
var args21355 = [];
var len__17863__auto___21360 = arguments.length;
var i__17864__auto___21361 = (0);
while(true){
if((i__17864__auto___21361 < len__17863__auto___21360)){
args21355.push((arguments[i__17864__auto___21361]));

var G__21362 = (i__17864__auto___21361 + (1));
i__17864__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var G__21359 = args21355.length;
switch (G__21359) {
case 1:
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args21355.slice((1)),(0)));
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17882__auto__);

}
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
});

datascript.btset.btset_by.cljs$lang$applyTo = (function (seq21356){
var G__21357 = cljs.core.first.call(null,seq21356);
var seq21356__$1 = cljs.core.next.call(null,seq21356);
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__21357,seq21356__$1);
});

datascript.btset.btset_by.cljs$lang$maxFixedArity = (1);
datascript.btset.btset = (function datascript$btset$btset(var_args){
var args21364 = [];
var len__17863__auto___21368 = arguments.length;
var i__17864__auto___21369 = (0);
while(true){
if((i__17864__auto___21369 < len__17863__auto___21368)){
args21364.push((arguments[i__17864__auto___21369]));

var G__21370 = (i__17864__auto___21369 + (1));
i__17864__auto___21369 = G__21370;
continue;
} else {
}
break;
}

var G__21367 = args21364.length;
switch (G__21367) {
case 0:
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17882__auto__ = (new cljs.core.IndexedSeq(args21364.slice((0)),(0)));
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__17882__auto__);

}
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
});

datascript.btset.btset.cljs$lang$applyTo = (function (seq21365){
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21365));
});

datascript.btset.btset.cljs$lang$maxFixedArity = (0);

//# sourceMappingURL=btset.js.map?rel=1457371265071