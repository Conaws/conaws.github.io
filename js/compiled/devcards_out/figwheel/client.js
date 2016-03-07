// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26817 = cljs.core._EQ_;
var expr__26818 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e26821){if((e26821 instanceof Error)){
var e = e26821;
return false;
} else {
throw e26821;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26817.call(null,"true",expr__26818))){
return true;
} else {
if(cljs.core.truth_(pred__26817.call(null,"false",expr__26818))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26818)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26823){if((e26823 instanceof Error)){
var e = e26823;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26823;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___26825 = arguments.length;
var i__17864__auto___26826 = (0);
while(true){
if((i__17864__auto___26826 < len__17863__auto___26825)){
args__17870__auto__.push((arguments[i__17864__auto___26826]));

var G__26827 = (i__17864__auto___26826 + (1));
i__17864__auto___26826 = G__26827;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26824){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26824));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26828){
var map__26831 = p__26828;
var map__26831__$1 = ((((!((map__26831 == null)))?((((map__26831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26831):map__26831);
var message = cljs.core.get.call(null,map__26831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26831__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20327__auto___26993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___26993,ch){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___26993,ch){
return (function (state_26962){
var state_val_26963 = (state_26962[(1)]);
if((state_val_26963 === (7))){
var inst_26958 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26964_26994 = state_26962__$1;
(statearr_26964_26994[(2)] = inst_26958);

(statearr_26964_26994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (1))){
var state_26962__$1 = state_26962;
var statearr_26965_26995 = state_26962__$1;
(statearr_26965_26995[(2)] = null);

(statearr_26965_26995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (4))){
var inst_26915 = (state_26962[(7)]);
var inst_26915__$1 = (state_26962[(2)]);
var state_26962__$1 = (function (){var statearr_26966 = state_26962;
(statearr_26966[(7)] = inst_26915__$1);

return statearr_26966;
})();
if(cljs.core.truth_(inst_26915__$1)){
var statearr_26967_26996 = state_26962__$1;
(statearr_26967_26996[(1)] = (5));

} else {
var statearr_26968_26997 = state_26962__$1;
(statearr_26968_26997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (15))){
var inst_26922 = (state_26962[(8)]);
var inst_26937 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26922);
var inst_26938 = cljs.core.first.call(null,inst_26937);
var inst_26939 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26938);
var inst_26940 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26939)].join('');
var inst_26941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26940);
var state_26962__$1 = state_26962;
var statearr_26969_26998 = state_26962__$1;
(statearr_26969_26998[(2)] = inst_26941);

(statearr_26969_26998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (13))){
var inst_26946 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26970_26999 = state_26962__$1;
(statearr_26970_26999[(2)] = inst_26946);

(statearr_26970_26999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (6))){
var state_26962__$1 = state_26962;
var statearr_26971_27000 = state_26962__$1;
(statearr_26971_27000[(2)] = null);

(statearr_26971_27000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (17))){
var inst_26944 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26972_27001 = state_26962__$1;
(statearr_26972_27001[(2)] = inst_26944);

(statearr_26972_27001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (3))){
var inst_26960 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26962__$1,inst_26960);
} else {
if((state_val_26963 === (12))){
var inst_26921 = (state_26962[(9)]);
var inst_26935 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26921,opts);
var state_26962__$1 = state_26962;
if(cljs.core.truth_(inst_26935)){
var statearr_26973_27002 = state_26962__$1;
(statearr_26973_27002[(1)] = (15));

} else {
var statearr_26974_27003 = state_26962__$1;
(statearr_26974_27003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (2))){
var state_26962__$1 = state_26962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26962__$1,(4),ch);
} else {
if((state_val_26963 === (11))){
var inst_26922 = (state_26962[(8)]);
var inst_26927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26928 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26922);
var inst_26929 = cljs.core.async.timeout.call(null,(1000));
var inst_26930 = [inst_26928,inst_26929];
var inst_26931 = (new cljs.core.PersistentVector(null,2,(5),inst_26927,inst_26930,null));
var state_26962__$1 = state_26962;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26962__$1,(14),inst_26931);
} else {
if((state_val_26963 === (9))){
var inst_26922 = (state_26962[(8)]);
var inst_26948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26949 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26922);
var inst_26950 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26949);
var inst_26951 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26950)].join('');
var inst_26952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26951);
var state_26962__$1 = (function (){var statearr_26975 = state_26962;
(statearr_26975[(10)] = inst_26948);

return statearr_26975;
})();
var statearr_26976_27004 = state_26962__$1;
(statearr_26976_27004[(2)] = inst_26952);

(statearr_26976_27004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (5))){
var inst_26915 = (state_26962[(7)]);
var inst_26917 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26918 = (new cljs.core.PersistentArrayMap(null,2,inst_26917,null));
var inst_26919 = (new cljs.core.PersistentHashSet(null,inst_26918,null));
var inst_26920 = figwheel.client.focus_msgs.call(null,inst_26919,inst_26915);
var inst_26921 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26920);
var inst_26922 = cljs.core.first.call(null,inst_26920);
var inst_26923 = figwheel.client.autoload_QMARK_.call(null);
var state_26962__$1 = (function (){var statearr_26977 = state_26962;
(statearr_26977[(8)] = inst_26922);

(statearr_26977[(9)] = inst_26921);

return statearr_26977;
})();
if(cljs.core.truth_(inst_26923)){
var statearr_26978_27005 = state_26962__$1;
(statearr_26978_27005[(1)] = (8));

} else {
var statearr_26979_27006 = state_26962__$1;
(statearr_26979_27006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (14))){
var inst_26933 = (state_26962[(2)]);
var state_26962__$1 = state_26962;
var statearr_26980_27007 = state_26962__$1;
(statearr_26980_27007[(2)] = inst_26933);

(statearr_26980_27007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (16))){
var state_26962__$1 = state_26962;
var statearr_26981_27008 = state_26962__$1;
(statearr_26981_27008[(2)] = null);

(statearr_26981_27008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (10))){
var inst_26954 = (state_26962[(2)]);
var state_26962__$1 = (function (){var statearr_26982 = state_26962;
(statearr_26982[(11)] = inst_26954);

return statearr_26982;
})();
var statearr_26983_27009 = state_26962__$1;
(statearr_26983_27009[(2)] = null);

(statearr_26983_27009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26963 === (8))){
var inst_26921 = (state_26962[(9)]);
var inst_26925 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26921,opts);
var state_26962__$1 = state_26962;
if(cljs.core.truth_(inst_26925)){
var statearr_26984_27010 = state_26962__$1;
(statearr_26984_27010[(1)] = (11));

} else {
var statearr_26985_27011 = state_26962__$1;
(statearr_26985_27011[(1)] = (12));

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
});})(c__20327__auto___26993,ch))
;
return ((function (switch__20215__auto__,c__20327__auto___26993,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____0 = (function (){
var statearr_26989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26989[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__);

(statearr_26989[(1)] = (1));

return statearr_26989;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____1 = (function (state_26962){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_26962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e26990){if((e26990 instanceof Object)){
var ex__20219__auto__ = e26990;
var statearr_26991_27012 = state_26962;
(statearr_26991_27012[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27013 = state_26962;
state_26962 = G__27013;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__ = function(state_26962){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____1.call(this,state_26962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20216__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___26993,ch))
})();
var state__20329__auto__ = (function (){var statearr_26992 = f__20328__auto__.call(null);
(statearr_26992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___26993);

return statearr_26992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___26993,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27014_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27014_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27021 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27021){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27020 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27020;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27019;
}}catch (e27018){if((e27018 instanceof Error)){
var e = e27018;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27021], null));
} else {
var e = e27018;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27021))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27022){
var map__27029 = p__27022;
var map__27029__$1 = ((((!((map__27029 == null)))?((((map__27029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27029):map__27029);
var opts = map__27029__$1;
var build_id = cljs.core.get.call(null,map__27029__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27029,map__27029__$1,opts,build_id){
return (function (p__27031){
var vec__27032 = p__27031;
var map__27033 = cljs.core.nth.call(null,vec__27032,(0),null);
var map__27033__$1 = ((((!((map__27033 == null)))?((((map__27033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27033):map__27033);
var msg = map__27033__$1;
var msg_name = cljs.core.get.call(null,map__27033__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27032,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27032,map__27033,map__27033__$1,msg,msg_name,_,map__27029,map__27029__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27032,map__27033,map__27033__$1,msg,msg_name,_,map__27029,map__27029__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27029,map__27029__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27039){
var vec__27040 = p__27039;
var map__27041 = cljs.core.nth.call(null,vec__27040,(0),null);
var map__27041__$1 = ((((!((map__27041 == null)))?((((map__27041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27041):map__27041);
var msg = map__27041__$1;
var msg_name = cljs.core.get.call(null,map__27041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27040,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27043){
var map__27053 = p__27043;
var map__27053__$1 = ((((!((map__27053 == null)))?((((map__27053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27053):map__27053);
var on_compile_warning = cljs.core.get.call(null,map__27053__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27053__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27053,map__27053__$1,on_compile_warning,on_compile_fail){
return (function (p__27055){
var vec__27056 = p__27055;
var map__27057 = cljs.core.nth.call(null,vec__27056,(0),null);
var map__27057__$1 = ((((!((map__27057 == null)))?((((map__27057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27057):map__27057);
var msg = map__27057__$1;
var msg_name = cljs.core.get.call(null,map__27057__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27056,(1));
var pred__27059 = cljs.core._EQ_;
var expr__27060 = msg_name;
if(cljs.core.truth_(pred__27059.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27060))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27059.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27060))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27053,map__27053__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__,msg_hist,msg_names,msg){
return (function (state_27276){
var state_val_27277 = (state_27276[(1)]);
if((state_val_27277 === (7))){
var inst_27200 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27200)){
var statearr_27278_27324 = state_27276__$1;
(statearr_27278_27324[(1)] = (8));

} else {
var statearr_27279_27325 = state_27276__$1;
(statearr_27279_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (20))){
var inst_27270 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27280_27326 = state_27276__$1;
(statearr_27280_27326[(2)] = inst_27270);

(statearr_27280_27326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (27))){
var inst_27266 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27281_27327 = state_27276__$1;
(statearr_27281_27327[(2)] = inst_27266);

(statearr_27281_27327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (1))){
var inst_27193 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27193)){
var statearr_27282_27328 = state_27276__$1;
(statearr_27282_27328[(1)] = (2));

} else {
var statearr_27283_27329 = state_27276__$1;
(statearr_27283_27329[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (24))){
var inst_27268 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27284_27330 = state_27276__$1;
(statearr_27284_27330[(2)] = inst_27268);

(statearr_27284_27330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (4))){
var inst_27274 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27276__$1,inst_27274);
} else {
if((state_val_27277 === (15))){
var inst_27272 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27285_27331 = state_27276__$1;
(statearr_27285_27331[(2)] = inst_27272);

(statearr_27285_27331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (21))){
var inst_27231 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27286_27332 = state_27276__$1;
(statearr_27286_27332[(2)] = inst_27231);

(statearr_27286_27332[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (31))){
var inst_27255 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27255)){
var statearr_27287_27333 = state_27276__$1;
(statearr_27287_27333[(1)] = (34));

} else {
var statearr_27288_27334 = state_27276__$1;
(statearr_27288_27334[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (32))){
var inst_27264 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27289_27335 = state_27276__$1;
(statearr_27289_27335[(2)] = inst_27264);

(statearr_27289_27335[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (33))){
var inst_27253 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27290_27336 = state_27276__$1;
(statearr_27290_27336[(2)] = inst_27253);

(statearr_27290_27336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (13))){
var inst_27214 = figwheel.client.heads_up.clear.call(null);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(16),inst_27214);
} else {
if((state_val_27277 === (22))){
var inst_27235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27236 = figwheel.client.heads_up.append_message.call(null,inst_27235);
var state_27276__$1 = state_27276;
var statearr_27291_27337 = state_27276__$1;
(statearr_27291_27337[(2)] = inst_27236);

(statearr_27291_27337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (36))){
var inst_27262 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27292_27338 = state_27276__$1;
(statearr_27292_27338[(2)] = inst_27262);

(statearr_27292_27338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (29))){
var inst_27246 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27293_27339 = state_27276__$1;
(statearr_27293_27339[(2)] = inst_27246);

(statearr_27293_27339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (6))){
var inst_27195 = (state_27276[(7)]);
var state_27276__$1 = state_27276;
var statearr_27294_27340 = state_27276__$1;
(statearr_27294_27340[(2)] = inst_27195);

(statearr_27294_27340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (28))){
var inst_27242 = (state_27276[(2)]);
var inst_27243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27244 = figwheel.client.heads_up.display_warning.call(null,inst_27243);
var state_27276__$1 = (function (){var statearr_27295 = state_27276;
(statearr_27295[(8)] = inst_27242);

return statearr_27295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(29),inst_27244);
} else {
if((state_val_27277 === (25))){
var inst_27240 = figwheel.client.heads_up.clear.call(null);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(28),inst_27240);
} else {
if((state_val_27277 === (34))){
var inst_27257 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(37),inst_27257);
} else {
if((state_val_27277 === (17))){
var inst_27222 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27296_27341 = state_27276__$1;
(statearr_27296_27341[(2)] = inst_27222);

(statearr_27296_27341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (3))){
var inst_27212 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27212)){
var statearr_27297_27342 = state_27276__$1;
(statearr_27297_27342[(1)] = (13));

} else {
var statearr_27298_27343 = state_27276__$1;
(statearr_27298_27343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (12))){
var inst_27208 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27299_27344 = state_27276__$1;
(statearr_27299_27344[(2)] = inst_27208);

(statearr_27299_27344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (2))){
var inst_27195 = (state_27276[(7)]);
var inst_27195__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27276__$1 = (function (){var statearr_27300 = state_27276;
(statearr_27300[(7)] = inst_27195__$1);

return statearr_27300;
})();
if(cljs.core.truth_(inst_27195__$1)){
var statearr_27301_27345 = state_27276__$1;
(statearr_27301_27345[(1)] = (5));

} else {
var statearr_27302_27346 = state_27276__$1;
(statearr_27302_27346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (23))){
var inst_27238 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27238)){
var statearr_27303_27347 = state_27276__$1;
(statearr_27303_27347[(1)] = (25));

} else {
var statearr_27304_27348 = state_27276__$1;
(statearr_27304_27348[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (35))){
var state_27276__$1 = state_27276;
var statearr_27305_27349 = state_27276__$1;
(statearr_27305_27349[(2)] = null);

(statearr_27305_27349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (19))){
var inst_27233 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27233)){
var statearr_27306_27350 = state_27276__$1;
(statearr_27306_27350[(1)] = (22));

} else {
var statearr_27307_27351 = state_27276__$1;
(statearr_27307_27351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (11))){
var inst_27204 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27308_27352 = state_27276__$1;
(statearr_27308_27352[(2)] = inst_27204);

(statearr_27308_27352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (9))){
var inst_27206 = figwheel.client.heads_up.clear.call(null);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(12),inst_27206);
} else {
if((state_val_27277 === (5))){
var inst_27197 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27276__$1 = state_27276;
var statearr_27309_27353 = state_27276__$1;
(statearr_27309_27353[(2)] = inst_27197);

(statearr_27309_27353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (14))){
var inst_27224 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27224)){
var statearr_27310_27354 = state_27276__$1;
(statearr_27310_27354[(1)] = (18));

} else {
var statearr_27311_27355 = state_27276__$1;
(statearr_27311_27355[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (26))){
var inst_27248 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27248)){
var statearr_27312_27356 = state_27276__$1;
(statearr_27312_27356[(1)] = (30));

} else {
var statearr_27313_27357 = state_27276__$1;
(statearr_27313_27357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (16))){
var inst_27216 = (state_27276[(2)]);
var inst_27217 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27218 = figwheel.client.format_messages.call(null,inst_27217);
var inst_27219 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27220 = figwheel.client.heads_up.display_error.call(null,inst_27218,inst_27219);
var state_27276__$1 = (function (){var statearr_27314 = state_27276;
(statearr_27314[(9)] = inst_27216);

return statearr_27314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(17),inst_27220);
} else {
if((state_val_27277 === (30))){
var inst_27250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27251 = figwheel.client.heads_up.display_warning.call(null,inst_27250);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(33),inst_27251);
} else {
if((state_val_27277 === (10))){
var inst_27210 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27315_27358 = state_27276__$1;
(statearr_27315_27358[(2)] = inst_27210);

(statearr_27315_27358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (18))){
var inst_27226 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27227 = figwheel.client.format_messages.call(null,inst_27226);
var inst_27228 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27229 = figwheel.client.heads_up.display_error.call(null,inst_27227,inst_27228);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(21),inst_27229);
} else {
if((state_val_27277 === (37))){
var inst_27259 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27316_27359 = state_27276__$1;
(statearr_27316_27359[(2)] = inst_27259);

(statearr_27316_27359[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (8))){
var inst_27202 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(11),inst_27202);
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
});})(c__20327__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20215__auto__,c__20327__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____0 = (function (){
var statearr_27320 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27320[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__);

(statearr_27320[(1)] = (1));

return statearr_27320;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____1 = (function (state_27276){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_27276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e27321){if((e27321 instanceof Object)){
var ex__20219__auto__ = e27321;
var statearr_27322_27360 = state_27276;
(statearr_27322_27360[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27361 = state_27276;
state_27276 = G__27361;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__ = function(state_27276){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____1.call(this,state_27276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__,msg_hist,msg_names,msg))
})();
var state__20329__auto__ = (function (){var statearr_27323 = f__20328__auto__.call(null);
(statearr_27323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_27323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__,msg_hist,msg_names,msg))
);

return c__20327__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20327__auto___27424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto___27424,ch){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto___27424,ch){
return (function (state_27407){
var state_val_27408 = (state_27407[(1)]);
if((state_val_27408 === (1))){
var state_27407__$1 = state_27407;
var statearr_27409_27425 = state_27407__$1;
(statearr_27409_27425[(2)] = null);

(statearr_27409_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (2))){
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27407__$1,(4),ch);
} else {
if((state_val_27408 === (3))){
var inst_27405 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27407__$1,inst_27405);
} else {
if((state_val_27408 === (4))){
var inst_27395 = (state_27407[(7)]);
var inst_27395__$1 = (state_27407[(2)]);
var state_27407__$1 = (function (){var statearr_27410 = state_27407;
(statearr_27410[(7)] = inst_27395__$1);

return statearr_27410;
})();
if(cljs.core.truth_(inst_27395__$1)){
var statearr_27411_27426 = state_27407__$1;
(statearr_27411_27426[(1)] = (5));

} else {
var statearr_27412_27427 = state_27407__$1;
(statearr_27412_27427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (5))){
var inst_27395 = (state_27407[(7)]);
var inst_27397 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27395);
var state_27407__$1 = state_27407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27407__$1,(8),inst_27397);
} else {
if((state_val_27408 === (6))){
var state_27407__$1 = state_27407;
var statearr_27413_27428 = state_27407__$1;
(statearr_27413_27428[(2)] = null);

(statearr_27413_27428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (7))){
var inst_27403 = (state_27407[(2)]);
var state_27407__$1 = state_27407;
var statearr_27414_27429 = state_27407__$1;
(statearr_27414_27429[(2)] = inst_27403);

(statearr_27414_27429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27408 === (8))){
var inst_27399 = (state_27407[(2)]);
var state_27407__$1 = (function (){var statearr_27415 = state_27407;
(statearr_27415[(8)] = inst_27399);

return statearr_27415;
})();
var statearr_27416_27430 = state_27407__$1;
(statearr_27416_27430[(2)] = null);

(statearr_27416_27430[(1)] = (2));


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
});})(c__20327__auto___27424,ch))
;
return ((function (switch__20215__auto__,c__20327__auto___27424,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20216__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20216__auto____0 = (function (){
var statearr_27420 = [null,null,null,null,null,null,null,null,null];
(statearr_27420[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20216__auto__);

(statearr_27420[(1)] = (1));

return statearr_27420;
});
var figwheel$client$heads_up_plugin_$_state_machine__20216__auto____1 = (function (state_27407){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_27407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e27421){if((e27421 instanceof Object)){
var ex__20219__auto__ = e27421;
var statearr_27422_27431 = state_27407;
(statearr_27422_27431[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27432 = state_27407;
state_27407 = G__27432;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20216__auto__ = function(state_27407){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20216__auto____1.call(this,state_27407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20216__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20216__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto___27424,ch))
})();
var state__20329__auto__ = (function (){var statearr_27423 = f__20328__auto__.call(null);
(statearr_27423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto___27424);

return statearr_27423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto___27424,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20327__auto__){
return (function (){
var f__20328__auto__ = (function (){var switch__20215__auto__ = ((function (c__20327__auto__){
return (function (state_27453){
var state_val_27454 = (state_27453[(1)]);
if((state_val_27454 === (1))){
var inst_27448 = cljs.core.async.timeout.call(null,(3000));
var state_27453__$1 = state_27453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27453__$1,(2),inst_27448);
} else {
if((state_val_27454 === (2))){
var inst_27450 = (state_27453[(2)]);
var inst_27451 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27453__$1 = (function (){var statearr_27455 = state_27453;
(statearr_27455[(7)] = inst_27450);

return statearr_27455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27453__$1,inst_27451);
} else {
return null;
}
}
});})(c__20327__auto__))
;
return ((function (switch__20215__auto__,c__20327__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____0 = (function (){
var statearr_27459 = [null,null,null,null,null,null,null,null];
(statearr_27459[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__);

(statearr_27459[(1)] = (1));

return statearr_27459;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____1 = (function (state_27453){
while(true){
var ret_value__20217__auto__ = (function (){try{while(true){
var result__20218__auto__ = switch__20215__auto__.call(null,state_27453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20218__auto__;
}
break;
}
}catch (e27460){if((e27460 instanceof Object)){
var ex__20219__auto__ = e27460;
var statearr_27461_27463 = state_27453;
(statearr_27461_27463[(5)] = ex__20219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27464 = state_27453;
state_27453 = G__27464;
continue;
} else {
return ret_value__20217__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__ = function(state_27453){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____1.call(this,state_27453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20216__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20216__auto__;
})()
;})(switch__20215__auto__,c__20327__auto__))
})();
var state__20329__auto__ = (function (){var statearr_27462 = f__20328__auto__.call(null);
(statearr_27462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20327__auto__);

return statearr_27462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20329__auto__);
});})(c__20327__auto__))
);

return c__20327__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27465){
var map__27472 = p__27465;
var map__27472__$1 = ((((!((map__27472 == null)))?((((map__27472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27472):map__27472);
var ed = map__27472__$1;
var formatted_exception = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27474_27478 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27475_27479 = null;
var count__27476_27480 = (0);
var i__27477_27481 = (0);
while(true){
if((i__27477_27481 < count__27476_27480)){
var msg_27482 = cljs.core._nth.call(null,chunk__27475_27479,i__27477_27481);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27482);

var G__27483 = seq__27474_27478;
var G__27484 = chunk__27475_27479;
var G__27485 = count__27476_27480;
var G__27486 = (i__27477_27481 + (1));
seq__27474_27478 = G__27483;
chunk__27475_27479 = G__27484;
count__27476_27480 = G__27485;
i__27477_27481 = G__27486;
continue;
} else {
var temp__4425__auto___27487 = cljs.core.seq.call(null,seq__27474_27478);
if(temp__4425__auto___27487){
var seq__27474_27488__$1 = temp__4425__auto___27487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27474_27488__$1)){
var c__17608__auto___27489 = cljs.core.chunk_first.call(null,seq__27474_27488__$1);
var G__27490 = cljs.core.chunk_rest.call(null,seq__27474_27488__$1);
var G__27491 = c__17608__auto___27489;
var G__27492 = cljs.core.count.call(null,c__17608__auto___27489);
var G__27493 = (0);
seq__27474_27478 = G__27490;
chunk__27475_27479 = G__27491;
count__27476_27480 = G__27492;
i__27477_27481 = G__27493;
continue;
} else {
var msg_27494 = cljs.core.first.call(null,seq__27474_27488__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27494);

var G__27495 = cljs.core.next.call(null,seq__27474_27488__$1);
var G__27496 = null;
var G__27497 = (0);
var G__27498 = (0);
seq__27474_27478 = G__27495;
chunk__27475_27479 = G__27496;
count__27476_27480 = G__27497;
i__27477_27481 = G__27498;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27499){
var map__27502 = p__27499;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var w = map__27502__$1;
var message = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27510 = cljs.core.seq.call(null,plugins);
var chunk__27511 = null;
var count__27512 = (0);
var i__27513 = (0);
while(true){
if((i__27513 < count__27512)){
var vec__27514 = cljs.core._nth.call(null,chunk__27511,i__27513);
var k = cljs.core.nth.call(null,vec__27514,(0),null);
var plugin = cljs.core.nth.call(null,vec__27514,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27516 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27510,chunk__27511,count__27512,i__27513,pl_27516,vec__27514,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27516.call(null,msg_hist);
});})(seq__27510,chunk__27511,count__27512,i__27513,pl_27516,vec__27514,k,plugin))
);
} else {
}

var G__27517 = seq__27510;
var G__27518 = chunk__27511;
var G__27519 = count__27512;
var G__27520 = (i__27513 + (1));
seq__27510 = G__27517;
chunk__27511 = G__27518;
count__27512 = G__27519;
i__27513 = G__27520;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27510);
if(temp__4425__auto__){
var seq__27510__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27510__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__27510__$1);
var G__27521 = cljs.core.chunk_rest.call(null,seq__27510__$1);
var G__27522 = c__17608__auto__;
var G__27523 = cljs.core.count.call(null,c__17608__auto__);
var G__27524 = (0);
seq__27510 = G__27521;
chunk__27511 = G__27522;
count__27512 = G__27523;
i__27513 = G__27524;
continue;
} else {
var vec__27515 = cljs.core.first.call(null,seq__27510__$1);
var k = cljs.core.nth.call(null,vec__27515,(0),null);
var plugin = cljs.core.nth.call(null,vec__27515,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27525 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27510,chunk__27511,count__27512,i__27513,pl_27525,vec__27515,k,plugin,seq__27510__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27525.call(null,msg_hist);
});})(seq__27510,chunk__27511,count__27512,i__27513,pl_27525,vec__27515,k,plugin,seq__27510__$1,temp__4425__auto__))
);
} else {
}

var G__27526 = cljs.core.next.call(null,seq__27510__$1);
var G__27527 = null;
var G__27528 = (0);
var G__27529 = (0);
seq__27510 = G__27526;
chunk__27511 = G__27527;
count__27512 = G__27528;
i__27513 = G__27529;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27530 = [];
var len__17863__auto___27533 = arguments.length;
var i__17864__auto___27534 = (0);
while(true){
if((i__17864__auto___27534 < len__17863__auto___27533)){
args27530.push((arguments[i__17864__auto___27534]));

var G__27535 = (i__17864__auto___27534 + (1));
i__17864__auto___27534 = G__27535;
continue;
} else {
}
break;
}

var G__27532 = args27530.length;
switch (G__27532) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27530.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___27541 = arguments.length;
var i__17864__auto___27542 = (0);
while(true){
if((i__17864__auto___27542 < len__17863__auto___27541)){
args__17870__auto__.push((arguments[i__17864__auto___27542]));

var G__27543 = (i__17864__auto___27542 + (1));
i__17864__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27538){
var map__27539 = p__27538;
var map__27539__$1 = ((((!((map__27539 == null)))?((((map__27539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27539):map__27539);
var opts = map__27539__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27537){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27537));
});

//# sourceMappingURL=client.js.map?rel=1457370619993