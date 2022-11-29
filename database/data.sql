
insert into Ingrédient(nomingrédient,paysingrédient) values('tomate','Canada');
insert into Ingrédient(nomingrédient,paysingrédient) values('carotte','Mexique');
insert into Ingrédient(nomingrédient,paysingrédient) values('ail','Chine');
insert into Ingrédient(nomingrédient,paysingrédient) values('Cassonade','France');
insert into Ingrédient(nomingrédient,paysingrédient) values('Miel','Canada');
insert into Ingrédient(nomingrédient,paysingrédient) values('Sauce soya','Chine');
insert into Ingrédient(nomingrédient,paysingrédient) values('Imeruli','Georgia');


insert into Fournisseur(nomfournisseur,adressefournisseur) values('Cargill','5928 Bd Cousineau BUREAU,Montreal');
insert into Fournisseur(nomfournisseur,adressefournisseur) values('Kraft','8600 Chem. Devonshire,Montreal');
insert into Fournisseur(nomfournisseur,adressefournisseur) values('Bio Ferme des Caps','25 Av. de la Montagne');
insert into Fournisseur(nomfournisseur,adressefournisseur) values('AB Transport', '80 10 rang. st-croix');
insert into Fournisseur(nomfournisseur,adressefournisseur) values('Benjamin','Montreal');

insert into PlanRepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('sans gluten',7,4,460,32.50,3);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('hypocalorique',1,4,750,20.00,2);
insert into PlanRepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('cétogène',1,4,200,26.50,3);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('méditerranéenne',1,4,640,55.50,4);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('sans sucre',1,4,250,20,4);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('végétarienne',7,4,370,55,4);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('végétalienne',7,4,300,55,1);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix,numerofournisseur) values('pescétarienne',7,4,500,75,1);
insert into Planrepas(categorie,frequence,nbrpersonnes,nbrcalories,prix) values('low suger',7,4,150,75);
 
insert into Végétarien values(6,'Souper');
insert into Végétarien values(7,'Diner');

insert into Pescétarien values(8,'Atlantique');
insert into Pescétarien values(4,'Importé');

insert into Famille values(1);
insert into Famille values(2);

insert into Facile values(2,6);
insert into Facile values(1,7);

insert into Rapide values(2,50);
insert into Rapide values(1,70);

insert into Client(nomclient,prénomclient,adressecourrielclient,rueclient,villeclient,codepostalclient) values('salemi','karim','salemi.k@gmail.com','6730 Christophe-Colomb','Montreal','H2S 2H2');
insert into Client(nomclient,prénomclient,adressecourrielclient,rueclient,villeclient,codepostalclient) values('izod','koray','izod.k@gmail.com','7005 23e av','Montreal','H4T 2H2');
insert into Client(nomclient,prénomclient,adressecourrielclient,rueclient,villeclient,codepostalclient) values('abdallah','ikram','abdo.ik@gmail.com','5689 24 av','Montreal','H4H 6X8');
insert into Client(nomclient,prénomclient,adressecourrielclient,rueclient,villeclient,codepostalclient) values('belanger','Jérémy','Jérémy.belanger@gmail.com','1579 Boul.Saint-Laurent','Montreal','H2X 2S9');

insert into Abonner values(1,2,75);
insert into Abonner values(2,3,90);

insert into Téléphone values('438-578-6698',1);
insert into Téléphone values('514-300-7068',2);

insert into Kitrepas(numeroplan,description) values(2,'Gather all your tools, wash and dry all produce and then start the recipe');
insert into Kitrepas(numeroplan,description) values(3,'Using your hand, swirl to rinse rice. Pour off cloudy water and refill with cold water.');
insert into Kitrepas(numeroplan,description) values(9,'start the recipe');
insert into Kitrepas(numeroplan,description) values(null,'Gather all your tools,produce and then start the recipe');
	
insert into Image(données,numérokitrepas) values(bytea('/Users/anas/Downloads/basmatirice-GettyImages-491090528.jpeg'),1);
insert into Image(données,numérokitrepas) values(bytea('/Users/anas/Downloads/boiling-noodles-2-1.jpeg'),2);

insert into Étape values(1,'Cooking steps for noodle dish',30,2);
insert into Étape values(2,'Cooking steps for soup dish',25,3);

insert into Contenir values(1,1);
insert into Contenir values(2,2);