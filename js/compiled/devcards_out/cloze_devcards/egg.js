// Compiled by ClojureScript 1.7.170 {}
goog.provide('cloze_devcards.egg');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('datascript.core');
goog.require('posh.core');
goog.require('clojure.string');
goog.require('cljs.reader');
cloze_devcards.egg.egge = "You were on your way home when you died.\nIt was a car accident. Nothing particularly remarkable, but fatal nonetheless. You left behind a wife and two children. It was a painless death. The EMTs tried their best to save you, but to no avail. Your body was so utterly shattered you were better off, trust me.\nAnd that\u2019s when you met me.\n\u201CWhat\u2026 what happened?\u201D You asked. \u201CWhere am I?\u201D\n\u201CYou died,\u201D I said, matter-of-factly. No point in mincing words.\n\u201CThere was a\u2026 a truck and it was skidding\u2026\u201D\n\u201CYup,\u201D I said.\n\u201CI\u2026 I died?\u201D\n\u201CYup. But don\u2019t feel bad about it. Everyone dies,\u201D I said.\nYou looked around. There was nothingness. Just you and me. \u201CWhat is this place?\u201D You asked. \u201CIs this the afterlife?\u201D\n\u201CMore or less,\u201D I said.\n\u201CAre you god?\u201D You asked.\n\u201CYup,\u201D I replied. \u201CI\u2019m God.\u201D\n\u201CMy kids\u2026 my wife,\u201D you said.\n\u201CWhat about them?\u201D\n\u201CWill they be all right?\u201D\n\u201CThat\u2019s what I like to see,\u201D I said. \u201CYou just died and your main concern is for your family. That\u2019s good stuff right there.\u201D\nYou looked at me with fascination. To you, I didn\u2019t look like God. I just looked like some man. Or possibly a woman. Some vague authority figure, maybe. More of a grammar school teacher than the almighty.\n\u201CDon\u2019t worry,\u201D I said. \u201CThey\u2019ll be fine. Your kids will remember you as perfect in every way. They didn\u2019t have time to grow contempt for you. Your wife will cry on the outside, but will be secretly relieved. To be fair, your marriage was falling apart. If it\u2019s any consolation, she\u2019ll feel very guilty for feeling relieved.\u201D\n\u201COh,\u201D you said. \u201CSo what happens now? Do I go to heaven or hell or something?\u201D\n\u201CNeither,\u201D I said. \u201CYou\u2019ll be reincarnated.\u201D\n\u201CAh,\u201D you said. \u201CSo the Hindus were right,\u201D\n\u201CAll religions are right in their own way,\u201D I said. \u201CWalk with me.\u201D\nYou followed along as we strode through the void. \u201CWhere are we going?\u201D\n\u201CNowhere in particular,\u201D I said. \u201CIt\u2019s just nice to walk while we talk.\u201D\n\u201CSo what\u2019s the point, then?\u201D You asked. \u201CWhen I get reborn, I\u2019ll just be a blank slate, right? A baby. So all my experiences and everything I did in this life won\u2019t matter.\u201D\n\u201CNot so!\u201D I said. \u201CYou have within you all the knowledge and experiences of all your past lives. You just don\u2019t remember them right now.\u201D\nI stopped walking and took you by the shoulders. \u201CYour soul is more magnificent, beautiful, and gigantic than you can possibly imagine. A human mind can only contain a tiny fraction of what you are. It\u2019s like sticking your finger in a glass of water to see if it\u2019s hot or cold. You put a tiny part of yourself into the vessel, and when you bring it back out, you\u2019ve gained all the experiences it had.\n\u201CYou\u2019ve been in a human for the last 48 years, so you haven\u2019t stretched out yet and felt the rest of your immense consciousness. If we hung out here for long enough, you\u2019d start remembering everything. But there\u2019s no point to doing that between each life.\u201D\n\u201CHow many times have I been reincarnated, then?\u201D\n\u201COh lots. Lots and lots. An in to lots of different lives.\u201D I said. \u201CThis time around, you\u2019ll be a Chinese peasant girl in 540 AD.\u201D\n\u201CWait, what?\u201D You stammered. \u201CYou\u2019re sending me back in time?\u201D\n\u201CWell, I guess technically. Time, as you know it, only exists in your universe. Things are different where I come from.\u201D\n\u201CWhere you come from?\u201D You said.\n\u201COh sure,\u201D I explained \u201CI come from somewhere. Somewhere else. And there are others like me. I know you\u2019ll want to know what it\u2019s like there, but honestly you wouldn\u2019t understand.\u201D\n\u201COh,\u201D you said, a little let down. \u201CBut wait. If I get reincarnated to other places in time, I could have interacted with myself at some point.\u201D\n\u201CSure. Happens all the time. And with both lives only aware of their own lifespan you don\u2019t even know it\u2019s happening.\u201D\n\u201CSo what\u2019s the point of it all?\u201D\n\u201CSeriously?\u201D I asked. \u201CSeriously? You\u2019re asking me for the meaning of life? Isn\u2019t that a little stereotypical?\u201D\n\u201CWell it\u2019s a reasonable question,\u201D you persisted.\nI looked you in the eye. \u201CThe meaning of life, the reason I made this whole universe, is for you to mature.\u201D\n\u201CYou mean mankind? You want us to mature?\u201D\n\u201CNo, just you. I made this whole universe for you. With each new life you grow and mature and become a larger and greater intellect.\u201D\n\u201CJust me? What about everyone else?\u201D\n\u201CThere is no one else,\u201D I said. \u201CIn this universe, there\u2019s just you and me.\u201D\nYou stared blankly at me. \u201CBut all the people on earth\u2026\u201D\n\u201CAll you. Different incarnations of you.\u201D\n\u201CWait. I\u2019m everyone!?\u201D\n\u201CNow you\u2019re getting it,\u201D I said, with a congratulatory slap on the back.\n\u201CI\u2019m every human being who ever lived?\u201D\n\u201COr who will ever live, yes.\u201D\n\u201CI\u2019m Abraham Lincoln?\u201D\n\u201CAnd you\u2019re John Wilkes Booth, too,\u201D I added.\n\u201CI\u2019m Hitler?\u201D You said, appalled.\n\u201CAnd you\u2019re the millions he killed.\u201D\n\u201CI\u2019m Jesus?\u201D\n\u201CAnd you\u2019re everyone who followed him.\u201D\nYou fell silent.\n\u201CEvery time you victimized someone,\u201D I said, \u201Cyou were victimizing yourself. Every act of kindness you\u2019ve done, you\u2019ve done to yourself. Every happy and sad moment ever experienced by any human was, or will be, experienced by you.\u201D\nYou thought for a long time.\n\u201CWhy?\u201D You asked me. \u201CWhy do all this?\u201D\n\u201CBecause someday, you will become like me. Because that\u2019s what you are. You\u2019re one of my kind. You\u2019re my child.\u201D\n\u201CWhoa,\u201D you said, incredulous. \u201CYou mean I\u2019m a god?\u201D\n\u201CNo. Not yet. You\u2019re a fetus. You\u2019re still growing. Once you\u2019ve lived every human life throughout all time, you will have grown enough to be born.\u201D\n\u201CSo the whole universe,\u201D you said, \u201Cit\u2019s just\u2026\u201D\n\u201CAn egg.\u201D I answered. \u201CNow it\u2019s time for you to move on to your next life.\u201D\nAnd I sent you on your way.";
cloze_devcards.egg.eggs = "Ibas camino a tu casa cuando falleciste.\nFue un accidente de tr\u00E1nsito. Nada extraordinario, pero sin embargo fatal. Dejaste atr\u00E1s una esposa y dos hijos. Fue una muerte indolora. Los param\u00E9dicos dieron todo de si para salvarte, pero no hubo caso. Tu cuerpo estaba tan destrozado, que hasta fue mejor as\u00ED, cr\u00E9eme.\nY fue entonces que nos encontramos.\n\u201C\u00BFQu\u00E9\u2026 Qu\u00E9 pas\u00F3?\u201D Preguntaste. \u201C\u00BFD\u00F3nde estoy?\u201D\n\u201CMoriste\u201D, respond\u00ED con naturalidad. No ten\u00EDa sentido medir mis palabras.\n\u201CHab\u00EDa\u2026 un cami\u00F3n y estaba derrapando\u2026\u201D\n\u201CSip\u201D, dije.\n\u201CYo\u2026 \u00BFMor\u00ED?\u201D.\n\u201CSip. Pero no te sientas mal al respecto. Todos mueren\u201D.\nMiraste alrededor. No hab\u00EDa nada. Solo tu y yo. \u201C\u00BFQu\u00E9 es este lugar?\u201D Preguntaste. \u00BFEs el m\u00E1s all\u00E1?\n\u201CM\u00E1s o menos\u201D.\n\u201C\u00BFUsted es Dios?\u201D\n\u201CSi, soy Dios\u201D.\n\u201CMis hijos\u2026 mi esposa\u201D. Preguntaste.\n\u201C\u00BFQu\u00E9 hay con ellos?\u201D\n\u201C\u00BFEstar\u00E1n bien?\u201D\n\u201CEso me gusta. Acabas de morir y tu principal preocupaci\u00F3n es tu familia. Eso es muy bueno\u201D.\nMe miraste con fascinaci\u00F3n. Para ti, no me ve\u00EDa como Dios. S\u00F3lo me ve\u00EDa como un tipo com\u00FAn. O posiblemente una mujer. Una vaga figura de autoridad, quiz\u00E1s. M\u00E1s como una maestra de gram\u00E1tica, que como el Todopoderoso.\n\u201CNo te preocupes. Ellos estar\u00E1n bien. Tus hijos te recordar\u00E1n como alguien perfecto en todo aspecto. No tuvieron tiempo para llegar a despreciarte por algo en particular. Tu esposa llorar\u00E1 por fuera, pero sentir\u00E1 alivio por dentro. A decir verdad, tu matrimonio se estaba cayendo en pedazos. Si te sirve de consuelo, se sentir\u00E1 culpable al sentir alivio\u201D.\n\u201COh\u201D, dijiste. \u201CEntonces, \u00BFQu\u00E9 pasa ahora? \u00BFMe voy al Cielo, o al Infierno, o algo as\u00ED?\n\u201CNinguno. Ser\u00E1s reencarnado\u201D.\n\u201CAh, entonces los hind\u00FAes ten\u00EDan raz\u00F3n\u201D.\n\u201CTodas las religiones est\u00E1n en lo cierto, a su manera\u201D, contest\u00E9. \u201CCamina conmigo\u201D.\nMe seguiste mientras cruz\u00E1bamos el vac\u00EDo. \u201C\u00BFAdonde vamos?\u201D\n\u201CA ning\u00FAn lugar en particular. Se siente bien caminar mientras hablamos\u201D.\n\u201C\u00BFY cu\u00E1l es el punto entonces? Preguntaste. \u201CCuando renazca, ser\u00E9 solamente una pizarra en blanco, \u00BFVerdad? Un beb\u00E9. Todas mis experiencias y todo lo que hecho en esta vida no importar\u00E1\u201D.\n\u201CNo exactamente. Llevas contigo todo el conocimiento y las experiencias de todas tus vidas pasadas. S\u00F3lo que no lo recuerdas ahora mismo\u201D.\nPar\u00E9 de caminar y te tom\u00E9 por los hombros. \u201CTu alma es mucho m\u00E1s magn\u00EDfica, bella, y gigantesca de lo que puedas imaginar. Una mente humana solo puede contener una peque\u00F1a fracci\u00F3n de lo que eres. Es como apoyar tu dedo en un vaso con agua para sentir su temperatura. Pones una peque\u00F1a parte de ti contra el recipiente, y para cuando la quitas, habr\u00E1s obtenido el conocimiento que pose\u00EDa\u201D.\n\u201CHas estado dentro de un humano por los \u00FAltimos 48 a\u00F1os, por lo que a\u00FAn no te has extendido, para sentir tu inmensa consciencia. Si pas\u00E1ramos el suficiente tiempo aqu\u00ED, comenzar\u00EDas a recordarlo todo. Pero no tiene sentido hacer eso entre cada vida\u201D.\n\u201C\u00BFCu\u00E1ntas veces he reencarnado?\u201D\n\u201COh, muchas. Much\u00EDsimas. Y en much\u00EDsimas vidas diferentes\u201D. Dije. \u201CEsta vez ser\u00E1s una campesina china, en el a\u00F1o 540 AC\u201D.\n\u201CEspera, \u00BFQu\u00E9?\u201D. Tartamudeaste. \u201C\u00BFMe enviar\u00E1s de vuelta en el tiempo?\u201D\n\u201CBueno, t\u00E9cnicamente, s\u00ED. El tiempo como lo conoces, solo existe en tu universo. Las cosas son algo distintas de donde yo vengo\u201D.\n\u201C\u00BFDe d\u00F3nde vienes?\u201D\n\u201CMmm\u2026 Yo vengo de un lugar. Un lugar distinto. Y all\u00ED hay otros como yo. Se que querr\u00EDas saber como es este lugar, pero honestamente, no entender\u00EDas\u201D.\n\u201COh,\u201D Dijiste algo desilusionado. \u201CUn momento\u2026 Si soy reencarnado en distintos lugares en el tiempo, en alg\u00FAn punto podr\u00EDa haber interactuado conmigo mismo\u201D.\n\u201CSeguro. Pasa todo el tiempo. Y con ambas vidas conscientes \u00FAnicamente de s\u00ED mismas, tu nunca sabes que este encuentro est\u00E1 sucediendo\u201D.\n\u201C\u00BFCu\u00E1l es el punto de todo esto, entonces?\u201D\n\u201C\u00BFEnserio?\u201D Pregunt\u00E9. \u00BFMe est\u00E1s preguntando cu\u00E1l es el sentido de la vida? \u00BFNo est\u00E1 un poco estereotipado?\u201D\n\u201CBueno, es una pregunta razonable\u201D. Persististe.\nTe mir\u00E9 a los ojos. \u201CEl significado de la vida, la raz\u00F3n por la que cre\u00E9 este universo, es para que madures\u201D.\n\u201C\u00BFQuerr\u00E1s decir la humanidad? \u00BFQuieres que maduremos?\u201D\n\u201CNo, solo t\u00FA. Cre\u00E9 este universo para ti. Con cada vida creces, maduras, y te vuelves un intelecto mayor\u201D.\n\u201C\u00BFSolo yo? \u00BFQu\u00E9 hay de los dem\u00E1s?\u201D\n\u201CNo hay nadie m\u00E1s\u201D. Dije. \u201CEn este universo solo estamos t\u00FA y yo\u201D.\nMe miraste fija, e inexpresivamente. \u201CPero toda la gente en la Tierra\u2026\u201D\n\u201CTodos son t\u00FA. Diferentes encarnaciones de ti mismo\u201D.\n\u201CO sea que, \u00BFYo soy todos?\u201D\n\u201CAhora lo est\u00E1s entendiendo\u201D, te dije palme\u00E1ndote la espalda a manera de congratulaci\u00F3n.\n\u201C\u00BFYo soy cada humano que ha vivido?\u201D\n\u201CY cada humano que vivir\u00E1. Exactamente\u201D.\n\u201C\u00BFSoy Abraham Lincoln?\u201D\n\u201CY eres John Wilkes Booth, tambi\u00E9n\u201D. Agregu\u00E9.\n\u201C\u00BFSoy Hitler?\u201D. Preguntaste apaleado.\n\u201CY los millones que asesin\u00F3\u201D.\n\u201C\u00BFSoy Jes\u00FAs?\u201D\n\u201CY todos sus seguidores\u201D.\nTe quedaste en silencio.\n\u201CCada vez que trataste injustamente a alguien\u201D, dije \u201Cte lo estabas haciendo a ti mismo. Cada acto de amabilidad que has hecho, te lo has hecho a ti mismo. Cada momento feliz y cada momento triste experimentado por un ser humano fue, o ser\u00E1, experimentado por ti\u201D.\nLo pensaste por un largo tiempo.\nLuego me preguntaste, \u201C\u00BFPor qu\u00E9? \u00BFPor qu\u00E9 hacer todo esto?\u201D\n\u201CPorque alg\u00FAn d\u00EDa, te volver\u00E1s como yo. Porque eso es lo que eres. Eres uno de los m\u00EDos. Eres mi hijo\u201D.\n\u201CWhoa,\u201D exclamaste incr\u00E9dulo. \u201C\u00BFDices que soy un dios?\u201D.\n\u201CNo. No todav\u00EDa. Eres un feto. A\u00FAn est\u00E1s creciendo. Una vez que hayas vivido cada vida humana a trav\u00E9s de los tiempos, habr\u00E1s crecido lo suficiente como para nacer\u201D.\n\u201CEntonces, el universo entero es solo\u2026\u201D\n\u201CUn huevo\u201D. Respond\u00ED. \u201CAhora es momento de que contin\u00FAes hac\u00EDa  tu pr\u00F3xima vida\u201D.\nY te envi\u00E9 hac\u00EDa ella.";
if(typeof cloze_devcards.egg.textstate !== 'undefined'){
} else {
cloze_devcards.egg.textstate = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cloze_devcards.egg.egge], null));
}
cloze_devcards.egg.split_sentences = (function cloze_devcards$egg$split_sentences(text){
return cljs.core.re_seq.call(null,/.*[,?.]/,text);
});
cloze_devcards.egg.s1 = cljs.core.first.call(null,cloze_devcards.egg.split_sentences.call(null,cloze_devcards.egg.egge));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"eggs-card","eggs-card",2057748439)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"eggs-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"#Split the string up by sentences",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cloze_devcards.egg.t_cloze_devcards$egg23065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cloze_devcards.egg.t_cloze_devcards$egg23065 = (function (meta23066){
this.meta23066 = meta23066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cloze_devcards.egg.t_cloze_devcards$egg23065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23067,meta23066__$1){
var self__ = this;
var _23067__$1 = this;
return (new cloze_devcards.egg.t_cloze_devcards$egg23065(meta23066__$1));
});

