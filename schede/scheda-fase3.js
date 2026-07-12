window.workoutPrograms = window.workoutPrograms || {};

window.workoutPrograms['scheda-fase3'] = {
    id: 'fase_3_v1',
    name: 'Fase 3 — Forza, Potenza & Reattività',
    version: '1.1',
    startDate: '13 Lug 2026',
    endDate: '5 Ott 2026',
    frequency: '3 sedute / settimana',
    duration: '80-100 min',
    sport: 'Beach Volley',

    heroLabel: 'Blocco in-season',
    goalsTitle: 'Obiettivi del blocco',
    principlesTitle: 'Vincoli non negoziabili',
    scheduleTitle: 'Distribuzione settimanale',
    autoregTitle: 'Autoregolazione col beach volley',
    progressionTitle: 'Progressione 12 settimane',
    progressionHeaders: ['Sett', 'Blocco', 'Squat neutro', 'RDL', 'French Contrast', 'Note'],
    paradigmTitle: 'Cosa cambia dalla Fase 2',
    paradigmHeaders: ['Focus', 'Fase 2 — Esplosività', 'Fase 3 — Forza & Potenza'],
    whenSectionTitle: 'Aumenta il carico solo se:',
    incrementSectionTitle: 'Come progredire',
    incrementHeaders: ['Elemento', 'Progressione'],

    philosophy: {
        title: 'Filosofia del blocco',
        body: '<p>La Fase 2 aveva già una forte componente di salto, potenza e transfer. Questo blocco <strong class="text-ink-100">non elimina l\'esplosività</strong>: ne riduce il volume ridondante e aggiunge una progressione di forza più chiara.</p><p>La scelta non è tra "forza" e "potenza": è un <strong class="text-ink-100">mix forza–potenza–reattività</strong>. La forza alza il tetto disponibile, la potenza insegna a esprimerla rapidamente, la reattività riduce il tempo di contatto al suolo, il lavoro unilaterale e laterale mantiene il transfer verso sabbia, frenate e cambi di direzione.</p><p>Il French Contrast entra una sola volta a settimana, con transizioni brevi ma recuperi pieni: deve produrre prestazioni di qualità, non affaticamento metabolico.</p>',
        quote: 'Forte senza diventare lento. Esplosivo senza accumulare salti inutili. Reattivo senza trasformare la palestra in un circuito cardio. Fresco abbastanza da giocare bene sulla sabbia.'
    },

    goals: [
        'Alzare il "tetto" di forza mantenendo salto verticale e reattività.',
        'Esprimere la forza rapidamente: potenza e velocità di produzione.',
        'Migliorare frenate, cambi di direzione e transfer su sabbia con lavoro unilaterale e laterale.',
        'Mantenere la spalla protetta seguendo sempre il percorso del fisioterapista.',
        'Restare fresco abbastanza da giocare bene a beach volley per i prossimi 2-3 mesi.'
    ],

    principles: [
        {
            title: '1. Il fisioterapista viene prima di tutto',
            short: 'Ogni seduta inizia col percorso spalla. Nessuna spinta aggiuntiva oltre a quelle prescritte.',
            body: '<p>Il blocco del fisioterapista è la <strong>prima cosa</strong> di ogni allenamento, nello stesso ordine della scheda ricevuta.</p><p>Non sono previste altre spinte oltre a quelle del percorso. Se un esercizio provoca dolore alla spalla, modifica presa o variante e confrontati con il fisioterapista: non forzare una traiettoria solo perché è scritta qui.</p>'
        },
        {
            title: '2. Mai a cedimento',
            short: 'Sui pesi resta normalmente a RIR 2-3. Nessuna serie portata a esaurimento.',
            body: '<blockquote>Se hai 5 ripetizioni in scheda, usa un carico con cui ne avresti circa 7-8 pulite.</blockquote><p>Il cedimento peggiora la qualità, aumenta la fatica residua e riduce il transfer atletico — soprattutto in stagione di beach.</p>'
        },
        {
            title: '3. I salti finiscono sulla qualità',
            short: 'La serie di salti termina quando altezza, velocità, coordinazione o atterraggio calano.',
            body: '<p>Interrompi la serie quando:</p><ul><li>il salto diventa visibilmente più basso;</li><li>l\'atterraggio è rumoroso o instabile;</li><li>perdi simmetria;</li><li>i pogo diventano pesanti o rigidi.</li></ul><p>Non aumentare le ripetizioni per "progredire": la progressione dei salti è più altezza, migliore atterraggio, minore tempo di contatto.</p>'
        },
        {
            title: '4. Il beach conta come carico vero',
            short: 'Salti, sprint, frenate e spalla non sono "cardio leggero".',
            body: '<p>Evita due giorni consecutivi di palestra e, per quanto possibile, tre giorni consecutivi ad alto volume di salti.</p><p>Se una seduta di beach è stata intensa, usa le regole del semaforo (tab Panoramica → Autoregolazione).</p>'
        },
        {
            title: '5. French Contrast: qualità, non cardio',
            short: 'Transizioni brevi tra gli esercizi, ma recupero completo tra i round.',
            body: '<p>Non è un circuito cardio. Le transizioni sono di 15-30 secondi, ma non devi correre tra gli esercizi. Il recupero lungo (3-4 min) tra i round è parte del metodo.</p><blockquote>Due round eccellenti valgono più di tre round mediocri.</blockquote>'
        },
        {
            title: '6. Forza + potenza insieme',
            short: 'Non si sceglie: si allena il mix, con progressione di forza chiara.',
            body: '<ul><li><strong>Forza</strong>: fondamentali lower sub-massimali ma seri, RIR 2-3.</li><li><strong>Potenza</strong>: carichi moderati a massima velocità nei salti e nel contrasto.</li><li><strong>Reattività</strong>: pogo, lateral bound, atterraggi controllati.</li></ul><p>Il 90% non si usa in questo ciclo. Sarà rivalutato in futuro, con base di forza più solida e minore carico sportivo.</p>'
        }
    ],

    paradigm: [
        ['Forza massimale',            'Alta ma non massimale',   'Prioritaria, progressione chiara'],
        ['Esplosività',                'Molto alta',              'Mantenuta'],
        ['Volume salti',               'Alto',                    'Ridotto, no ridondanza'],
        ['Metodo contrasto',           'Complessi bulgari',       'French Contrast 1×/sett'],
        ['Lavoro laterale/unilaterale','Presente',                'Enfatizzato'],
        ['Spalla',                     'Landmine + panca',        'Solo percorso fisioterapista'],
        ['Durata del blocco',          '6 settimane',             '8 + 4 settimane'],
        ['Transfer beach volley',      'Diretto',                 'Diretto + frenate e cambi direzione']
    ],

    schedule: {
        rule: 'Tre sedute non consecutive. Evita due giorni consecutivi di palestra e, per quanto possibile, tre giorni consecutivi ad alto volume di salti.',
        examples: [
            'Lunedì G1 · Mercoledì G2 · Venerdì G3',
            'Martedì G1 · Giovedì G2 · Sabato G3'
        ],
        note: 'Colloca il Giorno 1 quando sei più fresco, lascia idealmente ≥48h tra G1 e G3 e non fare il Giorno 3 nelle 24h precedenti a una partita o a un torneo prioritario.'
    },

    progression: [
        ['1-3',  'Costruzione',      '4×5 @ RPE 7-7,5',  '3×6 @ RPE 7',        '2 round',   'Impara la sequenza · test T0'],
        ['4',    'Scarico',          '3×4 @ RPE 6-7',    '2×5 @ RPE 6-7',      '2 round',   'Test T1'],
        ['5-7',  'Forza-potenza',    '4×4 @ RPE 7,5-8',  '4×5 @ RPE 7,5',      '3 round',   'Volume pieno'],
        ['8',    'Scarico + test',   '2×4 @ RPE 6-7',    '2×5 @ RPE 6-7',      '2 round',   'Test T2 · fine blocco base'],
        ['9-11', 'Estensione opz.',  '4×3 @ RPE 8',      '3×4-5 @ RPE 7,5-8',  '2-3 round', 'Mai 90%'],
        ['12',   'Scarico + test',   'Come sett. 8',     '—',                  '2 round',   'Test T3 finale']
    ],

    progressionRules: {
        when: [
            'hai completato tutte le ripetizioni',
            'il RPE è rimasto nel range',
            'la tecnica non è cambiata',
            'l\'ultima ripetizione non è diventata lenta',
            'non hai dolore articolare',
            'il giorno dopo non avverti fatica anomala che peggiora il beach'
        ],
        increments: [
            ['Fondamentali lower (squat, RDL, stacco)', '+2,5 - 5 kg'],
            ['Trazioni e tirate',                       'Doppia progressione, poi +carico minimo'],
            ['Salti',                                   'Più altezza/distanza, non più reps'],
            ['Jump Squat',                              '5% peso corporeo, max indicativo 10%']
        ]
    },

    sources: {
        intro: 'Le fonti guidano le scelte del blocco: vanno lette come base, non come ricetta rigida. La letteratura sul contrast/French Contrast è eterogenea e spesso su atleti più esperti — da qui la scelta di un dosaggio prudente.',
        items: [
            {
                ref: 'Thapa RK et al. (2024)',
                title: 'What do We Know about Complex-Contrast Training? A Systematic Scoping Review',
                desc: 'Panoramica sistematica sul complex-contrast training: protocolli molto eterogenei, con qualità tecnica e recupero come variabili chiave.',
                url: 'https://doi.org/10.1186/s40798-024-00771-z'
            },
            {
                ref: 'Zhao Z et al. (2025)',
                title: 'Effects of French Contrast Training on lower limb athletic performance (meta-analisi)',
                desc: 'Il French Contrast può migliorare forza e potenza degli arti inferiori in adulti sani, con dipendenza da carichi e recuperi.',
                url: 'https://doi.org/10.3389/fphys.2025.1672353'
            },
            {
                ref: 'Chen H et al. (2025)',
                title: 'An 8-week French Contrast Training program on lower limb strength and power',
                desc: 'Un blocco di 8 settimane di French Contrast produce miglioramenti di forza e potenza in atleti di alto livello.',
                url: 'https://doi.org/10.3389/fspor.2025.1686891'
            },
            {
                ref: 'Deng B et al. (2025)',
                title: 'Unilateral and bilateral complex-contrast training in female volleyball players',
                desc: 'Nel volley il lavoro complex-contrast, anche unilaterale, migliora forza degli arti inferiori e prestazione di salto.',
                url: 'https://doi.org/10.1371/journal.pone.0327237'
            }
        ]
    },

    autoreg: [
        {
            title: 'Semaforo verde — esegui la scheda completa',
            body: '<p><strong>Condizioni:</strong></p><ul><li>gambe fresche;</li><li>sonno normale;</li><li>nessun dolore a ginocchio, caviglia, Achille o spalla;</li><li>massimo 1-2 sedute di beach non particolarmente intense nella settimana.</li></ul><p><strong>Azione:</strong> esegui la scheda completa e, se le condizioni di progressione sono rispettate, aumenta i carichi.</p>'
        },
        {
            title: 'Semaforo giallo — riduci',
            body: '<p><strong>Condizioni possibili:</strong> 3 sedute di beach, partita lunga, polpacci o quadricipiti pesanti, sonno scarso, salto sotto la media.</p><p><strong>Azione:</strong></p><ol><li>togli un round dal French Contrast;</li><li>togli una serie dall\'esercizio unilaterale;</li><li>mantieni i fondamentali a RPE 6,5-7,5;</li><li>non aumentare i carichi quella settimana.</li></ol>'
        },
        {
            title: 'Semaforo rosso — proteggi',
            body: '<p><strong>Condizioni possibili:</strong> torneo, 4+ sedute di beach, dolore tendineo o articolare, calo netto del salto, fatica che altera la tecnica.</p><p><strong>Azione:</strong></p><ul><li>niente salti massimali in palestra;</li><li>niente French Contrast completo;</li><li>esegui solo il percorso fisioterapico, un fondamentale leggero 2-3×3-5 @ RPE 6 e una tirata;</li><li>oppure salta la parte lower body e recupera.</li></ul>'
        },
        {
            title: 'Come accorciare la seduta',
            body: '<p>Quando hai poco tempo, <strong>non tagliare il percorso del fisioterapista</strong>. Taglia in questo ordine:</p><ol><li>ultimo accessorio;</li><li>una serie della seconda tirata;</li><li>una serie dell\'esercizio unilaterale;</li><li>un round del French Contrast;</li><li>solo per ultimo, riduci il fondamentale principale.</li></ol><p><strong>Versione minima efficace</strong> dopo il fisioterapista: un blocco di salto o contrasto + un fondamentale lower + una tirata principale.</p>'
        },
        {
            title: 'Primer nella settimana di torneo',
            body: '<p>Da usare <strong>48-72 ore prima</strong> del torneo, non il giorno precedente.</p><ol><li>Percorso fisioterapista.</li><li>Warm-up lower body.</li><li>Due round: Trap Bar/Sumo 2 reps @ RPE 6-7 · Box Jump 2 reps · Jump Squat a corpo libero 2 reps · Pogo 6 contatti · recupero 3-4 min.</li><li>Lat machine presa neutra 2×6 @ RIR 3.</li></ol><p>Nelle 24h precedenti al torneo: niente lower body pesante o pliometria massimale.</p>'
        }
    ],

    closing: {
        eyebrow: 'Forte senza diventare lento.',
        note: 'Esplosivo senza salti inutili · Reattivo senza cardio · Fresco per la sabbia.'
    },

    days: {
        // ============================================================
        //  GIORNO 1 — Forza verticale e tirata verticale
        // ============================================================
        day1: {
            title: 'Forza verticale & tirata verticale',
            intro: 'Costruire forza nelle gambe, mantenere il salto verticale e sviluppare i dorsali senza aggiungere spinte. Ricorda: la seduta inizia sempre dal percorso del fisioterapista.',
            exercises: [
                // --- Percorso fisioterapista + riscaldamento (R) ---
                {
                    id: 'f3_d1_physio', isWarmup: true, name: 'Percorso fisioterapista (obbligatorio)', sets: 1, reps: 'blocco completo', rest: 0,
                    videoLink: 'https://www.youtube.com/results?search_query=riscaldamento+spalla+fisioterapia+cuffia',
                    tips: [
                        { title: 'Blocco da eseguire a inizio di OGNI seduta', html: '<p>Nello stesso ordine indicato nella scheda ricevuta dal fisioterapista.</p><table><thead><tr><th>Esercizio</th><th>Serie × reps</th><th>Nota</th></tr></thead><tbody><tr><td>Mobilità toracica</td><td>2×6</td><td>Come insegnato</td></tr><tr><td>Shoulder press 16 kg</td><td>2×8</td><td>Un braccio alla volta</td></tr><tr><td>Piegamenti a terra</td><td>2×8</td><td>Tecnica prescritta</td></tr><tr><td>Spinte orizzontali su panca 20 kg</td><td>2×8</td><td>Carico della prescrizione</td></tr><tr><td>Peck deck ad aprire</td><td>2×12</td><td>Controllato</td></tr><tr><td>Croci alla peck deck</td><td>2×8</td><td>Controllato</td></tr></tbody></table>' },
                        { title: 'Prescrizione del fisioterapista', html: '<blockquote>Frequenza 5 volte a settimana, incremento massimo pari al +50% dei pesi indicati. Il "+50%" è un limite, non un obiettivo automatico.</blockquote><p>Le tre sedute di palestra coprono 3 delle 5 esposizioni. Se la prescrizione a 5 volte a settimana è attiva, mantieni le altre due mini-sedute in giorni separati, senza aggiungere altro lavoro di palestra.</p>' }
                    ]
                },
                { id: 'f3_d1_w1', isWarmup: true, name: 'Bike o camminata inclinata', sets: 1, reps: '2-3 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=warm+up+bike+camminata+inclinata',
                  tips: [{ title: 'Obiettivo', html: '<p>Alzare la temperatura corporea. Attivazione leggera, niente forzature.</p>' }] },
                { id: 'f3_d1_w2', isWarmup: true, name: 'Mobilità caviglia al muro', sets: 1, reps: '8 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=ankle+mobility+wall+test+esercizio',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Ginocchio verso il muro senza staccare il tallone.</li><li>Cerca progressione di range, non forza.</li></ul>' }] },
                { id: 'f3_d1_w3', isWarmup: true, name: '90/90 dinamico per le anche', sets: 1, reps: '6 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=90+90+hip+mobility+drill',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Passa da un lato all\'altro controllando la rotazione d\'anca.</li><li>Movimento fluido, tronco alto.</li></ul>' }] },
                { id: 'f3_d1_w4', isWarmup: true, name: 'Affondo indietro a corpo libero', sets: 1, reps: '6 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=reverse+lunge+bodyweight+warmup',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Passo indietro, ginocchio allineato al piede.</li><li>Tronco verticale, bacino stabile.</li></ul>' }] },
                { id: 'f3_d1_w5', isWarmup: true, name: 'Snap-down con arresto stabile', sets: 2, reps: '3', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=snap+down+drill+athletic',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Da eretto, "cadi" rapido in posizione atletica e ferma l\'atterraggio.</li><li>Prepara il sistema nervoso agli atterraggi.</li></ul>' }] },
                { id: 'f3_d1_w6', isWarmup: true, name: 'Serie di avvicinamento al primo carico', sets: 1, reps: '2-4 serie', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=ramp+up+sets+squat+warmup',
                  tips: [{ title: 'Obiettivo', html: '<p>2-4 serie progressive del primo esercizio con il carico della giornata, per arrivare pronto al lavoro principale.</p>' }] },

                // --- Esercizi principali ---
                {
                    id: 'f3_d1_cmj', name: 'Countermovement Jump', sets: 3, reps: '3', rest: 120,
                    intensity: 'Massima qualità',
                    videoLink: 'https://www.youtube.com/results?search_query=countermovement+jump+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Parti eretto.</li><li>Contromovimento rapido ma controllato.</li><li>Salta con intento massimo.</li><li>Atterra morbido e stabile.</li><li>Reset completo tra le ripetizioni: non è una serie continua.</li></ul>' },
                        { title: 'Stop della serie', html: '<p>Fermati se il salto diventa visibilmente più basso, l\'atterraggio è rumoroso o perdi simmetria.</p>' }
                    ]
                },
                {
                    id: 'f3_d1_squat', name: 'Squat a spalla neutra', sets: 4, reps: '5', rest: 165,
                    intensity: 'RIR 2-3 · vedi progressione',
                    videoLink: 'https://www.youtube.com/results?search_query=belt+squat+hack+squat+esecuzione',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Piede intero stabile.</li><li>Discesa controllata.</li><li>Tronco solido.</li><li>Risalita con intento esplosivo.</li><li>Nessuna ripetizione lenta o "grindata".</li></ul>' },
                        { title: 'Progressione', html: '<p>Serie e reps seguono la tabella 12 settimane (tab Panoramica): dal 4×5 @ RPE 7-7,5 iniziale fino a 4×3 @ RPE 8 nell\'estensione. Il back squat tradizionale non è necessario in questa fase e può essere evitato se il bilanciere infastidisce la spalla.</p>' }
                    ],
                    variants: [
                        { title: '1. Belt squat (preferito)', html: '<p>Prima scelta: carica le gambe senza appoggiare il bilanciere sulla spalla.</p>' },
                        { title: '2. Hack squat', html: '<p>Ottima alternativa guidata, spalla scarica.</p>' },
                        { title: '3. Safety-bar squat', html: '<p>Buon compromesso se disponibile, presa comoda per la spalla.</p>' },
                        { title: '4. Leg press', html: '<p>Solo se le prime tre non sono disponibili.</p>' }
                    ]
                },
                {
                    id: 'f3_d1_bulgaro', name: 'Affondo bulgaro con manubri', sets: 2, reps: '6 per lato', rest: 105,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=bulgarian+split+squat+manubri+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Manubri ai lati.</li><li>Ginocchio in linea con il piede.</li><li>Bacino stabile.</li><li>Discesa controllata e risalita decisa.</li><li>Non cercare cedimento o equilibrio precario.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d1_trazioni', name: 'Trazioni presa neutra', sets: 3, reps: '4-6', rest: 120,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=trazioni+presa+neutra+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Niente kipping.</li><li>Petto "alto" senza inarcare troppo.</li><li>Gomiti verso il basso.</li><li>Discesa controllata.</li><li>Nessuna presa forzata che irriti la spalla.</li></ul>' },
                        { title: 'Progressione', html: '<p>Usa assistenza elastica o macchina se serve. Aggiungi zavorra solo quando completi tutte le serie da 6 con tecnica pulita e ~2 reps in riserva.</p>' }
                    ]
                },
                {
                    id: 'f3_d1_rematore', name: 'Rematore chest-supported', sets: 2, reps: '8', rest: 90,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=chest+supported+row+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Tira i gomiti verso le anche.</li><li>Pausa breve in chiusura.</li><li>Non sollevare il petto dall\'appoggio.</li><li>Discesa controllata.</li></ul>' },
                        { title: 'Perché lo teniamo', html: '<p>L\'appoggio del torace riduce la fatica lombare e permette di concentrarsi sul dorso.</p>' }
                    ]
                },
                {
                    id: 'f3_d1_calf', name: 'Calf raise da seduto (soleo)', sets: 2, reps: '10-12', rest: 75,
                    intensity: 'Controllato',
                    videoLink: 'https://www.youtube.com/results?search_query=seated+calf+raise+soleus+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Ginocchio piegato per enfatizzare il soleo.</li><li>Range completo, pausa in alto.</li><li>Movimento controllato, niente rimbalzi.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d1_core', name: 'Dead bug 90/90 con heel tap', sets: 3, reps: '6-8 per lato', rest: 60,
                    intensity: 'Anti-estensione · controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=dead+bug+heel+tap+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Supino con anche e ginocchia a circa 90°.</li><li>Braccia rilassate lungo i fianchi, così non carichi la spalla.</li><li>Espira, abbassa le costole e porta il bacino in lieve retroversione.</li><li>Tocca lentamente il pavimento con un tallone senza cambiare la posizione della schiena.</li><li>Torna al centro e alterna il lato (~2-3 s in discesa).</li></ul>' },
                        { title: 'Quando finisce la serie', html: '<p>La ripetizione termina quando senti la zona lombare inarcarsi: non cercare un\'escursione maggiore perdendo il controllo. Svolgilo a fine seduta, così non preaffatica il tronco.</p>' }
                    ],
                    variants: [
                        { title: 'Heel tap con una sola gamba', html: '<p>Prima alternativa: riduce il carico mantenendo il controllo lombo-pelvico.</p>' },
                        { title: 'McGill curl-up', html: '<p>Seconda alternativa se il dead bug non è disponibile o comodo.</p>' }
                    ]
                }
            ]
        },

        // ============================================================
        //  GIORNO 2 — Catena posteriore, lateralità e dorso
        // ============================================================
        day2: {
            title: 'Catena posteriore, lateralità & dorso',
            intro: 'Femorali e glutei, controllo laterale, forza unilaterale e tirate orizzontali. Come sempre: si parte dal percorso del fisioterapista.',
            exercises: [
                // --- Percorso fisioterapista + riscaldamento (R) ---
                {
                    id: 'f3_d2_physio', isWarmup: true, name: 'Percorso fisioterapista (obbligatorio)', sets: 1, reps: 'blocco completo', rest: 0,
                    videoLink: 'https://www.youtube.com/results?search_query=riscaldamento+spalla+fisioterapia+cuffia',
                    tips: [
                        { title: 'Blocco da eseguire a inizio di OGNI seduta', html: '<p>Nello stesso ordine indicato nella scheda ricevuta dal fisioterapista.</p><table><thead><tr><th>Esercizio</th><th>Serie × reps</th><th>Nota</th></tr></thead><tbody><tr><td>Mobilità toracica</td><td>2×6</td><td>Come insegnato</td></tr><tr><td>Shoulder press 16 kg</td><td>2×8</td><td>Un braccio alla volta</td></tr><tr><td>Piegamenti a terra</td><td>2×8</td><td>Tecnica prescritta</td></tr><tr><td>Spinte orizzontali su panca 20 kg</td><td>2×8</td><td>Carico della prescrizione</td></tr><tr><td>Peck deck ad aprire</td><td>2×12</td><td>Controllato</td></tr><tr><td>Croci alla peck deck</td><td>2×8</td><td>Controllato</td></tr></tbody></table>' },
                        { title: 'Prescrizione del fisioterapista', html: '<blockquote>Frequenza 5 volte a settimana, incremento massimo pari al +50% dei pesi indicati. Il "+50%" è un limite, non un obiettivo automatico.</blockquote>' }
                    ]
                },
                { id: 'f3_d2_w1', isWarmup: true, name: 'Bike o camminata inclinata', sets: 1, reps: '2-3 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=warm+up+bike+camminata+inclinata',
                  tips: [{ title: 'Obiettivo', html: '<p>Alzare la temperatura corporea. Attivazione leggera.</p>' }] },
                { id: 'f3_d2_w2', isWarmup: true, name: 'Mobilità caviglia al muro', sets: 1, reps: '8 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=ankle+mobility+wall+test+esercizio',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Ginocchio al muro senza staccare il tallone.</li></ul>' }] },
                { id: 'f3_d2_w3', isWarmup: true, name: '90/90 dinamico per le anche', sets: 1, reps: '6 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=90+90+hip+mobility+drill',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Passa da un lato all\'altro controllando la rotazione d\'anca.</li></ul>' }] },
                { id: 'f3_d2_w4', isWarmup: true, name: 'Affondo indietro a corpo libero', sets: 1, reps: '6 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=reverse+lunge+bodyweight+warmup',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Passo indietro, ginocchio allineato al piede.</li></ul>' }] },
                { id: 'f3_d2_w5', isWarmup: true, name: 'Snap-down con arresto stabile', sets: 2, reps: '3', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=snap+down+drill+athletic',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>"Cadi" rapido in posizione atletica e ferma l\'atterraggio.</li></ul>' }] },

                // --- Esercizi principali ---
                {
                    id: 'f3_d2_bound', name: 'Lateral Bound con arresto', sets: 2, reps: '3 per lato', rest: 90,
                    intensity: 'Qualità e controllo',
                    videoLink: 'https://www.youtube.com/results?search_query=lateral+bound+stick+landing+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Spingi lateralmente.</li><li>Atterra su una gamba.</li><li>Mantieni l\'arrivo per circa 1 secondo.</li><li>Ginocchio in linea con il piede, bacino stabile.</li><li>La distanza è secondaria rispetto al controllo.</li></ul>' },
                        { title: 'Nota', html: '<p>Non è un esercizio a rimbalzo continuo. In questa fase alleni produzione di forza laterale e capacità di frenare.</p>' }
                    ]
                },
                {
                    id: 'f3_d2_rdl', name: 'Romanian Deadlift', sets: 3, reps: '6', rest: 150,
                    intensity: 'RIR 2-3 · vedi progressione',
                    videoLink: 'https://www.youtube.com/results?search_query=romanian+deadlift+esecuzione+corretta',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Ginocchia leggermente flesse.</li><li>Anca indietro, schiena neutra.</li><li>Bilanciere o manubri vicini alle gambe.</li><li>Fermati quando perdi la posizione, non quando "devi" toccare il pavimento.</li><li>Risali stringendo i glutei senza iperestendere la schiena.</li></ul>' },
                        { title: 'Progressione', html: '<p>Serie e reps seguono la tabella 12 settimane (tab Panoramica): da 3×6 @ RPE 7 fino a 4×5 @ RPE 7,5 nel blocco forza-potenza.</p>' }
                    ]
                },
                {
                    id: 'f3_d2_stepup', name: 'Step-up alto oppure affondo indietro', sets: 2, reps: '6 per lato', rest: 90,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=high+step+up+tutorial',
                    tips: [
                        { title: 'Scegli una variante', html: '<p>Scegli una sola variante e mantienila per almeno 4 settimane.</p>' }
                    ],
                    variants: [
                        { title: 'Step-up alto', html: '<p>Altezza che permetta di salire senza spinta evidente della gamba posteriore.</p>' },
                        { title: 'Affondo indietro', html: '<p>Passo sufficiente a mantenere piede e ginocchio stabili.</p>' }
                    ]
                },
                {
                    id: 'f3_d2_tbar', name: 'T-Bar Row chest-supported', sets: 3, reps: '6-8', rest: 105,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=chest+supported+t+bar+row+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Torace sempre appoggiato.</li><li>Presa neutra o semi-pronata tollerata.</li><li>Evita di "strappare" il carico.</li><li>Pausa breve in chiusura.</li><li>Mantieni ~2 reps in riserva.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d2_pulley', name: 'Pulley presa neutra', sets: 2, reps: '8-10', rest: 90,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=seated+cable+row+neutral+grip+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Busto fermo.</li><li>Spalle lontane dalle orecchie.</li><li>Gomiti verso le anche.</li><li>Ritorno controllato, niente dondolio.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d2_legcurl', name: 'Leg curl', sets: 2, reps: '8-10', rest: 75,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=leg+curl+tutorial+esecuzione',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Movimento controllato in entrambe le fasi.</li><li>Pausa breve in massima flessione.</li><li>Non staccare il bacino dall\'appoggio.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d2_adductor', name: 'Adductor machine o adduzione al cavo', sets: 2, reps: '10-12 per lato', rest: 75,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=adductor+machine+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Movimento controllato, bacino fermo.</li><li>Range tollerato senza dolore inguinale.</li><li>Nessuno slancio, ~2 reps in riserva.</li></ul>' },
                        { title: 'Perché questa scelta', html: '<p>Allena gli adduttori senza obbligarti a sostenere il peso del corpo sulla spalla, come accadrebbe nel Copenhagen plank.</p>' }
                    ]
                },
                {
                    id: 'f3_d2_core', name: 'Reverse crunch a terra o su panca', sets: 3, reps: '10-12', rest: 60,
                    intensity: 'RIR tecnico 2 · nessuno slancio',
                    videoLink: 'https://www.youtube.com/results?search_query=reverse+crunch+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Supino con anche e ginocchia piegate.</li><li>Espira e avvicina il bacino alle costole, sollevando appena il sacro.</li><li>"Arrotola" il bacino, non lanciare le ginocchia verso il petto.</li><li>Discesa lenta, una vertebra alla volta.</li><li>Mani lungo i fianchi, oppure afferra il bordo della panca solo se la spalla lo tollera.</li></ul>' },
                        { title: 'Nota', html: '<p>Se senti soprattutto flessori dell\'anca o zona lombare, riduci il range e rallenta l\'eccentrica. Svolgilo a fine seduta.</p>' }
                    ],
                    variants: [
                        { title: 'Crunch machine leggero', html: '<p>Prima alternativa con carico guidato e leggero.</p>' },
                        { title: 'Heel slide con retroversione del bacino', html: '<p>Seconda alternativa a bassissimo impatto, focus sul controllo lombo-pelvico.</p>' }
                    ]
                }
            ]
        },

        // ============================================================
        //  GIORNO 3 — French Contrast adattato e tirata complementare
        // ============================================================
        day3: {
            title: 'French Contrast adattato & tirata complementare',
            intro: 'Forza, salto, componente balistica e reattività in un unico blocco, con volume e intensità adeguati alla tua esperienza e alla stagione. Si parte dal percorso del fisioterapista.',
            exercises: [
                // --- Percorso fisioterapista + riscaldamento (R) ---
                {
                    id: 'f3_d3_physio', isWarmup: true, name: 'Percorso fisioterapista (obbligatorio)', sets: 1, reps: 'blocco completo', rest: 0,
                    videoLink: 'https://www.youtube.com/results?search_query=riscaldamento+spalla+fisioterapia+cuffia',
                    tips: [
                        { title: 'Blocco da eseguire a inizio di OGNI seduta', html: '<p>Nello stesso ordine indicato nella scheda ricevuta dal fisioterapista.</p><table><thead><tr><th>Esercizio</th><th>Serie × reps</th><th>Nota</th></tr></thead><tbody><tr><td>Mobilità toracica</td><td>2×6</td><td>Come insegnato</td></tr><tr><td>Shoulder press 16 kg</td><td>2×8</td><td>Un braccio alla volta</td></tr><tr><td>Piegamenti a terra</td><td>2×8</td><td>Tecnica prescritta</td></tr><tr><td>Spinte orizzontali su panca 20 kg</td><td>2×8</td><td>Carico della prescrizione</td></tr><tr><td>Peck deck ad aprire</td><td>2×12</td><td>Controllato</td></tr><tr><td>Croci alla peck deck</td><td>2×8</td><td>Controllato</td></tr></tbody></table>' },
                        { title: 'Prescrizione del fisioterapista', html: '<blockquote>Frequenza 5 volte a settimana, incremento massimo pari al +50% dei pesi indicati. Il "+50%" è un limite, non un obiettivo automatico.</blockquote>' }
                    ]
                },
                { id: 'f3_d3_w1', isWarmup: true, name: 'Bike o camminata inclinata', sets: 1, reps: '2-3 min', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=warm+up+bike+camminata+inclinata',
                  tips: [{ title: 'Obiettivo', html: '<p>Alzare la temperatura corporea. Attivazione leggera.</p>' }] },
                { id: 'f3_d3_w2', isWarmup: true, name: 'Mobilità caviglia al muro', sets: 1, reps: '8 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=ankle+mobility+wall+test+esercizio',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Ginocchio al muro senza staccare il tallone.</li></ul>' }] },
                { id: 'f3_d3_w3', isWarmup: true, name: '90/90 dinamico + affondo indietro', sets: 1, reps: '6 per lato', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=90+90+hip+mobility+drill',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>Mobilità d\'anca seguita da affondo indietro controllato.</li></ul>' }] },
                { id: 'f3_d3_w4', isWarmup: true, name: 'Snap-down con arresto stabile', sets: 2, reps: '3', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=snap+down+drill+athletic',
                  tips: [{ title: 'Esecuzione', html: '<ul><li>"Cadi" rapido in posizione atletica e ferma l\'atterraggio.</li></ul>' }] },
                { id: 'f3_d3_w5', isWarmup: true, name: 'Salti di priming (pre-complesso)', sets: 1, reps: '2 submax + 2 quasi max', rest: 0,
                  videoLink: 'https://www.youtube.com/results?search_query=submaximal+jump+priming+warmup',
                  tips: [{ title: 'Obiettivo', html: '<p>Prima del French Contrast, 2 salti submassimali e 2 salti quasi massimali per innescare il sistema nervoso.</p>' }] },

                // --- Esercizi principali ---
                {
                    id: 'f3_d3_french', name: 'French Contrast lower body', sets: 3, reps: '2-3 round', rest: 210,
                    intensity: 'Vedi progressione · qualità',
                    videoLink: 'https://www.youtube.com/results?search_query=french+contrast+training+lower+body',
                    tips: [
                        { title: 'Struttura di un round', html: '<ol><li><strong>Trap Bar Deadlift o Stacco Sumo</strong> — 3 reps.</li><li>Transizione 15-30 s.</li><li><strong>Box Jump</strong> — 3 reps.</li><li>Transizione 15-30 s.</li><li><strong>Jump Squat</strong> — 3 reps.</li><li>Transizione 15-30 s.</li><li><strong>Pogo Jump</strong> — 6-8 contatti.</li><li>Recupero completo 3-4 min prima del round successivo.</li></ol><p>Non è un circuito cardio: transizioni brevi, ma non correre tra gli esercizi. Il recupero lungo tra i round è parte del metodo.</p>' },
                        { title: 'A1 · Stacco (3 reps)', html: '<p>Prima scelta Trap Bar, seconda Stacco Sumo se la tecnica è stabile. Scegli una variante e mantienila per le 8 settimane. Crea tensione prima di staccare, spingi il pavimento, dorsali attivi, chiudi con i glutei. Ogni rep pulita e veloce. Non testare il massimale: il riferimento è l\'RPE.</p>' },
                        { title: 'A2 · Box Jump (3 reps)', html: '<p>Box di altezza moderata. Cerca altezza del salto, non una raccolta estrema delle ginocchia. Atterra con la stessa profondità dello stacco, scendi camminando dal box, reset tra le reps.</p>' },
                        { title: 'A3 · Jump Squat (3 reps)', html: '<p>Sett. 1-4 a corpo libero; sett. 5-12 manubri molto leggeri ai lati solo se la velocità resta alta. Carico iniziale ~5% del peso corporeo, limite indicativo 10%. Quarto di squat, nessuna pausa in basso, salta più in alto possibile. Se il carico abbassa il salto, è troppo.</p>' },
                        { title: 'A4 · Pogo Jump (6-8 contatti)', html: '<p>Rimbalzi bassi e rapidi, ginocchia appena flesse, caviglia reattiva, contatto al suolo breve, tronco alto. Fermati se perdi ritmo o compare rigidità dolorosa a polpaccio/Achille.</p>' },
                        { title: 'Regola di arresto del complesso', html: '<p>Interrompi il round o termina il complesso quando lo stacco rallenta nettamente, il box jump è più basso, il jump squat diventa uno squat lento, i pogo diventano pesanti, l\'atterraggio perde stabilità o senti che stai "sopravvivendo" alla sequenza.</p><blockquote>Due round eccellenti valgono più di tre round mediocri.</blockquote>' }
                    ],
                    variants: [
                        { title: 'A1 · Sostituzioni stacco', html: '<p>Trap Bar Deadlift → Stacco Sumo → Stacco da blocchi.</p>' },
                        { title: 'A2 · Sostituzioni box jump', html: '<p>Box Jump → Countermovement Jump → Squat Jump.</p>' },
                        { title: 'A3 · Sostituzioni jump squat', html: '<p>Jump Squat con manubri → Jump Squat a corpo libero → Trap Bar Jump molto leggero, solo con supervisione.</p>' },
                        { title: 'Numero di round', html: '<p>2 round in costruzione e scarico, 3 round nel blocco forza-potenza. Nell\'estensione 2-3 round in base al beach.</p>' }
                    ]
                },
                {
                    id: 'f3_d3_lat', name: 'Lat machine presa neutra', sets: 3, reps: '6-8', rest: 105,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=lat+machine+neutral+grip+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Presa neutra, spalla comoda.</li><li>Tira i gomiti verso il basso, petto alto.</li><li>Ritorno controllato, niente slancio.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d3_rowcable', name: 'Rematore al cavo a 1 braccio', sets: 2, reps: '8 per lato', rest: 90,
                    intensity: 'RIR 2',
                    videoLink: 'https://www.youtube.com/results?search_query=single+arm+cable+row+tutorial',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Busto fermo, tira il gomito verso l\'anca.</li><li>Pausa breve in chiusura.</li><li>Controlla il ritorno, niente rotazione del tronco.</li></ul>' }
                    ]
                },
                {
                    id: 'f3_d3_core', name: 'Pallof hold al petto', sets: 3, reps: '20-30 s per lato', rest: 60,
                    intensity: 'Anti-rotazione · tenuta stabile',
                    videoLink: 'https://www.youtube.com/results?search_query=pallof+hold+tutorial+core',
                    tips: [
                        { title: 'Esecuzione', html: '<ul><li>Posizionati lateralmente rispetto al cavo o all\'elastico.</li><li>Porta la maniglia davanti allo sterno, gomiti vicini al corpo.</li><li>È una tenuta al petto (non una spinta), scelta per limitare il lavoro dinamico della spalla.</li><li>Piedi stabili, ginocchia morbide, glutei attivi, costole basse.</li><li>Resisti alla rotazione senza inclinarti verso il cavo, respira lentamente.</li></ul>' },
                        { title: 'Regola spalla', html: '<p>Se compare fastidio alla spalla, riduci la tensione oppure sostituisci con dead bug 90/90 3×8 per lato e segnalalo al fisioterapista. Svolgilo a fine seduta.</p>' }
                    ],
                    variants: [
                        { title: 'Dead bug 90/90', html: '<p>Prima alternativa se il Pallof dà fastidio alla spalla.</p>' },
                        { title: 'Suitcase carry', html: '<p>Seconda alternativa, solo se la spalla lo tollera.</p>' }
                    ]
                }
            ]
        }
    }
};
