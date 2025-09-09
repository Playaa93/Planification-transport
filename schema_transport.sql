
-- Tables pour l'application de gestion de transport

-- Table des conducteurs
CREATE TABLE conducteurs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    presence VARCHAR(10),
    types VARCHAR(50),
    site VARCHAR(50),
    commentaire TEXT,
    actif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des véhicules
CREATE TABLE vehicules (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    immatriculation VARCHAR(20) UNIQUE NOT NULL,
    energie VARCHAR(20),
    marque VARCHAR(50),
    type_vehicule VARCHAR(20), -- Tracteur, Porteur, Semi, etc.
    site VARCHAR(50),
    hayon BOOLEAN DEFAULT false,
    controle_technique DATE,
    commentaire TEXT,
    actif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des contrats
CREATE TABLE contrats (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    numero VARCHAR(20) UNIQUE NOT NULL,
    nom VARCHAR(100),
    type_transport VARCHAR(20), -- Sec, Frais, Surgelé
    description TEXT,
    actif BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des missions de transport
CREATE TABLE missions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    date_mission DATE NOT NULL,
    contrat_id UUID REFERENCES contrats(id),
    conducteur_id UUID REFERENCES conducteurs(id),
    vehicule_id UUID REFERENCES vehicules(id),
    heure_depart TIME,
    heure_retour_prevue TIME,
    heure_retour_reelle TIME,
    km_depart INTEGER,
    km_fin INTEGER,
    km_total INTEGER,
    km_client INTEGER,
    type_transport VARCHAR(20),
    observations TEXT,
    pda_confirme BOOLEAN DEFAULT false,
    statut VARCHAR(20) DEFAULT 'planifie', -- planifie, en_cours, termine, annule
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des notifications
CREATE TABLE notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    mission_id UUID REFERENCES missions(id),
    conducteur_id UUID REFERENCES conducteurs(id),
    titre VARCHAR(200) NOT NULL,
    message TEXT,
    type_notification VARCHAR(20) DEFAULT 'info', -- info, warning, urgent
    lue BOOLEAN DEFAULT false,
    envoye_push BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour optimiser les requêtes
CREATE INDEX idx_missions_date ON missions(date_mission);
CREATE INDEX idx_missions_conducteur ON missions(conducteur_id);
CREATE INDEX idx_missions_vehicule ON missions(vehicule_id);
CREATE INDEX idx_notifications_conducteur ON notifications(conducteur_id);
CREATE INDEX idx_notifications_lue ON notifications(lue);

-- RLS (Row Level Security) pour Supabase
ALTER TABLE conducteurs ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehicules ENABLE ROW LEVEL SECURITY;
ALTER TABLE contrats ENABLE ROW LEVEL SECURITY;
ALTER TABLE missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Politiques RLS basiques (à adapter selon vos besoins)
CREATE POLICY "Permettre lecture pour tous les utilisateurs authentifiés" ON conducteurs
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Permettre lecture pour tous les utilisateurs authentifiés" ON vehicules
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Permettre lecture pour tous les utilisateurs authentifiés" ON contrats
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Permettre toutes opérations pour utilisateurs authentifiés" ON missions
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Permettre toutes opérations pour utilisateurs authentifiés" ON notifications
    FOR ALL USING (auth.role() = 'authenticated');