cloze_devcards.egg.t_cloze_devcards$egg23065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23067){
var self__ = this;
var _23067__$1 = this;
return self__.meta23066;
});

cloze_devcards.egg.t_cloze_devcards$egg23065.prototype.devcards$core$IDevcardOptions$ = true;

cloze_devcards.egg.t_cloze_devcards$egg23065.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__22397__auto__,devcard_opts__22398__auto__){
var self__ = this;
var this__22397__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__22398__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__22416__auto__ = cljs.core.pr_str.call(null,cloze_devcards.egg.s1);
if(cljs.core.fn_QMARK_.call(null,v__22416__auto__)){
return ((function (v__22416__auto__,this__22397__auto____$1){
return (function (data_atom__22417__auto__,owner__22418__auto__){
return reagent.core.as_element.call(null,v__22416__auto__.call(null,data_atom__22417__auto__,owner__22418__auto__));
});
;})(v__22416__auto__,this__22397__auto____$1))
} else {
return reagent.core.as_element.call(null,v__22416__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__22398__auto__))));
});

cloze_devcards.egg.t_cloze_devcards$egg23065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23066","meta23066",-952116638,null)], null);
});

cloze_devcards.egg.t_cloze_devcards$egg23065.cljs$lang$type = true;

cloze_devcards.egg.t_cloze_devcards$egg23065.cljs$lang$ctorStr = "cloze-devcards.egg/t_cloze_devcards$egg23065";

