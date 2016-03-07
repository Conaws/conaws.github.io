(ns cloze-devcards.core
  (:require
   [cloze-devcards.egg :refer [eggs]]
   #_[om.core :as om :include-macros true]
   [devcards.core :as dc]
   [sablono.core :as sab :include-macros true])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


(devcards.core/start-devcard-ui!)

(defcard first-card
  (sab/html [:div
             [:h1 (pr-str eggs)]
             [:h1 "This is your first devcard!"]]))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (sab/html [:a {:href "/cards.html"} "This is what you're looking for"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

