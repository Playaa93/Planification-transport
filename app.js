// TransportPro Application - Main JavaScript

class TransportApp {
    constructor() {
        this.data = {
            conducteurs: [
                {
                    "id": "1",
                    "nom": "Niakaté Dioungou",
                    "presence": "Oui",
                    "types": "Sec",
                    "site": "PMS",
                    "commentaire": "Conducteur principal",
                    "actif": true
                },
                {
                    "id": "2",
                    "nom": "Nabil Oubba",
                    "presence": "Non",
                    "types": "Frais",
                    "site": "PMS", 
                    "commentaire": "Exploitant",
                    "actif": true
                },
                {
                    "id": "3",
                    "nom": "Simon Manuana K",
                    "presence": "Oui",
                    "types": "Surgelé",
                    "site": "PMS",
                    "commentaire": "",
                    "actif": true
                },
                {
                    "id": "4",
                    "nom": "Walid Ghndour",
                    "presence": "Oui",
                    "types": "Lavage/Gazoil",
                    "site": "PMS",
                    "commentaire": "SS Solde",
                    "actif": true
                },
                {
                    "id": "5",
                    "nom": "Amadou Camara",
                    "presence": "Oui",
                    "types": "Dispo",
                    "site": "PMS",
                    "commentaire": "C.P",
                    "actif": true
                }
            ],
            vehicules: [
                {
                    "id": "1",
                    "immatriculation": "GX088HP",
                    "energie": "Gazoil",
                    "marque": "Renault",
                    "type_vehicule": "Tracteur",
                    "site": "PMS",
                    "hayon": false,
                    "controle_technique": "2025-12-31",
                    "commentaire": "",
                    "actif": true
                },
                {
                    "id": "2",
                    "immatriculation": "GX870HN", 
                    "energie": "Gazoil",
                    "marque": "Renault",
                    "type_vehicule": "Tracteur",
                    "site": "PMS",
                    "hayon": false,
                    "controle_technique": "2025-12-31",
                    "commentaire": "",
                    "actif": true
                },
                {
                    "id": "3",
                    "immatriculation": "GG627LD",
                    "energie": "Gazoil", 
                    "marque": "VOLVO",
                    "type_vehicule": "Tracteur",
                    "site": "PMS",
                    "hayon": false,
                    "controle_technique": "2025-12-31",
                    "commentaire": "",
                    "actif": true
                },
                {
                    "id": "4",
                    "immatriculation": "GP458BD",
                    "energie": "Gazoil",
                    "marque": "Renault", 
                    "type_vehicule": "Porteur",
                    "site": "PMS",
                    "hayon": true,
                    "controle_technique": "2025-12-31",
                    "commentaire": "",
                    "actif": true
                }
            ],
            contrats: [
                {
                    "id": "1",
                    "numero": "537",
                    "nom": "Jour(504)",
                    "type_transport": "Surgelé",
                    "description": "Transport surgelé journée",
                    "actif": true
                },
                {
                    "id": "2",
                    "numero": "545",
                    "nom": "Semi jour(521)",
                    "type_transport": "Sec", 
                    "description": "Transport sec semi-journée",
                    "actif": true
                },
                {
                    "id": "3",
                    "numero": "538",
                    "nom": "Porteur NUIT(531)",
                    "type_transport": "Frais",
                    "description": "Transport frais nuit avec porteur",
                    "actif": true
                },
                {
                    "id": "4",
                    "numero": "639N",
                    "nom": "Nuit 539 (632)",
                    "type_transport": "Frais",
                    "description": "Transport frais de nuit",
                    "actif": true
                }
            ],
            missions: [
                {
                    "id": "1",
                    "date_mission": "2025-09-03",
                    "contrat_id": "1",
                    "conducteur_id": "1",
                    "vehicule_id": "1",
                    "heure_depart": "05:00",
                    "heure_retour_prevue": "17:00",
                    "heure_retour_reelle": "16:45",
                    "km_depart": 150000,
                    "km_fin": 150200,
                    "km_total": 200,
                    "km_client": 180,
                    "type_transport": "Surgelé",
                    "observations": "Livraison CRISTALINE - Cesson / Emerainville / Croissy B. / Montevrain / St Thibault",
                    "pda_confirme": true,
                    "statut": "termine"
                },
                {
                    "id": "2",
                    "date_mission": "2025-09-03", 
                    "contrat_id": "2",
                    "conducteur_id": "3",
                    "vehicule_id": "3",
                    "heure_depart": "10:00",
                    "heure_retour_prevue": "16:00",
                    "heure_retour_reelle": null,
                    "km_depart": 125000,
                    "km_fin": null,
                    "km_total": null,
                    "km_client": 140,
                    "type_transport": "Sec",
                    "observations": "Viry 6329 / Juvisy 6757",
                    "pda_confirme": true,
                    "statut": "en_cours"
                },
                {
                    "id": "3",
                    "date_mission": "2025-09-04",
                    "contrat_id": "3",
                    "conducteur_id": "4",
                    "vehicule_id": "4",
                    "heure_depart": "22:00",
                    "heure_retour_prevue": "06:00",
                    "heure_retour_reelle": null,
                    "km_depart": null,
                    "km_fin": null,
                    "km_total": null,
                    "km_client": 200,
                    "type_transport": "Frais",
                    "observations": "Transport frais de nuit",
                    "pda_confirme": false,
                    "statut": "planifie"
                }
            ],
            notifications: [
                {
                    "id": "1",
                    "mission_id": "1",
                    "conducteur_id": "1",
                    "titre": "Mission assignée",
                    "message": "Votre mission du 03/09/2025 à 05:00 vous a été assignée",
                    "type_notification": "info",
                    "lue": false,
                    "envoye_push": true,
                    "date_creation": new Date().toISOString()
                }
            ]
        };
        
        this.currentPage = 'dashboard';
        this.currentEditingMission = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showPage('dashboard');
        // Set dynamic default dates
        const today = this.getTodayStr();
        const planningInput = document.getElementById('planning-date');
        if (planningInput) planningInput.value = today;
        this.loadDashboardData();
        
        // Initialize icons after a short delay to ensure DOM is ready
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    }