cloze_devcards.egg.t_cloze_devcards$egg23065.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cloze-devcards.egg/t_cloze_devcards$egg23065");
});

cloze_devcards.egg.__GT_t_cloze_devcards$egg23065 = (function cloze_devcards$egg$__GT_t_cloze_devcards$egg23065(meta23066){
return (new cloze_devcards.egg.t_cloze_devcards$egg23065(meta23066));
});

}

return (new cloze_devcards.egg.t_cloze_devcards$egg23065(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cloze_devcards.egg.textstate,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cloze_devcards.egg.cloze_delete = (function cloze_devcards$egg$cloze_delete(text,word){
var r = clojure.string.replace.call(null,text,word,"______");
if(cljs.core.not_EQ_.call(null,text,r)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,word], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [text], null);
}
});
cloze_devcards.egg.cloze_delete.call(null,"is","This isn't is what we're ISCON");
cloze_devcards.egg.cloze_delete.call(null,"I'm a little teapot","teapot");
cloze_devcards.egg.cloze_delete.call(null,"I'm","I'm");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"cloze-card1","cloze-card1",1539448919)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cloze-card1",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"#Take a sentence and remove a given word",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cloze_devcards.egg.t_cloze_devcards$egg23068 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cloze_devcards.egg.t_cloze_devcards$egg23068 = (function (meta23069){
this.meta23069 = meta23069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cloze_devcards.egg.t_cloze_devcards$egg23068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23070,meta23069__$1){
var self__ = this;
var _23070__$1 = this;
return (new cloze_devcards.egg.t_cloze_devcards$egg23068(meta23069__$1));
});

