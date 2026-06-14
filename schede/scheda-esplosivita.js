window.workoutPrograms = window.workoutPrograms || {};

window.workoutPrograms['scheda-esplosivita'] = {
            id: 'fase_2_v2',
            name: 'Fase 2 — Esplosività & Transfer',
            version: '2.0',
            startDate: '4 Mag 2026',
            endDate: '14 Giu 2026',
            frequency: '3 sessioni / settimana',
            duration: '60-80 min',
            sport: 'Beach Volley',

            goals: [
                'Aumentare il salto verticale di almeno 4 cm.',
                'Eseguire i Push Press con tecnica fluida, gambe-tronco-braccia coordinati.',
                'Mantenere dolore 0/10 in elevazione e nei gesti overhead.',
                'Migliorare il transfer su sabbia: partenze, lateralità, atterraggi, reattività.',
                'Uscire dalle sedute fresco ma stimolato — niente pump, niente cedimento.'
            ],

            principles: [
                {
                    title: '1. Intento massimo',
                    short: 'Concentrica sempre alla massima velocità possibile, in ogni esercizio chiave.',
                    body: '<p>Vale per Squat, Push Press, Stacco/Trap Bar/RDL, Panca esplosiva, Box Jump, Broad Jump, Slam.</p><p>La velocità reale può cambiare in base al carico, ma <strong>l\'intento deve essere sempre massimo</strong>.</p>'
                },
                {
                    title: '2. No cedimento',
                    short: 'RIR 2-3 sui fondamentali. Mai esaurimento muscolare.',
                    body: '<blockquote>Se hai 5 ripetizioni in scheda, usa un carico con cui ne avresti circa 7-8 pulite.</blockquote><p>Il cedimento peggiora la qualità, aumenta la fatica residua e riduce il transfer atletico.</p>'
                },
                {
                    title: '3. Recuperi pieni',
                    short: 'I recuperi non sono tempo perso: ricostituiscono energia per la qualità delle serie.',
                    body: '<table><thead><tr><th>Tipo di esercizio</th><th>Recupero</th></tr></thead><tbody><tr><td>Salti</td><td>90-120 s</td></tr><tr><td>Squat / Stacco / Push Press</td><td>120-180 s</td></tr><tr><td>Panca esplosiva</td><td>120 s</td></tr><tr><td>Accessori</td><td>60-90 s</td></tr></tbody></table><p>Se hai tempo, non accorciare i recuperi sui movimenti principali. Priorità qualità, non densità.</p>'
                },
                {
                    title: '4. Qualità prima del volume',
                    short: 'La serie finisce quando la velocità cala, la tecnica cambia, o senti di "sopravvivere" al gesto.',
                    body: '<p>La serie termina quando:</p><ul><li>la velocità cala visibilmente;</li><li>la tecnica cambia;</li><li>l\'atterraggio diventa rumoroso o instabile;</li><li>la spalla compensa;</li><li>la zona lombare prende il posto di gambe e core;</li><li>senti di "sopravvivere" al gesto invece di eseguirlo.</li></ul><p>Una ripetizione in più <strong>non è automaticamente meglio</strong>.</p>'
                },
                {
                    title: '5. Forza + potenza',
                    short: '"Fresco sì. Leggero no."',
                    body: '<p>Il ciclo allena soprattutto la capacità di esprimere forza rapidamente, ma mantiene anche uno stimolo reale di forza se Squat, Stacco/Trap Bar/RDL e Bulgari sono caricati correttamente.</p><ul><li><strong>Potenza</strong>: carichi moderati, massima velocità.</li><li><strong>Forza</strong>: carichi sub-massimali ma seri, RIR 2-3.</li><li><strong>Spalla</strong>: spinte gestibili, lavoro scapolare, controllo tecnico.</li></ul><blockquote>Fresco sì. Leggero no.</blockquote>'
                },
                {
                    title: '6. Misurare, non indovinare',
                    short: 'La sensazione non basta — la metrica decide.',
                    body: '<p>Misuriamo: salto verticale, broad jump, tecnica del Push Press, stato della spalla, RIR e velocità percepita nei fondamentali, transfer percepito in campo.</p>'
                }
            ],

            paradigm: [
                ['Forza massimale',          'Media/alta',          'Alta, ma non massimale'],
                ['Ipertrofia',               'Molto alta',          'Secondaria'],
                ['Stress spalla',            'Alto',                'Controllato'],
                ['Esplosività',              'Bassa',               'Molto alta'],
                ['Velocità / salto',         'Bassa',               'Molto alta'],
                ['Fatica percepita',         'Alta',                'Moderata'],
                ['Recupero neurale',         'Spesso sacrificato',  'Prioritario'],
                ['Transfer beach volley',    'Indiretto',           'Diretto']
            ],

            schedule: {
                rule: 'Tre giorni non consecutivi. Evita due sedute consecutive.',
                examples: [
                    'Lunedì G1 · Mercoledì G2 · Venerdì G3',
                    'Martedì G1 · Giovedì G2 · Sabato G3'
                ],
                note: 'Se hai beach volley intenso, consideralo carico atletico vero, soprattutto per salti e spalla.'
            },

            progression: [
                ['1', 'Tecnica + baseline',  '4×5 @ RIR 3',                       '4×4 @ RIR 3',          'Volume standard',           'Prima misurazione'],
                ['2', 'Consolidamento',      '4×5 @ RIR 2-3',                     '4×4 @ RIR 2-3',        'Volume standard',           'Piccolo aumento se tutto è veloce'],
                ['3', 'Intensificazione',    '5×4 @ RIR 2 oppure 4×5 più carico', '5×3 o 4×4 @ RIR 2',    'Volume standard',           'Test intermedio'],
                ['4', 'Stabilizzazione',     'Come sett. 3',                      'Come sett. 3',         'Volume standard',           'Non cercare fatica extra'],
                ['5', 'Picco di qualità',    '5×3 @ RIR 1-2',                     '5×3 @ RIR 2',          'Invariato o leggero calo',  'Massima qualità'],
                ['6', 'Scarico + test',      'Volume -40-50%',                    'Volume -40-50%',       'Test salto',                'Misurazione finale']
            ],

            progressionRules: {
                when: [
                    'la tecnica è rimasta stabile',
                    'la velocità non è crollata',
                    'hai rispettato il RIR',
                    'la spalla è rimasta a 0/10 durante e dopo',
                    'il giorno dopo non senti fatica articolare anomala'
                ],
                increments: [
                    ['Squat / Stacco / Trap Bar', '+2,5 - 5 kg'],
                    ['Push Press',                '+1 - 2,5 kg'],
                    ['Landmine Press',            '+1 - 2 kg per lato'],
                    ['Panca esplosiva',           'aumenta solo se la velocità resta alta']
                ]
            },

            sources: {
                intro: 'Queste fonti non vanno lette come ricetta rigida, ma come base per le scelte della scheda.',
                items: [
                    {
                        ref: 'ACSM',
                        title: 'Resistance Training Guidelines Update 2026',
                        desc: 'Le linee guida distinguono tra carichi più pesanti per la forza e carichi moderati per la potenza, con enfasi sulla massima velocità concentrica.',
                        url: 'https://www.acsm.org/resistance-training-guidelines-update-2026/'
                    },
                    {
                        ref: 'NSCA',
                        title: 'Plyometric Exercises',
                        desc: 'Nella pliometria "di più" non è automaticamente meglio: frequenza bassa, basso volume e padronanza tecnica sono spesso preferibili.',
                        url: 'https://www.nsca.com/education/articles/kinetic-select/plyometric-exercises/'
                    },
                    {
                        ref: 'Grgic et al.',
                        title: 'Resistance training to failure or non-failure (meta-analisi)',
                        desc: 'Il cedimento muscolare non sembra necessario per ottenere miglioramenti di forza e massa.',
                        url: 'https://www.sciencedirect.com/science/article/pii/S2095254621000077'
                    },
                    {
                        ref: 'Jukic et al.',
                        title: 'Velocity loss thresholds during resistance training (meta-analisi)',
                        desc: 'Per un blocco di potenza, limitare il calo di velocità durante le serie è coerente con l\'obiettivo.',
                        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9807551/'
                    },
                    {
                        ref: 'Xu et al.',
                        title: 'Optimizing Post-activation Performance Enhancement (meta-analisi)',
                        desc: 'Il PAPE / contrast training può migliorare acutamente prestazioni atletiche, ma l\'effetto dipende da carico, recupero e qualità del warm-up.',
                        url: 'https://link.springer.com/article/10.1007/s40279-024-02170-6'
                    },
                    {
                        ref: 'Gouttebarge et al.',
                        title: 'Prevention of musculoskeletal injuries in volleyball',
                        desc: 'Nel volley i programmi preventivi includono core stability, forza, equilibrio e warm-up strutturato.',
                        url: 'https://link.springer.com/article/10.1186/s40621-017-0122-y'
                    }
                ]
            },

            autoreg: [
                {
                    title: 'Se ti senti troppo fresco',
                    body: '<p>Non aggiungere volume automaticamente. Prima controlla:</p><ul><li>i salti stanno migliorando?</li><li>i carichi salgono mantenendo velocità?</li><li>il Push Press è più fluido?</li><li>in campo ti senti più reattivo?</li><li>la spalla resta a 0/10?</li></ul><p>Se sì, la scheda sta facendo il suo lavoro.</p>'
                },
                {
                    title: 'Se ti senti cotto',
                    body: '<p>Taglia in questo ordine:</p><ol><li>una serie dagli accessori;</li><li>una serie dalla panca esplosiva o dagli slam;</li><li>una serie dai complessi Bulgari;</li><li>solo per ultimo, riduci i fondamentali.</li></ol><p>Non tagliare il riscaldamento. Non accorciare troppo i recuperi dei movimenti principali.</p>'
                },
                {
                    title: 'Se la velocità cala',
                    body: '<ul><li>Riduci il carico del 5-10%.</li><li>Oppure chiudi la serie prima.</li><li>Oppure mantieni il carico ma fai meno ripetizioni.</li></ul>'
                },
                {
                    title: 'Se hai beach volley intenso nella stessa settimana',
                    body: '<p>Riduci leggermente:</p><ul><li>salti in palestra;</li><li>contrast training;</li><li>volume degli sprint.</li></ul><p>Il campo conta come carico vero, non come "extra leggero".</p>'
                }
            ],

            days: {
                day1: {
                    title: 'Salto verticale & spinta sicura',
                    intro: 'Salto verticale, forza esplosiva degli arti inferiori, spinta diagonale sicura.',
                    exercises: [
                        // --- Riscaldamento (R) ---
                        { id: 'd1_w1', isWarmup: true, name: 'Corda / bike / camminata inclinata', sets: 1, reps: '3 min', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=salto+corda+riscaldamento+tecnica',
                          tips: [{ title: 'Obiettivo', html: '<p>Attivazione cardiovascolare leggera. Niente forzature: serve solo ad alzare la temperatura corporea.</p>' }] },
                        { id: 'd1_w2', isWarmup: true, name: 'Mobilità caviglia al muro', sets: 1, reps: '10 per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=ankle+mobility+wall+test+esercizio',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Ginocchio verso il muro senza staccare il tallone.</li><li>Cerca progressione di range, non forza.</li></ul>' }] },
                        { id: 'd1_w3', isWarmup: true, name: 'Squat-to-stand', sets: 1, reps: '8', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=squat+to+stand+mobility+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Movimento fluido, mani sotto i piedi.</li><li>Apri il torace nella risalita.</li></ul>' }] },
                        { id: 'd1_w4', isWarmup: true, name: 'Aperture a libro a terra', sets: 2, reps: '8 per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=book+opening+thoracic+mobility',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Sdraiato di lato, ginocchia piegate.</li><li>Apri il braccio cercando rotazione toracica, non lombare.</li></ul>' }] },
                        { id: 'd1_w5', isWarmup: true, name: 'Scap push-up', sets: 2, reps: '10', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=scapular+push+up+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Plank alto, gomiti tesi.</li><li>Lavora solo le scapole: protrazione e retrazione.</li></ul>' }] },
                        { id: 'd1_w6', isWarmup: true, name: 'Dislocazioni con elastico', sets: 2, reps: '12-15', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=shoulder+dislocates+band+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Presa larga, braccia tese.</li><li>Movimento lento, niente strappi.</li></ul>' }] },
                        { id: 'd1_w7', isWarmup: true, name: 'Pogo jump bassi', sets: 2, reps: '15', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=pogo+jump+warmup+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Rimbalzi bassi e veloci.</li><li>Reattività di caviglia, ginocchia quasi tese.</li></ul>' }] },
                        { id: 'd1_w8', isWarmup: true, name: 'Salti progressivi (pre-Box Jump)', sets: 1, reps: '2-3 salti', rest: 60,
                          videoLink: 'https://www.youtube.com/results?search_query=approach+jump+warmup+volleyball',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Salti progressivi a intensità crescente.</li><li>Servono per innescare il sistema nervoso prima del Box Jump.</li></ul>' }] },

                        // --- Esercizi principali ---
                        {
                            id: 'd1_box_jump', name: 'Box Jump', sets: 4, reps: '4', rest: 120,
                            intensity: 'Massimo intento',
                            videoLink: 'https://www.youtube.com/results?search_query=box+jump+tutorial+ita+corretto',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Parti da fermo.</li><li>Carica anche e braccia.</li><li>Salta cercando massima altezza.</li><li>Atterra morbido e silenzioso.</li><li>Scendi camminando dal box, non saltando giù.</li><li>Recupera pienamente tra le serie.</li></ul>' },
                                { title: 'Cosa evitare', html: '<ul><li>Box troppo alto scelto solo per "salirci".</li><li>Atterraggio rumoroso.</li><li>Salto giù dal box.</li><li>Ripetizioni fatte quando l\'esplosività è già calata.</li></ul>' },
                                { title: 'Nota', html: '<p>Il Box Jump è un esercizio, non il test principale del salto verticale. Per misurare il progresso usa il salto verticale da fermo (tab Misurazioni).</p>' }
                            ]
                        },
                        {
                            id: 'd1_squat', name: 'Squat — Back o Front', sets: 4, reps: '5', rest: 150,
                            intensity: 'RIR 2-3',
                            videoLink: 'https://www.youtube.com/results?search_query=squat+bilanciere+esecuzione+corretta',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Piedi stabili, pressione su tutto il piede.</li><li>Discesa controllata di circa 2 secondi.</li><li>Tronco solido.</li><li>Risalita con massima intenzione esplosiva.</li><li>Ogni rep deve sembrare atletica, non grindata.</li></ul>' },
                                { title: 'Criterio di carico', html: '<blockquote>Ne avrei ancora 2, forse 3, ma non 5.</blockquote>' },
                                { title: 'Cosa evitare', html: '<ul><li>Serie lente.</li><li>Cedimento.</li><li>Ginocchia che collassano verso l\'interno.</li><li>Perdita di tensione in buca.</li><li>Trasformare la seduta in un test di massimale.</li></ul>' }
                            ]
                        },
                        {
                            id: 'd1_landmine', name: 'Landmine Press a 1 braccio', sets: 3, reps: '6 per braccio', rest: 90,
                            intensity: 'RIR 2-3',
                            videoLink: 'https://www.youtube.com/results?search_query=landmine+press+unilaterale+tutorial',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Posizione split stance o mezzo inginocchio.</li><li>Costole basse.</li><li>Non inarcare la zona lombare.</li><li>Spingi in diagonale.</li><li>Leggera partecipazione di gambe e tronco.</li><li>Mantieni scapola libera di muoversi.</li></ul>' },
                                { title: 'Perché lo teniamo', html: '<p>È una spinta più tollerabile della spinta verticale pura, mantiene buon transfer verso muro/attacco senza forzare la spalla in posizione estrema.</p>' },
                                { title: 'Regola spalla', html: '<table><thead><tr><th>Sensazione</th><th>Azione</th></tr></thead><tbody><tr><td>0/10</td><td>Procedi</td></tr><tr><td>1-2/10</td><td>Monitora</td></tr><tr><td>3/10 o più</td><td>Riduci carico o cambia variante</td></tr><tr><td>Dolore che altera tecnica</td><td>Stop</td></tr></tbody></table>' }
                            ]
                        },
                        {
                            id: 'd1_rematore', name: 'Rematore con manubrio', sets: 3, reps: '8 per braccio', rest: 90,
                            intensity: 'RIR 2-3',
                            videoLink: 'https://www.youtube.com/results?search_query=rematore+manubrio+panca+esecuzione',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Tronco stabile.</li><li>Tira il gomito verso l\'anca.</li><li>Non strattonare.</li><li>Fermati un istante in chiusura.</li><li>Controlla la discesa.</li></ul>' },
                                { title: 'Obiettivo', html: '<p>Bilanciare le spinte, mantenere controllo scapolare e dare supporto alla salute della spalla.</p>' }
                            ]
                        }
                    ]
                },

                day2: {
                    title: 'Transfer sabbia, Push Press & catena posteriore',
                    intro: 'Partenze brevi, spostamento, tecnica del Push Press, catena posteriore, core dinamico. Push Press prima dello Stacco per essere fresco nell\'esercizio tecnicamente più delicato.',
                    exercises: [
                        // --- Riscaldamento (R) ---
                        { id: 'd2_w1', isWarmup: true, name: 'Corda leggera', sets: 1, reps: '3 min', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=salto+corda+riscaldamento+tecnica',
                          tips: [{ title: 'Obiettivo', html: '<p>Attivazione cardiovascolare leggera.</p>' }] },
                        { id: 'd2_w2', isWarmup: true, name: 'Hip hinge con bastone', sets: 2, reps: '8', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=hip+hinge+stick+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Bastone su nuca, lombare e sacro: tutti i 3 punti devono restare a contatto.</li><li>Movimento di anca pura, ginocchia poco flesse.</li></ul>' }] },
                        { id: 'd2_w3', isWarmup: true, name: 'Affondo con rotazione toracica', sets: 1, reps: '6 per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=thoracic+rotation+lunge+warmup',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>In affondo, ruota il torace verso la gamba avanti.</li><li>Braccia aperte, sguardo accompagna la rotazione.</li></ul>' }] },
                        { id: 'd2_w4', isWarmup: true, name: 'Plank laterale', sets: 2, reps: '25-30 sec per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=side+plank+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Bacino in linea, non collassare.</li><li>Spalla sopra il gomito.</li></ul>' }] },
                        { id: 'd2_w5', isWarmup: true, name: 'Front rack stretch leggero', sets: 1, reps: '30 sec', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=front+rack+mobility+stretch',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Bilanciere vuoto in front rack.</li><li>Cerca posizione confortevole, non forzare.</li></ul>' }] },
                        { id: 'd2_w6', isWarmup: true, name: 'Strict Press con bilanciere vuoto', sets: 1, reps: '8', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=strict+press+bilanciere+tecnica',
                          tips: [{ title: 'Obiettivo', html: '<p>Risveglio del pattern di spinta verticale prima del Push Press.</p>' }] },
                        { id: 'd2_w7', isWarmup: true, name: 'Push Press con bilanciere vuoto', sets: 2, reps: '5', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=push+press+bilanciere+tutorial',
                          tips: [{ title: 'Obiettivo', html: '<p>Ripasso tecnico a vuoto. Dip corto, drive di gambe, bilanciere vicino al viso.</p>' }] },

                        // --- Esercizi principali ---
                        {
                            id: 'd2_transfer', name: 'Transfer Sabbia', sets: 4, reps: 'variabile', rest: 75,
                            intensity: 'Massimo intento, qualità',
                            videoLink: 'https://www.youtube.com/results?search_query=lateral+bound+plyometric+tutorial',
                            tips: [
                                { title: 'Quando inserirlo', html: '<p>All\'inizio della seduta, prima dei Broad Jumps, quando sei fresco. Non fare entrambe le opzioni nella stessa seduta.</p>' },
                                { title: 'Obiettivo', html: '<p>Aggiungere specificità per la sabbia (partenze brevi, lateralità) senza accumulare volume inutile. Vedi varianti settimanali.</p>' }
                            ],
                            variants: [
                                { title: 'Settimane 1, 3, 5 — Accelerazioni brevi', html: '<p><strong>4-6 × 5-10 metri</strong> · Recupero 60-90 s, completo</p><ul><li>Parti basso e reattivo.</li><li>Spingi il terreno indietro.</li><li>Fermati prima che diventi cardio.</li><li>Ogni ripetizione deve essere veloce.</li></ul>' },
                                { title: 'Settimane 2, 4, 6 — Lateral Bounds', html: '<p><strong>3 × 4 per lato</strong> · Recupero 60-90 s</p><ul><li>Spinta laterale esplosiva.</li><li>Atterraggio controllato su una gamba.</li><li>Bacino stabile.</li><li>Ginocchio allineato al piede.</li><li>Non cercare distanza se perdi controllo.</li></ul>' }
                            ]
                        },
                        {
                            id: 'd2_broad_jump', name: 'Broad Jump', sets: 4, reps: '4', rest: 120,
                            intensity: 'Massimo intento',
                            videoLink: 'https://www.youtube.com/results?search_query=broad+jump+tutorial',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Parti da fermo.</li><li>Usa bene le braccia.</li><li>Spingi forte con anche e piedi.</li><li>Atterra morbido.</li><li>Reset completo tra le ripetizioni.</li></ul>' },
                                { title: 'Cosa evitare', html: '<ul><li>Saltare "a rimbalzo".</li><li>Atterrare rigido.</li><li>Cercare distanza perdendo controllo.</li><li>Fare ripetizioni ravvicinate come circuito.</li></ul>' }
                            ]
                        },
                        {
                            id: 'd2_push_press', name: 'Push Press', sets: 4, reps: '4', rest: 120,
                            intensity: 'RIR 2-3',
                            videoLink: 'https://www.youtube.com/results?search_query=push+press+bilanciere+tutorial',
                            tips: [
                                { title: 'Esecuzione', html: '<ol><li>Bilanciere in rack, vicino alle clavicole.</li><li>Gomiti leggermente avanti.</li><li>Piedi circa larghezza anche/spalle.</li><li>Dip verticale: piccolo piegamento di ginocchia e anche.</li><li>Tronco alto, costole giù.</li><li>Drive aggressivo di gambe.</li><li>Il bilanciere sale vicino al viso.</li><li>Chiusura stabile sopra la testa.</li><li>Discesa controllata.</li></ol>' },
                                { title: 'Cues utili', html: '<ul><li>"Dip corto, drive violento."</li><li>"Gambe prima, braccia dopo."</li><li>"Bilanciere vicino."</li><li>"Costole basse."</li><li>"Non trasformarlo in military press."</li></ul>' },
                                { title: 'Cosa evitare', html: '<ul><li>Dip troppo profondo.</li><li>Ginocchia che collassano.</li><li>Spinta solo di braccia.</li><li>Iperestensione lombare.</li><li>Ripetizioni lente o grindate.</li><li>Perdita di controllo in discesa.</li></ul>' },
                                { title: 'Regola qualità', html: '<p>Se hai paura, perdi traiettoria o senti compensi, il carico è troppo alto. Il Push Press deve sentirsi <strong>potente e coordinato</strong>, non "sopravvissuto".</p>' }
                            ]
                        },
                        {
                            id: 'd2_stacco', name: 'Stacco — Trap Bar / Romeno / Terra', sets: 4, reps: '5', rest: 150,
                            intensity: 'RIR 2-3',
                            videoLink: 'https://www.youtube.com/results?search_query=trap+bar+deadlift+esecuzione+corretta',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Piedi radicati.</li><li>Schiena neutra.</li><li>Dorsali attivi.</li><li>Spingi il pavimento.</li><li>Chiudi con glutei, non con iperestensione lombare.</li><li>Discesa controllata.</li></ul>' },
                                { title: 'Nota grip', html: '<p>Se il grip limita molto prima di glutei e femorali, puoi usare straps nelle serie più pesanti. In questa fase il focus non è testare la presa, ma allenare catena posteriore e potenza.</p>' },
                                { title: 'Cosa evitare', html: '<ul><li>Perdere neutralità lombare.</li><li>Strappare il bilanciere da terra.</li><li>Chiudere iperestendendo la schiena.</li><li>Continuare se la tecnica degrada.</li></ul>' }
                            ],
                            variants: [
                                { title: '1. Trap Bar Deadlift (consigliato)', html: '<p>Ottimo compromesso tra forza, spinta e gestione lombare. Prima scelta per questo ciclo.</p>' },
                                { title: '2. Stacco Romeno', html: '<p>Ottimo per femorali e glutei, alto controllo eccentrico, lombare protetta.</p>' },
                                { title: '3. Stacco da terra classico', html: '<p>Valido se la tecnica è solida. Più tecnico, richiede più mobilità di anca/caviglia.</p>' }
                            ]
                        },
                        {
                            id: 'd2_slam', name: 'Slam con palla medica', sets: 4, reps: '6', rest: 90,
                            intensity: 'Esplosiva',
                            videoLink: 'https://www.youtube.com/results?search_query=medicine+ball+slam+tutorial',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Porta la palla sopra la testa senza dolore.</li><li>Usa addome, dorsali e anche.</li><li>Scaglia la palla a terra con violenza.</li><li>Non è un esercizio solo di braccia.</li><li>Reset tra le ripetizioni.</li></ul>' },
                                { title: 'Cosa evitare', html: '<ul><li>Inarcare troppo la lombare.</li><li>Fare ripetizioni lente.</li><li>Trasformarlo in cardio.</li><li>Usare una palla troppo leggera se non riesci a esprimere potenza.</li></ul>' }
                            ]
                        }
                    ]
                },

                day3: {
                    title: 'Contrasto, panca esplosiva & salute spalle',
                    intro: 'Contrast training, spinta esplosiva orizzontale, cuffia/scapola, core antirotazionale.',
                    exercises: [
                        // --- Riscaldamento (R) ---
                        { id: 'd3_w1', isWarmup: true, name: 'Corda / bike / camminata inclinata', sets: 1, reps: '3 min', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=salto+corda+riscaldamento+tecnica',
                          tips: [{ title: 'Obiettivo', html: '<p>Attivazione cardiovascolare leggera.</p>' }] },
                        { id: 'd3_w2', isWarmup: true, name: 'Affondi a corpo libero', sets: 2, reps: '8 per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=affondi+corpo+libero+esecuzione',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Passo lungo, ginocchio allineato col piede.</li><li>Tronco verticale, costole basse.</li></ul>' }] },
                        { id: 'd3_w3', isWarmup: true, name: 'Cossack squat o shift laterale', sets: 1, reps: '8 per lato', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=cossack+squat+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Sposta peso lateralmente, una gamba si piega l\'altra resta tesa.</li><li>Tallone della gamba piegata a terra.</li></ul>' }] },
                        { id: 'd3_w4', isWarmup: true, name: 'Pogo jump bassi', sets: 2, reps: '12', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=pogo+jump+warmup+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Rimbalzi bassi e veloci, reattività di caviglia.</li></ul>' }] },
                        { id: 'd3_w5', isWarmup: true, name: 'Circonduzioni ampie braccia', sets: 1, reps: '10 avanti + 10 indietro', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=arm+circles+warmup',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Braccia tese, cerchi ampi.</li><li>Ritmo controllato.</li></ul>' }] },
                        { id: 'd3_w6', isWarmup: true, name: 'Band pull-apart', sets: 2, reps: '15', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=band+pull+apart+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Elastico davanti al petto, braccia tese.</li><li>Apri tirando con scapole, non con mani.</li></ul>' }] },
                        { id: 'd3_w7', isWarmup: true, name: 'Push-up scapolari', sets: 1, reps: '10', rest: 0,
                          videoLink: 'https://www.youtube.com/results?search_query=scapular+push+up+tutorial',
                          tips: [{ title: 'Esecuzione', html: '<ul><li>Plank alto, gomiti tesi.</li><li>Solo movimento delle scapole.</li></ul>' }] },

                        // --- Esercizi principali ---
                        {
                            id: 'd3_bulgaro', name: 'Complesso Bulgaro — Contrast', sets: 3, reps: '4 pesanti + 4 salti per lato', rest: 120,
                            intensity: 'Bulgari RIR 2 · Salti massima qualità',
                            videoLink: 'https://www.youtube.com/results?search_query=affondi+bulgari+contrast+training',
                            tips: [
                                { title: 'Esecuzione', html: '<ol><li>Esegui 4 Affondi Bulgari pesanti.</li><li>Appoggia i pesi.</li><li>Esegui 4 Jump Split Squat a corpo libero.</li><li>Recupera pienamente.</li><li>Ripeti.</li></ol>' },
                                { title: 'Criterio qualità', html: '<p>Il salto dopo i Bulgari deve essere <strong>più reattivo</strong>, non più brutto.</p><p>Se i Jump Split Squat diventano lenti, scoordinati, rumorosi, instabili o asimmetrici, aumenta il recupero tra Bulgari e salti di 30-60s, oppure riduci il carico dei Bulgari.</p>' },
                                { title: 'Cosa evitare', html: '<ul><li>Cercare cedimento nei Bulgari.</li><li>Perdere equilibrio.</li><li>Ginocchio che collassa.</li><li>Salti fatti per inerzia.</li><li>Atterraggi rigidi.</li></ul>' }
                            ]
                        },
                        {
                            id: 'd3_panca', name: 'Panca piana esplosiva', sets: 4, reps: '4', rest: 120,
                            intensity: '55-65% 1RM · Massima velocità',
                            videoLink: 'https://www.youtube.com/results?search_query=panca+piana+esplosiva+dynamic+effort',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Scapole addotte e depresse.</li><li>Piedi stabili.</li><li>Discesa controllata.</li><li>Breve controllo al petto, senza rimbalzo.</li><li>Spinta alla massima velocità.</li><li>Mantieni scapole stabili.</li></ul>' },
                                { title: 'Cosa evitare', html: '<ul><li>Carico troppo pesante.</li><li>Ripetizioni lente.</li><li>Rimbalzo sul petto.</li><li>Spalle che si anteriorizzano.</li><li>Cedimento.</li></ul>' },
                                { title: 'Nota', html: '<p>La panca in questa fase non serve a "pompare il petto". Serve a mantenere spinta, velocità e coordinazione senza stressare eccessivamente la spalla.</p>' }
                            ]
                        },
                        {
                            id: 'd3_face_pull', name: 'Face Pull al cavo', sets: 3, reps: '12-15', rest: 60,
                            intensity: 'Controllo, non carico massimo',
                            videoLink: 'https://www.youtube.com/results?search_query=face+pull+cavo+tutorial+spalle',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Tira la corda verso occhi/naso.</li><li>Gomiti alti ma non forzati.</li><li>Extraruota alla fine del movimento.</li><li>Pausa breve in chiusura.</li><li>Ritorno controllato.</li></ul>' },
                                { title: 'Obiettivo', html: '<p>Cuffia, deltoide posteriore, controllo scapolare e igiene posturale.</p>' }
                            ]
                        },
                        {
                            id: 'd3_pallof', name: 'Pallof Press', sets: 3, reps: '10 per lato', rest: 60,
                            intensity: 'Controllo',
                            videoLink: 'https://www.youtube.com/results?search_query=pallof+press+tutorial+core',
                            tips: [
                                { title: 'Esecuzione', html: '<ul><li>Posizione atletica.</li><li>Bacino fermo.</li><li>Costole basse.</li><li>Spingi le mani avanti senza ruotare.</li><li>Mantieni 1-2 secondi in estensione.</li><li>Ritorna controllato.</li></ul>' },
                                { title: 'Obiettivo', html: '<p>Core antirotazionale: trasferire forza senza disperderla, proteggere il tronco nelle torsioni di attacco/difesa.</p>' }
                            ]
                        }
                    ]
                }
            }
        };

