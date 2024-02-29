
show databases;

show tables;

-- 	private int no;
--	private String name;
--	private String company;
--	private int price;
--	private int year;

drop table IF EXISTS car;

create table car (
	no number(4) primary key auto_increment,
	name varchar2(20) not null,
	company varchar2(20),
	price number(4),
	yeonsik number(4)
);

SELECT * FROM CAR;

insert into car (name, company, price, yeonsik)
values ('GRANDEUR', 'HYUNDAI', 3400, 2019);
insert into car (name, company, price, yeonsik)
values ('K9', 'KIA', 5500, 2020);

update car set name='K7', price=2500 where no=2;

select * from car where no=2;
delete from car where no=2;