cloze_devcards.egg.t_cloze_devcards$egg23068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23070){
var self__ = this;
var _23070__$1 = this;
return self__.meta23069;
});

cloze_devcards.egg.t_cloze_devcards$egg23068.prototype.devcards$core$IDevcardOptions$ = true;

cloze_devcards.egg.t_cloze_devcards$egg23068.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__22397__auto__,devcard_opts__22398__auto__){
var self__ = this;
var this__22397__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__22398__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__22416__auto__ = cljs.core.pr_str.call(null,cloze_devcards.egg.cloze_delete.call(null,"I'm a little teapot","teapot"));
if(cljs.core.fn_QMARK_.call(null,v__22416__auto__)){
return ((function (v__22416__auto__,this__22397__auto____$1){
return (function (data_atom__22417__auto__,owner__22418__auto__){
return reagent.core.as_element.call(null,v__22416__auto__.call(null,data_atom__22417__auto__,owner__22418__auto__));
});
;})(v__22416__auto__,this__22397__auto____$1))
} else {
return reagent.core.as_element.call(null,v__22416__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__22398__auto__))));
});

cloze_devcards.egg.t_cloze_devcards$egg23068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23069","meta23069",-391535503,null)], null);
});

cloze_devcards.egg.t_cloze_devcards$egg23068.cljs$lang$type = true;

cloze_devcards.egg.t_cloze_devcards$egg23068.cljs$lang$ctorStr = "cloze-devcards.egg/t_cloze_devcards$egg23068";

cloze_devcards.egg.t_cloze_devcards$egg23068.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cloze-devcards.egg/t_cloze_devcards$egg23068");
});

cloze_devcards.egg.__GT_t_cloze_devcards$egg23068 = (function cloze_devcards$egg$__GT_t_cloze_devcards$egg23068(meta23069){
return (new cloze_devcards.egg.t_cloze_devcards$egg23068(meta23069));
});

}

return (new cloze_devcards.egg.t_cloze_devcards$egg23068(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.core.re_seq.call(null,/\w*\b/,"I am a little teapot");
cljs.core.count.call(null,cljs.core.re_seq.call(null,/[\w|']*\b/,"I'm a little teapot"));
cloze_devcards.egg.re_word = /[\w|']*\b/;
cloze_devcards.egg.rand_word = (function cloze_devcards$egg$rand_word(s){
var wordseq = cljs.core.re_seq.call(null,/[\w|']*\b/,s);
var c = cljs.core.rand_int.call(null,cljs.core.count.call(null,wordseq));
return cljs.core.nth.call(null,wordseq,c);
});
cloze_devcards.egg.rand_word.call(null,"I'm a teapto 'bout that n'ah");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"#Step 2: \nGrab a random word from a sentence\n##2a\nuse a regex that splits the sentence into a sequence of words (array will do)",[cljs.core.str("\n```clojure\n"),cljs.core.str("(def re-word  #\"[\\w|']*\\b\")"),cljs.core.str("\n```\n")].join(''),"##2b\ncount the words in the sentence, take a random number between 1 and n, and take the word at that location",[cljs.core.str("\n```clojure\n"),cljs.core.str("(defn rand-word [s]\n  (let [wordseq (re-seq #\"[\\w|']*\\b\" s)\n        c (rand-int (count wordseq))]\n    (nth wordseq c)))"),cljs.core.str("\n```\n")].join('')),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
cloze_devcards.egg.cloze_string = (function cloze_devcards$egg$cloze_string(text){
return (function (){
var tvec = cljs.core.take.call(null,(5),cljs.core.map.call(null,(function (p1__23071_SHARP_){
return cloze_devcards.egg.cloze_delete.call(null,p1__23071_SHARP_,cloze_devcards.egg.rand_word.call(null,p1__23071_SHARP_));
}),cloze_devcards.egg.split_sentences.call(null,text)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__17577__auto__ = ((function (tvec){
return (function cloze_devcards$egg$cloze_string_$_iter__23080(s__23081){
return (new cljs.core.LazySeq(null,((function (tvec){
return (function (){
var s__23081__$1 = s__23081;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23081__$1);
if(temp__4425__auto__){
var s__23081__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23081__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23081__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23083 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23082 = (0);
while(true){
if((i__23082 < size__17576__auto__)){
var vec__23086 = cljs.core._nth.call(null,c__17575__auto__,i__23082);
var s = cljs.core.nth.call(null,vec__23086,(0),null);
var w = cljs.core.nth.call(null,vec__23086,(1),null);
cljs.core.chunk_append.call(null,b__23083,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),w], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__23088 = (i__23082 + (1));
i__23082 = G__23088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23083),cloze_devcards$egg$cloze_string_$_iter__23080.call(null,cljs.core.chunk_rest.call(null,s__23081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23083),null);
}
} else {
var vec__23087 = cljs.core.first.call(null,s__23081__$2);
var s = cljs.core.nth.call(null,vec__23087,(0),null);
var w = cljs.core.nth.call(null,vec__23087,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),w], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),cloze_devcards$egg$cloze_string_$_iter__23080.call(null,cljs.core.rest.call(null,s__23081__$2)));
}
} else {
return null;
}
break;
}
});})(tvec))
,null,null));
});})(tvec))
;
return iter__17577__auto__.call(null,tvec);
})()], null);
});
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"cloze2*","cloze2*",2029717694)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cloze2*",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Take out a random word",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cloze_devcards.egg.t_cloze_devcards$egg23089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cloze_devcards.egg.t_cloze_devcards$egg23089 = (function (meta23090){
this.meta23090 = meta23090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cloze_devcards.egg.t_cloze_devcards$egg23089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23091,meta23090__$1){
var self__ = this;
var _23091__$1 = this;
return (new cloze_devcards.egg.t_cloze_devcards$egg23089(meta23090__$1));
});

cloze_devcards.egg.t_cloze_devcards$egg23089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23091){
var self__ = this;
var _23091__$1 = this;
return self__.meta23090;
});

cloze_devcards.egg.t_cloze_devcards$egg23089.prototype.devcards$core$IDevcardOptions$ = true;

cloze_devcards.egg.t_cloze_devcards$egg23089.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__22397__auto__,devcard_opts__22398__auto__){
var self__ = this;
var this__22397__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__22398__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__22416__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloze_devcards.egg.cloze_string,cloze_devcards.egg.egge], null);
if(cljs.core.fn_QMARK_.call(null,v__22416__auto__)){
return ((function (v__22416__auto__,this__22397__auto____$1){
return (function (data_atom__22417__auto__,owner__22418__auto__){
return reagent.core.as_element.call(null,v__22416__auto__.call(null,data_atom__22417__auto__,owner__22418__auto__));
});
;})(v__22416__auto__,this__22397__auto____$1))
} else {
return reagent.core.as_element.call(null,v__22416__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__22398__auto__))));
});