    getTodayStr() {
        const d = new Date();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${d.getFullYear()}-${m}-${day}`;
    }

    // --- Supabase integration ---
    getSupabaseClient() {
        if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY || typeof window.supabase === 'undefined') {
            return null;
        }
        if (!window.supabaseClient) {
            window.supabaseClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
        }
        return window.supabaseClient;
    }

    async initSupabase() {
        const client = this.getSupabaseClient();
        if (!client) {
            this.showToast('Supabase non configure', 'warning');
            return;
        }
        // Hook auth state and update UI
        try {
            if (!window._supabaseAuthHooked) {
                client.auth.onAuthStateChange(async (event, session) => {
                    console.log('[AUTH] state', event, !!session);
                    if (event === 'PASSWORD_RECOVERY') {
                        this.openResetModal();
                    }
                    await this.updateAuthUI();
                    await this.initSupabase();
                });
                window._supabaseAuthHooked = true;
            }
            await this.updateAuthUI();
        } catch (e) {}
        try {
            const { data: { session } } = await client.auth.getSession();
            if (!session) { this.showToast('Connectez-vous pour charger les donnees', 'info'); return; }
            const [drivers, vehicles, contracts, missions] = await Promise.all([
                client.from('conducteurs').select('*').order('nom', { ascending: true }),
                client.from('vehicules').select('*').order('immatriculation', { ascending: true }),
                client.from('contrats').select('*').order('numero', { ascending: true }),
                client.from('missions').select('*').order('date_mission', { ascending: true })
            ]);

            const anyError = [drivers.error, vehicles.error, contracts.error, missions.error].find(Boolean);
            if (anyError) {
                console.warn('Supabase fetch error(s):', { drivers, vehicles, contracts, missions });
                this.showToast('Lecture Supabase refusee (RLS/Auth)', 'warning');
                return; // keep local sample data as fallback
            }

            this.data.conducteurs = drivers.data || [];
            this.data.vehicules = vehicles.data || [];
            this.data.contrats = contracts.data || [];
            this.data.missions = missions.data || [];

            // Normalize IDs to strings for UI comparisons
            ['conducteurs', 'vehicules', 'contrats', 'missions'].forEach(key => {
                this.data[key] = (this.data[key] || []).map(r => ({ ...r, id: String(r.id) }));
            });

            // Refresh current view with remote data
            switch (this.currentPage) {
                case 'dashboard':
                    this.loadDashboardData();
                    break;
                case 'missions':
                    this.loadMissionsPage();
                    break;
                case 'planning':
                    this.loadPlanningPage();
                    break;
                case 'gestion':
                    this.loadGestionPage();
                    break;
            }
            this.showToast('Donnees chargees depuis Supabase', 'success');
        } catch (e) {
            console.error('Init Supabase error', e);
            this.showToast('Erreur chargement Supabase', 'error');
        }
    }

    async updateAuthUI() {
        const client = this.getSupabaseClient();
        if (!client) return;
        const { data: { session } } = await client.auth.getSession();
        const loginBtn = document.getElementById('auth-login-btn');
        const logoutBtn = document.getElementById('auth-logout-btn');
        const userLabel = document.getElementById('auth-user-label');
        if (session && session.user) {
            loginBtn?.classList.add('hidden');
            logoutBtn?.classList.remove('hidden');
            if (userLabel) userLabel.textContent = session.user.email || 'Utilisateur';
        } else {
            loginBtn?.classList.remove('hidden');
            logoutBtn?.classList.add('hidden');
            if (userLabel) userLabel.textContent = 'Invite';
        }
        setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 0);
    }

    async signIn() {
        const client = this.getSupabaseClient();
        if (!client) return this.showToast('Supabase non configure', 'error');
        const emailEl = document.getElementById('auth-email');
        const passEl = document.getElementById('auth-password');
        const email = emailEl?.value?.trim();
        const password = passEl?.value;
        console.log('[AUTH] signIn attempt', { email });
        if (!email || !password) {
            this.showToast('Email et mot de passe requis', 'warning');
            return;
        }
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        console.log('[AUTH] signIn response', { error, session: data?.session ? { user: data.session.user?.id } : null });
        if (error) {
            this.showToast(error.message || 'Identifiants invalides', 'error');
            return;
        }
        this.showToast('Connecte', 'success');
        document.getElementById('auth-modal')?.classList.add('hidden');
        await this.updateAuthUI();
        await this.initSupabase();
    }

    async signOut() {
        const client = this.getSupabaseClient();
        if (!client) return;
        console.log('[AUTH] signOut');
        await client.auth.signOut();
        this.showToast('Deconnecte', 'success');
        await this.updateAuthUI();
    }

    async forgotPassword() {
        const client = this.getSupabaseClient();
        if (!client) return this.showToast('Supabase non configure', 'error');
        const emailEl = document.getElementById('auth-email');
        const email = emailEl?.value?.trim();
        if (!email) {
            this.showToast('Entrez votre email dans le champ', 'warning');
            return;
        }
        const redirectTo = `${location.origin}${location.pathname}`;
        console.log('[AUTH] resetPasswordForEmail', { email, redirectTo });
        const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
        if (error) {
            this.showToast(error.message || 'Erreur envoi du lien', 'error');
            return;
        }
        this.showToast('Lien de réinitialisation envoyé', 'success');
    }

    async submitResetPassword() {
        const client = this.getSupabaseClient();
        if (!client) return this.showToast('Supabase non configure', 'error');
        const pw = document.getElementById('reset-password')?.value || '';
        const pw2 = document.getElementById('reset-password-confirm')?.value || '';
        if (!pw || pw.length < 6) { this.showToast('Mot de passe trop court', 'warning'); return; }
        if (pw !== pw2) { this.showToast('Les mots de passe ne correspondent pas', 'warning'); return; }
        console.log('[AUTH] updateUser password');
        const { data, error } = await client.auth.updateUser({ password: pw });
        if (error) { this.showToast(error.message || 'Échec mise à jour', 'error'); return; }
        this.showToast('Mot de passe mis à jour', 'success');
        document.getElementById('reset-modal')?.classList.add('hidden');
        await this.updateAuthUI();
        await this.initSupabase();
    }

    async saveMissionSupabase() {
        const formData = {
            date_mission: document.getElementById('mission-date').value,
            contrat_id: document.getElementById('mission-contract').value,
            conducteur_id: document.getElementById('mission-driver').value,
            vehicule_id: document.getElementById('mission-vehicle').value,
            heure_depart: document.getElementById('mission-start-time').value,
            heure_retour_prevue: document.getElementById('mission-end-time').value,
            km_depart: parseInt(document.getElementById('mission-km-start').value) || null,
            km_client: parseInt(document.getElementById('mission-km-client').value) || null,
            observations: document.getElementById('mission-observations').value
        };

        // Validation
        if (!formData.date_mission || !formData.contrat_id || !formData.conducteur_id || 
            !formData.vehicule_id || !formData.heure_depart || !formData.heure_retour_prevue) {
            this.showToast('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        const contrat = this.data.contrats.find(c => c.id === formData.contrat_id);
        const payload = {
            ...formData,
            type_transport: contrat?.type_transport || 'Sec'
        };

        const client = this.getSupabaseClient();
        const { data: { session } } = client ? await client.auth.getSession() : { data: { session: null } };
        const canUseRemote = !!client && !!session;

        if (this.currentEditingMission) {
            if (canUseRemote) {
                const { data, error } = await client
                    .from('missions')
                    .update(payload)
                    .eq('id', this.currentEditingMission)
                    .select()
                    .single();
                if (error) {
                    console.error('Update mission error', error);
                    this.showToast('Echec mise a jour Supabase', 'error');
                } else {
                    const idx = this.data.missions.findIndex(m => m.id === this.currentEditingMission);
                    if (idx !== -1) this.data.missions[idx] = { ...data, id: String(data.id) };
                    this.showToast('Mission modifiee', 'success');
                }
            } else {
                const index = this.data.missions.findIndex(m => m.id === this.currentEditingMission);
                if (index !== -1) {
                    this.data.missions[index] = {
                        ...this.data.missions[index],
                        ...payload
                    };
                }
                this.showToast('Mission modifiee (local)', 'warning');
            }
        } else {
            if (canUseRemote) {
                const { data, error } = await client
                    .from('missions')
                    .insert([
                        {
                            ...payload,
                            heure_retour_reelle: null,
                            km_fin: null,
                            km_total: null,
                            pda_confirme: false,
                            statut: 'planifie'
                        }
                    ])
                    .select()
                    .single();
                if (error) {
                    console.error('Insert mission error', error);
                    this.showToast('Echec creation Supabase', 'error');
                } else {
                    this.data.missions.push({ ...data, id: String(data.id) });
                    this.showToast('Nouvelle mission creee', 'success');
                }
            } else {
                const newMission = {
                    id: (this.data.missions.length + 1).toString(),
                    ...payload,
                    heure_retour_reelle: null,
                    km_fin: null,
                    km_total: null,
                    pda_confirme: false,
                    statut: 'planifie'
                };
                this.data.missions.push(newMission);
                this.showToast('Nouvelle mission (local)', 'warning');
            }
        }

        this.closeModal('mission-modal');
        if (this.currentPage === 'missions') {
            this.loadMissionsPage();
        } else if (this.currentPage === 'dashboard') {
            this.loadDashboardData();
        }
    }

    async debugPingSupabase() {
        try {
            const url = window.SUPABASE_URL;
            const anon = window.SUPABASE_ANON_KEY;
            const client = this.getSupabaseClient();
            const { data: { session } } = client ? await client.auth.getSession() : { data: { session: null } };
            const token = session?.access_token || anon;
            const restUrl = `${url}/rest/v1/contrats?select=nom,numero&limit=3`;
            const headers = {
                apikey: anon,
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            };
            const mask = (s) => (s && s.length > 12 ? `${s.slice(0,4)}…${s.slice(-4)}` : s);
            console.group('[PING] Supabase REST');
            console.log('Request', { url: restUrl, headers: { apikey: mask(anon), Authorization: `Bearer ${mask(token)}` } });
            console.time('[PING] fetch');
            const resp = await fetch(restUrl, { headers });
            console.timeEnd('[PING] fetch');
            const ct = resp.headers.get('content-type') || '';
            let body;
            try { body = ct.includes('application/json') ? await resp.json() : await resp.text(); } catch { body = '<no body>'; }
            console.log('Response', {
                status: resp.status,
                ok: resp.ok,
                headers: {
                    contentType: ct,
                    contentRange: resp.headers.get('content-range'),
                    rateLimit: resp.headers.get('x-ratelimit-remaining')
                },
                body
            });
            console.groupEnd();

            if (!resp.ok) this.showToast(`Ping REST ${resp.status}`, 'warning');
        } catch (e) {
            console.error('[PING] error', e);
            this.showToast('Ping REST erreur', 'error');
        }
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav__item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.dataset.page;
                this.showPage(page);
            });
        });

        // Mission buttons
        document.getElementById('nouvelle-mission-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.openMissionModal();
        });
        
        document.getElementById('add-mission-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.openMissionModal();
        });

        // Save mission
        document.getElementById('save-mission-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.saveMissionSupabase();
        });

        // Filters
        document.getElementById('filter-status').addEventListener('change', () => {
            this.loadMissionsPage();
        });
        
        document.getElementById('filter-driver').addEventListener('change', () => {
            this.loadMissionsPage();
        });

        // Planning date
        document.getElementById('planning-date').addEventListener('change', () => {
            this.loadPlanningPage();
        });

        // Planning view
        document.getElementById('planning-view').addEventListener('change', () => {
            this.loadPlanningPage();
        });

        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tab = e.currentTarget.dataset.tab;
                this.showTab(tab);
            });
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
        });

        // Test notification
        document.getElementById('test-notification-btn').addEventListener('click', (e) => {
            e.preventDefault();
            console.log('[UI] test-notification-btn clicked');
            this.sendTestNotification();
        });

        // Forgot password flow
        const forgotBtn = document.getElementById('auth-forgot-btn');
        if (forgotBtn) forgotBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await this.forgotPassword();
        });
        const resetSubmit = document.getElementById('reset-submit-btn');
        if (resetSubmit) resetSubmit.addEventListener('click', async (e) => {
            e.preventDefault();
            await this.submitResetPassword();
        });

        // Auth controls
        const loginBtn = document.getElementById('auth-login-btn');
        const logoutBtn = document.getElementById('auth-logout-btn');
        const authSubmit = document.getElementById('auth-submit-btn');
        if (loginBtn) loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('[UI] auth-login-btn clicked');
            const modal = document.getElementById('auth-modal');
            if (modal) modal.classList.remove('hidden');
            setTimeout(() => { if (typeof lucide !== 'undefined') lucide.createIcons(); }, 0);
        });
        if (logoutBtn) logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('[UI] auth-logout-btn clicked');
            await this.signOut();
        });
        if (authSubmit) authSubmit.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('[UI] auth-submit-btn clicked');
            await this.signIn();
        });
    }

    showPage(pageId) {
        // Update navigation
        document.querySelectorAll('.nav__item').forEach(item => {
            item.classList.remove('nav__item--active');
        });
        document.querySelector(`[data-page="${pageId}"]`).classList.add('nav__item--active');

        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });

        // Show selected page
        document.getElementById(`${pageId}-page`).classList.remove('hidden');
        this.currentPage = pageId;

        // Load page data
        switch(pageId) {
            case 'dashboard':
                this.loadDashboardData();
                break;
            case 'missions':
                this.loadMissionsPage();
                break;
            case 'planning':
                this.loadPlanningPage();
                break;
            case 'gestion':
                this.loadGestionPage();
                break;
            case 'notifications':
                this.loadNotificationsPage();
                break;
        }

        // Re-create icons for the new page
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
    }

    loadDashboardData() {
        const today = this.getTodayStr();
        const todayMissions = this.data.missions.filter(m => m.date_mission === today);
        const completedMissions = todayMissions.filter(m => m.statut === 'termine');
        const activeMissions = todayMissions.filter(m => m.statut === 'en_cours');
        const activeDrivers = this.data.conducteurs.filter(c => c.presence === 'Oui' && c.actif);

        // Update stats
        document.getElementById('missions-today').textContent = todayMissions.length;
        document.getElementById('missions-completed').textContent = completedMissions.length;
        document.getElementById('missions-progress').textContent = activeMissions.length;
        document.getElementById('drivers-active').textContent = activeDrivers.length;

        // Load recent missions
        this.loadRecentMissions();
        this.loadTodayPlanning();
    }

    loadRecentMissions() {
        const recentMissions = this.data.missions.slice(-3);
        const container = document.getElementById('recent-missions');
        
        if (recentMissions.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Aucune mission récente</p></div>';
            return;
        }

        container.innerHTML = recentMissions.map(mission => {
            const conducteur = this.data.conducteurs.find(c => c.id === mission.conducteur_id);
            const contrat = this.data.contrats.find(c => c.id === mission.contrat_id);
            
            return `
                <div class="planning-mission">
                    <div class="planning-mission__time">${mission.heure_depart}</div>
                    <div class="planning-mission__details">
                        <div class="planning-mission__contract">${contrat?.nom || 'N/A'}</div>
                        <div class="planning-mission__info">${conducteur?.nom || 'N/A'} - ${mission.statut}</div>
                    </div>
                    <span class="status status--${mission.statut.replace('_', '-')}">${this.getStatusLabel(mission.statut)}</span>
                </div>
            `;
        }).join('');
    }

    loadTodayPlanning() {
        const today = this.getTodayStr();
        const todayMissions = this.data.missions.filter(m => m.date_mission === today);
        const container = document.getElementById('today-planning');
        
        if (todayMissions.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Aucune mission aujourd\'hui</p></div>';
            return;
        }

        container.innerHTML = todayMissions.map(mission => {
            const conducteur = this.data.conducteurs.find(c => c.id === mission.conducteur_id);
            const contrat = this.data.contrats.find(c => c.id === mission.contrat_id);
            
            return `
                <div class="planning-mission">
                    <div class="planning-mission__time">${mission.heure_depart}</div>
                    <div class="planning-mission__details">
                        <div class="planning-mission__contract">${contrat?.nom || 'N/A'}</div>
                        <div class="planning-mission__info">${conducteur?.nom || 'N/A'}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    loadMissionsPage() {
        const statusFilter = document.getElementById('filter-status').value;
        const driverFilter = document.getElementById('filter-driver').value;
        
        // Populate driver filter if empty
        this.populateDriverFilter();

        let filteredMissions = this.data.missions;
        
        if (statusFilter) {
            filteredMissions = filteredMissions.filter(m => m.statut === statusFilter);
        }
        
        if (driverFilter) {
            filteredMissions = filteredMissions.filter(m => m.conducteur_id === driverFilter);
        }

        const container = document.getElementById('missions-list');
        
        if (filteredMissions.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Aucune mission trouvée</p></div>';
            return;
        }

        container.innerHTML = filteredMissions.map(mission => this.createMissionCard(mission)).join('');
        
        // Add event listeners for mission actions
        this.setupMissionActions();
    }

    createMissionCard(mission) {
        const conducteur = this.data.conducteurs.find(c => c.id === mission.conducteur_id);
        const vehicule = this.data.vehicules.find(v => v.id === mission.vehicule_id);
        const contrat = this.data.contrats.find(c => c.id === mission.contrat_id);
        
        return `
            <div class="mission-card mission-card--${mission.type_transport.toLowerCase().replace('é', 'e')}">
                <div class="mission-card__header">
                    <h3 class="mission-card__title">${contrat?.nom || 'N/A'}</h3>
                    <span class="mission-card__status mission-card__status--${mission.statut.replace('_', '-')}">${this.getStatusLabel(mission.statut)}</span>
                </div>
                
                <div class="mission-card__info">
                    <div class="mission-card__info-item">
                        <i data-lucide="calendar"></i>
                        <span>${this.formatDate(mission.date_mission)}</span>
                    </div>
                    <div class="mission-card__info-item">
                        <i data-lucide="clock"></i>
                        <span>${mission.heure_depart} - ${mission.heure_retour_prevue}</span>
                    </div>
                    <div class="mission-card__info-item">
                        <i data-lucide="user"></i>
                        <span>${conducteur?.nom || 'N/A'}</span>
                    </div>
                    <div class="mission-card__info-item">
                        <i data-lucide="truck"></i>
                        <span>${vehicule?.immatriculation || 'N/A'}</span>
                    </div>
                </div>
                
                ${mission.observations ? `
                    <div class="mission-card__observations">
                        ${mission.observations}
                    </div>
                ` : ''}
                
                <div class="mission-card__actions">
                    <button class="btn btn--outline btn--sm edit-mission-btn" data-mission-id="${mission.id}">
                        <i data-lucide="edit"></i>
                        Modifier
                    </button>
                    <button class="btn btn--primary btn--sm send-notification-btn" data-mission-id="${mission.id}">
                        <i data-lucide="send"></i>
                        Notification
                    </button>
                    <button class="btn btn--secondary btn--sm delete-mission-btn" data-mission-id="${mission.id}">
                        <i data-lucide="trash-2"></i>
                        Supprimer
                    </button>
                </div>
            </div>
        `;
    }

    setupMissionActions() {
        // Edit mission buttons
        document.querySelectorAll('.edit-mission-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const missionId = e.currentTarget.dataset.missionId;
                this.editMission(missionId);
            });
        });

        // Send notification buttons
        document.querySelectorAll('.send-notification-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const missionId = e.currentTarget.dataset.missionId;
                this.sendMissionNotification(missionId);
            });
        });

        // Delete mission buttons
        document.querySelectorAll('.delete-mission-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const missionId = e.currentTarget.dataset.missionId;
                await this.deleteMission(missionId);
            });
        });

        // Re-create icons after adding event listeners
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
    }

    populateDriverFilter() {
        const select = document.getElementById('filter-driver');
        // Clear existing options except the first one
        while (select.children.length > 1) {
            select.removeChild(select.lastChild);
        }
        
        this.data.conducteurs.forEach(driver => {
            const option = document.createElement('option');
            option.value = driver.id;
            option.textContent = driver.nom;
            select.appendChild(option);
        });
    }

    loadPlanningPage() {
        const selectedDate = document.getElementById('planning-date').value;
        const view = document.getElementById('planning-view').value;
        
        const dayMissions = this.data.missions.filter(m => m.date_mission === selectedDate);
        const container = document.getElementById('planning-content');
        
        if (dayMissions.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Aucune mission pour cette date</p></div>';
            return;
        }

        if (view === 'conducteur') {
            this.loadPlanningByDriver(dayMissions, container);
        } else {
            this.loadPlanningByVehicle(dayMissions, container);
        }
    }

    loadPlanningByDriver(missions, container) {
        const driverGroups = {};
        
        missions.forEach(mission => {
            if (!driverGroups[mission.conducteur_id]) {
                driverGroups[mission.conducteur_id] = [];
            }
            driverGroups[mission.conducteur_id].push(mission);
        });

        container.innerHTML = Object.keys(driverGroups).map(driverId => {
            const driver = this.data.conducteurs.find(d => d.id === driverId);
            const driverMissions = driverGroups[driverId];
            
            return `
                <div class="planning-section">
                    <div class="planning-section__header">
                        <i data-lucide="user"></i>
                        <h3 class="planning-section__title">${driver?.nom || 'Conducteur inconnu'}</h3>
                    </div>
                    <div class="planning-section__body">
                        ${driverMissions.map(mission => {
                            const contrat = this.data.contrats.find(c => c.id === mission.contrat_id);
                            const vehicule = this.data.vehicules.find(v => v.id === mission.vehicule_id);
                            
                            return `
                                <div class="planning-mission">
                                    <div class="planning-mission__time">${mission.heure_depart}</div>
                                    <div class="planning-mission__details">
                                        <div class="planning-mission__contract">${contrat?.nom || 'N/A'}</div>
                                        <div class="planning-mission__info">${vehicule?.immatriculation || 'N/A'} - ${mission.type_transport}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');
        
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
    }

    loadPlanningByVehicle(missions, container) {
        const vehicleGroups = {};
        
        missions.forEach(mission => {
            if (!vehicleGroups[mission.vehicule_id]) {
                vehicleGroups[mission.vehicule_id] = [];
            }
            vehicleGroups[mission.vehicule_id].push(mission);
        });

        container.innerHTML = Object.keys(vehicleGroups).map(vehicleId => {
            const vehicle = this.data.vehicules.find(v => v.id === vehicleId);
            const vehicleMissions = vehicleGroups[vehicleId];
            
            return `
                <div class="planning-section">
                    <div class="planning-section__header">
                        <i data-lucide="truck"></i>
                        <h3 class="planning-section__title">${vehicle?.immatriculation || 'Véhicule inconnu'} - ${vehicle?.marque || ''}</h3>
                    </div>
                    <div class="planning-section__body">
                        ${vehicleMissions.map(mission => {
                            const contrat = this.data.contrats.find(c => c.id === mission.contrat_id);
                            const conducteur = this.data.conducteurs.find(c => c.id === mission.conducteur_id);
                            
                            return `
                                <div class="planning-mission">
                                    <div class="planning-mission__time">${mission.heure_depart}</div>
                                    <div class="planning-mission__details">
                                        <div class="planning-mission__contract">${contrat?.nom || 'N/A'}</div>
                                        <div class="planning-mission__info">${conducteur?.nom || 'N/A'} - ${mission.type_transport}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');
        
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
    }

    loadGestionPage() {
        this.loadConducteursTab();
        this.loadVehiculesTab();
        this.loadContratsTab();
    }

    showTab(tabId) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('tab-btn--active');
        });
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('tab-btn--active');

        // Show tab content
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.add('hidden');
        });
        document.getElementById(`${tabId}-tab`).classList.remove('hidden');
    }

    loadConducteursTab() {
        const container = document.getElementById('conducteurs-table');
        
        container.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Présence</th>
                        <th>Type</th>
                        <th>Site</th>
                        <th>Commentaire</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.data.conducteurs.map(conducteur => `
                        <tr>
                            <td>${conducteur.nom}</td>
                            <td><span class="status ${conducteur.presence === 'Oui' ? 'status--success' : 'status--error'}">${conducteur.presence}</span></td>
                            <td>${conducteur.types}</td>
                            <td>${conducteur.site}</td>
                            <td>${conducteur.commentaire}</td>
                            <td><span class="status ${conducteur.actif ? 'status--success' : 'status--error'}">${conducteur.actif ? 'Actif' : 'Inactif'}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    loadVehiculesTab() {
        const container = document.getElementById('vehicules-table');
        
        container.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Immatriculation</th>
                        <th>Marque</th>
                        <th>Type</th>
                        <th>Énergie</th>
                        <th>Hayon</th>
                        <th>Contrôle technique</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.data.vehicules.map(vehicule => `
                        <tr>
                            <td><strong>${vehicule.immatriculation}</strong></td>
                            <td>${vehicule.marque}</td>
                            <td>${vehicule.type_vehicule}</td>
                            <td>${vehicule.energie}</td>
                            <td><span class="status ${vehicule.hayon ? 'status--success' : 'status--info'}">${vehicule.hayon ? 'Oui' : 'Non'}</span></td>
                            <td>${this.formatDate(vehicule.controle_technique)}</td>
                            <td><span class="status ${vehicule.actif ? 'status--success' : 'status--error'}">${vehicule.actif ? 'Actif' : 'Inactif'}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    loadContratsTab() {
        const container = document.getElementById('contrats-table');
        
        container.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Type transport</th>
                        <th>Description</th>
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.data.contrats.map(contrat => `
                        <tr>
                            <td><strong>${contrat.numero}</strong></td>
                            <td>${contrat.nom}</td>
                            <td><span class="status status--info">${contrat.type_transport}</span></td>
                            <td>${contrat.description}</td>
                            <td><span class="status ${contrat.actif ? 'status--success' : 'status--error'}">${contrat.actif ? 'Actif' : 'Inactif'}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    loadNotificationsPage() {
        const container = document.getElementById('notifications-list');
        
        if (this.data.notifications.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Aucune notification</p></div>';
            return;
        }

        container.innerHTML = this.data.notifications.map(notification => `
            <div class="notification-item">
                <div class="notification-item__icon">
                    <i data-lucide="bell"></i>
                </div>
                <div class="notification-item__content">
                    <div class="notification-item__title">${notification.titre}</div>
                    <div class="notification-item__message">${notification.message}</div>
                </div>
            </div>
        `).join('');
        
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
    }

    openMissionModal(missionId = null) {
        this.currentEditingMission = missionId;
        const modal = document.getElementById('mission-modal');
        const title = document.getElementById('mission-modal-title');
        
        // First populate the form selects
        this.populateFormSelects();
        
        if (missionId) {
            title.textContent = 'Modifier la mission';
            setTimeout(() => {
                this.populateMissionForm(missionId);
            }, 50);
        } else {
            title.textContent = 'Nouvelle mission';
            this.resetMissionForm();
        }
        
        modal.classList.remove('hidden');
    }

    populateFormSelects() {
        // Populate contracts
        const contractSelect = document.getElementById('mission-contract');
        contractSelect.innerHTML = '<option value="">Sélectionner un contrat</option>';
        this.data.contrats.forEach(contrat => {
            const option = document.createElement('option');
            option.value = contrat.id;
            option.textContent = `${contrat.numero} - ${contrat.nom}`;
            contractSelect.appendChild(option);
        });

        // Populate drivers
        const driverSelect = document.getElementById('mission-driver');
        driverSelect.innerHTML = '<option value="">Sélectionner un conducteur</option>';
        this.data.conducteurs.filter(c => c.actif).forEach(conducteur => {
            const option = document.createElement('option');
            option.value = conducteur.id;
            option.textContent = conducteur.nom;
            driverSelect.appendChild(option);
        });

        // Populate vehicles
        const vehicleSelect = document.getElementById('mission-vehicle');
        vehicleSelect.innerHTML = '<option value="">Sélectionner un véhicule</option>';
        this.data.vehicules.filter(v => v.actif).forEach(vehicule => {
            const option = document.createElement('option');
            option.value = vehicule.id;
            option.textContent = `${vehicule.immatriculation} - ${vehicule.marque}`;
            vehicleSelect.appendChild(option);
        });
    }

    populateMissionForm(missionId) {
        const mission = this.data.missions.find(m => m.id === missionId);
        if (!mission) return;

        document.getElementById('mission-date').value = mission.date_mission;
        document.getElementById('mission-contract').value = mission.contrat_id;
        document.getElementById('mission-driver').value = mission.conducteur_id;
        document.getElementById('mission-vehicle').value = mission.vehicule_id;
        document.getElementById('mission-start-time').value = mission.heure_depart;
        document.getElementById('mission-end-time').value = mission.heure_retour_prevue;
        document.getElementById('mission-km-start').value = mission.km_depart || '';
        document.getElementById('mission-km-client').value = mission.km_client || '';
        document.getElementById('mission-observations').value = mission.observations || '';
    }

    resetMissionForm() {
        document.getElementById('mission-form').reset();
        document.getElementById('mission-date').value = this.getTodayStr();
    }

    async deleteMission(missionId) {
        if (!missionId) return;
        const confirmMsg = 'Confirmer la suppression de cette mission ?';
        if (!window.confirm(confirmMsg)) return;

        const client = this.getSupabaseClient();
        const { data: { session } } = client ? await client.auth.getSession() : { data: { session: null } };
        const canUseRemote = !!client && !!session;

        if (canUseRemote) {
            console.group('[DELETE] mission');
            console.log('Request', { table: 'missions', id: missionId });
            const { error } = await client
                .from('missions')
                .delete()
                .eq('id', missionId);
            console.log('Response', { error });
            console.groupEnd();
            if (error) {
                console.error('Delete mission error', error);
                this.showToast('Échec suppression Supabase', 'error');
                return;
            }
        }

        this.data.missions = this.data.missions.filter(m => m.id !== missionId);
        this.showToast('Mission supprimée', 'success');
        if (this.currentPage === 'missions') {
            this.loadMissionsPage();
        } else if (this.currentPage === 'dashboard') {
            this.loadDashboardData();
        }
    }

    saveMission() {
        const formData = {
            date_mission: document.getElementById('mission-date').value,
            contrat_id: document.getElementById('mission-contract').value,
            conducteur_id: document.getElementById('mission-driver').value,
            vehicule_id: document.getElementById('mission-vehicle').value,
            heure_depart: document.getElementById('mission-start-time').value,
            heure_retour_prevue: document.getElementById('mission-end-time').value,
            km_depart: parseInt(document.getElementById('mission-km-start').value) || null,
            km_client: parseInt(document.getElementById('mission-km-client').value) || null,
            observations: document.getElementById('mission-observations').value
        };

        // Validation
        if (!formData.date_mission || !formData.contrat_id || !formData.conducteur_id || 
            !formData.vehicule_id || !formData.heure_depart || !formData.heure_retour_prevue) {
            this.showToast('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        const contrat = this.data.contrats.find(c => c.id === formData.contrat_id);

        if (this.currentEditingMission) {
            // Update existing mission
            const index = this.data.missions.findIndex(m => m.id === this.currentEditingMission);
            if (index !== -1) {
                this.data.missions[index] = {
                    ...this.data.missions[index],
                    ...formData,
                    type_transport: contrat?.type_transport || 'Sec'
                };
            }
            this.showToast('Mission modifiée avec succès', 'success');
        } else {
            // Create new mission
            const newMission = {
                id: (this.data.missions.length + 1).toString(),
                ...formData,
                type_transport: contrat?.type_transport || 'Sec',
                heure_retour_reelle: null,
                km_fin: null,
                km_total: null,
                pda_confirme: false,
                statut: 'planifie'
            };
            this.data.missions.push(newMission);
            this.showToast('Nouvelle mission créée avec succès', 'success');
        }

        this.closeModal('mission-modal');
        
        // Refresh current page
        if (this.currentPage === 'missions') {
            this.loadMissionsPage();
        } else if (this.currentPage === 'dashboard') {
            this.loadDashboardData();
        }
    }

    editMission(missionId) {
        this.openMissionModal(missionId);
    }

    sendMissionNotification(missionId) {
        const mission = this.data.missions.find(m => m.id === missionId);
        const conducteur = this.data.conducteurs.find(c => c.id === mission.conducteur_id);
        
        if (!mission || !conducteur) return;

        const notification = {
            id: (this.data.notifications.length + 1).toString(),
            mission_id: missionId,
            conducteur_id: mission.conducteur_id,
            titre: 'Notification de mission',
            message: `Mission du ${this.formatDate(mission.date_mission)} à ${mission.heure_depart} - Notification envoyée`,
            type_notification: 'info',
            lue: false,
            envoye_push: true,
            date_creation: new Date().toISOString()
        };

        this.data.notifications.push(notification);
        this.showToast(`Notification envoyée à ${conducteur.nom}`, 'success');
    }

    sendTestNotification() {
        const notification = {
            id: (this.data.notifications.length + 1).toString(),
            mission_id: null,
            conducteur_id: '1',
            titre: 'Notification de test',
            message: 'Ceci est une notification de test envoyée depuis l\'application TransportPro.',
            type_notification: 'info',
            lue: false,
            envoye_push: true,
            date_creation: new Date().toISOString()
        };

        this.data.notifications.push(notification);
        this.showToast('Notification de test envoyée avec succès', 'success');
        
        if (this.currentPage === 'notifications') {
            this.loadNotificationsPage();
        }
    }

    toggleTheme() {
        const currentScheme = document.documentElement.getAttribute('data-color-scheme');
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', newScheme);

        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) {
            const desired = newScheme === 'dark' ? 'sun' : 'moon';
            // Lucide remplace <i> par <svg>; on reconstruit le contenu pour forcer la mise à jour
            themeBtn.innerHTML = `<i data-lucide="${desired}"></i>`;
            setTimeout(() => {
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 0);
        }
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        this.currentEditingMission = null;
    }

    openResetModal() {
        const modal = document.getElementById('reset-modal');
        if (modal) {
            modal.classList.remove('hidden');
            setTimeout(() => {
                const pw = document.getElementById('reset-password');
                if (pw) pw.focus();
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 0);
        }
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        
        const icons = {
            success: 'check-circle',
            error: 'x-circle',
            warning: 'alert-triangle',
            info: 'info'
        };

        toast.innerHTML = `
            <div class="toast__icon">
                <i data-lucide="${icons[type] || 'info'}"></i>
            </div>
            <div class="toast__content">
                <div class="toast__message">${message}</div>
            </div>
        `;

        container.appendChild(toast);
        
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 5000);
    }

    getStatusLabel(status) {
        const labels = {
            'planifie': 'Planifiée',
            'en_cours': 'En cours',
            'termine': 'Terminée'
        };
        return labels[status] || status;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR');
    }
}

// Global functions for HTML event handlers
function showPage(pageId) {
    if (window.app) {
        window.app.showPage(pageId);
    }
}

function closeModal(modalId) {
    if (window.app) {
        window.app.closeModal(modalId);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TransportApp();
    if (window.app && typeof window.app.initSupabase === 'function') {
        window.app.initSupabase();
    }
    if ('serviceWorker' in navigator) {
        const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname);
        const isSecure = location.protocol === 'https:' || isLocalhost;
        if (isSecure) {
            navigator.serviceWorker.register('sw.js')
              .then(reg => { try { reg.update(); } catch {} })
              .catch(err => console.warn('SW register failed', err));
        } else {
            console.info('Service Worker non enregistré: nécessite https ou localhost.');
        }
    }
});

// Additional delegated handler for the test button + exposed helper
document.addEventListener('DOMContentLoaded', () => {
    if (!window.runSupabaseTest) {
        window.runSupabaseTest = async () => {
            console.log('[UI] test-supabase-btn clicked');
            try {
                const url = window.SUPABASE_URL;
                const key = window.SUPABASE_ANON_KEY;
                if (!url || !key) { window.app?.showToast('Supabase non configure', 'error'); return; }
                if (typeof window.supabase === 'undefined') { window.app?.showToast('SDK Supabase non charge', 'error'); return; }
                const client = window.supabaseClient || window.supabase.createClient(url, key);
                window.supabaseClient = client;
                const { data: sessionData, error } = await client.auth.getSession();
                if (!error) window.app?.showToast('SDK Supabase initialise', 'success');
                else window.app?.showToast(`Auth erreur: ${error?.message || 'inconnue'}`, 'warning');
                console.log('Supabase test:', { sessionData, error });
                window.app?.debugPingSupabase?.();
            } catch (e) {
                console.error('Supabase test error', e);
                window.app?.showToast('Erreur de connexion Supabase', 'error');
            }
        };
    }

    document.addEventListener('click', (e) => {
        const t = e.target;
        if (t && typeof t.closest === 'function' && t.closest('#test-supabase-btn')) {
            e.preventDefault();
            window.runSupabaseTest();
        }
    });
});

// Supabase connectivity test
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('test-supabase-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        try {
            const url = window.SUPABASE_URL;
            const key = window.SUPABASE_ANON_KEY;

            if (!url || !key) {
                window.app?.showToast('Supabase non configuré', 'error');
                return;
            }

            if (typeof window.supabase === 'undefined') {
                window.app?.showToast('SDK Supabase non chargé', 'error');
                return;
            }

            // Create or reuse a single client instance to avoid warnings
            const client = window.supabaseClient || window.supabase.createClient(url, key);
            window.supabaseClient = client;

            // SDK basic call (should succeed and return session=null)
            const { data: sessionData, error } = await client.auth.getSession();

            if (!error) {
                window.app?.showToast('SDK Supabase initialisé', 'success');
            } else {
                window.app?.showToast(`Auth erreur: ${error?.message || 'inconnue'}`, 'warning');
            }

            // Log details for debug in console
            console.log('Supabase test:', { sessionData, error });

            // Also run a REST ping and log raw response
            window.app?.debugPingSupabase?.();
        } catch (e) {
            console.error('Supabase test error', e);
            window.app?.showToast('Erreur de connexion Supabase', 'error');
        }
    });
});
