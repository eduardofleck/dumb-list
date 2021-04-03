drop table public.predictions;
drop table public.persons;
drop table public.users;

INSERT INTO public.persons(id, name, "createdAt", "updatedAt")
	VALUES (1, 'Bolsonaro', current_date, current_date);
	
INSERT INTO public.persons(id, name, "createdAt", "updatedAt")
	VALUES (2, 'Osmar Terra', current_date, current_date);
	
INSERT INTO public.persons(id, name, "createdAt", "updatedAt")
	VALUES (3, 'Samy Dana', current_date, current_date);
	
INSERT INTO public.predictions(
	id, what, "when", "predictedMany", "predictedDate", "personId", "createdAt", "updatedAt")
	VALUES (1, 'deaths', current_date, 800, null, 1, current_date, current_date);

INSERT INTO public.predictions(
	id, what, "when", "predictedMany", "predictedDate", "personId", "createdAt", "updatedAt")
	VALUES (2, 'deaths', current_date, 5000, null, 2, current_date, current_date);
	
INSERT INTO public.predictions(
	id, what, "when", "predictedMany", "predictedDate", "personId", "createdAt", "updatedAt")
	VALUES (3, 'deaths', current_date, 4000, null, 3, current_date, current_date);