cloze_devcards.egg.t_cloze_devcards$egg23089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23090","meta23090",-1503796691,null)], null);
});

cloze_devcards.egg.t_cloze_devcards$egg23089.cljs$lang$type = true;

cloze_devcards.egg.t_cloze_devcards$egg23089.cljs$lang$ctorStr = "cloze-devcards.egg/t_cloze_devcards$egg23089";

cloze_devcards.egg.t_cloze_devcards$egg23089.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cloze-devcards.egg/t_cloze_devcards$egg23089");
});

cloze_devcards.egg.__GT_t_cloze_devcards$egg23089 = (function cloze_devcards$egg$__GT_t_cloze_devcards$egg23089(meta23090){
return (new cloze_devcards.egg.t_cloze_devcards$egg23089(meta23090));
});

}

return (new cloze_devcards.egg.t_cloze_devcards$egg23089(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cloze_devcards.egg.n_leven;
cloze_devcards.egg.cloze_string2 = (function cloze_devcards$egg$cloze_string2(text){
return (function (){
var tvec = cljs.core.take.call(null,(5),cljs.core.map.call(null,(function (p1__23092_SHARP_){
return cloze_devcards.egg.cloze_delete.call(null,p1__23092_SHARP_,cloze_devcards.egg.rand_word.call(null,p1__23092_SHARP_));
}),cloze_devcards.egg.split_sentences.call(null,text)));
var words = cljs.core.set.call(null,cljs.core.re_seq.call(null,cloze_devcards.egg.re_word,text));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__17577__auto__ = ((function (tvec,words){
return (function cloze_devcards$egg$cloze_string2_$_iter__23117(s__23118){
return (new cljs.core.LazySeq(null,((function (tvec,words){
return (function (){
var s__23118__$1 = s__23118;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23118__$1);
if(temp__4425__auto__){
var s__23118__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23118__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23118__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23120 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23119 = (0);
while(true){
if((i__23119 < size__17576__auto__)){
var vec__23131 = cljs.core._nth.call(null,c__17575__auto__,i__23119);
var s = cljs.core.nth.call(null,vec__23131,(0),null);
var w = cljs.core.nth.call(null,vec__23131,(1),null);
var choices = cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.take.call(null,(5),words),w));
cljs.core.chunk_append.call(null,b__23120,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),(function (){var iter__17577__auto__ = ((function (i__23119,choices,vec__23131,s,w,c__17575__auto__,size__17576__auto__,b__23120,s__23118__$2,temp__4425__auto__,tvec,words){
return (function cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23132(s__23133){
return (new cljs.core.LazySeq(null,((function (i__23119,choices,vec__23131,s,w,c__17575__auto__,size__17576__auto__,b__23120,s__23118__$2,temp__4425__auto__,tvec,words){
return (function (){
var s__23133__$1 = s__23133;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23133__$1);
if(temp__4425__auto____$1){
var s__23133__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23133__$2)){
var c__17575__auto____$1 = cljs.core.chunk_first.call(null,s__23133__$2);
var size__17576__auto____$1 = cljs.core.count.call(null,c__17575__auto____$1);
var b__23135 = cljs.core.chunk_buffer.call(null,size__17576__auto____$1);
if((function (){var i__23134 = (0);
while(true){
if((i__23134 < size__17576__auto____$1)){
var c = cljs.core._nth.call(null,c__17575__auto____$1,i__23134);
cljs.core.chunk_append.call(null,b__23135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null));

var G__23141 = (i__23134 + (1));
i__23134 = G__23141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23135),cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23132.call(null,cljs.core.chunk_rest.call(null,s__23133__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23135),null);
}
} else {
var c = cljs.core.first.call(null,s__23133__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null),cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23132.call(null,cljs.core.rest.call(null,s__23133__$2)));
}
} else {
return null;
}
break;
}
});})(i__23119,choices,vec__23131,s,w,c__17575__auto__,size__17576__auto__,b__23120,s__23118__$2,temp__4425__auto__,tvec,words))
,null,null));
});})(i__23119,choices,vec__23131,s,w,c__17575__auto__,size__17576__auto__,b__23120,s__23118__$2,temp__4425__auto__,tvec,words))
;
return iter__17577__auto__.call(null,choices);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__23142 = (i__23119 + (1));
i__23119 = G__23142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23120),cloze_devcards$egg$cloze_string2_$_iter__23117.call(null,cljs.core.chunk_rest.call(null,s__23118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23120),null);
}
} else {
var vec__23136 = cljs.core.first.call(null,s__23118__$2);
var s = cljs.core.nth.call(null,vec__23136,(0),null);
var w = cljs.core.nth.call(null,vec__23136,(1),null);
var choices = cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.take.call(null,(5),words),w));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),(function (){var iter__17577__auto__ = ((function (choices,vec__23136,s,w,s__23118__$2,temp__4425__auto__,tvec,words){
return (function cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23137(s__23138){
return (new cljs.core.LazySeq(null,((function (choices,vec__23136,s,w,s__23118__$2,temp__4425__auto__,tvec,words){
return (function (){
var s__23138__$1 = s__23138;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23138__$1);
if(temp__4425__auto____$1){
var s__23138__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23138__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23138__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23140 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23139 = (0);
while(true){
if((i__23139 < size__17576__auto__)){
var c = cljs.core._nth.call(null,c__17575__auto__,i__23139);
cljs.core.chunk_append.call(null,b__23140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null));

var G__23143 = (i__23139 + (1));
i__23139 = G__23143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23140),cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23137.call(null,cljs.core.chunk_rest.call(null,s__23138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23140),null);
}
} else {
var c = cljs.core.first.call(null,s__23138__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null),cloze_devcards$egg$cloze_string2_$_iter__23117_$_iter__23137.call(null,cljs.core.rest.call(null,s__23138__$2)));
}
} else {
return null;
}
break;
}
});})(choices,vec__23136,s,w,s__23118__$2,temp__4425__auto__,tvec,words))
,null,null));
});})(choices,vec__23136,s,w,s__23118__$2,temp__4425__auto__,tvec,words))
;
return iter__17577__auto__.call(null,choices);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),cloze_devcards$egg$cloze_string2_$_iter__23117.call(null,cljs.core.rest.call(null,s__23118__$2)));
}
} else {
return null;
}
break;
}
});})(tvec,words))
,null,null));
});})(tvec,words))
;
return iter__17577__auto__.call(null,tvec);
})()], null);
});
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"fill-in-blank1","fill-in-blank1",-541748456)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fill-in-blank1",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Only taking random words",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cloze_devcards.egg.t_cloze_devcards$egg23144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cloze_devcards.egg.t_cloze_devcards$egg23144 = (function (meta23145){
this.meta23145 = meta23145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cloze_devcards.egg.t_cloze_devcards$egg23144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23146,meta23145__$1){
var self__ = this;
var _23146__$1 = this;
return (new cloze_devcards.egg.t_cloze_devcards$egg23144(meta23145__$1));
});

