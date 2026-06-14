window.workoutPrograms = window.workoutPrograms || {};

window.workoutPrograms['scheda-emergenza'] = {
    id: 'settimana_emergenza_v1',
    name: 'Scheda Emergenza — Protezione spalla & mantenimento',
    version: '1.0',
    startDate: 'Uso al bisogno',
    endDate: '3-7 giorni',
    frequency: '3 sessioni / settimana',
    duration: '35-60 min',
    sport: 'Beach Volley',
    heroLabel: 'Scheda protetta',
    goalsTitle: 'Obiettivi della fase',
    principlesTitle: 'Principi della fase',
    scheduleTitle: 'Distribuzione consigliata',
    autoregTitle: 'Regole pratiche',
    progressionTitle: 'Logica della settimana',
    progressionHeaders: ['Fase', 'Focus', 'Upper', 'Lower', 'Re-test', 'Nota'],
    paradigmTitle: 'Cambio di focus',
    paradigmHeaders: ['Focus', 'Settimana cuscinetto', 'Scheda emergenza'],
    whenSectionTitle: 'Vai avanti o reintroduci solo se:',
    incrementSectionTitle: 'Modifiche consigliate',
    incrementHeaders: ['Situazione', 'Azione'],

    philosophy: {
        title: 'Filosofia della fase',
        body: '<p>Questa non e piu una semplice settimana cuscinetto: e una <strong class="text-ink-100">scheda emergenza</strong>, pensata per proteggere la spalla quando l\'upper inizia a essere troppo irritabile.</p><p>L\'idea e togliere quasi del tutto le spinte dinamiche dell\'upper e sostituirle con lavoro isometrico, controllo scapolare e tirate leggerissime. Il lower invece resta presente quasi normale, con le cautele necessarie se tenere carichi in mano o al bilanciere irrita la spalla.</p><p>Non stiamo cercando performance. Stiamo cercando di <strong class="text-ink-100">spegnere l\'irritazione senza perdere struttura</strong>, per poi decidere con lucidita se reintrodurre qualcosa dopo 3-5 giorni.</p>',
        quote: 'In questa fase la domanda non e "quanto riesco a fare?", ma <strong>"cosa tollero senza peggiorare?"</strong>'
    },

    goals: [
        'Proteggere la spalla nelle attivita quotidiane e in palestra, abbassando il rumore irritativo dell\'upper.',
        'Mantenere lower body, ginocchia e caviglie allenati senza trasformare la fase in riposo totale.',
        'Usare isometrie e controllo scapolare per cuffia, bicipite e tricipite senza provocare flare-up.',
        'Valutare dopo 3-5 giorni se esiste spazio reale per una reintroduzione minima di spinte controllate.',
        'Uscire dalla fase con piu chiarezza: o si reintroduce gradualmente, o si replica Giorno A senza forzare.'
    ],

    principles: [
        {
            title: '1. Upper molto protetto',
            short: 'Per ora niente panca alta, niente military, niente landmine se tira davanti.',
            body: '<p>Il criterio guida e semplice:</p><ul><li><strong>no panca alta</strong> per ora;</li><li><strong>no military press</strong>;</li><li><strong>no landmine</strong> se senti davanti alla spalla;</li><li>tirate e face pull solo molto leggeri e solo se tollerati.</li></ul><p>Qui l\'upper non deve dimostrare nulla: deve smettere di essere reattivo.</p>'
        },
        {
            title: '2. Isometrie prima di dinamica',
            short: 'Cuffia, curl e pushdown vanno prima tenuti, poi eventualmente mossi.',
            body: '<p>Le isometrie sono il cuore di questa fase. Extrarotazione, intrarotazione, curl e pushdown vengono usati in modo statico per dare carico prevedibile e tollerabile, senza chiedere alla spalla di gestire accelerazioni o ROM aggressivi.</p>'
        },
        {
            title: '3. Dolore: soglia piu severa',
            short: '0-1/10 ideale. A 2/10 monitori. Oltre, si scala subito.',
            body: '<table><thead><tr><th>Sensazione</th><th>Cosa fare</th></tr></thead><tbody><tr><td>0-1/10</td><td>Procedi</td></tr><tr><td>2/10</td><td>Accettabile solo se non cresce</td></tr><tr><td>3/10</td><td>Riduci subito o cambia esercizio</td></tr><tr><td>4/10 o piu</td><td>Stop</td></tr><tr><td>Fastidio maggiore il giorno dopo</td><td>La seduta era ancora troppo ambiziosa</td></tr></tbody></table>'
        },
        {
            title: '4. Lower quasi normale, ma intelligente',
            short: 'Goblet squat, split squat, polpacci e tibiale si. RDL solo se la presa non irrita.',
            body: '<p>Il lower body puo restare piu vicino alla settimana cuscinetto. L\'unico vero filtro e questo: se il modo in cui devi <strong>tenere il carico</strong> irrita spalla o parte anteriore, cambia strumento.</p><ul><li>RDL con bilanciere solo se la spalla e tranquilla.</li><li>Altrimenti usa manubri leggeri, kettlebell o macchina.</li></ul>'
        },
        {
            title: '5. Giorno C non e obbligatorio',
            short: 'Si reintroduce solo se la vita quotidiana e chiaramente migliorata.',
            body: '<p>Il Giorno C e un <strong>re-test di tolleranza</strong>, non un premio. Se dopo 3-5 giorni il dolore nelle attivita quotidiane non e sceso chiaramente, non si reintroducono spinte: si ripete il Giorno A.</p>'
        },
        {
            title: '6. Criterio vita reale',
            short: 'Bici, spesa, alzata frontale e gesti quotidiani decidono piu del pump.',
            body: '<p>La misura vera non e quanto hai "sentito lavorare". La misura e se gesti come bici, borsa della spesa, alzata frontale spontanea o semplici attivita di giornata danno meno fastidio.</p>'
        }
    ],

    paradigm: [
        ['Spinte upper', 'Controllate ma presenti', 'Quasi azzerate'],
        ['Lavoro cuffia', 'Dinamico + controllo', 'Isometrico + controllo'],
        ['Tolleranza al dolore', '0-2/10', 'Idealmente 0-1/10'],
        ['Reintroduzione overhead', 'Possibile in settimana', 'Solo dopo chiaro miglioramento'],
        ['Lower body', 'Controllato', 'Quasi normale con adattamenti di presa'],
        ['Scopo', 'Ponte terapeutico', 'Contenere un flare-up e rivalutare']
    ],

    schedule: {
        rule: 'Tre sedute non consecutive. Se la spalla resta rumorosa, Giorno C puo diventare una replica del Giorno A.',
        examples: [
            'Lunedi A · Mercoledi B · Venerdi C',
            'Martedi A · Giovedi B · Sabato C'
        ],
        note: 'Se il dolore nelle attivita quotidiane non cala chiaramente entro 3-5 giorni, niente reintroduzione delle spinte: si resta in modalita protetta.'
    },

    progression: [
        ['Fase 1', 'Protezione', 'Isometrie cuffia, curl e pushdown; tirate leggere', 'Lower quasi normale', 'Nessun re-test', 'Primi 2-3 giorni'],
        ['Fase 2', 'Valutazione', 'Solo se la vita quotidiana migliora', 'Lower invariato', 'Mini reintroduzione prudente', 'Dopo 3-5 giorni']
    ],

    progressionRules: {
        when: [
            'il dolore nelle attivita quotidiane e sceso chiaramente, per esempio da 5/10 a 1-2/10',
            'alzare il braccio davanti non aumenta il fastidio',
            'bike, borsa della spesa o piccoli compiti non irritano piu come prima',
            'le isometrie restano tollerate senza rebound il giorno dopo',
            'eventuali rematori leggeri non accendono la parte anteriore della spalla'
        ],
        increments: [
            ['Landmine tira davanti', 'Eliminala del tutto'],
            ['Face pull non e 0/10', 'Saltalo'],
            ['RDL col bilanciere irrita la spalla', 'Passa a manubri, kettlebell o macchina'],
            ['Giorno C non convince', 'Ripeti Giorno A e non reintrodurre spinte'],
            ['Re-test peggiora il giorno dopo', 'Torna subito alla versione protetta']
        ]
    },

    sources: {
        intro: 'Le fonti restano le stesse della scheda cuscinetto, ma qui l\'applicazione e piu conservativa: priorita a carico tollerabile, dolore basso e reintroduzione solo dopo miglioramento reale.',
        items: [
            {
                ref: 'AAOS',
                title: 'Rotator Cuff and Shoulder Conditioning Program',
                desc: 'Base utile per l\'idea di rinforzo progressivo dei muscoli di supporto della spalla e per la prudenza rispetto al dolore durante gli esercizi.',
                url: 'https://orthoinfo.aaos.org/en/recovery/rotator-cuff-and-shoulder-conditioning-program/'
            },
            {
                ref: 'AAOS',
                title: 'Knee Conditioning Program',
                desc: 'Supporta il mantenimento del lower body anche quando l\'upper deve essere temporaneamente ridotto.',
                url: 'https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/'
            },
            {
                ref: 'AAOS',
                title: 'Foot and Ankle Conditioning Program',
                desc: 'Giustifica il lavoro su calf, tibiale ed equilibrio come mantenimento utile per caviglia, atterraggi e sabbia.',
                url: 'https://orthoinfo.aaos.org/en/recovery/foot-and-ankle-conditioning-program/'
            },
            {
                ref: 'ACSM',
                title: 'Resistance Training Guidelines Update 2026',
                desc: 'Utile come cornice generale: in una fase irritativa l\'obiettivo non e la potenza, ma una dose di forza sostenibile e coerente col contesto.',
                url: 'https://acsm.org/resistance-training-guidelines-update-2026/'
            },
            {
                ref: 'NSCA',
                title: 'Plyometric Exercises',
                desc: 'La pliometria resta volutamente minima: volume basso, qualita alta e nessun rumore tecnico.',
                url: 'https://www.nsca.com/education/articles/kinetic-select/plyometric-exercises/'
            }
        ]
    },

    autoreg: [
        {
            title: 'Se la spalla fa male anche nella vita normale',
            body: '<p>Se bici, spesa, alzata frontale o semplici compiti quotidiani danno ancora fastidio, non usare il Giorno C per "provare". Ripeti il Giorno A e rimani sulle isometrie.</p>'
        },
        {
            title: 'Se il lower ti irrita per colpa della presa',
            body: '<p>Il problema non e il pattern lower in se, ma <strong>come stai tenendo il carico</strong>. Prima di togliere l\'RDL:</p><ol><li>alleggerisci;</li><li>passa a manubri o kettlebell;</li><li>usa macchina se disponibile.</li></ol>'
        },
        {
            title: 'Quando reintrodurre qualcosa',
            body: '<p>Solo se il dolore quotidiano e sceso chiaramente, per esempio da 5/10 a 1-2/10:</p><ul><li>Landmine press leggerissimo — 2×8, solo se 0-1/10</li><li>Alzata laterale nel piano scapolare — 2×10 solo in ROM indolore</li><li>Serratus wall slide — 2×10 solo se non tira davanti</li></ul><p>Se uno di questi dubita, si toglie.</p>'
        },
        {
            title: 'Come deve finire questa fase',
            body: '<p>Le sensazioni giuste:</p><ul><li>meno irritazione nella vita quotidiana;</li><li>spalla meno "vigile" ai carichi banali;</li><li>lower ancora allenato;</li><li>nessuna fretta di tornare a spingere se il contesto non lo permette.</li></ul>'
        }
    ],

    closing: {
        eyebrow: 'Proteggi prima. Reintroduci dopo.',
        note: 'Niente test inutili. Niente ego lift. Solo carico tollerabile.'
    },

    days: {
        day1: {
            title: 'Giorno A — Upper terapeutico molto protetto',
            intro: 'Seduta upper di contenimento: isometrie, scapola e tirate leggerissime. Nessuna spinta dinamica per ora.',
            exercises: [
                { id: 'e1_w1', isWarmup: true, name: 'Bike o camminata senza caricare le braccia', sets: 1, reps: '5 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=bike+warmup+gym',
                  tips: [{ title: 'Obiettivo', html: '<p>Attivazione generale senza chiedere stabilita o spinta alle braccia.</p>' }] },
                { id: 'e1_w2', isWarmup: true, name: 'Pendolo spalla', sets: 2, reps: '30 sec', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=shoulder+pendulum+exercise',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Movimento rilassato.</li><li>Nessuna forzatura.</li><li>Serve a calmare, non a testare.</li></ul>' }] },
                { id: 'e1_w3', isWarmup: true, name: 'Scap push-up su muro', sets: 2, reps: '10', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=wall+scapular+push+up',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Versione al muro, non a terra.</li><li>Muovi solo le scapole.</li><li>Se tira davanti, riduci range.</li></ul>' }] },

                {
                    id: 'e1_ext_iso', name: 'Extrarotazione isometrica gomito al fianco', sets: 4, reps: '20-30 sec', rest: 45,
                    intensity: '0-1/10 ideale',
                    videoLink: 'https://www.youtube.com/results?search_query=shoulder+external+rotation+isometric',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Gomito al fianco.</li><li>Spingi contro elastico, cavo o parete senza muovere.</li><li>Tensione costante.</li><li>Respira normale.</li></ul>' }
                    ]
                },
                {
                    id: 'e1_int_iso', name: 'Intrarotazione isometrica gomito al fianco', sets: 4, reps: '20-30 sec', rest: 45,
                    intensity: '0-1/10 ideale',
                    videoLink: 'https://www.youtube.com/results?search_query=shoulder+internal+rotation+isometric',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Setup identico all\'extrarotazione.</li><li>Spingi senza movimento visibile.</li><li>Dolore sempre basso e stabile.</li></ul>' }
                    ]
                },
                {
                    id: 'e1_row', name: 'Rematore chest-supported leggerissimo', sets: 3, reps: '10', rest: 75,
                    intensity: 'Molto leggero',
                    videoLink: 'https://www.youtube.com/results?search_query=chest+supported+row+dumbbell',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Petto appoggiato.</li><li>Tira solo nel range tollerato.</li><li>Nessuno strappo.</li><li>Se senti davanti, alleggerisci o fermati.</li></ul>' }
                    ]
                },
                {
                    id: 'e1_facepull', name: 'Face pull leggerissimo', sets: 2, reps: '12', rest: 60,
                    intensity: 'Solo se 0/10',
                    videoLink: 'https://www.youtube.com/results?search_query=face+pull+tutorial',
                    tips: [
                        { title: 'Regola', html: '<p>Si fa solo se e davvero 0/10. Se senti anche minimo fastidio davanti, si salta.</p>' }
                    ]
                },
                {
                    id: 'e1_curl_iso', name: 'Curl isometrico gomito a 90 gradi', sets: 3, reps: '20 sec', rest: 45,
                    intensity: 'Tensione moderata',
                    videoLink: 'https://www.youtube.com/results?search_query=biceps+isometric+hold+90+degrees',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Gomito circa a 90 gradi.</li><li>Tieni senza compensare con spalla o tronco.</li><li>Dolore massimo 0-2/10.</li></ul>' }
                    ]
                },
                {
                    id: 'e1_push_iso', name: 'Pushdown isometrico gomito a 90 gradi', sets: 3, reps: '20 sec', rest: 45,
                    intensity: 'Tensione moderata',
                    videoLink: 'https://www.youtube.com/results?search_query=triceps+pushdown+isometric+hold',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Gomito circa a 90 gradi.</li><li>Spingi verso il basso senza muovere.</li><li>Spalla rilassata.</li></ul>' }
                    ]
                }
            ]
        },

        day2: {
            title: 'Giorno B — Lower body, ginocchia e caviglie',
            intro: 'Seduta lower quasi normale: il filtro vero e se la spalla tollera il modo in cui tieni il carico.',
            exercises: [
                { id: 'e2_w1', isWarmup: true, name: 'Bike', sets: 1, reps: '5 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=bike+warmup+gym',
                  tips: [{ title: 'Obiettivo', html: '<p>Attivazione generale semplice.</p>' }] },
                { id: 'e2_w2', isWarmup: true, name: 'Mobilita caviglia al muro', sets: 2, reps: '10 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=ankle+mobility+wall+exercise',
                  tips: [{ title: 'Esecuzione', html: '<p>Tallone a terra, cerca mobilita senza forzare.</p>' }] },
                { id: 'e2_w3', isWarmup: true, name: 'Squat a corpo libero lento', sets: 2, reps: '8', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=bodyweight+squat+tempo',
                  tips: [{ title: 'Esecuzione', html: '<p>Scendi piano, risali controllato.</p>' }] },

                {
                    id: 'e2_squat', name: 'Goblet squat lento', sets: 4, reps: '6', rest: 105,
                    intensity: 'RIR 4',
                    videoLink: 'https://www.youtube.com/results?search_query=goblet+squat+tempo',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Tempo lento e pulito.</li><li>Piedi stabili.</li><li>Ginocchia in linea.</li><li>Nessuna fretta in risalita.</li></ul>' }
                    ]
                },
                {
                    id: 'e2_rdl', name: 'RDL', sets: 3, reps: '6', rest: 105,
                    intensity: 'Solo se la presa non irrita',
                    videoLink: 'https://www.youtube.com/results?search_query=romanian+deadlift+tempo',
                    tips: [
                        { title: 'Regola', html: '<p>Si fa solo se tenere il carico non da fastidio alla spalla.</p>' }
                    ],
                    variants: [
                        { title: 'Se il bilanciere da fastidio', html: '<ul><li>Usa manubri leggeri.</li><li>Oppure kettlebell.</li><li>Oppure una macchina se disponibile.</li></ul>' }
                    ]
                },
                {
                    id: 'e2_split', name: 'Split squat o step-down', sets: 3, reps: '8 per lato', rest: 90,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=split+squat+step+down+exercise',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>ROM tollerabile.</li><li>Ginocchio stabile.</li><li>Nessun rimbalzo.</li></ul>' }
                    ]
                },
                {
                    id: 'e2_calf_straight', name: 'Calf raise ginocchio teso', sets: 4, reps: '8', rest: 75,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=standing+calf+raise+tempo',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Sali controllato, pausa breve, scendi lento.</p>' }
                    ]
                },
                {
                    id: 'e2_calf_bent', name: 'Calf raise ginocchio piegato', sets: 3, reps: '10-12', rest: 75,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=seated+calf+raise+soleus',
                    tips: [
                        { title: 'Obiettivo', html: '<p>Piu enfasi sul soleo e stabilita di caviglia.</p>' }
                    ]
                },
                {
                    id: 'e2_tibialis', name: 'Tibialis raise', sets: 3, reps: '15-20', rest: 60,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=tibialis+raise+wall',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Schiena al muro, punte su, discesa lenta.</p>' }
                    ]
                },
                {
                    id: 'e2_balance', name: 'Equilibrio monopodalico', sets: 3, reps: '30-45 sec per lato', rest: 60,
                    intensity: 'Stabilita',
                    videoLink: 'https://www.youtube.com/results?search_query=single+leg+balance+exercise',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Bacino stabile, ginocchio morbido, niente collasso verso l\'interno.</p>' }
                    ]
                },
                {
                    id: 'e2_plyo', name: 'Pogo bassi o snap-down', sets: 3, reps: 'volume basso', rest: 60,
                    intensity: 'Qualita, non quantita',
                    videoLink: 'https://www.youtube.com/results?search_query=low+pogo+jump+snap+down',
                    tips: [
                        { title: 'Regola', html: '<p>Volume basso, atterraggio silenzioso, nessuna ricerca di fatica.</p>' }
                    ],
                    variants: [
                        { title: 'Opzione A — Pogo bassi', html: '<p><strong>2-3×15</strong> con rimbalzi bassi e puliti.</p>' },
                        { title: 'Opzione B — Snap-down', html: '<p><strong>3-4×3</strong> con blocco dell\'atterraggio e piedi silenziosi.</p>' }
                    ]
                }
            ]
        },

        day3: {
            title: 'Giorno C — Re-test di tolleranza',
            intro: 'Seduta decisionale: reintroduci solo se la vita quotidiana e chiaramente migliorata. Altrimenti ripeti Giorno A.',
            exercises: [
                { id: 'e3_w1', isWarmup: true, name: 'Bike o camminata', sets: 1, reps: '5 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=bike+warmup+gym',
                  tips: [{ title: 'Obiettivo', html: '<p>Check iniziale molto semplice: se gia qui la spalla si lamenta, la giornata va tenuta protetta.</p>' }] },

                {
                    id: 'e3_landmine', name: 'Landmine press leggerissimo', sets: 2, reps: '8', rest: 75,
                    intensity: 'Solo se 0-1/10',
                    videoLink: 'https://www.youtube.com/results?search_query=half+kneeling+landmine+press',
                    tips: [
                        { title: 'Regola', html: '<p>Si prova solo se il dolore quotidiano e sceso chiaramente. Se senti davanti, si elimina subito.</p>' }
                    ]
                },
                {
                    id: 'e3_row', name: 'Rematore manubrio', sets: 3, reps: '8', rest: 90,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=one+arm+dumbbell+row+technique',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Tira verso l\'anca, pausa breve, nessuna rotazione del tronco.</p>' }
                    ]
                },
                {
                    id: 'e3_lateral', name: 'Alzata laterale nel piano scapolare', sets: 2, reps: '10', rest: 60,
                    intensity: 'Solo ROM indolore',
                    videoLink: 'https://www.youtube.com/results?search_query=scaption+raise+dumbbell+tutorial',
                    tips: [
                        { title: 'Regola', html: '<p>Se non trovi un ROM davvero pulito e indolore, non insistere.</p>' }
                    ]
                },
                {
                    id: 'e3_ext', name: 'Extrarotazione elastico', sets: 3, reps: '12', rest: 45,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=band+external+rotation+shoulder',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Gomito al fianco, ritmo calmo, nessun compenso.</p>' }
                    ]
                },
                {
                    id: 'e3_int', name: 'Intrarotazione elastico', sets: 3, reps: '12', rest: 45,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=band+internal+rotation+shoulder',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Setup semplice, ROM pulito e nessun dolore crescente.</p>' }
                    ]
                },
                {
                    id: 'e3_serratus', name: 'Serratus wall slide', sets: 2, reps: '10', rest: 45,
                    intensity: 'Solo se non tira davanti',
                    videoLink: 'https://www.youtube.com/results?search_query=serratus+wall+slide',
                    tips: [
                        { title: 'Regola', html: '<p>Se tira davanti o senti attrito strano, si toglie senza discuterne.</p>' }
                    ]
                },
                {
                    id: 'e3_pallof', name: 'Pallof press', sets: 3, reps: '10 per lato', rest: 60,
                    intensity: 'Controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=pallof+press+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<p>Bacino fermo, costole basse, pausa breve in estensione.</p>' }
                    ]
                },
                {
                    id: 'e3_repeatA', name: 'Se non sei pronto: ripeti Giorno A', sets: 1, reps: 'decisione', rest: 0,
                    intensity: 'Scelta prudente',
                    videoLink: 'https://www.youtube.com/results?search_query=shoulder+isometric+rehab',
                    tips: [
                        { title: 'Quando farlo', html: '<p>Se la spalla da ancora fastidio con bici, spesa o alzata frontale, non reintrodurre spinte e ripeti il Giorno A.</p>' }
                    ]
                }
            ]
        }
    }
};
