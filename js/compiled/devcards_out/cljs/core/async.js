// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20372 = [];
var len__17863__auto___20378 = arguments.length;
var i__17864__auto___20379 = (0);
while(true){
if((i__17864__auto___20379 < len__17863__auto___20378)){
args20372.push((arguments[i__17864__auto___20379]));

var G__20380 = (i__17864__auto___20379 + (1));
i__17864__auto___20379 = G__20380;
continue;
} else {
}
break;
}

var G__20374 = args20372.length;
switch (G__20374) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20372.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20375 = (function (f,blockable,meta20376){
this.f = f;
this.blockable = blockable;
this.meta20376 = meta20376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20377,meta20376__$1){
var self__ = this;
var _20377__$1 = this;
return (new cljs.core.async.t_cljs$core$async20375(self__.f,self__.blockable,meta20376__$1));
});

cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20377){
var self__ = this;
var _20377__$1 = this;
return self__.meta20376;
});

cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20376","meta20376",-1299979160,null)], null);
});

cljs.core.async.t_cljs$core$async20375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20375";

cljs.core.async.t_cljs$core$async20375.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20375");
});

cljs.core.async.__GT_t_cljs$core$async20375 = (function cljs$core$async$__GT_t_cljs$core$async20375(f__$1,blockable__$1,meta20376){
return (new cljs.core.async.t_cljs$core$async20375(f__$1,blockable__$1,meta20376));
});

}

return (new cljs.core.async.t_cljs$core$async20375(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20384 = [];
var len__17863__auto___20387 = arguments.length;
var i__17864__auto___20388 = (0);
while(true){
if((i__17864__auto___20388 < len__17863__auto___20387)){
args20384.push((arguments[i__17864__auto___20388]));

var G__20389 = (i__17864__auto___20388 + (1));
i__17864__auto___20388 = G__20389;
continue;
} else {
}
break;
}

var G__20386 = args20384.length;
switch (G__20386) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20384.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20391 = [];
var len__17863__auto___20394 = arguments.length;
var i__17864__auto___20395 = (0);
while(true){
if((i__17864__auto___20395 < len__17863__auto___20394)){
args20391.push((arguments[i__17864__auto___20395]));

var G__20396 = (i__17864__auto___20395 + (1));
i__17864__auto___20395 = G__20396;
continue;
} else {
}
break;
}

var G__20393 = args20391.length;
switch (G__20393) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20391.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20398 = [];
var len__17863__auto___20401 = arguments.length;
var i__17864__auto___20402 = (0);
while(true){
if((i__17864__auto___20402 < len__17863__auto___20401)){
args20398.push((arguments[i__17864__auto___20402]));

var G__20403 = (i__17864__auto___20402 + (1));
i__17864__auto___20402 = G__20403;
continue;
} else {
}
break;
}

var G__20400 = args20398.length;
switch (G__20400) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20398.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20405 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20405);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20405,ret){
return (function (){
return fn1.call(null,val_20405);
});})(val_20405,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20406 = [];
var len__17863__auto___20409 = arguments.length;
var i__17864__auto___20410 = (0);
while(true){
if((i__17864__auto___20410 < len__17863__auto___20409)){
args20406.push((arguments[i__17864__auto___20410]));

var G__20411 = (i__17864__auto___20410 + (1));
i__17864__auto___20410 = G__20411;
continue;
} else {
}
break;
}

var G__20408 = args20406.length;
switch (G__20408) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20406.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___20413 = n;
var x_20414 = (0);
while(true){
if((x_20414 < n__17708__auto___20413)){
(a[x_20414] = (0));

var G__20415 = (x_20414 + (1));
x_20414 = G__20415;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20416 = (i + (1));
i = G__20416;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20420 = (function (alt_flag,flag,meta20421){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20421 = meta20421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20422,meta20421__$1){
var self__ = this;
var _20422__$1 = this;
return (new cljs.core.async.t_cljs$core$async20420(self__.alt_flag,self__.flag,meta20421__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20422){
var self__ = this;
var _20422__$1 = this;
return self__.meta20421;
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20421","meta20421",-1415838513,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20420";

cljs.core.async.t_cljs$core$async20420.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20420");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20420 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20420(alt_flag__$1,flag__$1,meta20421){
return (new cljs.core.async.t_cljs$core$async20420(alt_flag__$1,flag__$1,meta20421));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20420(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20426 = (function (alt_handler,flag,cb,meta20427){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20427 = meta20427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20428,meta20427__$1){
var self__ = this;
var _20428__$1 = this;
return (new cljs.core.async.t_cljs$core$async20426(self__.alt_handler,self__.flag,self__.cb,meta20427__$1));
});

cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20428){
var self__ = this;
var _20428__$1 = this;
return self__.meta20427;
});

cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20427","meta20427",-2011739960,null)], null);
});

cljs.core.async.t_cljs$core$async20426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20426";

cljs.core.async.t_cljs$core$async20426.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20426");
});

cljs.core.async.__GT_t_cljs$core$async20426 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20426(alt_handler__$1,flag__$1,cb__$1,meta20427){
return (new cljs.core.async.t_cljs$core$async20426(alt_handler__$1,flag__$1,cb__$1,meta20427));
});

}

