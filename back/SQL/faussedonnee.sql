INSERT INTO "user" ("nickname", "firstname", "lastname", "email", "avatar", "password", "role", "status") VALUES
('Michou','Dupond', 'Frank', 'michel.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Mich','Dupond', 'Romain', 'michel.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Micho','Dupond', 'Pierre', 'michel2.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Camille.Breton20','Breton', 'Camille', 'michel3.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Ambre_Morin91','Morin', 'Ambre', 'michel4.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Louna.Roux','Roux', 'Louna', 'michel5.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Théo.Marchand18','Marchand', 'Théo', 'michel6.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Célia.Marchal15','Marchal', 'Célia', 'michel7.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Noa48','Lemoine', 'Noa', 'michel8.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Romain_Roussel21','Roussel', 'Romain', 'michel10.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Pauline9','Lefevre', 'Pauline', 'michel11.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Camille69','Dufour', 'Camille', 'michel31.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Antoine_Lecomte','Lecomte', 'Antoine', 'michel32.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Léo95','Roy', 'Léo', 'michel33.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Miche','Duponde', 'Michelle', 'michel34.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Michouuu','Dupond', 'Michel', 'michel35.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Clara21','Marie', 'Clara', 'michel36.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Yanis.Lemoine','Lemoine', 'Yanis', 'michel37.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Baptiste11','Dufour', 'Baptiste', 'michel38.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Jade.Louis68','Louis', 'Jade', 'michel39.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Pauline_Fernandez','Fernandez', 'Pauline', 'michel322.durand@gmail.com','ici une photo','sixOneNine','user','activé'),
('Lena_Lefebvre','Lefebvre', 'Lena', 'michel422.durand@gmail.com','ici une photo','sixOneNine','admin','desactivé');


INSERT INTO "lesson" ("title", "description","level", "teacher_id", "plannified", "status") VALUES
('La physique Chimie pour les Nul','Une introduction a la physique-chimie','easy',1,null,'finis'),
('La physique Chimie pour les Novice','1er chapitre de physique-chimie','normal',1,null,'commencé'),
('La physique Chimie pour les Pratiquant','On commence vraiement physique-chimie','expert',4,null,'plannifié'),
('La physique Chimie pour les Pro','Un cours avancé de physique-chimie','hard',4,null,'plannifié'),
('La physique Chimie pour les petits Enstein','Haut niveau de physique-chimie', 'hard',5,null,'supprimé');

INSERT INTO "ask" ("title", "description", "author_id","want_it", "level", "status") VALUES
('Par quoi commencer?','Quand on debute',1,1,'easy','actif'),
('Jaimerais un cours sur ','Un pied devant lautre',2,1,'normal','actif'),
('La numero TROIS','Qui sy frotte sy pique',3,1,'hard','actif'),
('PAYER POUR AGIRE','Quand on a de la bouteille',4,1,'expert','inactif'),
('PAS POUR LIRE','Quand on veux se perfectionner',5,2,'hard','actif');

INSERT INTO "message" ("author_id","lesson_id", "content", "status") VALUES
(1,1,'blablabla','lue'),
(2,2,'blablabla','non-lue'),
(3,3,'blablabla','supprimé'),
(4,4,'blablabla','modifié'),
(5,5,'blablabla','lue');


INSERT INTO "category" ("name", "color", "description", "status") VALUES
('Physique', null, 'un cours de physique',1),
('Chimie', null,'un cour de chimie',1),
('Anglais', null,'des cours en anglais',1),
('Imitation', null, ' imitation',1),
('Nature', null,'bio',1);

INSERT INTO "lesson_has_category" ("lesson_id", "category_id") VALUES
(1,1),
(2,1),
(3,4),
(4,4),
(5,5);

INSERT INTO "ask_has_category" ("ask_id", "category_id") VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

INSERT INTO "user_subscribe_ask" ("ask_id", "user_id") VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

INSERT INTO "user_has_lesson" ("user_id", "lesson_id") VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);
(6,6);
(7,7);
(8,8);
(9,9);
(10,10);

INSERT INTO "user_subscribe_lesson" ("lesson_id", "user_id") VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

INSERT INTO "user_want_lesson" ("lesson_id", "user_id") VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(4,5),
(5,5);