cloze_devcards.egg.t_cloze_devcards$egg23144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23146){
var self__ = this;
var _23146__$1 = this;
return self__.meta23145;
});

cloze_devcards.egg.t_cloze_devcards$egg23144.prototype.devcards$core$IDevcardOptions$ = true;

cloze_devcards.egg.t_cloze_devcards$egg23144.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__22397__auto__,devcard_opts__22398__auto__){
var self__ = this;
var this__22397__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__22398__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__22416__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloze_devcards.egg.cloze_string2,cloze_devcards.egg.egge], null);
if(cljs.core.fn_QMARK_.call(null,v__22416__auto__)){
return ((function (v__22416__auto__,this__22397__auto____$1){
return (function (data_atom__22417__auto__,owner__22418__auto__){
return reagent.core.as_element.call(null,v__22416__auto__.call(null,data_atom__22417__auto__,owner__22418__auto__));
});
;})(v__22416__auto__,this__22397__auto____$1))
} else {
return reagent.core.as_element.call(null,v__22416__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__22398__auto__))));
});

cloze_devcards.egg.t_cloze_devcards$egg23144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23145","meta23145",1447475350,null)], null);
});

cloze_devcards.egg.t_cloze_devcards$egg23144.cljs$lang$type = true;

cloze_devcards.egg.t_cloze_devcards$egg23144.cljs$lang$ctorStr = "cloze-devcards.egg/t_cloze_devcards$egg23144";

cloze_devcards.egg.t_cloze_devcards$egg23144.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cloze-devcards.egg/t_cloze_devcards$egg23144");
});

cloze_devcards.egg.__GT_t_cloze_devcards$egg23144 = (function cloze_devcards$egg$__GT_t_cloze_devcards$egg23144(meta23145){
return (new cloze_devcards.egg.t_cloze_devcards$egg23144(meta23145));
});

}

return (new cloze_devcards.egg.t_cloze_devcards$egg23144(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cloze_devcards.egg.cloze_string3 = (function cloze_devcards$egg$cloze_string3(text){
return (function (){
var tvec = cljs.core.take.call(null,(5),cljs.core.map.call(null,(function (p1__23147_SHARP_){
return cloze_devcards.egg.cloze_delete.call(null,p1__23147_SHARP_,cloze_devcards.egg.rand_word.call(null,p1__23147_SHARP_));
}),cloze_devcards.egg.split_sentences.call(null,text)));
var words = cljs.core.set.call(null,cljs.core.re_seq.call(null,cloze_devcards.egg.re_word,text));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__17577__auto__ = ((function (tvec,words){
return (function cloze_devcards$egg$cloze_string3_$_iter__23172(s__23173){
return (new cljs.core.LazySeq(null,((function (tvec,words){
return (function (){
var s__23173__$1 = s__23173;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23173__$1);
if(temp__4425__auto__){
var s__23173__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23173__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23173__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23175 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23174 = (0);
while(true){
if((i__23174 < size__17576__auto__)){
var vec__23186 = cljs.core._nth.call(null,c__17575__auto__,i__23174);
var s = cljs.core.nth.call(null,vec__23186,(0),null);
var w = cljs.core.nth.call(null,vec__23186,(1),null);
var choices = cljs.core.sort.call(null,cloze_devcards.egg.n_leven.call(null,(5),w,words));
cljs.core.chunk_append.call(null,b__23175,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),(function (){var iter__17577__auto__ = ((function (i__23174,choices,vec__23186,s,w,c__17575__auto__,size__17576__auto__,b__23175,s__23173__$2,temp__4425__auto__,tvec,words){
return (function cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23187(s__23188){
return (new cljs.core.LazySeq(null,((function (i__23174,choices,vec__23186,s,w,c__17575__auto__,size__17576__auto__,b__23175,s__23173__$2,temp__4425__auto__,tvec,words){
return (function (){
var s__23188__$1 = s__23188;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23188__$1);
if(temp__4425__auto____$1){
var s__23188__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23188__$2)){
var c__17575__auto____$1 = cljs.core.chunk_first.call(null,s__23188__$2);
var size__17576__auto____$1 = cljs.core.count.call(null,c__17575__auto____$1);
var b__23190 = cljs.core.chunk_buffer.call(null,size__17576__auto____$1);
if((function (){var i__23189 = (0);
while(true){
if((i__23189 < size__17576__auto____$1)){
var c = cljs.core._nth.call(null,c__17575__auto____$1,i__23189);
cljs.core.chunk_append.call(null,b__23190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null));

var G__23196 = (i__23189 + (1));
i__23189 = G__23196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23190),cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23187.call(null,cljs.core.chunk_rest.call(null,s__23188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23190),null);
}
} else {
var c = cljs.core.first.call(null,s__23188__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null),cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23187.call(null,cljs.core.rest.call(null,s__23188__$2)));
}
} else {
return null;
}
break;
}
});})(i__23174,choices,vec__23186,s,w,c__17575__auto__,size__17576__auto__,b__23175,s__23173__$2,temp__4425__auto__,tvec,words))
,null,null));
});})(i__23174,choices,vec__23186,s,w,c__17575__auto__,size__17576__auto__,b__23175,s__23173__$2,temp__4425__auto__,tvec,words))
;
return iter__17577__auto__.call(null,choices);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__23197 = (i__23174 + (1));
i__23174 = G__23197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23175),cloze_devcards$egg$cloze_string3_$_iter__23172.call(null,cljs.core.chunk_rest.call(null,s__23173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23175),null);
}
} else {
var vec__23191 = cljs.core.first.call(null,s__23173__$2);
var s = cljs.core.nth.call(null,vec__23191,(0),null);
var w = cljs.core.nth.call(null,vec__23191,(1),null);
var choices = cljs.core.sort.call(null,cloze_devcards.egg.n_leven.call(null,(5),w,words));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),s], null),(function (){var iter__17577__auto__ = ((function (choices,vec__23191,s,w,s__23173__$2,temp__4425__auto__,tvec,words){
return (function cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23192(s__23193){
return (new cljs.core.LazySeq(null,((function (choices,vec__23191,s,w,s__23173__$2,temp__4425__auto__,tvec,words){
return (function (){
var s__23193__$1 = s__23193;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23193__$1);
if(temp__4425__auto____$1){
var s__23193__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23193__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23193__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23195 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23194 = (0);
while(true){
if((i__23194 < size__17576__auto__)){
var c = cljs.core._nth.call(null,c__17575__auto__,i__23194);
cljs.core.chunk_append.call(null,b__23195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null));

var G__23198 = (i__23194 + (1));
i__23194 = G__23198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23195),cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23192.call(null,cljs.core.chunk_rest.call(null,s__23193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23195),null);
}
} else {
var c = cljs.core.first.call(null,s__23193__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),c], null),cloze_devcards$egg$cloze_string3_$_iter__23172_$_iter__23192.call(null,cljs.core.rest.call(null,s__23193__$2)));
}
} else {
return null;
}
break;
}
});})(choices,vec__23191,s,w,s__23173__$2,temp__4425__auto__,tvec,words))
,null,null));
});})(choices,vec__23191,s,w,s__23173__$2,temp__4425__auto__,tvec,words))
;
return iter__17577__auto__.call(null,choices);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),cloze_devcards$egg$cloze_string3_$_iter__23172.call(null,cljs.core.rest.call(null,s__23173__$2)));
}
} else {
return null;
}
break;
}
});})(tvec,words))
,null,null));
});})(tvec,words))
;
return iter__17577__auto__.call(null,tvec);
})()], null);
});
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cloze_devcards.egg","cloze_devcards.egg",648857685),new cljs.core.Keyword(null,"fill-in-blank2","fill-in-blank2",1053725892)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"fill-in-blank2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Using n-leven",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cloze_devcards.egg.t_cloze_devcards$egg23199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cloze_devcards.egg.t_cloze_devcards$egg23199 = (function (meta23200){
this.meta23200 = meta23200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cloze_devcards.egg.t_cloze_devcards$egg23199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23201,meta23200__$1){
var self__ = this;
var _23201__$1 = this;
return (new cloze_devcards.egg.t_cloze_devcards$egg23199(meta23200__$1));
});

