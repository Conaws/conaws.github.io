// Compiled by ClojureScript 1.7.170 {}
goog.provide('cloze_devcards.core');
goog.require('cljs.core');
goog.require('cloze_devcards.egg');
goog.require('devcards.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.core","cloze_devcards.core",-1896499984),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,(function (){var attrs22560 = cljs.core.pr_str.call(null,cloze_devcards.egg.eggs);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs22560))?sablono.interpreter.attributes.call(null,attrs22560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs22560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22560)], null))));
})(),React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
cloze_devcards.core.main = (function cloze_devcards$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("a",{"href": "/cards.html"},"This is what you're looking for"),node);
} else {
return null;
}
});
cloze_devcards.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1457376885073