return (new cljs.core.async.t_cljs$core$async20426(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20429_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20429_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20430_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20430_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20431 = (i + (1));
i = G__20431;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20437 = arguments.length;
var i__17864__auto___20438 = (0);
while(true){
if((i__17864__auto___20438 < len__17863__auto___20437)){
args__17870__auto__.push((arguments[i__17864__auto___20438]));

var G__20439 = (i__17864__auto___20438 + (1));
i__17864__auto___20438 = G__20439;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20434){
var map__20435 = p__20434;
var map__20435__$1 = ((((!((map__20435 == null)))?((((map__20435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20435):map__20435);
var opts = map__20435__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20432){
var G__20433 = cljs.core.first.call(null,seq20432);
var seq20432__$1 = cljs.core.next.call(null,seq20432);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20433,seq20432__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20440 = [];
var len__17863__auto___20490 = arguments.length;
var i__17864__auto___20491 = (0);
while(true){
if((i__17864__auto___20491 < len__17863__auto___20490)){
args20440.push((arguments[i__17864__auto___20491]));

var G__20492 = (i__17864__auto___20491 + (1));
i__17864__auto___20491 = G__20492;
continue;
} else {
}
break;
}

var G__20442 = args20440.length;
switch (G__20442) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20440.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20327__auto___20494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___20494){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___20494){
return (function (state_20466){
var state_val_20467 = (state_20466[(1)]);
if((state_val_20467 === (7))){
var inst_20462 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20468_20495 = state_20466__$1;
(statearr_20468_20495[(2)] = inst_20462);

(statearr_20468_20495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (1))){
var state_20466__$1 = state_20466;
var statearr_20469_20496 = state_20466__$1;
(statearr_20469_20496[(2)] = null);

(statearr_20469_20496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (4))){
var inst_20445 = (state_20466[(7)]);
var inst_20445__$1 = (state_20466[(2)]);
var inst_20446 = (inst_20445__$1 == null);
var state_20466__$1 = (function (){var statearr_20470 = state_20466;
(statearr_20470[(7)] = inst_20445__$1);

return statearr_20470;
})();
if(cljs.core.truth_(inst_20446)){
var statearr_20471_20497 = state_20466__$1;
(statearr_20471_20497[(1)] = (5));

} else {
var statearr_20472_20498 = state_20466__$1;
(statearr_20472_20498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (13))){
var state_20466__$1 = state_20466;
var statearr_20473_20499 = state_20466__$1;
(statearr_20473_20499[(2)] = null);

(statearr_20473_20499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (6))){
var inst_20445 = (state_20466[(7)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20466__$1,(11),to,inst_20445);
} else {
if((state_val_20467 === (3))){
var inst_20464 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20466__$1,inst_20464);
} else {
if((state_val_20467 === (12))){
var state_20466__$1 = state_20466;
var statearr_20474_20500 = state_20466__$1;
(statearr_20474_20500[(2)] = null);

(statearr_20474_20500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (2))){
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20466__$1,(4),from);
} else {
if((state_val_20467 === (11))){
var inst_20455 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
if(cljs.core.truth_(inst_20455)){
var statearr_20475_20501 = state_20466__$1;
(statearr_20475_20501[(1)] = (12));

} else {
var statearr_20476_20502 = state_20466__$1;
(statearr_20476_20502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (9))){
var state_20466__$1 = state_20466;
var statearr_20477_20503 = state_20466__$1;
(statearr_20477_20503[(2)] = null);

(statearr_20477_20503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (5))){
var state_20466__$1 = state_20466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20478_20504 = state_20466__$1;
(statearr_20478_20504[(1)] = (8));

} else {
var statearr_20479_20505 = state_20466__$1;
(statearr_20479_20505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (14))){
var inst_20460 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20480_20506 = state_20466__$1;
(statearr_20480_20506[(2)] = inst_20460);

(statearr_20480_20506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (10))){
var inst_20452 = (state_20466[(2)]);
var state_20466__$1 = state_20466;
var statearr_20481_20507 = state_20466__$1;
(statearr_20481_20507[(2)] = inst_20452);

(statearr_20481_20507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20467 === (8))){
var inst_20449 = cljs.core.async.close_BANG_.call(null,to);
var state_20466__$1 = state_20466;
var statearr_20482_20508 = state_20466__$1;
(statearr_20482_20508[(2)] = inst_20449);

(statearr_20482_20508[(1)] = (10));


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
});})(c__20327__auto___20494))
;
return ((function (switch__20215__auto__,c__20327__auto___20494){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_20486 = [null,null,null,null,null,null,null,null];
(statearr_20486[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_20486[(1)] = (1));

return statearr_20486;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_20466){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20487){if((e20487 instanceof Object)){
var ex__20219__auto__ = e20487;
var statearr_20488_20509 = state_20466;
(statearr_20488_20509[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20510 = state_20466;
state_20466 = G__20510;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_20466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_20466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___20494))
})();
var state__20329__auto__ = (function (){var statearr_20489 = f__20328__auto__.call(null);
(statearr_20489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___20494);

return statearr_20489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___20494))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20694){
var vec__20695 = p__20694;
var v = cljs.core.nth.call(null,vec__20695,(0),null);
var p = cljs.core.nth.call(null,vec__20695,(1),null);
var job = vec__20695;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20327__auto___20877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results){
return (function (state_20700){
var state_val_20701 = (state_20700[(1)]);
if((state_val_20701 === (1))){
var state_20700__$1 = state_20700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20700__$1,(2),res,v);
} else {
if((state_val_20701 === (2))){
var inst_20697 = (state_20700[(2)]);
var inst_20698 = cljs.core.async.close_BANG_.call(null,res);
var state_20700__$1 = (function (){var statearr_20702 = state_20700;
(statearr_20702[(7)] = inst_20697);

return statearr_20702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20700__$1,inst_20698);
} else {
return null;
}
}
});})(c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results))
;
return ((function (switch__20215__auto__,c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_20706 = [null,null,null,null,null,null,null,null];
(statearr_20706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__);

(statearr_20706[(1)] = (1));

return statearr_20706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1 = (function (state_20700){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20707){if((e20707 instanceof Object)){
var ex__20219__auto__ = e20707;
var statearr_20708_20878 = state_20700;
(statearr_20708_20878[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20879 = state_20700;
state_20700 = G__20879;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = function(state_20700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1.call(this,state_20700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results))
})();
var state__20329__auto__ = (function (){var statearr_20709 = f__20328__auto__.call(null);
(statearr_20709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___20877);

return statearr_20709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___20877,res,vec__20695,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20710){
var vec__20711 = p__20710;
var v = cljs.core.nth.call(null,vec__20711,(0),null);
var p = cljs.core.nth.call(null,vec__20711,(1),null);
var job = vec__20711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___20880 = n;
var __20881 = (0);
while(true){
if((__20881 < n__17708__auto___20880)){
var G__20712_20882 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20712_20882) {
case "compute":
var c__20327__auto___20884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20881,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (__20881,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function (state_20725){
var state_val_20726 = (state_20725[(1)]);
if((state_val_20726 === (1))){
var state_20725__$1 = state_20725;
var statearr_20727_20885 = state_20725__$1;
(statearr_20727_20885[(2)] = null);

(statearr_20727_20885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20726 === (2))){
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20725__$1,(4),jobs);
} else {
if((state_val_20726 === (3))){
var inst_20723 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20725__$1,inst_20723);
} else {
if((state_val_20726 === (4))){
var inst_20715 = (state_20725[(2)]);
var inst_20716 = process.call(null,inst_20715);
var state_20725__$1 = state_20725;
if(cljs.core.truth_(inst_20716)){
var statearr_20728_20886 = state_20725__$1;
(statearr_20728_20886[(1)] = (5));

} else {
var statearr_20729_20887 = state_20725__$1;
(statearr_20729_20887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20726 === (5))){
var state_20725__$1 = state_20725;
var statearr_20730_20888 = state_20725__$1;
(statearr_20730_20888[(2)] = null);

(statearr_20730_20888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20726 === (6))){
var state_20725__$1 = state_20725;
var statearr_20731_20889 = state_20725__$1;
(statearr_20731_20889[(2)] = null);

(statearr_20731_20889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20726 === (7))){
var inst_20721 = (state_20725[(2)]);
var state_20725__$1 = state_20725;
var statearr_20732_20890 = state_20725__$1;
(statearr_20732_20890[(2)] = inst_20721);

(statearr_20732_20890[(1)] = (3));


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
});})(__20881,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
;
return ((function (__20881,switch__20215__auto__,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_20736 = [null,null,null,null,null,null,null];
(statearr_20736[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__);

(statearr_20736[(1)] = (1));

return statearr_20736;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1 = (function (state_20725){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20737){if((e20737 instanceof Object)){
var ex__20219__auto__ = e20737;
var statearr_20738_20891 = state_20725;
(statearr_20738_20891[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20892 = state_20725;
state_20725 = G__20892;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = function(state_20725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1.call(this,state_20725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__;
})()
;})(__20881,switch__20215__auto__,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
})();
var state__20329__auto__ = (function (){var statearr_20739 = f__20328__auto__.call(null);
(statearr_20739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___20884);

return statearr_20739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(__20881,c__20327__auto___20884,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
);


break;
case "async":
var c__20327__auto___20893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20881,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (__20881,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function (state_20752){
var state_val_20753 = (state_20752[(1)]);
if((state_val_20753 === (1))){
var state_20752__$1 = state_20752;
var statearr_20754_20894 = state_20752__$1;
(statearr_20754_20894[(2)] = null);

(statearr_20754_20894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (2))){
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20752__$1,(4),jobs);
} else {
if((state_val_20753 === (3))){
var inst_20750 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20752__$1,inst_20750);
} else {
if((state_val_20753 === (4))){
var inst_20742 = (state_20752[(2)]);
var inst_20743 = async.call(null,inst_20742);
var state_20752__$1 = state_20752;
if(cljs.core.truth_(inst_20743)){
var statearr_20755_20895 = state_20752__$1;
(statearr_20755_20895[(1)] = (5));

} else {
var statearr_20756_20896 = state_20752__$1;
(statearr_20756_20896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (5))){
var state_20752__$1 = state_20752;
var statearr_20757_20897 = state_20752__$1;
(statearr_20757_20897[(2)] = null);

(statearr_20757_20897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (6))){
var state_20752__$1 = state_20752;
var statearr_20758_20898 = state_20752__$1;
(statearr_20758_20898[(2)] = null);

(statearr_20758_20898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20753 === (7))){
var inst_20748 = (state_20752[(2)]);
var state_20752__$1 = state_20752;
var statearr_20759_20899 = state_20752__$1;
(statearr_20759_20899[(2)] = inst_20748);

(statearr_20759_20899[(1)] = (3));


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
});})(__20881,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
;
return ((function (__20881,switch__20215__auto__,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_20763 = [null,null,null,null,null,null,null];
(statearr_20763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__);

(statearr_20763[(1)] = (1));

return statearr_20763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1 = (function (state_20752){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20764){if((e20764 instanceof Object)){
var ex__20219__auto__ = e20764;
var statearr_20765_20900 = state_20752;
(statearr_20765_20900[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20901 = state_20752;
state_20752 = G__20901;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = function(state_20752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1.call(this,state_20752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__;
})()
;})(__20881,switch__20215__auto__,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
})();
var state__20329__auto__ = (function (){var statearr_20766 = f__20328__auto__.call(null);
(statearr_20766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___20893);

return statearr_20766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(__20881,c__20327__auto___20893,G__20712_20882,n__17708__auto___20880,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20902 = (__20881 + (1));
__20881 = G__20902;
continue;
} else {
}
break;
}

var c__20327__auto___20903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___20903,jobs,results,process,async){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___20903,jobs,results,process,async){
return (function (state_20788){
var state_val_20789 = (state_20788[(1)]);
if((state_val_20789 === (1))){
var state_20788__$1 = state_20788;
var statearr_20790_20904 = state_20788__$1;
(statearr_20790_20904[(2)] = null);

(statearr_20790_20904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (2))){
var state_20788__$1 = state_20788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20788__$1,(4),from);
} else {
if((state_val_20789 === (3))){
var inst_20786 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20788__$1,inst_20786);
} else {
if((state_val_20789 === (4))){
var inst_20769 = (state_20788[(7)]);
var inst_20769__$1 = (state_20788[(2)]);
var inst_20770 = (inst_20769__$1 == null);
var state_20788__$1 = (function (){var statearr_20791 = state_20788;
(statearr_20791[(7)] = inst_20769__$1);

return statearr_20791;
})();
if(cljs.core.truth_(inst_20770)){
var statearr_20792_20905 = state_20788__$1;
(statearr_20792_20905[(1)] = (5));

} else {
var statearr_20793_20906 = state_20788__$1;
(statearr_20793_20906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (5))){
var inst_20772 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20788__$1 = state_20788;
var statearr_20794_20907 = state_20788__$1;
(statearr_20794_20907[(2)] = inst_20772);

(statearr_20794_20907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (6))){
var inst_20774 = (state_20788[(8)]);
var inst_20769 = (state_20788[(7)]);
var inst_20774__$1 = cljs.core.async.chan.call(null,(1));
var inst_20775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20776 = [inst_20769,inst_20774__$1];
var inst_20777 = (new cljs.core.PersistentVector(null,2,(5),inst_20775,inst_20776,null));
var state_20788__$1 = (function (){var statearr_20795 = state_20788;
(statearr_20795[(8)] = inst_20774__$1);

return statearr_20795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20788__$1,(8),jobs,inst_20777);
} else {
if((state_val_20789 === (7))){
var inst_20784 = (state_20788[(2)]);
var state_20788__$1 = state_20788;
var statearr_20796_20908 = state_20788__$1;
(statearr_20796_20908[(2)] = inst_20784);

(statearr_20796_20908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20789 === (8))){
var inst_20774 = (state_20788[(8)]);
var inst_20779 = (state_20788[(2)]);
var state_20788__$1 = (function (){var statearr_20797 = state_20788;
(statearr_20797[(9)] = inst_20779);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20788__$1,(9),results,inst_20774);
} else {
if((state_val_20789 === (9))){
var inst_20781 = (state_20788[(2)]);
var state_20788__$1 = (function (){var statearr_20798 = state_20788;
(statearr_20798[(10)] = inst_20781);

return statearr_20798;
})();
var statearr_20799_20909 = state_20788__$1;
(statearr_20799_20909[(2)] = null);

(statearr_20799_20909[(1)] = (2));


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
});})(c__20327__auto___20903,jobs,results,process,async))
;
return ((function (switch__20215__auto__,c__20327__auto___20903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_20803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__);

(statearr_20803[(1)] = (1));

return statearr_20803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1 = (function (state_20788){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20804){if((e20804 instanceof Object)){
var ex__20219__auto__ = e20804;
var statearr_20805_20910 = state_20788;
(statearr_20805_20910[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20911 = state_20788;
state_20788 = G__20911;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = function(state_20788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1.call(this,state_20788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___20903,jobs,results,process,async))
})();
var state__20329__auto__ = (function (){var statearr_20806 = f__20328__auto__.call(null);
(statearr_20806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___20903);

return statearr_20806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___20903,jobs,results,process,async))
);


var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__,jobs,results,process,async){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__,jobs,results,process,async){
return (function (state_20844){
var state_val_20845 = (state_20844[(1)]);
if((state_val_20845 === (7))){
var inst_20840 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20846_20912 = state_20844__$1;
(statearr_20846_20912[(2)] = inst_20840);

(statearr_20846_20912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (20))){
var state_20844__$1 = state_20844;
var statearr_20847_20913 = state_20844__$1;
(statearr_20847_20913[(2)] = null);

(statearr_20847_20913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (1))){
var state_20844__$1 = state_20844;
var statearr_20848_20914 = state_20844__$1;
(statearr_20848_20914[(2)] = null);

(statearr_20848_20914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (4))){
var inst_20809 = (state_20844[(7)]);
var inst_20809__$1 = (state_20844[(2)]);
var inst_20810 = (inst_20809__$1 == null);
var state_20844__$1 = (function (){var statearr_20849 = state_20844;
(statearr_20849[(7)] = inst_20809__$1);

return statearr_20849;
})();
if(cljs.core.truth_(inst_20810)){
var statearr_20850_20915 = state_20844__$1;
(statearr_20850_20915[(1)] = (5));

} else {
var statearr_20851_20916 = state_20844__$1;
(statearr_20851_20916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (15))){
var inst_20822 = (state_20844[(8)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20844__$1,(18),to,inst_20822);
} else {
if((state_val_20845 === (21))){
var inst_20835 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20852_20917 = state_20844__$1;
(statearr_20852_20917[(2)] = inst_20835);

(statearr_20852_20917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (13))){
var inst_20837 = (state_20844[(2)]);
var state_20844__$1 = (function (){var statearr_20853 = state_20844;
(statearr_20853[(9)] = inst_20837);

return statearr_20853;
})();
var statearr_20854_20918 = state_20844__$1;
(statearr_20854_20918[(2)] = null);

(statearr_20854_20918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (6))){
var inst_20809 = (state_20844[(7)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20844__$1,(11),inst_20809);
} else {
if((state_val_20845 === (17))){
var inst_20830 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
if(cljs.core.truth_(inst_20830)){
var statearr_20855_20919 = state_20844__$1;
(statearr_20855_20919[(1)] = (19));

} else {
var statearr_20856_20920 = state_20844__$1;
(statearr_20856_20920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (3))){
var inst_20842 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20844__$1,inst_20842);
} else {
if((state_val_20845 === (12))){
var inst_20819 = (state_20844[(10)]);
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20844__$1,(14),inst_20819);
} else {
if((state_val_20845 === (2))){
var state_20844__$1 = state_20844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20844__$1,(4),results);
} else {
if((state_val_20845 === (19))){
var state_20844__$1 = state_20844;
var statearr_20857_20921 = state_20844__$1;
(statearr_20857_20921[(2)] = null);

(statearr_20857_20921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (11))){
var inst_20819 = (state_20844[(2)]);
var state_20844__$1 = (function (){var statearr_20858 = state_20844;
(statearr_20858[(10)] = inst_20819);

return statearr_20858;
})();
var statearr_20859_20922 = state_20844__$1;
(statearr_20859_20922[(2)] = null);

(statearr_20859_20922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (9))){
var state_20844__$1 = state_20844;
var statearr_20860_20923 = state_20844__$1;
(statearr_20860_20923[(2)] = null);

(statearr_20860_20923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (5))){
var state_20844__$1 = state_20844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20861_20924 = state_20844__$1;
(statearr_20861_20924[(1)] = (8));

} else {
var statearr_20862_20925 = state_20844__$1;
(statearr_20862_20925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (14))){
var inst_20822 = (state_20844[(8)]);
var inst_20824 = (state_20844[(11)]);
var inst_20822__$1 = (state_20844[(2)]);
var inst_20823 = (inst_20822__$1 == null);
var inst_20824__$1 = cljs.core.not.call(null,inst_20823);
var state_20844__$1 = (function (){var statearr_20863 = state_20844;
(statearr_20863[(8)] = inst_20822__$1);

(statearr_20863[(11)] = inst_20824__$1);

return statearr_20863;
})();
if(inst_20824__$1){
var statearr_20864_20926 = state_20844__$1;
(statearr_20864_20926[(1)] = (15));

} else {
var statearr_20865_20927 = state_20844__$1;
(statearr_20865_20927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (16))){
var inst_20824 = (state_20844[(11)]);
var state_20844__$1 = state_20844;
var statearr_20866_20928 = state_20844__$1;
(statearr_20866_20928[(2)] = inst_20824);

(statearr_20866_20928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (10))){
var inst_20816 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20867_20929 = state_20844__$1;
(statearr_20867_20929[(2)] = inst_20816);

(statearr_20867_20929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (18))){
var inst_20827 = (state_20844[(2)]);
var state_20844__$1 = state_20844;
var statearr_20868_20930 = state_20844__$1;
(statearr_20868_20930[(2)] = inst_20827);

(statearr_20868_20930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20845 === (8))){
var inst_20813 = cljs.core.async.close_BANG_.call(null,to);
var state_20844__$1 = state_20844;
var statearr_20869_20931 = state_20844__$1;
(statearr_20869_20931[(2)] = inst_20813);

(statearr_20869_20931[(1)] = (10));


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
});})(c__20327__auto__,jobs,results,process,async))
;
return ((function (switch__20215__auto__,c__20327__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_20873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__);

(statearr_20873[(1)] = (1));

return statearr_20873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1 = (function (state_20844){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20874){if((e20874 instanceof Object)){
var ex__20219__auto__ = e20874;
var statearr_20875_20932 = state_20844;
(statearr_20875_20932[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20933 = state_20844;
state_20844 = G__20933;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__ = function(state_20844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1.call(this,state_20844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__,jobs,results,process,async))
})();
var state__20329__auto__ = (function (){var statearr_20876 = f__20328__auto__.call(null);
(statearr_20876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_20876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__,jobs,results,process,async))
);

return c__20327__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20934 = [];
var len__17863__auto___20937 = arguments.length;
var i__17864__auto___20938 = (0);
while(true){
if((i__17864__auto___20938 < len__17863__auto___20937)){
args20934.push((arguments[i__17864__auto___20938]));

var G__20939 = (i__17864__auto___20938 + (1));
i__17864__auto___20938 = G__20939;
continue;
} else {
}
break;
}

var G__20936 = args20934.length;
switch (G__20936) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20934.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20941 = [];
var len__17863__auto___20944 = arguments.length;
var i__17864__auto___20945 = (0);
while(true){
if((i__17864__auto___20945 < len__17863__auto___20944)){
args20941.push((arguments[i__17864__auto___20945]));

var G__20946 = (i__17864__auto___20945 + (1));
i__17864__auto___20945 = G__20946;
continue;
} else {
}
break;
}

var G__20943 = args20941.length;
switch (G__20943) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20941.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20948 = [];
var len__17863__auto___21001 = arguments.length;
var i__17864__auto___21002 = (0);
while(true){
if((i__17864__auto___21002 < len__17863__auto___21001)){
args20948.push((arguments[i__17864__auto___21002]));

var G__21003 = (i__17864__auto___21002 + (1));
i__17864__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var G__20950 = args20948.length;
switch (G__20950) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20948.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20327__auto___21005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___21005,tc,fc){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___21005,tc,fc){
return (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (7))){
var inst_20972 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20978_21006 = state_20976__$1;
(statearr_20978_21006[(2)] = inst_20972);

(statearr_20978_21006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (1))){
var state_20976__$1 = state_20976;
var statearr_20979_21007 = state_20976__$1;
(statearr_20979_21007[(2)] = null);

(statearr_20979_21007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (4))){
var inst_20953 = (state_20976[(7)]);
var inst_20953__$1 = (state_20976[(2)]);
var inst_20954 = (inst_20953__$1 == null);
var state_20976__$1 = (function (){var statearr_20980 = state_20976;
(statearr_20980[(7)] = inst_20953__$1);

return statearr_20980;
})();
if(cljs.core.truth_(inst_20954)){
var statearr_20981_21008 = state_20976__$1;
(statearr_20981_21008[(1)] = (5));

} else {
var statearr_20982_21009 = state_20976__$1;
(statearr_20982_21009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (13))){
var state_20976__$1 = state_20976;
var statearr_20983_21010 = state_20976__$1;
(statearr_20983_21010[(2)] = null);

(statearr_20983_21010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var inst_20953 = (state_20976[(7)]);
var inst_20959 = p.call(null,inst_20953);
var state_20976__$1 = state_20976;
if(cljs.core.truth_(inst_20959)){
var statearr_20984_21011 = state_20976__$1;
(statearr_20984_21011[(1)] = (9));

} else {
var statearr_20985_21012 = state_20976__$1;
(statearr_20985_21012[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (3))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (12))){
var state_20976__$1 = state_20976;
var statearr_20986_21013 = state_20976__$1;
(statearr_20986_21013[(2)] = null);

(statearr_20986_21013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (2))){
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20976__$1,(4),ch);
} else {
if((state_val_20977 === (11))){
var inst_20953 = (state_20976[(7)]);
var inst_20963 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20976__$1,(8),inst_20963,inst_20953);
} else {
if((state_val_20977 === (9))){
var state_20976__$1 = state_20976;
var statearr_20987_21014 = state_20976__$1;
(statearr_20987_21014[(2)] = tc);

(statearr_20987_21014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (5))){
var inst_20956 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20957 = cljs.core.async.close_BANG_.call(null,fc);
var state_20976__$1 = (function (){var statearr_20988 = state_20976;
(statearr_20988[(8)] = inst_20956);

return statearr_20988;
})();
var statearr_20989_21015 = state_20976__$1;
(statearr_20989_21015[(2)] = inst_20957);

(statearr_20989_21015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (14))){
var inst_20970 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
var statearr_20990_21016 = state_20976__$1;
(statearr_20990_21016[(2)] = inst_20970);

(statearr_20990_21016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (10))){
var state_20976__$1 = state_20976;
var statearr_20991_21017 = state_20976__$1;
(statearr_20991_21017[(2)] = fc);

(statearr_20991_21017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (8))){
var inst_20965 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
if(cljs.core.truth_(inst_20965)){
var statearr_20992_21018 = state_20976__$1;
(statearr_20992_21018[(1)] = (12));

} else {
var statearr_20993_21019 = state_20976__$1;
(statearr_20993_21019[(1)] = (13));

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
});})(c__20327__auto___21005,tc,fc))
;
return ((function (switch__20215__auto__,c__20327__auto___21005,tc,fc){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_20997 = [null,null,null,null,null,null,null,null,null];
(statearr_20997[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_20997[(1)] = (1));

return statearr_20997;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_20976){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e20998){if((e20998 instanceof Object)){
var ex__20219__auto__ = e20998;
var statearr_20999_21020 = state_20976;
(statearr_20999_21020[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21021 = state_20976;
state_20976 = G__21021;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___21005,tc,fc))
})();
var state__20329__auto__ = (function (){var statearr_21000 = f__20328__auto__.call(null);
(statearr_21000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___21005);

return statearr_21000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___21005,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__){
return (function (state_21085){
var state_val_21086 = (state_21085[(1)]);
if((state_val_21086 === (7))){
var inst_21081 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
var statearr_21087_21108 = state_21085__$1;
(statearr_21087_21108[(2)] = inst_21081);

(statearr_21087_21108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (1))){
var inst_21065 = init;
var state_21085__$1 = (function (){var statearr_21088 = state_21085;
(statearr_21088[(7)] = inst_21065);

return statearr_21088;
})();
var statearr_21089_21109 = state_21085__$1;
(statearr_21089_21109[(2)] = null);

(statearr_21089_21109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (4))){
var inst_21068 = (state_21085[(8)]);
var inst_21068__$1 = (state_21085[(2)]);
var inst_21069 = (inst_21068__$1 == null);
var state_21085__$1 = (function (){var statearr_21090 = state_21085;
(statearr_21090[(8)] = inst_21068__$1);

return statearr_21090;
})();
if(cljs.core.truth_(inst_21069)){
var statearr_21091_21110 = state_21085__$1;
(statearr_21091_21110[(1)] = (5));

} else {
var statearr_21092_21111 = state_21085__$1;
(statearr_21092_21111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (6))){
var inst_21068 = (state_21085[(8)]);
var inst_21065 = (state_21085[(7)]);
var inst_21072 = (state_21085[(9)]);
var inst_21072__$1 = f.call(null,inst_21065,inst_21068);
var inst_21073 = cljs.core.reduced_QMARK_.call(null,inst_21072__$1);
var state_21085__$1 = (function (){var statearr_21093 = state_21085;
(statearr_21093[(9)] = inst_21072__$1);

return statearr_21093;
})();
if(inst_21073){
var statearr_21094_21112 = state_21085__$1;
(statearr_21094_21112[(1)] = (8));

} else {
var statearr_21095_21113 = state_21085__$1;
(statearr_21095_21113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (3))){
var inst_21083 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21085__$1,inst_21083);
} else {
if((state_val_21086 === (2))){
var state_21085__$1 = state_21085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21085__$1,(4),ch);
} else {
if((state_val_21086 === (9))){
var inst_21072 = (state_21085[(9)]);
var inst_21065 = inst_21072;
var state_21085__$1 = (function (){var statearr_21096 = state_21085;
(statearr_21096[(7)] = inst_21065);

return statearr_21096;
})();
var statearr_21097_21114 = state_21085__$1;
(statearr_21097_21114[(2)] = null);

(statearr_21097_21114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (5))){
var inst_21065 = (state_21085[(7)]);
var state_21085__$1 = state_21085;
var statearr_21098_21115 = state_21085__$1;
(statearr_21098_21115[(2)] = inst_21065);

(statearr_21098_21115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (10))){
var inst_21079 = (state_21085[(2)]);
var state_21085__$1 = state_21085;
var statearr_21099_21116 = state_21085__$1;
(statearr_21099_21116[(2)] = inst_21079);

(statearr_21099_21116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21086 === (8))){
var inst_21072 = (state_21085[(9)]);
var inst_21075 = cljs.core.deref.call(null,inst_21072);
var state_21085__$1 = state_21085;
var statearr_21100_21117 = state_21085__$1;
(statearr_21100_21117[(2)] = inst_21075);

(statearr_21100_21117[(1)] = (10));


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
});})(c__20327__auto__))
;
return ((function (switch__20215__auto__,c__20327__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20216__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20216__auto____0 = (function (){
var statearr_21104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21104[(0)] = cljs$core$async$reduce_$_state_machine__20216__auto__);

(statearr_21104[(1)] = (1));

return statearr_21104;
});
var cljs$core$async$reduce_$_state_machine__20216__auto____1 = (function (state_21085){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_21085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e21105){if((e21105 instanceof Object)){
var ex__20219__auto__ = e21105;
var statearr_21106_21118 = state_21085;
(statearr_21106_21118[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21119 = state_21085;
state_21085 = G__21119;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20216__auto__ = function(state_21085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20216__auto____1.call(this,state_21085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20216__auto____0;
cljs$core$async$reduce_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20216__auto____1;
return cljs$core$async$reduce_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__))
})();
var state__20329__auto__ = (function (){var statearr_21107 = f__20328__auto__.call(null);
(statearr_21107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_21107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__))
);

return c__20327__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21120 = [];
var len__17863__auto___21172 = arguments.length;
var i__17864__auto___21173 = (0);
while(true){
if((i__17864__auto___21173 < len__17863__auto___21172)){
args21120.push((arguments[i__17864__auto___21173]));

var G__21174 = (i__17864__auto___21173 + (1));
i__17864__auto___21173 = G__21174;
continue;
} else {
}
break;
}

var G__21122 = args21120.length;
switch (G__21122) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21120.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__){
return (function (state_21147){
var state_val_21148 = (state_21147[(1)]);
if((state_val_21148 === (7))){
var inst_21129 = (state_21147[(2)]);
var state_21147__$1 = state_21147;
var statearr_21149_21176 = state_21147__$1;
(statearr_21149_21176[(2)] = inst_21129);

(statearr_21149_21176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (1))){
var inst_21123 = cljs.core.seq.call(null,coll);
var inst_21124 = inst_21123;
var state_21147__$1 = (function (){var statearr_21150 = state_21147;
(statearr_21150[(7)] = inst_21124);

return statearr_21150;
})();
var statearr_21151_21177 = state_21147__$1;
(statearr_21151_21177[(2)] = null);

(statearr_21151_21177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (4))){
var inst_21124 = (state_21147[(7)]);
var inst_21127 = cljs.core.first.call(null,inst_21124);
var state_21147__$1 = state_21147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21147__$1,(7),ch,inst_21127);
} else {
if((state_val_21148 === (13))){
var inst_21141 = (state_21147[(2)]);
var state_21147__$1 = state_21147;
var statearr_21152_21178 = state_21147__$1;
(statearr_21152_21178[(2)] = inst_21141);

(statearr_21152_21178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (6))){
var inst_21132 = (state_21147[(2)]);
var state_21147__$1 = state_21147;
if(cljs.core.truth_(inst_21132)){
var statearr_21153_21179 = state_21147__$1;
(statearr_21153_21179[(1)] = (8));

} else {
var statearr_21154_21180 = state_21147__$1;
(statearr_21154_21180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (3))){
var inst_21145 = (state_21147[(2)]);
var state_21147__$1 = state_21147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21147__$1,inst_21145);
} else {
if((state_val_21148 === (12))){
var state_21147__$1 = state_21147;
var statearr_21155_21181 = state_21147__$1;
(statearr_21155_21181[(2)] = null);

(statearr_21155_21181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (2))){
var inst_21124 = (state_21147[(7)]);
var state_21147__$1 = state_21147;
if(cljs.core.truth_(inst_21124)){
var statearr_21156_21182 = state_21147__$1;
(statearr_21156_21182[(1)] = (4));

} else {
var statearr_21157_21183 = state_21147__$1;
(statearr_21157_21183[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (11))){
var inst_21138 = cljs.core.async.close_BANG_.call(null,ch);
var state_21147__$1 = state_21147;
var statearr_21158_21184 = state_21147__$1;
(statearr_21158_21184[(2)] = inst_21138);

(statearr_21158_21184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (9))){
var state_21147__$1 = state_21147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21159_21185 = state_21147__$1;
(statearr_21159_21185[(1)] = (11));

} else {
var statearr_21160_21186 = state_21147__$1;
(statearr_21160_21186[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (5))){
var inst_21124 = (state_21147[(7)]);
var state_21147__$1 = state_21147;
var statearr_21161_21187 = state_21147__$1;
(statearr_21161_21187[(2)] = inst_21124);

(statearr_21161_21187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (10))){
var inst_21143 = (state_21147[(2)]);
var state_21147__$1 = state_21147;
var statearr_21162_21188 = state_21147__$1;
(statearr_21162_21188[(2)] = inst_21143);

(statearr_21162_21188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21148 === (8))){
var inst_21124 = (state_21147[(7)]);
var inst_21134 = cljs.core.next.call(null,inst_21124);
var inst_21124__$1 = inst_21134;
var state_21147__$1 = (function (){var statearr_21163 = state_21147;
(statearr_21163[(7)] = inst_21124__$1);

return statearr_21163;
})();
var statearr_21164_21189 = state_21147__$1;
(statearr_21164_21189[(2)] = null);

(statearr_21164_21189[(1)] = (2));


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
});})(c__20327__auto__))
;
return ((function (switch__20215__auto__,c__20327__auto__){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_21168 = [null,null,null,null,null,null,null,null];
(statearr_21168[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_21168[(1)] = (1));

return statearr_21168;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_21147){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_21147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e21169){if((e21169 instanceof Object)){
var ex__20219__auto__ = e21169;
var statearr_21170_21190 = state_21147;
(statearr_21170_21190[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21191 = state_21147;
state_21147 = G__21191;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_21147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_21147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__))
})();
var state__20329__auto__ = (function (){var statearr_21171 = f__20328__auto__.call(null);
(statearr_21171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_21171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__))
);

return c__20327__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21413 = (function (mult,ch,cs,meta21414){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21414 = meta21414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21415,meta21414__$1){
var self__ = this;
var _21415__$1 = this;
return (new cljs.core.async.t_cljs$core$async21413(self__.mult,self__.ch,self__.cs,meta21414__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21415){
var self__ = this;
var _21415__$1 = this;
return self__.meta21414;
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21414","meta21414",1512861000,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21413";

cljs.core.async.t_cljs$core$async21413.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21413");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21413 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21413(mult__$1,ch__$1,cs__$1,meta21414){
return (new cljs.core.async.t_cljs$core$async21413(mult__$1,ch__$1,cs__$1,meta21414));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21413(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20327__auto___21634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___21634,cs,m,dchan,dctr,done){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___21634,cs,m,dchan,dctr,done){
return (function (state_21546){
var state_val_21547 = (state_21546[(1)]);
if((state_val_21547 === (7))){
var inst_21542 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21548_21635 = state_21546__$1;
(statearr_21548_21635[(2)] = inst_21542);

(statearr_21548_21635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (20))){
var inst_21447 = (state_21546[(7)]);
var inst_21457 = cljs.core.first.call(null,inst_21447);
var inst_21458 = cljs.core.nth.call(null,inst_21457,(0),null);
var inst_21459 = cljs.core.nth.call(null,inst_21457,(1),null);
var state_21546__$1 = (function (){var statearr_21549 = state_21546;
(statearr_21549[(8)] = inst_21458);

return statearr_21549;
})();
if(cljs.core.truth_(inst_21459)){
var statearr_21550_21636 = state_21546__$1;
(statearr_21550_21636[(1)] = (22));

} else {
var statearr_21551_21637 = state_21546__$1;
(statearr_21551_21637[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (27))){
var inst_21418 = (state_21546[(9)]);
var inst_21487 = (state_21546[(10)]);
var inst_21489 = (state_21546[(11)]);
var inst_21494 = (state_21546[(12)]);
var inst_21494__$1 = cljs.core._nth.call(null,inst_21487,inst_21489);
var inst_21495 = cljs.core.async.put_BANG_.call(null,inst_21494__$1,inst_21418,done);
var state_21546__$1 = (function (){var statearr_21552 = state_21546;
(statearr_21552[(12)] = inst_21494__$1);

return statearr_21552;
})();
if(cljs.core.truth_(inst_21495)){
var statearr_21553_21638 = state_21546__$1;
(statearr_21553_21638[(1)] = (30));

} else {
var statearr_21554_21639 = state_21546__$1;
(statearr_21554_21639[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (1))){
var state_21546__$1 = state_21546;
var statearr_21555_21640 = state_21546__$1;
(statearr_21555_21640[(2)] = null);

(statearr_21555_21640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (24))){
var inst_21447 = (state_21546[(7)]);
var inst_21464 = (state_21546[(2)]);
var inst_21465 = cljs.core.next.call(null,inst_21447);
var inst_21427 = inst_21465;
var inst_21428 = null;
var inst_21429 = (0);
var inst_21430 = (0);
var state_21546__$1 = (function (){var statearr_21556 = state_21546;
(statearr_21556[(13)] = inst_21464);

(statearr_21556[(14)] = inst_21428);

(statearr_21556[(15)] = inst_21430);

(statearr_21556[(16)] = inst_21429);

(statearr_21556[(17)] = inst_21427);

return statearr_21556;
})();
var statearr_21557_21641 = state_21546__$1;
(statearr_21557_21641[(2)] = null);

(statearr_21557_21641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (39))){
var state_21546__$1 = state_21546;
var statearr_21561_21642 = state_21546__$1;
(statearr_21561_21642[(2)] = null);

(statearr_21561_21642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (4))){
var inst_21418 = (state_21546[(9)]);
var inst_21418__$1 = (state_21546[(2)]);
var inst_21419 = (inst_21418__$1 == null);
var state_21546__$1 = (function (){var statearr_21562 = state_21546;
(statearr_21562[(9)] = inst_21418__$1);

return statearr_21562;
})();
if(cljs.core.truth_(inst_21419)){
var statearr_21563_21643 = state_21546__$1;
(statearr_21563_21643[(1)] = (5));

} else {
var statearr_21564_21644 = state_21546__$1;
(statearr_21564_21644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (15))){
var inst_21428 = (state_21546[(14)]);
var inst_21430 = (state_21546[(15)]);
var inst_21429 = (state_21546[(16)]);
var inst_21427 = (state_21546[(17)]);
var inst_21443 = (state_21546[(2)]);
var inst_21444 = (inst_21430 + (1));
var tmp21558 = inst_21428;
var tmp21559 = inst_21429;
var tmp21560 = inst_21427;
var inst_21427__$1 = tmp21560;
var inst_21428__$1 = tmp21558;
var inst_21429__$1 = tmp21559;
var inst_21430__$1 = inst_21444;
var state_21546__$1 = (function (){var statearr_21565 = state_21546;
(statearr_21565[(18)] = inst_21443);

(statearr_21565[(14)] = inst_21428__$1);

(statearr_21565[(15)] = inst_21430__$1);

(statearr_21565[(16)] = inst_21429__$1);

(statearr_21565[(17)] = inst_21427__$1);

return statearr_21565;
})();
var statearr_21566_21645 = state_21546__$1;
(statearr_21566_21645[(2)] = null);

(statearr_21566_21645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (21))){
var inst_21468 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21570_21646 = state_21546__$1;
(statearr_21570_21646[(2)] = inst_21468);

(statearr_21570_21646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (31))){
var inst_21494 = (state_21546[(12)]);
var inst_21498 = done.call(null,null);
var inst_21499 = cljs.core.async.untap_STAR_.call(null,m,inst_21494);
var state_21546__$1 = (function (){var statearr_21571 = state_21546;
(statearr_21571[(19)] = inst_21498);

return statearr_21571;
})();
var statearr_21572_21647 = state_21546__$1;
(statearr_21572_21647[(2)] = inst_21499);

(statearr_21572_21647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (32))){
var inst_21488 = (state_21546[(20)]);
var inst_21487 = (state_21546[(10)]);
var inst_21489 = (state_21546[(11)]);
var inst_21486 = (state_21546[(21)]);
var inst_21501 = (state_21546[(2)]);
var inst_21502 = (inst_21489 + (1));
var tmp21567 = inst_21488;
var tmp21568 = inst_21487;
var tmp21569 = inst_21486;
var inst_21486__$1 = tmp21569;
var inst_21487__$1 = tmp21568;
var inst_21488__$1 = tmp21567;
var inst_21489__$1 = inst_21502;
var state_21546__$1 = (function (){var statearr_21573 = state_21546;
(statearr_21573[(20)] = inst_21488__$1);

(statearr_21573[(10)] = inst_21487__$1);

(statearr_21573[(11)] = inst_21489__$1);

(statearr_21573[(21)] = inst_21486__$1);

(statearr_21573[(22)] = inst_21501);

return statearr_21573;
})();
var statearr_21574_21648 = state_21546__$1;
(statearr_21574_21648[(2)] = null);

(statearr_21574_21648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (40))){
var inst_21514 = (state_21546[(23)]);
var inst_21518 = done.call(null,null);
var inst_21519 = cljs.core.async.untap_STAR_.call(null,m,inst_21514);
var state_21546__$1 = (function (){var statearr_21575 = state_21546;
(statearr_21575[(24)] = inst_21518);

return statearr_21575;
})();
var statearr_21576_21649 = state_21546__$1;
(statearr_21576_21649[(2)] = inst_21519);

(statearr_21576_21649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (33))){
var inst_21505 = (state_21546[(25)]);
var inst_21507 = cljs.core.chunked_seq_QMARK_.call(null,inst_21505);
var state_21546__$1 = state_21546;
if(inst_21507){
var statearr_21577_21650 = state_21546__$1;
(statearr_21577_21650[(1)] = (36));

} else {
var statearr_21578_21651 = state_21546__$1;
(statearr_21578_21651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (13))){
var inst_21437 = (state_21546[(26)]);
var inst_21440 = cljs.core.async.close_BANG_.call(null,inst_21437);
var state_21546__$1 = state_21546;
var statearr_21579_21652 = state_21546__$1;
(statearr_21579_21652[(2)] = inst_21440);

(statearr_21579_21652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (22))){
var inst_21458 = (state_21546[(8)]);
var inst_21461 = cljs.core.async.close_BANG_.call(null,inst_21458);
var state_21546__$1 = state_21546;
var statearr_21580_21653 = state_21546__$1;
(statearr_21580_21653[(2)] = inst_21461);

(statearr_21580_21653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (36))){
var inst_21505 = (state_21546[(25)]);
var inst_21509 = cljs.core.chunk_first.call(null,inst_21505);
var inst_21510 = cljs.core.chunk_rest.call(null,inst_21505);
var inst_21511 = cljs.core.count.call(null,inst_21509);
var inst_21486 = inst_21510;
var inst_21487 = inst_21509;
var inst_21488 = inst_21511;
var inst_21489 = (0);
var state_21546__$1 = (function (){var statearr_21581 = state_21546;
(statearr_21581[(20)] = inst_21488);

(statearr_21581[(10)] = inst_21487);

(statearr_21581[(11)] = inst_21489);

(statearr_21581[(21)] = inst_21486);

return statearr_21581;
})();
var statearr_21582_21654 = state_21546__$1;
(statearr_21582_21654[(2)] = null);

(statearr_21582_21654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (41))){
var inst_21505 = (state_21546[(25)]);
var inst_21521 = (state_21546[(2)]);
var inst_21522 = cljs.core.next.call(null,inst_21505);
var inst_21486 = inst_21522;
var inst_21487 = null;
var inst_21488 = (0);
var inst_21489 = (0);
var state_21546__$1 = (function (){var statearr_21583 = state_21546;
(statearr_21583[(20)] = inst_21488);

(statearr_21583[(10)] = inst_21487);

(statearr_21583[(11)] = inst_21489);

(statearr_21583[(27)] = inst_21521);

(statearr_21583[(21)] = inst_21486);

return statearr_21583;
})();
var statearr_21584_21655 = state_21546__$1;
(statearr_21584_21655[(2)] = null);

(statearr_21584_21655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (43))){
var state_21546__$1 = state_21546;
var statearr_21585_21656 = state_21546__$1;
(statearr_21585_21656[(2)] = null);

(statearr_21585_21656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (29))){
var inst_21530 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21586_21657 = state_21546__$1;
(statearr_21586_21657[(2)] = inst_21530);

(statearr_21586_21657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (44))){
var inst_21539 = (state_21546[(2)]);
var state_21546__$1 = (function (){var statearr_21587 = state_21546;
(statearr_21587[(28)] = inst_21539);

return statearr_21587;
})();
var statearr_21588_21658 = state_21546__$1;
(statearr_21588_21658[(2)] = null);

(statearr_21588_21658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (6))){
var inst_21478 = (state_21546[(29)]);
var inst_21477 = cljs.core.deref.call(null,cs);
var inst_21478__$1 = cljs.core.keys.call(null,inst_21477);
var inst_21479 = cljs.core.count.call(null,inst_21478__$1);
var inst_21480 = cljs.core.reset_BANG_.call(null,dctr,inst_21479);
var inst_21485 = cljs.core.seq.call(null,inst_21478__$1);
var inst_21486 = inst_21485;
var inst_21487 = null;
var inst_21488 = (0);
var inst_21489 = (0);
var state_21546__$1 = (function (){var statearr_21589 = state_21546;
(statearr_21589[(20)] = inst_21488);

(statearr_21589[(10)] = inst_21487);

(statearr_21589[(11)] = inst_21489);

(statearr_21589[(30)] = inst_21480);

(statearr_21589[(21)] = inst_21486);

(statearr_21589[(29)] = inst_21478__$1);

return statearr_21589;
})();
var statearr_21590_21659 = state_21546__$1;
(statearr_21590_21659[(2)] = null);

(statearr_21590_21659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (28))){
var inst_21505 = (state_21546[(25)]);
var inst_21486 = (state_21546[(21)]);
var inst_21505__$1 = cljs.core.seq.call(null,inst_21486);
var state_21546__$1 = (function (){var statearr_21591 = state_21546;
(statearr_21591[(25)] = inst_21505__$1);

return statearr_21591;
})();
if(inst_21505__$1){
var statearr_21592_21660 = state_21546__$1;
(statearr_21592_21660[(1)] = (33));

} else {
var statearr_21593_21661 = state_21546__$1;
(statearr_21593_21661[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (25))){
var inst_21488 = (state_21546[(20)]);
var inst_21489 = (state_21546[(11)]);
var inst_21491 = (inst_21489 < inst_21488);
var inst_21492 = inst_21491;
var state_21546__$1 = state_21546;
if(cljs.core.truth_(inst_21492)){
var statearr_21594_21662 = state_21546__$1;
(statearr_21594_21662[(1)] = (27));

} else {
var statearr_21595_21663 = state_21546__$1;
(statearr_21595_21663[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (34))){
var state_21546__$1 = state_21546;
var statearr_21596_21664 = state_21546__$1;
(statearr_21596_21664[(2)] = null);

(statearr_21596_21664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (17))){
var state_21546__$1 = state_21546;
var statearr_21597_21665 = state_21546__$1;
(statearr_21597_21665[(2)] = null);

(statearr_21597_21665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (3))){
var inst_21544 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21546__$1,inst_21544);
} else {
if((state_val_21547 === (12))){
var inst_21473 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21598_21666 = state_21546__$1;
(statearr_21598_21666[(2)] = inst_21473);

(statearr_21598_21666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (2))){
var state_21546__$1 = state_21546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21546__$1,(4),ch);
} else {
if((state_val_21547 === (23))){
var state_21546__$1 = state_21546;
var statearr_21599_21667 = state_21546__$1;
(statearr_21599_21667[(2)] = null);

(statearr_21599_21667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (35))){
var inst_21528 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21600_21668 = state_21546__$1;
(statearr_21600_21668[(2)] = inst_21528);

(statearr_21600_21668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (19))){
var inst_21447 = (state_21546[(7)]);
var inst_21451 = cljs.core.chunk_first.call(null,inst_21447);
var inst_21452 = cljs.core.chunk_rest.call(null,inst_21447);
var inst_21453 = cljs.core.count.call(null,inst_21451);
var inst_21427 = inst_21452;
var inst_21428 = inst_21451;
var inst_21429 = inst_21453;
var inst_21430 = (0);
var state_21546__$1 = (function (){var statearr_21601 = state_21546;
(statearr_21601[(14)] = inst_21428);

(statearr_21601[(15)] = inst_21430);

(statearr_21601[(16)] = inst_21429);

(statearr_21601[(17)] = inst_21427);

return statearr_21601;
})();
var statearr_21602_21669 = state_21546__$1;
(statearr_21602_21669[(2)] = null);

(statearr_21602_21669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (11))){
var inst_21447 = (state_21546[(7)]);
var inst_21427 = (state_21546[(17)]);
var inst_21447__$1 = cljs.core.seq.call(null,inst_21427);
var state_21546__$1 = (function (){var statearr_21603 = state_21546;
(statearr_21603[(7)] = inst_21447__$1);

return statearr_21603;
})();
if(inst_21447__$1){
var statearr_21604_21670 = state_21546__$1;
(statearr_21604_21670[(1)] = (16));

} else {
var statearr_21605_21671 = state_21546__$1;
(statearr_21605_21671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (9))){
var inst_21475 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21606_21672 = state_21546__$1;
(statearr_21606_21672[(2)] = inst_21475);

(statearr_21606_21672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (5))){
var inst_21425 = cljs.core.deref.call(null,cs);
var inst_21426 = cljs.core.seq.call(null,inst_21425);
var inst_21427 = inst_21426;
var inst_21428 = null;
var inst_21429 = (0);
var inst_21430 = (0);
var state_21546__$1 = (function (){var statearr_21607 = state_21546;
(statearr_21607[(14)] = inst_21428);

(statearr_21607[(15)] = inst_21430);

(statearr_21607[(16)] = inst_21429);

(statearr_21607[(17)] = inst_21427);

return statearr_21607;
})();
var statearr_21608_21673 = state_21546__$1;
(statearr_21608_21673[(2)] = null);

(statearr_21608_21673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (14))){
var state_21546__$1 = state_21546;
var statearr_21609_21674 = state_21546__$1;
(statearr_21609_21674[(2)] = null);

(statearr_21609_21674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (45))){
var inst_21536 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21610_21675 = state_21546__$1;
(statearr_21610_21675[(2)] = inst_21536);

(statearr_21610_21675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (26))){
var inst_21478 = (state_21546[(29)]);
var inst_21532 = (state_21546[(2)]);
var inst_21533 = cljs.core.seq.call(null,inst_21478);
var state_21546__$1 = (function (){var statearr_21611 = state_21546;
(statearr_21611[(31)] = inst_21532);

return statearr_21611;
})();
if(inst_21533){
var statearr_21612_21676 = state_21546__$1;
(statearr_21612_21676[(1)] = (42));

} else {
var statearr_21613_21677 = state_21546__$1;
(statearr_21613_21677[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (16))){
var inst_21447 = (state_21546[(7)]);
var inst_21449 = cljs.core.chunked_seq_QMARK_.call(null,inst_21447);
var state_21546__$1 = state_21546;
if(inst_21449){
var statearr_21614_21678 = state_21546__$1;
(statearr_21614_21678[(1)] = (19));

} else {
var statearr_21615_21679 = state_21546__$1;
(statearr_21615_21679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (38))){
var inst_21525 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21616_21680 = state_21546__$1;
(statearr_21616_21680[(2)] = inst_21525);

(statearr_21616_21680[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (30))){
var state_21546__$1 = state_21546;
var statearr_21617_21681 = state_21546__$1;
(statearr_21617_21681[(2)] = null);

(statearr_21617_21681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (10))){
var inst_21428 = (state_21546[(14)]);
var inst_21430 = (state_21546[(15)]);
var inst_21436 = cljs.core._nth.call(null,inst_21428,inst_21430);
var inst_21437 = cljs.core.nth.call(null,inst_21436,(0),null);
var inst_21438 = cljs.core.nth.call(null,inst_21436,(1),null);
var state_21546__$1 = (function (){var statearr_21618 = state_21546;
(statearr_21618[(26)] = inst_21437);

return statearr_21618;
})();
if(cljs.core.truth_(inst_21438)){
var statearr_21619_21682 = state_21546__$1;
(statearr_21619_21682[(1)] = (13));

} else {
var statearr_21620_21683 = state_21546__$1;
(statearr_21620_21683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (18))){
var inst_21471 = (state_21546[(2)]);
var state_21546__$1 = state_21546;
var statearr_21621_21684 = state_21546__$1;
(statearr_21621_21684[(2)] = inst_21471);

(statearr_21621_21684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (42))){
var state_21546__$1 = state_21546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21546__$1,(45),dchan);
} else {
if((state_val_21547 === (37))){
var inst_21418 = (state_21546[(9)]);
var inst_21505 = (state_21546[(25)]);
var inst_21514 = (state_21546[(23)]);
var inst_21514__$1 = cljs.core.first.call(null,inst_21505);
var inst_21515 = cljs.core.async.put_BANG_.call(null,inst_21514__$1,inst_21418,done);
var state_21546__$1 = (function (){var statearr_21622 = state_21546;
(statearr_21622[(23)] = inst_21514__$1);

return statearr_21622;
})();
if(cljs.core.truth_(inst_21515)){
var statearr_21623_21685 = state_21546__$1;
(statearr_21623_21685[(1)] = (39));

} else {
var statearr_21624_21686 = state_21546__$1;
(statearr_21624_21686[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21547 === (8))){
var inst_21430 = (state_21546[(15)]);
var inst_21429 = (state_21546[(16)]);
var inst_21432 = (inst_21430 < inst_21429);
var inst_21433 = inst_21432;
var state_21546__$1 = state_21546;
if(cljs.core.truth_(inst_21433)){
var statearr_21625_21687 = state_21546__$1;
(statearr_21625_21687[(1)] = (10));

} else {
var statearr_21626_21688 = state_21546__$1;
(statearr_21626_21688[(1)] = (11));

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
});})(c__20327__auto___21634,cs,m,dchan,dctr,done))
;
return ((function (switch__20215__auto__,c__20327__auto___21634,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20216__auto__ = null;
var cljs$core$async$mult_$_state_machine__20216__auto____0 = (function (){
var statearr_21630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21630[(0)] = cljs$core$async$mult_$_state_machine__20216__auto__);

(statearr_21630[(1)] = (1));

return statearr_21630;
});
var cljs$core$async$mult_$_state_machine__20216__auto____1 = (function (state_21546){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_21546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e21631){if((e21631 instanceof Object)){
var ex__20219__auto__ = e21631;
var statearr_21632_21689 = state_21546;
(statearr_21632_21689[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21690 = state_21546;
state_21546 = G__21690;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20216__auto__ = function(state_21546){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20216__auto____1.call(this,state_21546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20216__auto____0;
cljs$core$async$mult_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20216__auto____1;
return cljs$core$async$mult_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___21634,cs,m,dchan,dctr,done))
})();
var state__20329__auto__ = (function (){var statearr_21633 = f__20328__auto__.call(null);
(statearr_21633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___21634);

return statearr_21633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___21634,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21691 = [];
var len__17863__auto___21694 = arguments.length;
var i__17864__auto___21695 = (0);
while(true){
if((i__17864__auto___21695 < len__17863__auto___21694)){
args21691.push((arguments[i__17864__auto___21695]));

var G__21696 = (i__17864__auto___21695 + (1));
i__17864__auto___21695 = G__21696;
continue;
} else {
}
break;
}

var G__21693 = args21691.length;
switch (G__21693) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21691.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___21708 = arguments.length;
var i__17864__auto___21709 = (0);
while(true){
if((i__17864__auto___21709 < len__17863__auto___21708)){
args__17870__auto__.push((arguments[i__17864__auto___21709]));

var G__21710 = (i__17864__auto___21709 + (1));
i__17864__auto___21709 = G__21710;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21702){
var map__21703 = p__21702;
var map__21703__$1 = ((((!((map__21703 == null)))?((((map__21703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21703):map__21703);
var opts = map__21703__$1;
var statearr_21705_21711 = state;
(statearr_21705_21711[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21703,map__21703__$1,opts){
return (function (val){
var statearr_21706_21712 = state;
(statearr_21706_21712[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21703,map__21703__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21707_21713 = state;
(statearr_21707_21713[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21698){
var G__21699 = cljs.core.first.call(null,seq21698);
var seq21698__$1 = cljs.core.next.call(null,seq21698);
var G__21700 = cljs.core.first.call(null,seq21698__$1);
var seq21698__$2 = cljs.core.next.call(null,seq21698__$1);
var G__21701 = cljs.core.first.call(null,seq21698__$2);
var seq21698__$3 = cljs.core.next.call(null,seq21698__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21699,G__21700,G__21701,seq21698__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21877 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21878){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21878 = meta21878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21879,meta21878__$1){
var self__ = this;
var _21879__$1 = this;
return (new cljs.core.async.t_cljs$core$async21877(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21878__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21879){
var self__ = this;
var _21879__$1 = this;
return self__.meta21878;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21878","meta21878",365658885,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21877";

cljs.core.async.t_cljs$core$async21877.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21877");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21877 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21877(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21878){
return (new cljs.core.async.t_cljs$core$async21877(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21878));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21877(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20327__auto___22040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21977){
var state_val_21978 = (state_21977[(1)]);
if((state_val_21978 === (7))){
var inst_21895 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
var statearr_21979_22041 = state_21977__$1;
(statearr_21979_22041[(2)] = inst_21895);

(statearr_21979_22041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (20))){
var inst_21907 = (state_21977[(7)]);
var state_21977__$1 = state_21977;
var statearr_21980_22042 = state_21977__$1;
(statearr_21980_22042[(2)] = inst_21907);

(statearr_21980_22042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (27))){
var state_21977__$1 = state_21977;
var statearr_21981_22043 = state_21977__$1;
(statearr_21981_22043[(2)] = null);

(statearr_21981_22043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (1))){
var inst_21883 = (state_21977[(8)]);
var inst_21883__$1 = calc_state.call(null);
var inst_21885 = (inst_21883__$1 == null);
var inst_21886 = cljs.core.not.call(null,inst_21885);
var state_21977__$1 = (function (){var statearr_21982 = state_21977;
(statearr_21982[(8)] = inst_21883__$1);

return statearr_21982;
})();
if(inst_21886){
var statearr_21983_22044 = state_21977__$1;
(statearr_21983_22044[(1)] = (2));

} else {
var statearr_21984_22045 = state_21977__$1;
(statearr_21984_22045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (24))){
var inst_21930 = (state_21977[(9)]);
var inst_21951 = (state_21977[(10)]);
var inst_21937 = (state_21977[(11)]);
var inst_21951__$1 = inst_21930.call(null,inst_21937);
var state_21977__$1 = (function (){var statearr_21985 = state_21977;
(statearr_21985[(10)] = inst_21951__$1);

return statearr_21985;
})();
if(cljs.core.truth_(inst_21951__$1)){
var statearr_21986_22046 = state_21977__$1;
(statearr_21986_22046[(1)] = (29));

} else {
var statearr_21987_22047 = state_21977__$1;
(statearr_21987_22047[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (4))){
var inst_21898 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21898)){
var statearr_21988_22048 = state_21977__$1;
(statearr_21988_22048[(1)] = (8));

} else {
var statearr_21989_22049 = state_21977__$1;
(statearr_21989_22049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (15))){
var inst_21924 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21924)){
var statearr_21990_22050 = state_21977__$1;
(statearr_21990_22050[(1)] = (19));

} else {
var statearr_21991_22051 = state_21977__$1;
(statearr_21991_22051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (21))){
var inst_21929 = (state_21977[(12)]);
var inst_21929__$1 = (state_21977[(2)]);
var inst_21930 = cljs.core.get.call(null,inst_21929__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21931 = cljs.core.get.call(null,inst_21929__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21932 = cljs.core.get.call(null,inst_21929__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21977__$1 = (function (){var statearr_21992 = state_21977;
(statearr_21992[(12)] = inst_21929__$1);

(statearr_21992[(9)] = inst_21930);

(statearr_21992[(13)] = inst_21931);

return statearr_21992;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21977__$1,(22),inst_21932);
} else {
if((state_val_21978 === (31))){
var inst_21959 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21959)){
var statearr_21993_22052 = state_21977__$1;
(statearr_21993_22052[(1)] = (32));

} else {
var statearr_21994_22053 = state_21977__$1;
(statearr_21994_22053[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (32))){
var inst_21936 = (state_21977[(14)]);
var state_21977__$1 = state_21977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21977__$1,(35),out,inst_21936);
} else {
if((state_val_21978 === (33))){
var inst_21929 = (state_21977[(12)]);
var inst_21907 = inst_21929;
var state_21977__$1 = (function (){var statearr_21995 = state_21977;
(statearr_21995[(7)] = inst_21907);

return statearr_21995;
})();
var statearr_21996_22054 = state_21977__$1;
(statearr_21996_22054[(2)] = null);

(statearr_21996_22054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (13))){
var inst_21907 = (state_21977[(7)]);
var inst_21914 = inst_21907.cljs$lang$protocol_mask$partition0$;
var inst_21915 = (inst_21914 & (64));
var inst_21916 = inst_21907.cljs$core$ISeq$;
var inst_21917 = (inst_21915) || (inst_21916);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21917)){
var statearr_21997_22055 = state_21977__$1;
(statearr_21997_22055[(1)] = (16));

} else {
var statearr_21998_22056 = state_21977__$1;
(statearr_21998_22056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (22))){
var inst_21936 = (state_21977[(14)]);
var inst_21937 = (state_21977[(11)]);
var inst_21935 = (state_21977[(2)]);
var inst_21936__$1 = cljs.core.nth.call(null,inst_21935,(0),null);
var inst_21937__$1 = cljs.core.nth.call(null,inst_21935,(1),null);
var inst_21938 = (inst_21936__$1 == null);
var inst_21939 = cljs.core._EQ_.call(null,inst_21937__$1,change);
var inst_21940 = (inst_21938) || (inst_21939);
var state_21977__$1 = (function (){var statearr_21999 = state_21977;
(statearr_21999[(14)] = inst_21936__$1);

(statearr_21999[(11)] = inst_21937__$1);

return statearr_21999;
})();
if(cljs.core.truth_(inst_21940)){
var statearr_22000_22057 = state_21977__$1;
(statearr_22000_22057[(1)] = (23));

} else {
var statearr_22001_22058 = state_21977__$1;
(statearr_22001_22058[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (36))){
var inst_21929 = (state_21977[(12)]);
var inst_21907 = inst_21929;
var state_21977__$1 = (function (){var statearr_22002 = state_21977;
(statearr_22002[(7)] = inst_21907);

return statearr_22002;
})();
var statearr_22003_22059 = state_21977__$1;
(statearr_22003_22059[(2)] = null);

(statearr_22003_22059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (29))){
var inst_21951 = (state_21977[(10)]);
var state_21977__$1 = state_21977;
var statearr_22004_22060 = state_21977__$1;
(statearr_22004_22060[(2)] = inst_21951);

(statearr_22004_22060[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (6))){
var state_21977__$1 = state_21977;
var statearr_22005_22061 = state_21977__$1;
(statearr_22005_22061[(2)] = false);

(statearr_22005_22061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (28))){
var inst_21947 = (state_21977[(2)]);
var inst_21948 = calc_state.call(null);
var inst_21907 = inst_21948;
var state_21977__$1 = (function (){var statearr_22006 = state_21977;
(statearr_22006[(7)] = inst_21907);

(statearr_22006[(15)] = inst_21947);

return statearr_22006;
})();
var statearr_22007_22062 = state_21977__$1;
(statearr_22007_22062[(2)] = null);

(statearr_22007_22062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (25))){
var inst_21973 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
var statearr_22008_22063 = state_21977__$1;
(statearr_22008_22063[(2)] = inst_21973);

(statearr_22008_22063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (34))){
var inst_21971 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
var statearr_22009_22064 = state_21977__$1;
(statearr_22009_22064[(2)] = inst_21971);

(statearr_22009_22064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (17))){
var state_21977__$1 = state_21977;
var statearr_22010_22065 = state_21977__$1;
(statearr_22010_22065[(2)] = false);

(statearr_22010_22065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (3))){
var state_21977__$1 = state_21977;
var statearr_22011_22066 = state_21977__$1;
(statearr_22011_22066[(2)] = false);

(statearr_22011_22066[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (12))){
var inst_21975 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21977__$1,inst_21975);
} else {
if((state_val_21978 === (2))){
var inst_21883 = (state_21977[(8)]);
var inst_21888 = inst_21883.cljs$lang$protocol_mask$partition0$;
var inst_21889 = (inst_21888 & (64));
var inst_21890 = inst_21883.cljs$core$ISeq$;
var inst_21891 = (inst_21889) || (inst_21890);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21891)){
var statearr_22012_22067 = state_21977__$1;
(statearr_22012_22067[(1)] = (5));

} else {
var statearr_22013_22068 = state_21977__$1;
(statearr_22013_22068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (23))){
var inst_21936 = (state_21977[(14)]);
var inst_21942 = (inst_21936 == null);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21942)){
var statearr_22014_22069 = state_21977__$1;
(statearr_22014_22069[(1)] = (26));

} else {
var statearr_22015_22070 = state_21977__$1;
(statearr_22015_22070[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (35))){
var inst_21962 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
if(cljs.core.truth_(inst_21962)){
var statearr_22016_22071 = state_21977__$1;
(statearr_22016_22071[(1)] = (36));

} else {
var statearr_22017_22072 = state_21977__$1;
(statearr_22017_22072[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (19))){
var inst_21907 = (state_21977[(7)]);
var inst_21926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21907);
var state_21977__$1 = state_21977;
var statearr_22018_22073 = state_21977__$1;
(statearr_22018_22073[(2)] = inst_21926);

(statearr_22018_22073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (11))){
var inst_21907 = (state_21977[(7)]);
var inst_21911 = (inst_21907 == null);
var inst_21912 = cljs.core.not.call(null,inst_21911);
var state_21977__$1 = state_21977;
if(inst_21912){
var statearr_22019_22074 = state_21977__$1;
(statearr_22019_22074[(1)] = (13));

} else {
var statearr_22020_22075 = state_21977__$1;
(statearr_22020_22075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (9))){
var inst_21883 = (state_21977[(8)]);
var state_21977__$1 = state_21977;
var statearr_22021_22076 = state_21977__$1;
(statearr_22021_22076[(2)] = inst_21883);

(statearr_22021_22076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (5))){
var state_21977__$1 = state_21977;
var statearr_22022_22077 = state_21977__$1;
(statearr_22022_22077[(2)] = true);

(statearr_22022_22077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (14))){
var state_21977__$1 = state_21977;
var statearr_22023_22078 = state_21977__$1;
(statearr_22023_22078[(2)] = false);

(statearr_22023_22078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (26))){
var inst_21937 = (state_21977[(11)]);
var inst_21944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21937);
var state_21977__$1 = state_21977;
var statearr_22024_22079 = state_21977__$1;
(statearr_22024_22079[(2)] = inst_21944);

(statearr_22024_22079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (16))){
var state_21977__$1 = state_21977;
var statearr_22025_22080 = state_21977__$1;
(statearr_22025_22080[(2)] = true);

(statearr_22025_22080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (38))){
var inst_21967 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
var statearr_22026_22081 = state_21977__$1;
(statearr_22026_22081[(2)] = inst_21967);

(statearr_22026_22081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (30))){
var inst_21930 = (state_21977[(9)]);
var inst_21931 = (state_21977[(13)]);
var inst_21937 = (state_21977[(11)]);
var inst_21954 = cljs.core.empty_QMARK_.call(null,inst_21930);
var inst_21955 = inst_21931.call(null,inst_21937);
var inst_21956 = cljs.core.not.call(null,inst_21955);
var inst_21957 = (inst_21954) && (inst_21956);
var state_21977__$1 = state_21977;
var statearr_22027_22082 = state_21977__$1;
(statearr_22027_22082[(2)] = inst_21957);

(statearr_22027_22082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (10))){
var inst_21883 = (state_21977[(8)]);
var inst_21903 = (state_21977[(2)]);
var inst_21904 = cljs.core.get.call(null,inst_21903,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21905 = cljs.core.get.call(null,inst_21903,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21906 = cljs.core.get.call(null,inst_21903,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21907 = inst_21883;
var state_21977__$1 = (function (){var statearr_22028 = state_21977;
(statearr_22028[(16)] = inst_21904);

(statearr_22028[(17)] = inst_21906);

(statearr_22028[(7)] = inst_21907);

(statearr_22028[(18)] = inst_21905);

return statearr_22028;
})();
var statearr_22029_22083 = state_21977__$1;
(statearr_22029_22083[(2)] = null);

(statearr_22029_22083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (18))){
var inst_21921 = (state_21977[(2)]);
var state_21977__$1 = state_21977;
var statearr_22030_22084 = state_21977__$1;
(statearr_22030_22084[(2)] = inst_21921);

(statearr_22030_22084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (37))){
var state_21977__$1 = state_21977;
var statearr_22031_22085 = state_21977__$1;
(statearr_22031_22085[(2)] = null);

(statearr_22031_22085[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21978 === (8))){
var inst_21883 = (state_21977[(8)]);
var inst_21900 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21883);
var state_21977__$1 = state_21977;
var statearr_22032_22086 = state_21977__$1;
(statearr_22032_22086[(2)] = inst_21900);

(statearr_22032_22086[(1)] = (10));


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
});})(c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20215__auto__,c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20216__auto__ = null;
var cljs$core$async$mix_$_state_machine__20216__auto____0 = (function (){
var statearr_22036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22036[(0)] = cljs$core$async$mix_$_state_machine__20216__auto__);

(statearr_22036[(1)] = (1));

return statearr_22036;
});
var cljs$core$async$mix_$_state_machine__20216__auto____1 = (function (state_21977){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_21977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22037){if((e22037 instanceof Object)){
var ex__20219__auto__ = e22037;
var statearr_22038_22087 = state_21977;
(statearr_22038_22087[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22088 = state_21977;
state_21977 = G__22088;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20216__auto__ = function(state_21977){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20216__auto____1.call(this,state_21977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20216__auto____0;
cljs$core$async$mix_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20216__auto____1;
return cljs$core$async$mix_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20329__auto__ = (function (){var statearr_22039 = f__20328__auto__.call(null);
(statearr_22039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22040);

return statearr_22039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22040,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22089 = [];
var len__17863__auto___22092 = arguments.length;
var i__17864__auto___22093 = (0);
while(true){
if((i__17864__auto___22093 < len__17863__auto___22092)){
args22089.push((arguments[i__17864__auto___22093]));

var G__22094 = (i__17864__auto___22093 + (1));
i__17864__auto___22093 = G__22094;
continue;
} else {
}
break;
}

var G__22091 = args22089.length;
switch (G__22091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22089.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22097 = [];
var len__17863__auto___22222 = arguments.length;
var i__17864__auto___22223 = (0);
while(true){
if((i__17864__auto___22223 < len__17863__auto___22222)){
args22097.push((arguments[i__17864__auto___22223]));

var G__22224 = (i__17864__auto___22223 + (1));
i__17864__auto___22223 = G__22224;
continue;
} else {
}
break;
}

var G__22099 = args22097.length;
switch (G__22099) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22097.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__22096_SHARP_){
if(cljs.core.truth_(p1__22096_SHARP_.call(null,topic))){
return p1__22096_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22096_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22100 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22101){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22101 = meta22101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22102,meta22101__$1){
var self__ = this;
var _22102__$1 = this;
return (new cljs.core.async.t_cljs$core$async22100(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22101__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22102){
var self__ = this;
var _22102__$1 = this;
return self__.meta22101;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22101","meta22101",1227177654,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22100";

cljs.core.async.t_cljs$core$async22100.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22100");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22100 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22101){
return (new cljs.core.async.t_cljs$core$async22100(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22101));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22100(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20327__auto___22226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22226,mults,ensure_mult,p){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22226,mults,ensure_mult,p){
return (function (state_22174){
var state_val_22175 = (state_22174[(1)]);
if((state_val_22175 === (7))){
var inst_22170 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22176_22227 = state_22174__$1;
(statearr_22176_22227[(2)] = inst_22170);

(statearr_22176_22227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (20))){
var state_22174__$1 = state_22174;
var statearr_22177_22228 = state_22174__$1;
(statearr_22177_22228[(2)] = null);

(statearr_22177_22228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (1))){
var state_22174__$1 = state_22174;
var statearr_22178_22229 = state_22174__$1;
(statearr_22178_22229[(2)] = null);

(statearr_22178_22229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (24))){
var inst_22153 = (state_22174[(7)]);
var inst_22162 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22153);
var state_22174__$1 = state_22174;
var statearr_22179_22230 = state_22174__$1;
(statearr_22179_22230[(2)] = inst_22162);

(statearr_22179_22230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (4))){
var inst_22105 = (state_22174[(8)]);
var inst_22105__$1 = (state_22174[(2)]);
var inst_22106 = (inst_22105__$1 == null);
var state_22174__$1 = (function (){var statearr_22180 = state_22174;
(statearr_22180[(8)] = inst_22105__$1);

return statearr_22180;
})();
if(cljs.core.truth_(inst_22106)){
var statearr_22181_22231 = state_22174__$1;
(statearr_22181_22231[(1)] = (5));

} else {
var statearr_22182_22232 = state_22174__$1;
(statearr_22182_22232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (15))){
var inst_22147 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22183_22233 = state_22174__$1;
(statearr_22183_22233[(2)] = inst_22147);

(statearr_22183_22233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (21))){
var inst_22167 = (state_22174[(2)]);
var state_22174__$1 = (function (){var statearr_22184 = state_22174;
(statearr_22184[(9)] = inst_22167);

return statearr_22184;
})();
var statearr_22185_22234 = state_22174__$1;
(statearr_22185_22234[(2)] = null);

(statearr_22185_22234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (13))){
var inst_22129 = (state_22174[(10)]);
var inst_22131 = cljs.core.chunked_seq_QMARK_.call(null,inst_22129);
var state_22174__$1 = state_22174;
if(inst_22131){
var statearr_22186_22235 = state_22174__$1;
(statearr_22186_22235[(1)] = (16));

} else {
var statearr_22187_22236 = state_22174__$1;
(statearr_22187_22236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (22))){
var inst_22159 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
if(cljs.core.truth_(inst_22159)){
var statearr_22188_22237 = state_22174__$1;
(statearr_22188_22237[(1)] = (23));

} else {
var statearr_22189_22238 = state_22174__$1;
(statearr_22189_22238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (6))){
var inst_22155 = (state_22174[(11)]);
var inst_22105 = (state_22174[(8)]);
var inst_22153 = (state_22174[(7)]);
var inst_22153__$1 = topic_fn.call(null,inst_22105);
var inst_22154 = cljs.core.deref.call(null,mults);
var inst_22155__$1 = cljs.core.get.call(null,inst_22154,inst_22153__$1);
var state_22174__$1 = (function (){var statearr_22190 = state_22174;
(statearr_22190[(11)] = inst_22155__$1);

(statearr_22190[(7)] = inst_22153__$1);

return statearr_22190;
})();
if(cljs.core.truth_(inst_22155__$1)){
var statearr_22191_22239 = state_22174__$1;
(statearr_22191_22239[(1)] = (19));

} else {
var statearr_22192_22240 = state_22174__$1;
(statearr_22192_22240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (25))){
var inst_22164 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22193_22241 = state_22174__$1;
(statearr_22193_22241[(2)] = inst_22164);

(statearr_22193_22241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (17))){
var inst_22129 = (state_22174[(10)]);
var inst_22138 = cljs.core.first.call(null,inst_22129);
var inst_22139 = cljs.core.async.muxch_STAR_.call(null,inst_22138);
var inst_22140 = cljs.core.async.close_BANG_.call(null,inst_22139);
var inst_22141 = cljs.core.next.call(null,inst_22129);
var inst_22115 = inst_22141;
var inst_22116 = null;
var inst_22117 = (0);
var inst_22118 = (0);
var state_22174__$1 = (function (){var statearr_22194 = state_22174;
(statearr_22194[(12)] = inst_22140);

(statearr_22194[(13)] = inst_22118);

(statearr_22194[(14)] = inst_22116);

(statearr_22194[(15)] = inst_22115);

(statearr_22194[(16)] = inst_22117);

return statearr_22194;
})();
var statearr_22195_22242 = state_22174__$1;
(statearr_22195_22242[(2)] = null);

(statearr_22195_22242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (3))){
var inst_22172 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22174__$1,inst_22172);
} else {
if((state_val_22175 === (12))){
var inst_22149 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22196_22243 = state_22174__$1;
(statearr_22196_22243[(2)] = inst_22149);

(statearr_22196_22243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (2))){
var state_22174__$1 = state_22174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22174__$1,(4),ch);
} else {
if((state_val_22175 === (23))){
var state_22174__$1 = state_22174;
var statearr_22197_22244 = state_22174__$1;
(statearr_22197_22244[(2)] = null);

(statearr_22197_22244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (19))){
var inst_22155 = (state_22174[(11)]);
var inst_22105 = (state_22174[(8)]);
var inst_22157 = cljs.core.async.muxch_STAR_.call(null,inst_22155);
var state_22174__$1 = state_22174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22174__$1,(22),inst_22157,inst_22105);
} else {
if((state_val_22175 === (11))){
var inst_22129 = (state_22174[(10)]);
var inst_22115 = (state_22174[(15)]);
var inst_22129__$1 = cljs.core.seq.call(null,inst_22115);
var state_22174__$1 = (function (){var statearr_22198 = state_22174;
(statearr_22198[(10)] = inst_22129__$1);

return statearr_22198;
})();
if(inst_22129__$1){
var statearr_22199_22245 = state_22174__$1;
(statearr_22199_22245[(1)] = (13));

} else {
var statearr_22200_22246 = state_22174__$1;
(statearr_22200_22246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (9))){
var inst_22151 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22201_22247 = state_22174__$1;
(statearr_22201_22247[(2)] = inst_22151);

(statearr_22201_22247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (5))){
var inst_22112 = cljs.core.deref.call(null,mults);
var inst_22113 = cljs.core.vals.call(null,inst_22112);
var inst_22114 = cljs.core.seq.call(null,inst_22113);
var inst_22115 = inst_22114;
var inst_22116 = null;
var inst_22117 = (0);
var inst_22118 = (0);
var state_22174__$1 = (function (){var statearr_22202 = state_22174;
(statearr_22202[(13)] = inst_22118);

(statearr_22202[(14)] = inst_22116);

(statearr_22202[(15)] = inst_22115);

(statearr_22202[(16)] = inst_22117);

return statearr_22202;
})();
var statearr_22203_22248 = state_22174__$1;
(statearr_22203_22248[(2)] = null);

(statearr_22203_22248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (14))){
var state_22174__$1 = state_22174;
var statearr_22207_22249 = state_22174__$1;
(statearr_22207_22249[(2)] = null);

(statearr_22207_22249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (16))){
var inst_22129 = (state_22174[(10)]);
var inst_22133 = cljs.core.chunk_first.call(null,inst_22129);
var inst_22134 = cljs.core.chunk_rest.call(null,inst_22129);
var inst_22135 = cljs.core.count.call(null,inst_22133);
var inst_22115 = inst_22134;
var inst_22116 = inst_22133;
var inst_22117 = inst_22135;
var inst_22118 = (0);
var state_22174__$1 = (function (){var statearr_22208 = state_22174;
(statearr_22208[(13)] = inst_22118);

(statearr_22208[(14)] = inst_22116);

(statearr_22208[(15)] = inst_22115);

(statearr_22208[(16)] = inst_22117);

return statearr_22208;
})();
var statearr_22209_22250 = state_22174__$1;
(statearr_22209_22250[(2)] = null);

(statearr_22209_22250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (10))){
var inst_22118 = (state_22174[(13)]);
var inst_22116 = (state_22174[(14)]);
var inst_22115 = (state_22174[(15)]);
var inst_22117 = (state_22174[(16)]);
var inst_22123 = cljs.core._nth.call(null,inst_22116,inst_22118);
var inst_22124 = cljs.core.async.muxch_STAR_.call(null,inst_22123);
var inst_22125 = cljs.core.async.close_BANG_.call(null,inst_22124);
var inst_22126 = (inst_22118 + (1));
var tmp22204 = inst_22116;
var tmp22205 = inst_22115;
var tmp22206 = inst_22117;
var inst_22115__$1 = tmp22205;
var inst_22116__$1 = tmp22204;
var inst_22117__$1 = tmp22206;
var inst_22118__$1 = inst_22126;
var state_22174__$1 = (function (){var statearr_22210 = state_22174;
(statearr_22210[(13)] = inst_22118__$1);

(statearr_22210[(17)] = inst_22125);

(statearr_22210[(14)] = inst_22116__$1);

(statearr_22210[(15)] = inst_22115__$1);

(statearr_22210[(16)] = inst_22117__$1);

return statearr_22210;
})();
var statearr_22211_22251 = state_22174__$1;
(statearr_22211_22251[(2)] = null);

(statearr_22211_22251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (18))){
var inst_22144 = (state_22174[(2)]);
var state_22174__$1 = state_22174;
var statearr_22212_22252 = state_22174__$1;
(statearr_22212_22252[(2)] = inst_22144);

(statearr_22212_22252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22175 === (8))){
var inst_22118 = (state_22174[(13)]);
var inst_22117 = (state_22174[(16)]);
var inst_22120 = (inst_22118 < inst_22117);
var inst_22121 = inst_22120;
var state_22174__$1 = state_22174;
if(cljs.core.truth_(inst_22121)){
var statearr_22213_22253 = state_22174__$1;
(statearr_22213_22253[(1)] = (10));

} else {
var statearr_22214_22254 = state_22174__$1;
(statearr_22214_22254[(1)] = (11));

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
});})(c__20327__auto___22226,mults,ensure_mult,p))
;
return ((function (switch__20215__auto__,c__20327__auto___22226,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22218[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22218[(1)] = (1));

return statearr_22218;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22174){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22219){if((e22219 instanceof Object)){
var ex__20219__auto__ = e22219;
var statearr_22220_22255 = state_22174;
(statearr_22220_22255[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22256 = state_22174;
state_22174 = G__22256;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22226,mults,ensure_mult,p))
})();
var state__20329__auto__ = (function (){var statearr_22221 = f__20328__auto__.call(null);
(statearr_22221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22226);

return statearr_22221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22226,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22257 = [];
var len__17863__auto___22260 = arguments.length;
var i__17864__auto___22261 = (0);
while(true){
if((i__17864__auto___22261 < len__17863__auto___22260)){
args22257.push((arguments[i__17864__auto___22261]));

var G__22262 = (i__17864__auto___22261 + (1));
i__17864__auto___22261 = G__22262;
continue;
} else {
}
break;
}

var G__22259 = args22257.length;
switch (G__22259) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22257.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22264 = [];
var len__17863__auto___22267 = arguments.length;
var i__17864__auto___22268 = (0);
while(true){
if((i__17864__auto___22268 < len__17863__auto___22267)){
args22264.push((arguments[i__17864__auto___22268]));

var G__22269 = (i__17864__auto___22268 + (1));
i__17864__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var G__22266 = args22264.length;
switch (G__22266) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22264.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22271 = [];
var len__17863__auto___22342 = arguments.length;
var i__17864__auto___22343 = (0);
while(true){
if((i__17864__auto___22343 < len__17863__auto___22342)){
args22271.push((arguments[i__17864__auto___22343]));

var G__22344 = (i__17864__auto___22343 + (1));
i__17864__auto___22343 = G__22344;
continue;
} else {
}
break;
}

var G__22273 = args22271.length;
switch (G__22273) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22271.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20327__auto___22346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22312){
var state_val_22313 = (state_22312[(1)]);
if((state_val_22313 === (7))){
var state_22312__$1 = state_22312;
var statearr_22314_22347 = state_22312__$1;
(statearr_22314_22347[(2)] = null);

(statearr_22314_22347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (1))){
var state_22312__$1 = state_22312;
var statearr_22315_22348 = state_22312__$1;
(statearr_22315_22348[(2)] = null);

(statearr_22315_22348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (4))){
var inst_22276 = (state_22312[(7)]);
var inst_22278 = (inst_22276 < cnt);
var state_22312__$1 = state_22312;
if(cljs.core.truth_(inst_22278)){
var statearr_22316_22349 = state_22312__$1;
(statearr_22316_22349[(1)] = (6));

} else {
var statearr_22317_22350 = state_22312__$1;
(statearr_22317_22350[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (15))){
var inst_22308 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22318_22351 = state_22312__$1;
(statearr_22318_22351[(2)] = inst_22308);

(statearr_22318_22351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (13))){
var inst_22301 = cljs.core.async.close_BANG_.call(null,out);
var state_22312__$1 = state_22312;
var statearr_22319_22352 = state_22312__$1;
(statearr_22319_22352[(2)] = inst_22301);

(statearr_22319_22352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (6))){
var state_22312__$1 = state_22312;
var statearr_22320_22353 = state_22312__$1;
(statearr_22320_22353[(2)] = null);

(statearr_22320_22353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (3))){
var inst_22310 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22312__$1,inst_22310);
} else {
if((state_val_22313 === (12))){
var inst_22298 = (state_22312[(8)]);
var inst_22298__$1 = (state_22312[(2)]);
var inst_22299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22298__$1);
var state_22312__$1 = (function (){var statearr_22321 = state_22312;
(statearr_22321[(8)] = inst_22298__$1);

return statearr_22321;
})();
if(cljs.core.truth_(inst_22299)){
var statearr_22322_22354 = state_22312__$1;
(statearr_22322_22354[(1)] = (13));

} else {
var statearr_22323_22355 = state_22312__$1;
(statearr_22323_22355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (2))){
var inst_22275 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22276 = (0);
var state_22312__$1 = (function (){var statearr_22324 = state_22312;
(statearr_22324[(9)] = inst_22275);

(statearr_22324[(7)] = inst_22276);

return statearr_22324;
})();
var statearr_22325_22356 = state_22312__$1;
(statearr_22325_22356[(2)] = null);

(statearr_22325_22356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (11))){
var inst_22276 = (state_22312[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22312,(10),Object,null,(9));
var inst_22285 = chs__$1.call(null,inst_22276);
var inst_22286 = done.call(null,inst_22276);
var inst_22287 = cljs.core.async.take_BANG_.call(null,inst_22285,inst_22286);
var state_22312__$1 = state_22312;
var statearr_22326_22357 = state_22312__$1;
(statearr_22326_22357[(2)] = inst_22287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (9))){
var inst_22276 = (state_22312[(7)]);
var inst_22289 = (state_22312[(2)]);
var inst_22290 = (inst_22276 + (1));
var inst_22276__$1 = inst_22290;
var state_22312__$1 = (function (){var statearr_22327 = state_22312;
(statearr_22327[(7)] = inst_22276__$1);

(statearr_22327[(10)] = inst_22289);

return statearr_22327;
})();
var statearr_22328_22358 = state_22312__$1;
(statearr_22328_22358[(2)] = null);

(statearr_22328_22358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (5))){
var inst_22296 = (state_22312[(2)]);
var state_22312__$1 = (function (){var statearr_22329 = state_22312;
(statearr_22329[(11)] = inst_22296);

return statearr_22329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22312__$1,(12),dchan);
} else {
if((state_val_22313 === (14))){
var inst_22298 = (state_22312[(8)]);
var inst_22303 = cljs.core.apply.call(null,f,inst_22298);
var state_22312__$1 = state_22312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22312__$1,(16),out,inst_22303);
} else {
if((state_val_22313 === (16))){
var inst_22305 = (state_22312[(2)]);
var state_22312__$1 = (function (){var statearr_22330 = state_22312;
(statearr_22330[(12)] = inst_22305);

return statearr_22330;
})();
var statearr_22331_22359 = state_22312__$1;
(statearr_22331_22359[(2)] = null);

(statearr_22331_22359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (10))){
var inst_22280 = (state_22312[(2)]);
var inst_22281 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22312__$1 = (function (){var statearr_22332 = state_22312;
(statearr_22332[(13)] = inst_22280);

return statearr_22332;
})();
var statearr_22333_22360 = state_22312__$1;
(statearr_22333_22360[(2)] = inst_22281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22312__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22313 === (8))){
var inst_22294 = (state_22312[(2)]);
var state_22312__$1 = state_22312;
var statearr_22334_22361 = state_22312__$1;
(statearr_22334_22361[(2)] = inst_22294);

(statearr_22334_22361[(1)] = (5));


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
});})(c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20215__auto__,c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22338[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22338[(1)] = (1));

return statearr_22338;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22312){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22339){if((e22339 instanceof Object)){
var ex__20219__auto__ = e22339;
var statearr_22340_22362 = state_22312;
(statearr_22340_22362[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22363 = state_22312;
state_22312 = G__22363;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20329__auto__ = (function (){var statearr_22341 = f__20328__auto__.call(null);
(statearr_22341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22346);

return statearr_22341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22346,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22365 = [];
var len__17863__auto___22421 = arguments.length;
var i__17864__auto___22422 = (0);
while(true){
if((i__17864__auto___22422 < len__17863__auto___22421)){
args22365.push((arguments[i__17864__auto___22422]));

var G__22423 = (i__17864__auto___22422 + (1));
i__17864__auto___22422 = G__22423;
continue;
} else {
}
break;
}

var G__22367 = args22365.length;
switch (G__22367) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22365.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___22425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22425,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22425,out){
return (function (state_22397){
var state_val_22398 = (state_22397[(1)]);
if((state_val_22398 === (7))){
var inst_22377 = (state_22397[(7)]);
var inst_22376 = (state_22397[(8)]);
var inst_22376__$1 = (state_22397[(2)]);
var inst_22377__$1 = cljs.core.nth.call(null,inst_22376__$1,(0),null);
var inst_22378 = cljs.core.nth.call(null,inst_22376__$1,(1),null);
var inst_22379 = (inst_22377__$1 == null);
var state_22397__$1 = (function (){var statearr_22399 = state_22397;
(statearr_22399[(7)] = inst_22377__$1);

(statearr_22399[(8)] = inst_22376__$1);

(statearr_22399[(9)] = inst_22378);

return statearr_22399;
})();
if(cljs.core.truth_(inst_22379)){
var statearr_22400_22426 = state_22397__$1;
(statearr_22400_22426[(1)] = (8));

} else {
var statearr_22401_22427 = state_22397__$1;
(statearr_22401_22427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (1))){
var inst_22368 = cljs.core.vec.call(null,chs);
var inst_22369 = inst_22368;
var state_22397__$1 = (function (){var statearr_22402 = state_22397;
(statearr_22402[(10)] = inst_22369);

return statearr_22402;
})();
var statearr_22403_22428 = state_22397__$1;
(statearr_22403_22428[(2)] = null);

(statearr_22403_22428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (4))){
var inst_22369 = (state_22397[(10)]);
var state_22397__$1 = state_22397;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22397__$1,(7),inst_22369);
} else {
if((state_val_22398 === (6))){
var inst_22393 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22404_22429 = state_22397__$1;
(statearr_22404_22429[(2)] = inst_22393);

(statearr_22404_22429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (3))){
var inst_22395 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22397__$1,inst_22395);
} else {
if((state_val_22398 === (2))){
var inst_22369 = (state_22397[(10)]);
var inst_22371 = cljs.core.count.call(null,inst_22369);
var inst_22372 = (inst_22371 > (0));
var state_22397__$1 = state_22397;
if(cljs.core.truth_(inst_22372)){
var statearr_22406_22430 = state_22397__$1;
(statearr_22406_22430[(1)] = (4));

} else {
var statearr_22407_22431 = state_22397__$1;
(statearr_22407_22431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (11))){
var inst_22369 = (state_22397[(10)]);
var inst_22386 = (state_22397[(2)]);
var tmp22405 = inst_22369;
var inst_22369__$1 = tmp22405;
var state_22397__$1 = (function (){var statearr_22408 = state_22397;
(statearr_22408[(11)] = inst_22386);

(statearr_22408[(10)] = inst_22369__$1);

return statearr_22408;
})();
var statearr_22409_22432 = state_22397__$1;
(statearr_22409_22432[(2)] = null);

(statearr_22409_22432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (9))){
var inst_22377 = (state_22397[(7)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22397__$1,(11),out,inst_22377);
} else {
if((state_val_22398 === (5))){
var inst_22391 = cljs.core.async.close_BANG_.call(null,out);
var state_22397__$1 = state_22397;
var statearr_22410_22433 = state_22397__$1;
(statearr_22410_22433[(2)] = inst_22391);

(statearr_22410_22433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (10))){
var inst_22389 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22411_22434 = state_22397__$1;
(statearr_22411_22434[(2)] = inst_22389);

(statearr_22411_22434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (8))){
var inst_22377 = (state_22397[(7)]);
var inst_22376 = (state_22397[(8)]);
var inst_22378 = (state_22397[(9)]);
var inst_22369 = (state_22397[(10)]);
var inst_22381 = (function (){var cs = inst_22369;
var vec__22374 = inst_22376;
var v = inst_22377;
var c = inst_22378;
return ((function (cs,vec__22374,v,c,inst_22377,inst_22376,inst_22378,inst_22369,state_val_22398,c__20327__auto___22425,out){
return (function (p1__22364_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22364_SHARP_);
});
;})(cs,vec__22374,v,c,inst_22377,inst_22376,inst_22378,inst_22369,state_val_22398,c__20327__auto___22425,out))
})();
var inst_22382 = cljs.core.filterv.call(null,inst_22381,inst_22369);
var inst_22369__$1 = inst_22382;
var state_22397__$1 = (function (){var statearr_22412 = state_22397;
(statearr_22412[(10)] = inst_22369__$1);

return statearr_22412;
})();
var statearr_22413_22435 = state_22397__$1;
(statearr_22413_22435[(2)] = null);

(statearr_22413_22435[(1)] = (2));


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
});})(c__20327__auto___22425,out))
;
return ((function (switch__20215__auto__,c__20327__auto___22425,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22417[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22417[(1)] = (1));

return statearr_22417;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22397){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22418){if((e22418 instanceof Object)){
var ex__20219__auto__ = e22418;
var statearr_22419_22436 = state_22397;
(statearr_22419_22436[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22437 = state_22397;
state_22397 = G__22437;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22425,out))
})();
var state__20329__auto__ = (function (){var statearr_22420 = f__20328__auto__.call(null);
(statearr_22420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22425);

return statearr_22420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22425,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22438 = [];
var len__17863__auto___22487 = arguments.length;
var i__17864__auto___22488 = (0);
while(true){
if((i__17864__auto___22488 < len__17863__auto___22487)){
args22438.push((arguments[i__17864__auto___22488]));

var G__22489 = (i__17864__auto___22488 + (1));
i__17864__auto___22488 = G__22489;
continue;
} else {
}
break;
}

var G__22440 = args22438.length;
switch (G__22440) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22438.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___22491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22491,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22491,out){
return (function (state_22464){
var state_val_22465 = (state_22464[(1)]);
if((state_val_22465 === (7))){
var inst_22446 = (state_22464[(7)]);
var inst_22446__$1 = (state_22464[(2)]);
var inst_22447 = (inst_22446__$1 == null);
var inst_22448 = cljs.core.not.call(null,inst_22447);
var state_22464__$1 = (function (){var statearr_22466 = state_22464;
(statearr_22466[(7)] = inst_22446__$1);

return statearr_22466;
})();
if(inst_22448){
var statearr_22467_22492 = state_22464__$1;
(statearr_22467_22492[(1)] = (8));

} else {
var statearr_22468_22493 = state_22464__$1;
(statearr_22468_22493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (1))){
var inst_22441 = (0);
var state_22464__$1 = (function (){var statearr_22469 = state_22464;
(statearr_22469[(8)] = inst_22441);

return statearr_22469;
})();
var statearr_22470_22494 = state_22464__$1;
(statearr_22470_22494[(2)] = null);

(statearr_22470_22494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (4))){
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22464__$1,(7),ch);
} else {
if((state_val_22465 === (6))){
var inst_22459 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22471_22495 = state_22464__$1;
(statearr_22471_22495[(2)] = inst_22459);

(statearr_22471_22495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (3))){
var inst_22461 = (state_22464[(2)]);
var inst_22462 = cljs.core.async.close_BANG_.call(null,out);
var state_22464__$1 = (function (){var statearr_22472 = state_22464;
(statearr_22472[(9)] = inst_22461);

return statearr_22472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22464__$1,inst_22462);
} else {
if((state_val_22465 === (2))){
var inst_22441 = (state_22464[(8)]);
var inst_22443 = (inst_22441 < n);
var state_22464__$1 = state_22464;
if(cljs.core.truth_(inst_22443)){
var statearr_22473_22496 = state_22464__$1;
(statearr_22473_22496[(1)] = (4));

} else {
var statearr_22474_22497 = state_22464__$1;
(statearr_22474_22497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (11))){
var inst_22441 = (state_22464[(8)]);
var inst_22451 = (state_22464[(2)]);
var inst_22452 = (inst_22441 + (1));
var inst_22441__$1 = inst_22452;
var state_22464__$1 = (function (){var statearr_22475 = state_22464;
(statearr_22475[(8)] = inst_22441__$1);

(statearr_22475[(10)] = inst_22451);

return statearr_22475;
})();
var statearr_22476_22498 = state_22464__$1;
(statearr_22476_22498[(2)] = null);

(statearr_22476_22498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (9))){
var state_22464__$1 = state_22464;
var statearr_22477_22499 = state_22464__$1;
(statearr_22477_22499[(2)] = null);

(statearr_22477_22499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (5))){
var state_22464__$1 = state_22464;
var statearr_22478_22500 = state_22464__$1;
(statearr_22478_22500[(2)] = null);

(statearr_22478_22500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (10))){
var inst_22456 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22479_22501 = state_22464__$1;
(statearr_22479_22501[(2)] = inst_22456);

(statearr_22479_22501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (8))){
var inst_22446 = (state_22464[(7)]);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22464__$1,(11),out,inst_22446);
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
});})(c__20327__auto___22491,out))
;
return ((function (switch__20215__auto__,c__20327__auto___22491,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22483[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22483[(1)] = (1));

return statearr_22483;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22464){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22484){if((e22484 instanceof Object)){
var ex__20219__auto__ = e22484;
var statearr_22485_22502 = state_22464;
(statearr_22485_22502[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22503 = state_22464;
state_22464 = G__22503;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22491,out))
})();
var state__20329__auto__ = (function (){var statearr_22486 = f__20328__auto__.call(null);
(statearr_22486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22491);

return statearr_22486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22491,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22511 = (function (map_LT_,f,ch,meta22512){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22512 = meta22512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22513,meta22512__$1){
var self__ = this;
var _22513__$1 = this;
return (new cljs.core.async.t_cljs$core$async22511(self__.map_LT_,self__.f,self__.ch,meta22512__$1));
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22513){
var self__ = this;
var _22513__$1 = this;
return self__.meta22512;
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22514 = (function (map_LT_,f,ch,meta22512,_,fn1,meta22515){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22512 = meta22512;
this._ = _;
this.fn1 = fn1;
this.meta22515 = meta22515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22516,meta22515__$1){
var self__ = this;
var _22516__$1 = this;
return (new cljs.core.async.t_cljs$core$async22514(self__.map_LT_,self__.f,self__.ch,self__.meta22512,self__._,self__.fn1,meta22515__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22516){
var self__ = this;
var _22516__$1 = this;
return self__.meta22515;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22504_SHARP_){
return f1.call(null,(((p1__22504_SHARP_ == null))?null:self__.f.call(null,p1__22504_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22512","meta22512",-1335804317,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22511","cljs.core.async/t_cljs$core$async22511",812562477,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22515","meta22515",1932623354,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22514";

cljs.core.async.t_cljs$core$async22514.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22514");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22514 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22514(map_LT___$1,f__$1,ch__$1,meta22512__$1,___$2,fn1__$1,meta22515){
return (new cljs.core.async.t_cljs$core$async22514(map_LT___$1,f__$1,ch__$1,meta22512__$1,___$2,fn1__$1,meta22515));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22514(self__.map_LT_,self__.f,self__.ch,self__.meta22512,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22512","meta22512",-1335804317,null)], null);
});

cljs.core.async.t_cljs$core$async22511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22511";

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22511");
});

cljs.core.async.__GT_t_cljs$core$async22511 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22511(map_LT___$1,f__$1,ch__$1,meta22512){
return (new cljs.core.async.t_cljs$core$async22511(map_LT___$1,f__$1,ch__$1,meta22512));
});

}

return (new cljs.core.async.t_cljs$core$async22511(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22520 = (function (map_GT_,f,ch,meta22521){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22521 = meta22521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22522,meta22521__$1){
var self__ = this;
var _22522__$1 = this;
return (new cljs.core.async.t_cljs$core$async22520(self__.map_GT_,self__.f,self__.ch,meta22521__$1));
});

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22522){
var self__ = this;
var _22522__$1 = this;
return self__.meta22521;
});

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22521","meta22521",1525619501,null)], null);
});

cljs.core.async.t_cljs$core$async22520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22520";

cljs.core.async.t_cljs$core$async22520.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22520");
});

cljs.core.async.__GT_t_cljs$core$async22520 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22520(map_GT___$1,f__$1,ch__$1,meta22521){
return (new cljs.core.async.t_cljs$core$async22520(map_GT___$1,f__$1,ch__$1,meta22521));
});

}

return (new cljs.core.async.t_cljs$core$async22520(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22526 = (function (filter_GT_,p,ch,meta22527){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22527 = meta22527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22528,meta22527__$1){
var self__ = this;
var _22528__$1 = this;
return (new cljs.core.async.t_cljs$core$async22526(self__.filter_GT_,self__.p,self__.ch,meta22527__$1));
});

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22528){
var self__ = this;
var _22528__$1 = this;
return self__.meta22527;
});

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22527","meta22527",158080159,null)], null);
});

cljs.core.async.t_cljs$core$async22526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22526";

cljs.core.async.t_cljs$core$async22526.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async22526");
});

cljs.core.async.__GT_t_cljs$core$async22526 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22526(filter_GT___$1,p__$1,ch__$1,meta22527){
return (new cljs.core.async.t_cljs$core$async22526(filter_GT___$1,p__$1,ch__$1,meta22527));
});

}

return (new cljs.core.async.t_cljs$core$async22526(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22529 = [];
var len__17863__auto___22573 = arguments.length;
var i__17864__auto___22574 = (0);
while(true){
if((i__17864__auto___22574 < len__17863__auto___22573)){
args22529.push((arguments[i__17864__auto___22574]));

var G__22575 = (i__17864__auto___22574 + (1));
i__17864__auto___22574 = G__22575;
continue;
} else {
}
break;
}

var G__22531 = args22529.length;
switch (G__22531) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22529.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___22577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22577,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22577,out){
return (function (state_22552){
var state_val_22553 = (state_22552[(1)]);
if((state_val_22553 === (7))){
var inst_22548 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22554_22578 = state_22552__$1;
(statearr_22554_22578[(2)] = inst_22548);

(statearr_22554_22578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (1))){
var state_22552__$1 = state_22552;
var statearr_22555_22579 = state_22552__$1;
(statearr_22555_22579[(2)] = null);

(statearr_22555_22579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (4))){
var inst_22534 = (state_22552[(7)]);
var inst_22534__$1 = (state_22552[(2)]);
var inst_22535 = (inst_22534__$1 == null);
var state_22552__$1 = (function (){var statearr_22556 = state_22552;
(statearr_22556[(7)] = inst_22534__$1);

return statearr_22556;
})();
if(cljs.core.truth_(inst_22535)){
var statearr_22557_22580 = state_22552__$1;
(statearr_22557_22580[(1)] = (5));

} else {
var statearr_22558_22581 = state_22552__$1;
(statearr_22558_22581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (6))){
var inst_22534 = (state_22552[(7)]);
var inst_22539 = p.call(null,inst_22534);
var state_22552__$1 = state_22552;
if(cljs.core.truth_(inst_22539)){
var statearr_22559_22582 = state_22552__$1;
(statearr_22559_22582[(1)] = (8));

} else {
var statearr_22560_22583 = state_22552__$1;
(statearr_22560_22583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (3))){
var inst_22550 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22552__$1,inst_22550);
} else {
if((state_val_22553 === (2))){
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22552__$1,(4),ch);
} else {
if((state_val_22553 === (11))){
var inst_22542 = (state_22552[(2)]);
var state_22552__$1 = state_22552;
var statearr_22561_22584 = state_22552__$1;
(statearr_22561_22584[(2)] = inst_22542);

(statearr_22561_22584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (9))){
var state_22552__$1 = state_22552;
var statearr_22562_22585 = state_22552__$1;
(statearr_22562_22585[(2)] = null);

(statearr_22562_22585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (5))){
var inst_22537 = cljs.core.async.close_BANG_.call(null,out);
var state_22552__$1 = state_22552;
var statearr_22563_22586 = state_22552__$1;
(statearr_22563_22586[(2)] = inst_22537);

(statearr_22563_22586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (10))){
var inst_22545 = (state_22552[(2)]);
var state_22552__$1 = (function (){var statearr_22564 = state_22552;
(statearr_22564[(8)] = inst_22545);

return statearr_22564;
})();
var statearr_22565_22587 = state_22552__$1;
(statearr_22565_22587[(2)] = null);

(statearr_22565_22587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22553 === (8))){
var inst_22534 = (state_22552[(7)]);
var state_22552__$1 = state_22552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22552__$1,(11),out,inst_22534);
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
});})(c__20327__auto___22577,out))
;
return ((function (switch__20215__auto__,c__20327__auto___22577,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22569 = [null,null,null,null,null,null,null,null,null];
(statearr_22569[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22569[(1)] = (1));

return statearr_22569;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22552){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22570){if((e22570 instanceof Object)){
var ex__20219__auto__ = e22570;
var statearr_22571_22588 = state_22552;
(statearr_22571_22588[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22589 = state_22552;
state_22552 = G__22589;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22577,out))
})();
var state__20329__auto__ = (function (){var statearr_22572 = f__20328__auto__.call(null);
(statearr_22572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22577);

return statearr_22572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22577,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22590 = [];
var len__17863__auto___22593 = arguments.length;
var i__17864__auto___22594 = (0);
while(true){
if((i__17864__auto___22594 < len__17863__auto___22593)){
args22590.push((arguments[i__17864__auto___22594]));

var G__22595 = (i__17864__auto___22594 + (1));
i__17864__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var G__22592 = args22590.length;
switch (G__22592) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22590.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__){
return (function (state_22762){
var state_val_22763 = (state_22762[(1)]);
if((state_val_22763 === (7))){
var inst_22758 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22764_22805 = state_22762__$1;
(statearr_22764_22805[(2)] = inst_22758);

(statearr_22764_22805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (20))){
var inst_22728 = (state_22762[(7)]);
var inst_22739 = (state_22762[(2)]);
var inst_22740 = cljs.core.next.call(null,inst_22728);
var inst_22714 = inst_22740;
var inst_22715 = null;
var inst_22716 = (0);
var inst_22717 = (0);
var state_22762__$1 = (function (){var statearr_22765 = state_22762;
(statearr_22765[(8)] = inst_22739);

(statearr_22765[(9)] = inst_22717);

(statearr_22765[(10)] = inst_22716);

(statearr_22765[(11)] = inst_22714);

(statearr_22765[(12)] = inst_22715);

return statearr_22765;
})();
var statearr_22766_22806 = state_22762__$1;
(statearr_22766_22806[(2)] = null);

(statearr_22766_22806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (1))){
var state_22762__$1 = state_22762;
var statearr_22767_22807 = state_22762__$1;
(statearr_22767_22807[(2)] = null);

(statearr_22767_22807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (4))){
var inst_22703 = (state_22762[(13)]);
var inst_22703__$1 = (state_22762[(2)]);
var inst_22704 = (inst_22703__$1 == null);
var state_22762__$1 = (function (){var statearr_22768 = state_22762;
(statearr_22768[(13)] = inst_22703__$1);

return statearr_22768;
})();
if(cljs.core.truth_(inst_22704)){
var statearr_22769_22808 = state_22762__$1;
(statearr_22769_22808[(1)] = (5));

} else {
var statearr_22770_22809 = state_22762__$1;
(statearr_22770_22809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (15))){
var state_22762__$1 = state_22762;
var statearr_22774_22810 = state_22762__$1;
(statearr_22774_22810[(2)] = null);

(statearr_22774_22810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (21))){
var state_22762__$1 = state_22762;
var statearr_22775_22811 = state_22762__$1;
(statearr_22775_22811[(2)] = null);

(statearr_22775_22811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (13))){
var inst_22717 = (state_22762[(9)]);
var inst_22716 = (state_22762[(10)]);
var inst_22714 = (state_22762[(11)]);
var inst_22715 = (state_22762[(12)]);
var inst_22724 = (state_22762[(2)]);
var inst_22725 = (inst_22717 + (1));
var tmp22771 = inst_22716;
var tmp22772 = inst_22714;
var tmp22773 = inst_22715;
var inst_22714__$1 = tmp22772;
var inst_22715__$1 = tmp22773;
var inst_22716__$1 = tmp22771;
var inst_22717__$1 = inst_22725;
var state_22762__$1 = (function (){var statearr_22776 = state_22762;
(statearr_22776[(9)] = inst_22717__$1);

(statearr_22776[(14)] = inst_22724);

(statearr_22776[(10)] = inst_22716__$1);

(statearr_22776[(11)] = inst_22714__$1);

(statearr_22776[(12)] = inst_22715__$1);

return statearr_22776;
})();
var statearr_22777_22812 = state_22762__$1;
(statearr_22777_22812[(2)] = null);

(statearr_22777_22812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (22))){
var state_22762__$1 = state_22762;
var statearr_22778_22813 = state_22762__$1;
(statearr_22778_22813[(2)] = null);

(statearr_22778_22813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (6))){
var inst_22703 = (state_22762[(13)]);
var inst_22712 = f.call(null,inst_22703);
var inst_22713 = cljs.core.seq.call(null,inst_22712);
var inst_22714 = inst_22713;
var inst_22715 = null;
var inst_22716 = (0);
var inst_22717 = (0);
var state_22762__$1 = (function (){var statearr_22779 = state_22762;
(statearr_22779[(9)] = inst_22717);

(statearr_22779[(10)] = inst_22716);

(statearr_22779[(11)] = inst_22714);

(statearr_22779[(12)] = inst_22715);

return statearr_22779;
})();
var statearr_22780_22814 = state_22762__$1;
(statearr_22780_22814[(2)] = null);

(statearr_22780_22814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (17))){
var inst_22728 = (state_22762[(7)]);
var inst_22732 = cljs.core.chunk_first.call(null,inst_22728);
var inst_22733 = cljs.core.chunk_rest.call(null,inst_22728);
var inst_22734 = cljs.core.count.call(null,inst_22732);
var inst_22714 = inst_22733;
var inst_22715 = inst_22732;
var inst_22716 = inst_22734;
var inst_22717 = (0);
var state_22762__$1 = (function (){var statearr_22781 = state_22762;
(statearr_22781[(9)] = inst_22717);

(statearr_22781[(10)] = inst_22716);

(statearr_22781[(11)] = inst_22714);

(statearr_22781[(12)] = inst_22715);

return statearr_22781;
})();
var statearr_22782_22815 = state_22762__$1;
(statearr_22782_22815[(2)] = null);

(statearr_22782_22815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (3))){
var inst_22760 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22762__$1,inst_22760);
} else {
if((state_val_22763 === (12))){
var inst_22748 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22783_22816 = state_22762__$1;
(statearr_22783_22816[(2)] = inst_22748);

(statearr_22783_22816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (2))){
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22762__$1,(4),in$);
} else {
if((state_val_22763 === (23))){
var inst_22756 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22784_22817 = state_22762__$1;
(statearr_22784_22817[(2)] = inst_22756);

(statearr_22784_22817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (19))){
var inst_22743 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22785_22818 = state_22762__$1;
(statearr_22785_22818[(2)] = inst_22743);

(statearr_22785_22818[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (11))){
var inst_22728 = (state_22762[(7)]);
var inst_22714 = (state_22762[(11)]);
var inst_22728__$1 = cljs.core.seq.call(null,inst_22714);
var state_22762__$1 = (function (){var statearr_22786 = state_22762;
(statearr_22786[(7)] = inst_22728__$1);

return statearr_22786;
})();
if(inst_22728__$1){
var statearr_22787_22819 = state_22762__$1;
(statearr_22787_22819[(1)] = (14));

} else {
var statearr_22788_22820 = state_22762__$1;
(statearr_22788_22820[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (9))){
var inst_22750 = (state_22762[(2)]);
var inst_22751 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22762__$1 = (function (){var statearr_22789 = state_22762;
(statearr_22789[(15)] = inst_22750);

return statearr_22789;
})();
if(cljs.core.truth_(inst_22751)){
var statearr_22790_22821 = state_22762__$1;
(statearr_22790_22821[(1)] = (21));

} else {
var statearr_22791_22822 = state_22762__$1;
(statearr_22791_22822[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (5))){
var inst_22706 = cljs.core.async.close_BANG_.call(null,out);
var state_22762__$1 = state_22762;
var statearr_22792_22823 = state_22762__$1;
(statearr_22792_22823[(2)] = inst_22706);

(statearr_22792_22823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (14))){
var inst_22728 = (state_22762[(7)]);
var inst_22730 = cljs.core.chunked_seq_QMARK_.call(null,inst_22728);
var state_22762__$1 = state_22762;
if(inst_22730){
var statearr_22793_22824 = state_22762__$1;
(statearr_22793_22824[(1)] = (17));

} else {
var statearr_22794_22825 = state_22762__$1;
(statearr_22794_22825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (16))){
var inst_22746 = (state_22762[(2)]);
var state_22762__$1 = state_22762;
var statearr_22795_22826 = state_22762__$1;
(statearr_22795_22826[(2)] = inst_22746);

(statearr_22795_22826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22763 === (10))){
var inst_22717 = (state_22762[(9)]);
var inst_22715 = (state_22762[(12)]);
var inst_22722 = cljs.core._nth.call(null,inst_22715,inst_22717);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22762__$1,(13),out,inst_22722);
} else {
if((state_val_22763 === (18))){
var inst_22728 = (state_22762[(7)]);
var inst_22737 = cljs.core.first.call(null,inst_22728);
var state_22762__$1 = state_22762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22762__$1,(20),out,inst_22737);
} else {
if((state_val_22763 === (8))){
var inst_22717 = (state_22762[(9)]);
var inst_22716 = (state_22762[(10)]);
var inst_22719 = (inst_22717 < inst_22716);
var inst_22720 = inst_22719;
var state_22762__$1 = state_22762;
if(cljs.core.truth_(inst_22720)){
var statearr_22796_22827 = state_22762__$1;
(statearr_22796_22827[(1)] = (10));

} else {
var statearr_22797_22828 = state_22762__$1;
(statearr_22797_22828[(1)] = (11));

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
});})(c__20327__auto__))
;
return ((function (switch__20215__auto__,c__20327__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____0 = (function (){
var statearr_22801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22801[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__);

(statearr_22801[(1)] = (1));

return statearr_22801;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____1 = (function (state_22762){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22802){if((e22802 instanceof Object)){
var ex__20219__auto__ = e22802;
var statearr_22803_22829 = state_22762;
(statearr_22803_22829[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22830 = state_22762;
state_22762 = G__22830;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__ = function(state_22762){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____1.call(this,state_22762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20216__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__))
})();
var state__20329__auto__ = (function (){var statearr_22804 = f__20328__auto__.call(null);
(statearr_22804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_22804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__))
);

return c__20327__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22831 = [];
var len__17863__auto___22834 = arguments.length;
var i__17864__auto___22835 = (0);
while(true){
if((i__17864__auto___22835 < len__17863__auto___22834)){
args22831.push((arguments[i__17864__auto___22835]));

var G__22836 = (i__17864__auto___22835 + (1));
i__17864__auto___22835 = G__22836;
continue;
} else {
}
break;
}

var G__22833 = args22831.length;
switch (G__22833) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22831.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22838 = [];
var len__17863__auto___22841 = arguments.length;
var i__17864__auto___22842 = (0);
while(true){
if((i__17864__auto___22842 < len__17863__auto___22841)){
args22838.push((arguments[i__17864__auto___22842]));

var G__22843 = (i__17864__auto___22842 + (1));
i__17864__auto___22842 = G__22843;
continue;
} else {
}
break;
}

var G__22840 = args22838.length;
switch (G__22840) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22838.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22845 = [];
var len__17863__auto___22896 = arguments.length;
var i__17864__auto___22897 = (0);
while(true){
if((i__17864__auto___22897 < len__17863__auto___22896)){
args22845.push((arguments[i__17864__auto___22897]));

var G__22898 = (i__17864__auto___22897 + (1));
i__17864__auto___22897 = G__22898;
continue;
} else {
}
break;
}

var G__22847 = args22845.length;
switch (G__22847) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22845.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___22900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22900,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22900,out){
return (function (state_22871){
var state_val_22872 = (state_22871[(1)]);
if((state_val_22872 === (7))){
var inst_22866 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22873_22901 = state_22871__$1;
(statearr_22873_22901[(2)] = inst_22866);

(statearr_22873_22901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (1))){
var inst_22848 = null;
var state_22871__$1 = (function (){var statearr_22874 = state_22871;
(statearr_22874[(7)] = inst_22848);

return statearr_22874;
})();
var statearr_22875_22902 = state_22871__$1;
(statearr_22875_22902[(2)] = null);

(statearr_22875_22902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (4))){
var inst_22851 = (state_22871[(8)]);
var inst_22851__$1 = (state_22871[(2)]);
var inst_22852 = (inst_22851__$1 == null);
var inst_22853 = cljs.core.not.call(null,inst_22852);
var state_22871__$1 = (function (){var statearr_22876 = state_22871;
(statearr_22876[(8)] = inst_22851__$1);

return statearr_22876;
})();
if(inst_22853){
var statearr_22877_22903 = state_22871__$1;
(statearr_22877_22903[(1)] = (5));

} else {
var statearr_22878_22904 = state_22871__$1;
(statearr_22878_22904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (6))){
var state_22871__$1 = state_22871;
var statearr_22879_22905 = state_22871__$1;
(statearr_22879_22905[(2)] = null);

(statearr_22879_22905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (3))){
var inst_22868 = (state_22871[(2)]);
var inst_22869 = cljs.core.async.close_BANG_.call(null,out);
var state_22871__$1 = (function (){var statearr_22880 = state_22871;
(statearr_22880[(9)] = inst_22868);

return statearr_22880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22871__$1,inst_22869);
} else {
if((state_val_22872 === (2))){
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22871__$1,(4),ch);
} else {
if((state_val_22872 === (11))){
var inst_22851 = (state_22871[(8)]);
var inst_22860 = (state_22871[(2)]);
var inst_22848 = inst_22851;
var state_22871__$1 = (function (){var statearr_22881 = state_22871;
(statearr_22881[(7)] = inst_22848);

(statearr_22881[(10)] = inst_22860);

return statearr_22881;
})();
var statearr_22882_22906 = state_22871__$1;
(statearr_22882_22906[(2)] = null);

(statearr_22882_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (9))){
var inst_22851 = (state_22871[(8)]);
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22871__$1,(11),out,inst_22851);
} else {
if((state_val_22872 === (5))){
var inst_22851 = (state_22871[(8)]);
var inst_22848 = (state_22871[(7)]);
var inst_22855 = cljs.core._EQ_.call(null,inst_22851,inst_22848);
var state_22871__$1 = state_22871;
if(inst_22855){
var statearr_22884_22907 = state_22871__$1;
(statearr_22884_22907[(1)] = (8));

} else {
var statearr_22885_22908 = state_22871__$1;
(statearr_22885_22908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (10))){
var inst_22863 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22886_22909 = state_22871__$1;
(statearr_22886_22909[(2)] = inst_22863);

(statearr_22886_22909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (8))){
var inst_22848 = (state_22871[(7)]);
var tmp22883 = inst_22848;
var inst_22848__$1 = tmp22883;
var state_22871__$1 = (function (){var statearr_22887 = state_22871;
(statearr_22887[(7)] = inst_22848__$1);

return statearr_22887;
})();
var statearr_22888_22910 = state_22871__$1;
(statearr_22888_22910[(2)] = null);

(statearr_22888_22910[(1)] = (2));


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
});})(c__20327__auto___22900,out))
;
return ((function (switch__20215__auto__,c__20327__auto___22900,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22892 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22892[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22892[(1)] = (1));

return statearr_22892;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22871){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22893){if((e22893 instanceof Object)){
var ex__20219__auto__ = e22893;
var statearr_22894_22911 = state_22871;
(statearr_22894_22911[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22912 = state_22871;
state_22871 = G__22912;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22900,out))
})();
var state__20329__auto__ = (function (){var statearr_22895 = f__20328__auto__.call(null);
(statearr_22895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22900);

return statearr_22895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22900,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22913 = [];
var len__17863__auto___22983 = arguments.length;
var i__17864__auto___22984 = (0);
while(true){
if((i__17864__auto___22984 < len__17863__auto___22983)){
args22913.push((arguments[i__17864__auto___22984]));

var G__22985 = (i__17864__auto___22984 + (1));
i__17864__auto___22984 = G__22985;
continue;
} else {
}
break;
}

var G__22915 = args22913.length;
switch (G__22915) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22913.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___22987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___22987,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___22987,out){
return (function (state_22953){
var state_val_22954 = (state_22953[(1)]);
if((state_val_22954 === (7))){
var inst_22949 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
var statearr_22955_22988 = state_22953__$1;
(statearr_22955_22988[(2)] = inst_22949);

(statearr_22955_22988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (1))){
var inst_22916 = (new Array(n));
var inst_22917 = inst_22916;
var inst_22918 = (0);
var state_22953__$1 = (function (){var statearr_22956 = state_22953;
(statearr_22956[(7)] = inst_22917);

(statearr_22956[(8)] = inst_22918);

return statearr_22956;
})();
var statearr_22957_22989 = state_22953__$1;
(statearr_22957_22989[(2)] = null);

(statearr_22957_22989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (4))){
var inst_22921 = (state_22953[(9)]);
var inst_22921__$1 = (state_22953[(2)]);
var inst_22922 = (inst_22921__$1 == null);
var inst_22923 = cljs.core.not.call(null,inst_22922);
var state_22953__$1 = (function (){var statearr_22958 = state_22953;
(statearr_22958[(9)] = inst_22921__$1);

return statearr_22958;
})();
if(inst_22923){
var statearr_22959_22990 = state_22953__$1;
(statearr_22959_22990[(1)] = (5));

} else {
var statearr_22960_22991 = state_22953__$1;
(statearr_22960_22991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (15))){
var inst_22943 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
var statearr_22961_22992 = state_22953__$1;
(statearr_22961_22992[(2)] = inst_22943);

(statearr_22961_22992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (13))){
var state_22953__$1 = state_22953;
var statearr_22962_22993 = state_22953__$1;
(statearr_22962_22993[(2)] = null);

(statearr_22962_22993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (6))){
var inst_22918 = (state_22953[(8)]);
var inst_22939 = (inst_22918 > (0));
var state_22953__$1 = state_22953;
if(cljs.core.truth_(inst_22939)){
var statearr_22963_22994 = state_22953__$1;
(statearr_22963_22994[(1)] = (12));

} else {
var statearr_22964_22995 = state_22953__$1;
(statearr_22964_22995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (3))){
var inst_22951 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22953__$1,inst_22951);
} else {
if((state_val_22954 === (12))){
var inst_22917 = (state_22953[(7)]);
var inst_22941 = cljs.core.vec.call(null,inst_22917);
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22953__$1,(15),out,inst_22941);
} else {
if((state_val_22954 === (2))){
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22953__$1,(4),ch);
} else {
if((state_val_22954 === (11))){
var inst_22933 = (state_22953[(2)]);
var inst_22934 = (new Array(n));
var inst_22917 = inst_22934;
var inst_22918 = (0);
var state_22953__$1 = (function (){var statearr_22965 = state_22953;
(statearr_22965[(7)] = inst_22917);

(statearr_22965[(10)] = inst_22933);

(statearr_22965[(8)] = inst_22918);

return statearr_22965;
})();
var statearr_22966_22996 = state_22953__$1;
(statearr_22966_22996[(2)] = null);

(statearr_22966_22996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (9))){
var inst_22917 = (state_22953[(7)]);
var inst_22931 = cljs.core.vec.call(null,inst_22917);
var state_22953__$1 = state_22953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22953__$1,(11),out,inst_22931);
} else {
if((state_val_22954 === (5))){
var inst_22917 = (state_22953[(7)]);
var inst_22921 = (state_22953[(9)]);
var inst_22926 = (state_22953[(11)]);
var inst_22918 = (state_22953[(8)]);
var inst_22925 = (inst_22917[inst_22918] = inst_22921);
var inst_22926__$1 = (inst_22918 + (1));
var inst_22927 = (inst_22926__$1 < n);
var state_22953__$1 = (function (){var statearr_22967 = state_22953;
(statearr_22967[(12)] = inst_22925);

(statearr_22967[(11)] = inst_22926__$1);

return statearr_22967;
})();
if(cljs.core.truth_(inst_22927)){
var statearr_22968_22997 = state_22953__$1;
(statearr_22968_22997[(1)] = (8));

} else {
var statearr_22969_22998 = state_22953__$1;
(statearr_22969_22998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (14))){
var inst_22946 = (state_22953[(2)]);
var inst_22947 = cljs.core.async.close_BANG_.call(null,out);
var state_22953__$1 = (function (){var statearr_22971 = state_22953;
(statearr_22971[(13)] = inst_22946);

return statearr_22971;
})();
var statearr_22972_22999 = state_22953__$1;
(statearr_22972_22999[(2)] = inst_22947);

(statearr_22972_22999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (10))){
var inst_22937 = (state_22953[(2)]);
var state_22953__$1 = state_22953;
var statearr_22973_23000 = state_22953__$1;
(statearr_22973_23000[(2)] = inst_22937);

(statearr_22973_23000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22954 === (8))){
var inst_22917 = (state_22953[(7)]);
var inst_22926 = (state_22953[(11)]);
var tmp22970 = inst_22917;
var inst_22917__$1 = tmp22970;
var inst_22918 = inst_22926;
var state_22953__$1 = (function (){var statearr_22974 = state_22953;
(statearr_22974[(7)] = inst_22917__$1);

(statearr_22974[(8)] = inst_22918);

return statearr_22974;
})();
var statearr_22975_23001 = state_22953__$1;
(statearr_22975_23001[(2)] = null);

(statearr_22975_23001[(1)] = (2));


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
});})(c__20327__auto___22987,out))
;
return ((function (switch__20215__auto__,c__20327__auto___22987,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_22979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22979[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_22979[(1)] = (1));

return statearr_22979;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_22953){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_22953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e22980){if((e22980 instanceof Object)){
var ex__20219__auto__ = e22980;
var statearr_22981_23002 = state_22953;
(statearr_22981_23002[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23003 = state_22953;
state_22953 = G__23003;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_22953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_22953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___22987,out))
})();
var state__20329__auto__ = (function (){var statearr_22982 = f__20328__auto__.call(null);
(statearr_22982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___22987);

return statearr_22982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___22987,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23004 = [];
var len__17863__auto___23078 = arguments.length;
var i__17864__auto___23079 = (0);
while(true){
if((i__17864__auto___23079 < len__17863__auto___23078)){
args23004.push((arguments[i__17864__auto___23079]));

var G__23080 = (i__17864__auto___23079 + (1));
i__17864__auto___23079 = G__23080;
continue;
} else {
}
break;
}

var G__23006 = args23004.length;
switch (G__23006) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23004.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20327__auto___23082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___23082,out){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___23082,out){
return (function (state_23048){
var state_val_23049 = (state_23048[(1)]);
if((state_val_23049 === (7))){
var inst_23044 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23050_23083 = state_23048__$1;
(statearr_23050_23083[(2)] = inst_23044);

(statearr_23050_23083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (1))){
var inst_23007 = [];
var inst_23008 = inst_23007;
var inst_23009 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23048__$1 = (function (){var statearr_23051 = state_23048;
(statearr_23051[(7)] = inst_23008);

(statearr_23051[(8)] = inst_23009);

return statearr_23051;
})();
var statearr_23052_23084 = state_23048__$1;
(statearr_23052_23084[(2)] = null);

(statearr_23052_23084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (4))){
var inst_23012 = (state_23048[(9)]);
var inst_23012__$1 = (state_23048[(2)]);
var inst_23013 = (inst_23012__$1 == null);
var inst_23014 = cljs.core.not.call(null,inst_23013);
var state_23048__$1 = (function (){var statearr_23053 = state_23048;
(statearr_23053[(9)] = inst_23012__$1);

return statearr_23053;
})();
if(inst_23014){
var statearr_23054_23085 = state_23048__$1;
(statearr_23054_23085[(1)] = (5));

} else {
var statearr_23055_23086 = state_23048__$1;
(statearr_23055_23086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (15))){
var inst_23038 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23056_23087 = state_23048__$1;
(statearr_23056_23087[(2)] = inst_23038);

(statearr_23056_23087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (13))){
var state_23048__$1 = state_23048;
var statearr_23057_23088 = state_23048__$1;
(statearr_23057_23088[(2)] = null);

(statearr_23057_23088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (6))){
var inst_23008 = (state_23048[(7)]);
var inst_23033 = inst_23008.length;
var inst_23034 = (inst_23033 > (0));
var state_23048__$1 = state_23048;
if(cljs.core.truth_(inst_23034)){
var statearr_23058_23089 = state_23048__$1;
(statearr_23058_23089[(1)] = (12));

} else {
var statearr_23059_23090 = state_23048__$1;
(statearr_23059_23090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (3))){
var inst_23046 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23048__$1,inst_23046);
} else {
if((state_val_23049 === (12))){
var inst_23008 = (state_23048[(7)]);
var inst_23036 = cljs.core.vec.call(null,inst_23008);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23048__$1,(15),out,inst_23036);
} else {
if((state_val_23049 === (2))){
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23048__$1,(4),ch);
} else {
if((state_val_23049 === (11))){
var inst_23016 = (state_23048[(10)]);
var inst_23012 = (state_23048[(9)]);
var inst_23026 = (state_23048[(2)]);
var inst_23027 = [];
var inst_23028 = inst_23027.push(inst_23012);
var inst_23008 = inst_23027;
var inst_23009 = inst_23016;
var state_23048__$1 = (function (){var statearr_23060 = state_23048;
(statearr_23060[(7)] = inst_23008);

(statearr_23060[(11)] = inst_23026);

(statearr_23060[(8)] = inst_23009);

(statearr_23060[(12)] = inst_23028);

return statearr_23060;
})();
var statearr_23061_23091 = state_23048__$1;
(statearr_23061_23091[(2)] = null);

(statearr_23061_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (9))){
var inst_23008 = (state_23048[(7)]);
var inst_23024 = cljs.core.vec.call(null,inst_23008);
var state_23048__$1 = state_23048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23048__$1,(11),out,inst_23024);
} else {
if((state_val_23049 === (5))){
var inst_23016 = (state_23048[(10)]);
var inst_23012 = (state_23048[(9)]);
var inst_23009 = (state_23048[(8)]);
var inst_23016__$1 = f.call(null,inst_23012);
var inst_23017 = cljs.core._EQ_.call(null,inst_23016__$1,inst_23009);
var inst_23018 = cljs.core.keyword_identical_QMARK_.call(null,inst_23009,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23019 = (inst_23017) || (inst_23018);
var state_23048__$1 = (function (){var statearr_23062 = state_23048;
(statearr_23062[(10)] = inst_23016__$1);

return statearr_23062;
})();
if(cljs.core.truth_(inst_23019)){
var statearr_23063_23092 = state_23048__$1;
(statearr_23063_23092[(1)] = (8));

} else {
var statearr_23064_23093 = state_23048__$1;
(statearr_23064_23093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (14))){
var inst_23041 = (state_23048[(2)]);
var inst_23042 = cljs.core.async.close_BANG_.call(null,out);
var state_23048__$1 = (function (){var statearr_23066 = state_23048;
(statearr_23066[(13)] = inst_23041);

return statearr_23066;
})();
var statearr_23067_23094 = state_23048__$1;
(statearr_23067_23094[(2)] = inst_23042);

(statearr_23067_23094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (10))){
var inst_23031 = (state_23048[(2)]);
var state_23048__$1 = state_23048;
var statearr_23068_23095 = state_23048__$1;
(statearr_23068_23095[(2)] = inst_23031);

(statearr_23068_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23049 === (8))){
var inst_23016 = (state_23048[(10)]);
var inst_23008 = (state_23048[(7)]);
var inst_23012 = (state_23048[(9)]);
var inst_23021 = inst_23008.push(inst_23012);
var tmp23065 = inst_23008;
var inst_23008__$1 = tmp23065;
var inst_23009 = inst_23016;
var state_23048__$1 = (function (){var statearr_23069 = state_23048;
(statearr_23069[(7)] = inst_23008__$1);

(statearr_23069[(8)] = inst_23009);

(statearr_23069[(14)] = inst_23021);

return statearr_23069;
})();
var statearr_23070_23096 = state_23048__$1;
(statearr_23070_23096[(2)] = null);

(statearr_23070_23096[(1)] = (2));


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
});})(c__20327__auto___23082,out))
;
return ((function (switch__20215__auto__,c__20327__auto___23082,out){
return (function() {
var cljs$core$async$state_machine__20216__auto__ = null;
var cljs$core$async$state_machine__20216__auto____0 = (function (){
var statearr_23074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23074[(0)] = cljs$core$async$state_machine__20216__auto__);

(statearr_23074[(1)] = (1));

return statearr_23074;
});
var cljs$core$async$state_machine__20216__auto____1 = (function (state_23048){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_23048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e23075){if((e23075 instanceof Object)){
var ex__20219__auto__ = e23075;
var statearr_23076_23097 = state_23048;
(statearr_23076_23097[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23098 = state_23048;
state_23048 = G__23098;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
cljs$core$async$state_machine__20216__auto__ = function(state_23048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20216__auto____1.call(this,state_23048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20216__auto____0;
cljs$core$async$state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20216__auto____1;
return cljs$core$async$state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___23082,out))
})();
var state__20329__auto__ = (function (){var statearr_23077 = f__20328__auto__.call(null);
(statearr_23077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___23082);

return statearr_23077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___23082,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457370613170