cloze_devcards.egg.t_cloze_devcards$egg23199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23201){
var self__ = this;
var _23201__$1 = this;
return self__.meta23200;
});

cloze_devcards.egg.t_cloze_devcards$egg23199.prototype.devcards$core$IDevcardOptions$ = true;

cloze_devcards.egg.t_cloze_devcards$egg23199.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__22397__auto__,devcard_opts__22398__auto__){
var self__ = this;
var this__22397__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__22398__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__22416__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloze_devcards.egg.cloze_string3,cloze_devcards.egg.egge], null);
if(cljs.core.fn_QMARK_.call(null,v__22416__auto__)){
return ((function (v__22416__auto__,this__22397__auto____$1){
return (function (data_atom__22417__auto__,owner__22418__auto__){
return reagent.core.as_element.call(null,v__22416__auto__.call(null,data_atom__22417__auto__,owner__22418__auto__));
});
;})(v__22416__auto__,this__22397__auto____$1))
} else {
return reagent.core.as_element.call(null,v__22416__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__22398__auto__))));
});

cloze_devcards.egg.t_cloze_devcards$egg23199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23200","meta23200",2047086532,null)], null);
});

cloze_devcards.egg.t_cloze_devcards$egg23199.cljs$lang$type = true;

cloze_devcards.egg.t_cloze_devcards$egg23199.cljs$lang$ctorStr = "cloze-devcards.egg/t_cloze_devcards$egg23199";

cloze_devcards.egg.t_cloze_devcards$egg23199.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cloze-devcards.egg/t_cloze_devcards$egg23199");
});

cloze_devcards.egg.__GT_t_cloze_devcards$egg23199 = (function cloze_devcards$egg$__GT_t_cloze_devcards$egg23199(meta23200){
return (new cloze_devcards.egg.t_cloze_devcards$egg23199(meta23200));
});

}

return (new cloze_devcards.egg.t_cloze_devcards$egg23199(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.core.mapcat.call(null,(function (p1__23202_SHARP_){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,p1__23202_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null));
/**
 * Given two characters, the previous row, and a row we are
 *   building, determine out the next element for this row.
 */
cloze_devcards.egg.nextelt = (function cloze_devcards$egg$nextelt(char1,char2,prevrow,thisrow,position){
if(cljs.core._EQ_.call(null,char1,char2)){
return prevrow.call(null,(position - (1)));
} else {
return ((1) + (function (){var x__17143__auto__ = (function (){var x__17143__auto__ = prevrow.call(null,(position - (1)));
var y__17144__auto__ = prevrow.call(null,position);
return ((x__17143__auto__ < y__17144__auto__) ? x__17143__auto__ : y__17144__auto__);
})();
var y__17144__auto__ = cljs.core.last.call(null,thisrow);
return ((x__17143__auto__ < y__17144__auto__) ? x__17143__auto__ : y__17144__auto__);
})());
}
});
/**
 * Based on the next character from string1 and the whole of string2
 *   calculate the next row. Initially thisrow contains one number.
 */
cloze_devcards.egg.nextrow = (function cloze_devcards$egg$nextrow(char1,str2,prevrow,thisrow){
while(true){
var char2 = cljs.core.first.call(null,str2);
var position = cljs.core.count.call(null,thisrow);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,thisrow),cljs.core.count.call(null,prevrow))){
return thisrow;
} else {
var G__23203 = char1;
var G__23204 = cljs.core.rest.call(null,str2);
var G__23205 = prevrow;
var G__23206 = cljs.core.conj.call(null,thisrow,cloze_devcards.egg.nextelt.call(null,char1,char2,prevrow,thisrow,position));
char1 = G__23203;
str2 = G__23204;
prevrow = G__23205;
thisrow = G__23206;
continue;
}
break;
}
});
/**
 * Calculate the Levenshtein distance between two strings.
 */
cloze_devcards.egg.levenshtein = (function cloze_devcards$egg$levenshtein(var_args){
var args23207 = [];
var len__17863__auto___23210 = arguments.length;
var i__17864__auto___23211 = (0);
while(true){
if((i__17864__auto___23211 < len__17863__auto___23210)){
args23207.push((arguments[i__17864__auto___23211]));

var G__23212 = (i__17864__auto___23211 + (1));
i__17864__auto___23211 = G__23212;
continue;
} else {
}
break;
}

var G__23209 = args23207.length;
switch (G__23209) {
case 2:
return cloze_devcards.egg.levenshtein.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cloze_devcards.egg.levenshtein.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23207.length)].join('')));

}
});

cloze_devcards.egg.levenshtein.cljs$core$IFn$_invoke$arity$2 = (function (str1,str2){
var row0 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(1)),str2)));
return cloze_devcards.egg.levenshtein.call(null,(1),cljs.core.vec.call(null,cljs.core.cons.call(null,(0),row0)),str1,str2);
});

cloze_devcards.egg.levenshtein.cljs$core$IFn$_invoke$arity$4 = (function (row_nr,prevrow,str1,str2){
while(true){
var next_row = cloze_devcards.egg.nextrow.call(null,cljs.core.first.call(null,str1),str2,prevrow,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[row_nr],null)));
var str1_remainder = str1.substring((1));
if(cljs.core._EQ_.call(null,"",str1_remainder)){
return cljs.core.last.call(null,next_row);
} else {
var G__23214 = (row_nr + (1));
var G__23215 = next_row;
var G__23216 = str1_remainder;
var G__23217 = str2;
row_nr = G__23214;
prevrow = G__23215;
str1 = G__23216;
str2 = G__23217;
continue;
}
break;
}
});

