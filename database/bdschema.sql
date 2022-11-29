CREATE TABLE Ingrédient(
	numéroingrédient 	SERIAL	 	PRIMARY KEY,
	nomingrédient 		VARCHAR(50) NOT NULL,
	paysingrédient 		VARCHAR(50)	NOT NULL
);

CREATE TABLE Fournisseur(
	numerofournisseur 	SERIAL	 	PRIMARY KEY,
	nomfournisseur 		VARCHAR(50)	NOT NULL,
	adressefournisseur 	VARCHAR(50) NOT NULL
);

CREATE TABLE Planrepas(
	numeroplan 			SERIAL	 	PRIMARY KEY,
	categorie 			VARCHAR(50)	NOT NULL, 
	frequence 	 		INTEGER 	CONSTRAINT check_frequence CHECK (frequence >= 0)		NOT NULL, 
	nbrpersonnes 		INTEGER 	CONSTRAINT check_personnes CHECK (nbrpersonnes >= 0)	NOT NULL, 
	nbrcalories  		INTEGER 	CONSTRAINT check_calories 	CHECK (nbrcalories >= 0) 	NOT NULL, 
	prix 				INTEGER 	CONSTRAINT check_prix 	CHECK (prix > 0.00)				NOT NULL, 
	numerofournisseur 	INTEGER, 
	FOREIGN KEY (numerofournisseur) references Fournisseur(numerofournisseur)ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Famille(
	numeroplan 			INTEGER 	PRIMARY KEY,
	FOREIGN KEY (numeroplan)  		references Planrepas(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE  
);

CREATE TABLE Végétarien(
	numeroplan 			INTEGER 	PRIMARY KEY,
	FOREIGN KEY (numeroplan)  		references Planrepas(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE,
	typederepas 		VARCHAR(50)	NOT NULL
);

CREATE TABLE Pescétarien(
	numeroplan 			INTEGER 	PRIMARY KEY,
	FOREIGN KEY (numeroplan)  		references Planrepas(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE,
	typepoisson 		VARCHAR(50)	NOT NULL 
);

CREATE TABLE Rapide(
	numeroplan 			INTEGER 	PRIMARY KEY,
	FOREIGN KEY (numeroplan)  		references Famille(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE,
	tempsdepréparation 	INTEGER 	CONSTRAINT check_temps CHECK (tempsdepréparation > 0) NOT NULL 
);

CREATE TABLE Facile(
	numeroplan 			INTEGER 	PRIMARY KEY,
	FOREIGN KEY (numeroplan)  		references Famille(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE,
	nbingrédients 		INTEGER 	CONSTRAINT check_ingredient CHECK (nbingrédients > 0) NOT NULL 
);

CREATE TABLE Client(
	numéroclient 			SERIAL 			PRIMARY KEY,
	nomclient 				VARCHAR(50)		NOT NULL,
	prénomclient 			VARCHAR(50)		NOT NULL,
	adressecourrielclient 	VARCHAR(50)		NOT NULL,
	rueclient 				VARCHAR(50)		NOT NULL,
	villeclient 			VARCHAR(50)		NOT NULL,
	codepostalclient 		VARCHAR(50) 	CHECK (codepostalclient ::varchar ~'^[A-Z][0-9][A-Z] [0-9][A-Z][0-9]$'::varchar)NOT NULL 
);

CREATE TABLE Abonner(
	numéroclient 		INTEGER		NOT NULL,
	numeroplan 			INTEGER		NOT NULL,
	PRIMARY KEY (numéroclient,numeroplan),
	FOREIGN KEY (numéroclient) 		REFERENCES Client(numéroclient) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (numeroplan) 		REFERENCES Planrepas(numeroplan)ON DELETE CASCADE ON UPDATE CASCADE,
	durée				INTEGER 	NOT NULL
);

CREATE TABLE Téléphone(
	numérodetéléphone VARCHAR(20) CHECK (numérodetéléphone ::varchar ~ '^[0-9]{3}-[0-9]{3}-[0-9]{4}$'::varchar)	NOT NULL, 
	numéroclient	  INTEGER		NOT NULL,
	PRIMARY KEY (numérodetéléphone,numéroclient),
	FOREIGN KEY (numéroclient) REFERENCES Client(numéroclient) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE Kitrepas(
	numérokitrepas 	SERIAL 			PRIMARY KEY, 
	numeroplan 		INTEGER, 
	description		TEXT 			NOT NULL, 
	FOREIGN KEY (numeroplan) REFERENCES Planrepas(numeroplan) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE Image(
	numéroimage 	SERIAL 			PRIMARY KEY,
	données 		BYTEA,
	numérokitrepas 	INTEGER 		NOT NULL,
	FOREIGN KEY (numérokitrepas) REFERENCES Kitrepas(numérokitrepas) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE Étape(
	numérokitrepas 				INTEGER 		PRIMARY KEY, 
	descriptionétape 			TEXT,
	duréeétape 					INTEGER CONSTRAINT check_duree CHECK(duréeétape > 0)		NOT NULL,
	etrecomposede 				SERIAL NOT NULL,
	FOREIGN KEY(numérokitrepas) REFERENCES Kitrepas(numérokitrepas) ON DELETE CASCADE ON UPDATE CASCADE 
);

CREATE TABLE Contenir(
	numéroingrédient INTEGER NOT NULL, 
	numérokitrepas 	 INTEGER NOT NULL,
	PRIMARY KEY(numéroingrédient,numérokitrepas),
	FOREIGN KEY(numéroingrédient) REFERENCES Ingrédient(numéroingrédient) ON DELETE CASCADE ON UPDATE CASCADE ,
	FOREIGN KEY(numérokitrepas) REFERENCES Kitrepas(numérokitrepas) ON DELETE CASCADE ON UPDATE CASCADE  
);

