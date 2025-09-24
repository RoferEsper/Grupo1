create database tpprogramacion;
USE tpprogramacion;

CREATE TABLE cursos(
	id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    descripcion VARCHAR(100)
);

CREATE TABLE estudiantes(
	id_estudiante INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    email VARCHAR(200)
);

CREATE TABLE inscripciones(
	id_inscripcion INT PRIMARY KEY AUTO_INCREMENT,
    fecha_inscripcion DATE,
    id_estudiante INT,
    id_curso INT,
	FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante) ON DELETE CASCADE,
	FOREIGN KEY (id_curso) REFERENCES cursos(id_curso) ON DELETE CASCADE
);

INSERT INTO cursos (nombre, descripcion) VALUES
('Inglés', 'Curso de inglés básico e intermedio'),
('Programación', 'Fundamentos de programación en distintos lenguajes'),
('Matemática', 'Curso de matemática general y aplicada');

INSERT INTO estudiantes (nombre, email) VALUES
('Karol G', 'karolg@example.com'),
('Rosalía', 'rosalia@example.com'),
('Anitta', 'anitta@example.com'),
('Natti Natasha', 'nattinatasha@example.com'),
('Nicki Nicole', 'nicki@example.com'),
('Emilia Mernes', 'emi@example.com');

INSERT INTO inscripciones (fecha_inscripcion, id_estudiante, id_curso) VALUES
('2025-01-15', 1, 1), 
('2025-02-20', 2, 2), 
('2025-03-05', 3, 3), 
('2025-04-10', 4, 1), 
('2025-05-01', 5, 2), 
('2025-05-12', 6, 3);

select inscripciones.id_inscripcion, inscripciones.fecha_inscripcion, 
estudiantes.id_estudiante as id_estudiante, estudiantes.nombre as nombre_estudiante, estudiantes.email as email_estudiante, 
cursos.id_curso as id_curso, cursos.nombre as nombre_curso, cursos.descripcion as descripcion_curso from inscripciones
join estudiantes 
on inscripciones.id_estudiante  = estudiantes.id_estudiante 
join cursos
on inscripciones.id_curso = cursos.id_curso;

select * from cursos;
select * from estudiantes;
select * from inscripciones;