cloze_devcards.egg.levenshtein.cljs$lang$maxFixedArity = 4;
cloze_devcards.egg.levenshtein.call(null,"abcd","abcd");
cloze_devcards.egg.levenshtein.call(null,"abcd","adcd");
/**
 * Takes a value a word and a set and returns a set of all the words that are within the levensthein diff of value to that word
 */
cloze_devcards.egg.find_levenshtein = (function cloze_devcards$egg$find_levenshtein(n,w,s){
return cljs.core.filter.call(null,(function (p1__23218_SHARP_){
return (n >= cloze_devcards.egg.levenshtein.call(null,w,p1__23218_SHARP_));
}),s);
});
cloze_devcards.egg.setf;
cloze_devcards.egg.find_levenshtein.call(null,(1),"the",cloze_devcards.egg.setf);
cloze_devcards.egg.n_leven = (function cloze_devcards$egg$n_leven(n,word,set){
return cljs.core.take.call(null,n,cljs.core.sort_by.call(null,(function (p1__23219_SHARP_){
return cloze_devcards.egg.levenshtein.call(null,word,p1__23219_SHARP_);
}),set));
});
cloze_devcards.egg.n_leven.call(null,(10),"False",cloze_devcards.egg.setf);
cloze_devcards.egg.ftext = "Falsifiability is the capacity to prove something is not correct.\n\nScientists make hypotheses and theories about their fields of study. At the start, they hope their hypothesis or theory is true but they and other scientists will use the scientific method to try and prove it false. Falsifiability (or refutability) means that a theory or hypothesis can be proved wrong because it failed a critical test or experiment.\n\nA famous example in the 20th century was the expedition led by Arthur Eddington to Principe Island in Africa in 1919 to record the positions of stars around the Sun during a solar eclipse. The observation of star positions showed that the apparent star positions close to the Sun were changed. In effect, the light passing the Sun was pulled towards the sun by gravitation. This confirmed predictions of gravitational lensing made by Albert Einstein in the general theory of relativity, published in 1915. Eddington's observations were considered to be the first solid evidence in favour of Einstein's theory. Had the observations resulted differently, this would have counted against Einstein's theory, and perhaps refuted it.\n\nKarl Popper had the opinion that only theories that are falsifiable are scientific.[1] Falsifiability is then a line between science and other kinds of knowledge: if it can be refuted, it is science; it if cannot, then it is not science. Many working scientists think Popper was right.\n\nNot everyone agreed with this: Pierre Duhem and Paul Feyerabend had different ideas. Feyerabend's Against method (1975) argued that there was no one scientific method. Instead, whatever works, works and anything goes. This is called epistemological anarchy.\n\nDuham's idea was more subtle. He thought that for any given set of observations there is a huge and uncountable number of explanations. According to Duhem, an experiment in physics is not just an observation, but an interpretation of observations by means of a theoretical framework. Furthermore, no matter how well one constructs one's experiment, it is impossible to subject an isolated single hypothesis to an experimental test. Instead, it is a whole interlocking group of hypotheses, background assumptions, and theories that is tested. This thesis has come to be known as holism. According to Duhem, it makes crucial experiments impossible.\n\nThere are some other problems with falsification:\n\nKurt G\u00F6del showed that certain propositions inside a system of logic cannot be proved inside that system.\nClosely related to this is the fact that some statements are undecidable (This statement is false, see paradox). Undecidable statements cannot be falsified";
cloze_devcards.egg.seqf = cljs.core.re_seq.call(null,cloze_devcards.egg.re_word,cloze_devcards.egg.ftext);
cloze_devcards.egg.setf = cljs.core.set.call(null,cloze_devcards.egg.seqf);
cloze_devcards.egg.wordmap = (function cloze_devcards$egg$wordmap(text){
var words = clojure.string.split.call(null,text," ");
return cljs.core.reduce.call(null,((function (words){
return (function (memo,word){
return cljs.core.assoc.call(null,memo,word,(memo.call(null,word,(0)) + (1)));
});})(words))
,cljs.core.PersistentArrayMap.EMPTY,words);
});
cloze_devcards.egg.more_than_in_map = (function cloze_devcards$egg$more_than_in_map(n,m){
return cljs.core.filter.call(null,(function (p__23222){
var vec__23223 = p__23222;
var _ = cljs.core.nth.call(null,vec__23223,(0),null);
var v = cljs.core.nth.call(null,vec__23223,(1),null);
return (n < v);
}),m);
});
var iter__17577__auto___23232 = (function cloze_devcards$egg$iter__23224(s__23225){
return (new cljs.core.LazySeq(null,(function (){
var s__23225__$1 = s__23225;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23225__$1);
if(temp__4425__auto__){
var s__23225__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23225__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__23225__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__23227 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__23226 = (0);
while(true){
if((i__23226 < size__17576__auto__)){
var vec__23230 = cljs.core._nth.call(null,c__17575__auto__,i__23226);
var a = cljs.core.nth.call(null,vec__23230,(0),null);
var b = cljs.core.nth.call(null,vec__23230,(1),null);
cljs.core.chunk_append.call(null,b__23227,cljs.core.PersistentArrayMap.fromArray([a,b], true, false));

var G__23233 = (i__23226 + (1));
i__23226 = G__23233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23227),cloze_devcards$egg$iter__23224.call(null,cljs.core.chunk_rest.call(null,s__23225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23227),null);
}
} else {
var vec__23231 = cljs.core.first.call(null,s__23225__$2);
var a = cljs.core.nth.call(null,vec__23231,(0),null);
var b = cljs.core.nth.call(null,vec__23231,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([a,b], true, false),cloze_devcards$egg$iter__23224.call(null,cljs.core.rest.call(null,s__23225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__17577__auto___23232.call(null,cloze_devcards.egg.more_than_in_map.call(null,(3),cloze_devcards.egg.wordmap.call(null,cloze_devcards.egg.ftext)));
cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,cloze_devcards.egg.more_than_in_map.call(null,(1),cloze_devcards.egg.wordmap.call(null,cloze_devcards.egg.ftext)))));
cljs.core.sort_by.call(null,cljs.core.second,cljs.core._GT_,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)));
cloze_devcards.egg.sentences = (function cloze_devcards$egg$sentences(text){
return cljs.core.rest.call(null,cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,text,/(.*[\? |\. |\! ])/)));
});
cloze_devcards.egg.not_blank = (function cloze_devcards$egg$not_blank(setofstrings){
return cljs.core.filter.call(null,(function (p1__23234_SHARP_){
return !(("" === p1__23234_SHARP_));
}),setofstrings);
});
cloze_devcards.egg.uniq_words = (function cloze_devcards$egg$uniq_words(text){
return cljs.core.set.call(null,cloze_devcards.egg.not_blank.call(null,clojure.string.split.call(null,text,/\s|\?|\!|\,|\.|\:/)));
});

//# sourceMappingURL=egg.js.map?rel=1457373079921