(ns cloze-devcards.egg
  (:require [reagent.core    :as rx     ]
            [posh.core       :as rx-db  :refer [pull transact!]]
            [reagent.session :as session]
            [datascript.core :as mdb    ]
            [clojure.set     :as set    ]
            [cljs.reader                ]
            [clojure.string  :as str    ])
  (:require-macros
            [reagent.ratom :refer [reaction]]
            [devcards.core   :as dc
             :refer [defcard defcard-doc defcard-rg deftest]]))

(def egge
  "You were on your way home when you died.
It was a car accident. Nothing particularly remarkable, but fatal nonetheless. You left behind a wife and two children. It was a painless death. The EMTs tried their best to save you, but to no avail. Your body was so utterly shattered you were better off, trust me.
And that’s when you met me.
“What… what happened?” You asked. “Where am I?”
“You died,” I said, matter-of-factly. No point in mincing words.
“There was a… a truck and it was skidding…”
“Yup,” I said.
“I… I died?”
“Yup. But don’t feel bad about it. Everyone dies,” I said.
You looked around. There was nothingness. Just you and me. “What is this place?” You asked. “Is this the afterlife?”
“More or less,” I said.
“Are you god?” You asked.
“Yup,” I replied. “I’m God.”
“My kids… my wife,” you said.
“What about them?”
“Will they be all right?”
“That’s what I like to see,” I said. “You just died and your main concern is for your family. That’s good stuff right there.”
You looked at me with fascination. To you, I didn’t look like God. I just looked like some man. Or possibly a woman. Some vague authority figure, maybe. More of a grammar school teacher than the almighty.
“Don’t worry,” I said. “They’ll be fine. Your kids will remember you as perfect in every way. They didn’t have time to grow contempt for you. Your wife will cry on the outside, but will be secretly relieved. To be fair, your marriage was falling apart. If it’s any consolation, she’ll feel very guilty for feeling relieved.”
“Oh,” you said. “So what happens now? Do I go to heaven or hell or something?”
“Neither,” I said. “You’ll be reincarnated.”
“Ah,” you said. “So the Hindus were right,”
“All religions are right in their own way,” I said. “Walk with me.”
You followed along as we strode through the void. “Where are we going?”
“Nowhere in particular,” I said. “It’s just nice to walk while we talk.”
“So what’s the point, then?” You asked. “When I get reborn, I’ll just be a blank slate, right? A baby. So all my experiences and everything I did in this life won’t matter.”
“Not so!” I said. “You have within you all the knowledge and experiences of all your past lives. You just don’t remember them right now.”
I stopped walking and took you by the shoulders. “Your soul is more magnificent, beautiful, and gigantic than you can possibly imagine. A human mind can only contain a tiny fraction of what you are. It’s like sticking your finger in a glass of water to see if it’s hot or cold. You put a tiny part of yourself into the vessel, and when you bring it back out, you’ve gained all the experiences it had.
“You’ve been in a human for the last 48 years, so you haven’t stretched out yet and felt the rest of your immense consciousness. If we hung out here for long enough, you’d start remembering everything. But there’s no point to doing that between each life.”
“How many times have I been reincarnated, then?”
“Oh lots. Lots and lots. An in to lots of different lives.” I said. “This time around, you’ll be a Chinese peasant girl in 540 AD.”
“Wait, what?” You stammered. “You’re sending me back in time?”
“Well, I guess technically. Time, as you know it, only exists in your universe. Things are different where I come from.”
“Where you come from?” You said.
“Oh sure,” I explained “I come from somewhere. Somewhere else. And there are others like me. I know you’ll want to know what it’s like there, but honestly you wouldn’t understand.”
“Oh,” you said, a little let down. “But wait. If I get reincarnated to other places in time, I could have interacted with myself at some point.”
“Sure. Happens all the time. And with both lives only aware of their own lifespan you don’t even know it’s happening.”
“So what’s the point of it all?”
“Seriously?” I asked. “Seriously? You’re asking me for the meaning of life? Isn’t that a little stereotypical?”
“Well it’s a reasonable question,” you persisted.
I looked you in the eye. “The meaning of life, the reason I made this whole universe, is for you to mature.”
“You mean mankind? You want us to mature?”
“No, just you. I made this whole universe for you. With each new life you grow and mature and become a larger and greater intellect.”
“Just me? What about everyone else?”
“There is no one else,” I said. “In this universe, there’s just you and me.”
You stared blankly at me. “But all the people on earth…”
“All you. Different incarnations of you.”
“Wait. I’m everyone!?”
“Now you’re getting it,” I said, with a congratulatory slap on the back.
“I’m every human being who ever lived?”
“Or who will ever live, yes.”
“I’m Abraham Lincoln?”
“And you’re John Wilkes Booth, too,” I added.
“I’m Hitler?” You said, appalled.
“And you’re the millions he killed.”
“I’m Jesus?”
“And you’re everyone who followed him.”
You fell silent.
“Every time you victimized someone,” I said, “you were victimizing yourself. Every act of kindness you’ve done, you’ve done to yourself. Every happy and sad moment ever experienced by any human was, or will be, experienced by you.”
You thought for a long time.
“Why?” You asked me. “Why do all this?”
“Because someday, you will become like me. Because that’s what you are. You’re one of my kind. You’re my child.”
“Whoa,” you said, incredulous. “You mean I’m a god?”
“No. Not yet. You’re a fetus. You’re still growing. Once you’ve lived every human life throughout all time, you will have grown enough to be born.”
“So the whole universe,” you said, “it’s just…”
“An egg.” I answered. “Now it’s time for you to move on to your next life.”
And I sent you on your way.")



(def eggs "Ibas camino a tu casa cuando falleciste.
Fue un accidente de tránsito. Nada extraordinario, pero sin embargo fatal. Dejaste atrás una esposa y dos hijos. Fue una muerte indolora. Los paramédicos dieron todo de si para salvarte, pero no hubo caso. Tu cuerpo estaba tan destrozado, que hasta fue mejor así, créeme.
Y fue entonces que nos encontramos.
“¿Qué… Qué pasó?” Preguntaste. “¿Dónde estoy?”
“Moriste”, respondí con naturalidad. No tenía sentido medir mis palabras.
“Había… un camión y estaba derrapando…”
“Sip”, dije.
“Yo… ¿Morí?”.
“Sip. Pero no te sientas mal al respecto. Todos mueren”.
Miraste alrededor. No había nada. Solo tu y yo. “¿Qué es este lugar?” Preguntaste. ¿Es el más allá?
“Más o menos”.
“¿Usted es Dios?”
“Si, soy Dios”.
“Mis hijos… mi esposa”. Preguntaste.
“¿Qué hay con ellos?”
“¿Estarán bien?”
“Eso me gusta. Acabas de morir y tu principal preocupación es tu familia. Eso es muy bueno”.
Me miraste con fascinación. Para ti, no me veía como Dios. Sólo me veía como un tipo común. O posiblemente una mujer. Una vaga figura de autoridad, quizás. Más como una maestra de gramática, que como el Todopoderoso.
“No te preocupes. Ellos estarán bien. Tus hijos te recordarán como alguien perfecto en todo aspecto. No tuvieron tiempo para llegar a despreciarte por algo en particular. Tu esposa llorará por fuera, pero sentirá alivio por dentro. A decir verdad, tu matrimonio se estaba cayendo en pedazos. Si te sirve de consuelo, se sentirá culpable al sentir alivio”.
“Oh”, dijiste. “Entonces, ¿Qué pasa ahora? ¿Me voy al Cielo, o al Infierno, o algo así?
“Ninguno. Serás reencarnado”.
“Ah, entonces los hindúes tenían razón”.
“Todas las religiones están en lo cierto, a su manera”, contesté. “Camina conmigo”.
Me seguiste mientras cruzábamos el vacío. “¿Adonde vamos?”
“A ningún lugar en particular. Se siente bien caminar mientras hablamos”.
“¿Y cuál es el punto entonces? Preguntaste. “Cuando renazca, seré solamente una pizarra en blanco, ¿Verdad? Un bebé. Todas mis experiencias y todo lo que hecho en esta vida no importará”.
“No exactamente. Llevas contigo todo el conocimiento y las experiencias de todas tus vidas pasadas. Sólo que no lo recuerdas ahora mismo”.
Paré de caminar y te tomé por los hombros. “Tu alma es mucho más magnífica, bella, y gigantesca de lo que puedas imaginar. Una mente humana solo puede contener una pequeña fracción de lo que eres. Es como apoyar tu dedo en un vaso con agua para sentir su temperatura. Pones una pequeña parte de ti contra el recipiente, y para cuando la quitas, habrás obtenido el conocimiento que poseía”.
“Has estado dentro de un humano por los últimos 48 años, por lo que aún no te has extendido, para sentir tu inmensa consciencia. Si pasáramos el suficiente tiempo aquí, comenzarías a recordarlo todo. Pero no tiene sentido hacer eso entre cada vida”.
“¿Cuántas veces he reencarnado?”
“Oh, muchas. Muchísimas. Y en muchísimas vidas diferentes”. Dije. “Esta vez serás una campesina china, en el año 540 AC”.
“Espera, ¿Qué?”. Tartamudeaste. “¿Me enviarás de vuelta en el tiempo?”
“Bueno, técnicamente, sí. El tiempo como lo conoces, solo existe en tu universo. Las cosas son algo distintas de donde yo vengo”.
“¿De dónde vienes?”
“Mmm… Yo vengo de un lugar. Un lugar distinto. Y allí hay otros como yo. Se que querrías saber como es este lugar, pero honestamente, no entenderías”.
“Oh,” Dijiste algo desilusionado. “Un momento… Si soy reencarnado en distintos lugares en el tiempo, en algún punto podría haber interactuado conmigo mismo”.
“Seguro. Pasa todo el tiempo. Y con ambas vidas conscientes únicamente de sí mismas, tu nunca sabes que este encuentro está sucediendo”.
“¿Cuál es el punto de todo esto, entonces?”
“¿Enserio?” Pregunté. ¿Me estás preguntando cuál es el sentido de la vida? ¿No está un poco estereotipado?”
“Bueno, es una pregunta razonable”. Persististe.
Te miré a los ojos. “El significado de la vida, la razón por la que creé este universo, es para que madures”.
“¿Querrás decir la humanidad? ¿Quieres que maduremos?”
“No, solo tú. Creé este universo para ti. Con cada vida creces, maduras, y te vuelves un intelecto mayor”.
“¿Solo yo? ¿Qué hay de los demás?”
“No hay nadie más”. Dije. “En este universo solo estamos tú y yo”.
Me miraste fija, e inexpresivamente. “Pero toda la gente en la Tierra…”
“Todos son tú. Diferentes encarnaciones de ti mismo”.
“O sea que, ¿Yo soy todos?”
“Ahora lo estás entendiendo”, te dije palmeándote la espalda a manera de congratulación.
“¿Yo soy cada humano que ha vivido?”
“Y cada humano que vivirá. Exactamente”.
“¿Soy Abraham Lincoln?”
“Y eres John Wilkes Booth, también”. Agregué.
“¿Soy Hitler?”. Preguntaste apaleado.
“Y los millones que asesinó”.
“¿Soy Jesús?”
“Y todos sus seguidores”.
Te quedaste en silencio.
“Cada vez que trataste injustamente a alguien”, dije “te lo estabas haciendo a ti mismo. Cada acto de amabilidad que has hecho, te lo has hecho a ti mismo. Cada momento feliz y cada momento triste experimentado por un ser humano fue, o será, experimentado por ti”.
Lo pensaste por un largo tiempo.
Luego me preguntaste, “¿Por qué? ¿Por qué hacer todo esto?”
“Porque algún día, te volverás como yo. Porque eso es lo que eres. Eres uno de los míos. Eres mi hijo”.
“Whoa,” exclamaste incrédulo. “¿Dices que soy un dios?”.
“No. No todavía. Eres un feto. Aún estás creciendo. Una vez que hayas vivido cada vida humana a través de los tiempos, habrás crecido lo suficiente como para nacer”.
“Entonces, el universo entero es solo…”
“Un huevo”. Respondí. “Ahora es momento de que continúes hacía  tu próxima vida”.
Y te envié hacía ella.")



(defonce textstate (rx/atom {:text egge}))


(defn split-sentences [text]
  (re-seq #".*[,?.]" text))

(def s1 (first (split-sentences egge)))



(defcard-rg eggs-card
"#Split the string up by sentences"
  (pr-str s1)
  textstate
  {:inspect-data false
   :frame false
   :heading false})


;== Cloze Deletion  



(defn cloze-delete [text word]
  (let [r (str/replace text word "______")]
    (if (not= text r)
      [r word]
      [text])))

(cloze-delete "is" "This isn't is what we're ISCON")
(cloze-delete "I'm a little teapot" "teapot" )
(cloze-delete "I'm" "I'm")



(defcard-rg cloze-card1
"#Take a sentence and remove a given word"
  (pr-str  (cloze-delete "I'm a little teapot" "teapot" )))




;;; random word


;; === test a random word

(re-seq #"\w*\b" "I am a little teapot")

(count (re-seq #"[\w|']*\b" "I'm a little teapot"))


(def re-word  #"[\w|']*\b")



(defn rand-word [s]
  (let [wordseq (re-seq #"[\w|']*\b" s)
        c (rand-int (count wordseq))]
    (nth wordseq c)))

(rand-word "I'm a teapto 'bout that n'ah")



(defcard-doc
  "#Step 2: 
Grab a random word from a sentence
##2a
use a regex that splits the sentence into a sequence of words (array will do)"
  (dc/mkdn-pprint-source re-word)
"##2b
count the words in the sentence, take a random number between 1 and n, and take the word at that location"   
  (dc/mkdn-pprint-source rand-word))



(defn cloze-string [text]
  (fn []
  (let [tvec (->> (split-sentences text)
                  (map #(cloze-delete % (rand-word %)))
                  (take 5))]
      [:div
      (for [[s w] tvec]
        ^{:key s} [:div
                   [:h1 s]
                   [:button w]])])))


(defcard-rg cloze2*
  "Take out a random word"
  [cloze-string egge])



(declare n-leven)


(defn cloze-string2 [text]
  (fn []
  (let [tvec (->> (split-sentences text)
                  (map #(cloze-delete % (rand-word %)))
                  (take 5))
        words (set (re-seq re-word text))]
      [:div
       (for [[s w] tvec
             :let [choices (-> (take 5 words)
                               (conj w)
                               sort)]]
        ^{:key s} [:div
                   [:h1 s]
                   (for [c choices]
                     [:button c])])])))

(defcard-rg fill-in-blank1
  "Only taking random words"
  [cloze-string2 egge])




(defn cloze-string3 [text]
  (fn []
  (let [tvec (->> (split-sentences text)
                  (map #(cloze-delete % (rand-word %)))
                  (take 5))
        words (set (re-seq re-word text))]
      [:div
       (for [[s w] tvec
             :let [choices (-> (n-leven 5 w words)
                               sort)]]
        ^{:key s} [:div
                   [:h1 s]
                   (for [c choices]
                     [:button c])])])))



(defcard-rg fill-in-blank2
  "Using n-leven"
  [cloze-string3 egge])






;;
;;
;;
  ;;      (defn cloze-test [text word choices]
  ;;        (fn []
  ;;          (let [[a b] (cloze-delete word text)
  ;;                choices (conj choices b)]
  ;;            ^{:key "a"}[:div 
  ;;                        [s/segment {:soda {:type :raised}}
  ;;                         a]
  ;;                        [s/segment {:soda {:type :raised}}
  ;;                         (for [c (sort choices)]
  ;;                           ^{:key c}[s/button {:soda {:type :default}
  ;;                                               :on-click #(if (= word c)
  ;;                                                            (js/alert "Win")
  ;;                                                            (js/alert "Lose")  )} c])]])))


        ;; (defcard-rg clozecard
        ;;   [cloze-test "I'm a little teapot" "I'm" ["Me" "You" "I are"]])


        (mapcat #(filter even? %) [[1 1 2] [2 2] [1 1 1]])



        ;;==== determining similarities in strings

        (defn nextelt
          "Given two characters, the previous row, and a row we are
  building, determine out the next element for this row."
          [char1 char2 prevrow thisrow position]
          (if (= char1 char2)
            (prevrow (- position 1))
            (+ 1 (min
                  (prevrow (- position 1))
                  (prevrow position)
                  (last thisrow))))
          )

        (defn nextrow
          "Based on the next character from string1 and the whole of string2
  calculate the next row. Initially thisrow contains one number."
          [char1 str2 prevrow thisrow]
          (let [char2 (first str2)
                position (count thisrow)]
            (if (= (count thisrow) (count prevrow))
              thisrow
              (recur
               char1
               (rest str2)
               prevrow
               (conj thisrow (nextelt char1 char2 prevrow thisrow position))))))

        (defn levenshtein
          "Calculate the Levenshtein distance between two strings."
          ([str1 str2]
           (let [row0 (vec (map first (map vector (iterate inc 1) str2)))]
             (levenshtein 1 (vec (cons 0 row0)) str1 str2)))
          ([row-nr prevrow str1 str2]
           (let [next-row (nextrow (first str1) str2 prevrow (vector row-nr))
                 str1-remainder (.substring str1 1)]
             (if (= "" str1-remainder)
               (last next-row)
               (recur (inc row-nr) next-row str1-remainder str2))))
          )



        (levenshtein "abcd" "abcd")
        (levenshtein "abcd" "adcd")


        (defn find-levenshtein
          "Takes a value a word and a set and returns a set of all the words that are within the levensthein diff of value to that word"
          [n w s]
          (filter #(>= n (levenshtein w %)) s))


        (declare setf)

        (find-levenshtein 1 "the" setf)



      #_(defcard-rg cloze-w-leven
          "Testing Leven algo"
          [cloze-test "I'm a little teapot" "teapot" (find-levenshtein 3 "teapot" setf)])


;;; test levenshein seq

        (defn n-leven [n word set]
          (take n (sort-by #(levenshtein word %) set)))


        (n-leven 10 "False" setf)



        ;; ======= test a sentence
;
 ;       (defn cloze-random [text]
 ;         (cloze-delete (rand-word text) text))
;
 ;       (cloze-random "Hey there Sanj, how you don")


        ;; === test cloze  
;;
;;
 ;;       (defn cloze-sentence [text wordset n]
 ;;         "Testing Leven algo"
 ;;         (fn []
 ;;           (let [[sent word] (cloze-delete (rand-word text) text )
 ;;                 choices (conj (find-levenshtein n word wordset) word)]
 ;;             ^{:key "a"} [cloze-test sent word choices])))
;;
 ;;       ;; (defcard-rg test-rand
 ;;       ;;   "Demostrates problem of when the word exists within a sentence
        ;; ##current problems
        ;; * Need to be able to specify the number of options desired, and increase leventhein count until it includes just those
        ;; * _Need to take into account 's_ 
        ;; * Need to not replace text within word boundaries"
  
        ;;   [cloze-sentence "Those is all the stuff" setf 2])

    
  
  

        (def ftext "Falsifiability is the capacity to prove something is not correct.

Scientists make hypotheses and theories about their fields of study. At the start, they hope their hypothesis or theory is true but they and other scientists will use the scientific method to try and prove it false. Falsifiability (or refutability) means that a theory or hypothesis can be proved wrong because it failed a critical test or experiment.

A famous example in the 20th century was the expedition led by Arthur Eddington to Principe Island in Africa in 1919 to record the positions of stars around the Sun during a solar eclipse. The observation of star positions showed that the apparent star positions close to the Sun were changed. In effect, the light passing the Sun was pulled towards the sun by gravitation. This confirmed predictions of gravitational lensing made by Albert Einstein in the general theory of relativity, published in 1915. Eddington's observations were considered to be the first solid evidence in favour of Einstein's theory. Had the observations resulted differently, this would have counted against Einstein's theory, and perhaps refuted it.

Karl Popper had the opinion that only theories that are falsifiable are scientific.[1] Falsifiability is then a line between science and other kinds of knowledge: if it can be refuted, it is science; it if cannot, then it is not science. Many working scientists think Popper was right.

Not everyone agreed with this: Pierre Duhem and Paul Feyerabend had different ideas. Feyerabend's Against method (1975) argued that there was no one scientific method. Instead, whatever works, works and anything goes. This is called epistemological anarchy.

Duham's idea was more subtle. He thought that for any given set of observations there is a huge and uncountable number of explanations. According to Duhem, an experiment in physics is not just an observation, but an interpretation of observations by means of a theoretical framework. Furthermore, no matter how well one constructs one's experiment, it is impossible to subject an isolated single hypothesis to an experimental test. Instead, it is a whole interlocking group of hypotheses, background assumptions, and theories that is tested. This thesis has come to be known as holism. According to Duhem, it makes crucial experiments impossible.

There are some other problems with falsification:

Kurt Gödel showed that certain propositions inside a system of logic cannot be proved inside that system.
Closely related to this is the fact that some statements are undecidable (This statement is false, see paradox). Undecidable statements cannot be falsified")



        (def seqf (re-seq re-word ftext))

        (def setf (set seqf))



        (defn wordmap [text]
          (let [words (str/split text " ")]
            (reduce (fn [memo word]
                      (assoc memo word (inc (memo word 0)))) {} words)))


        (defn more-than-in-map [n m]
          (filter (fn [[_ v]] (< n v)) m))



        (for [[a b] (more-than-in-map 3 (wordmap ftext))]
          {a b})
         

        (set
         (map first
              (sort-by second >
                       (more-than-in-map 1 (wordmap ftext)))))



        (sort-by second >
                 '([0 1] [0 0] [0 3] [0 2])
                 )








        ;; ==== other ways of slicing up text



        (defn sentences [text]
          (rest (map str/trim (str/split text #"(.*[\? |\. |\! ])"))))


        (defn not-blank [setofstrings]
          (filter #(not (identical? ""  %)) setofstrings))


        (defn uniq-words [text]
          (set (not-blank (str/split text #"\s|\?|\!|\,|\.|\:"))))






