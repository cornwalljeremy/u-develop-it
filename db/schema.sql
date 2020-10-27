CREATE TABLE candidates (
  id INT auto_increment,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);
