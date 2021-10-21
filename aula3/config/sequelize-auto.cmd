 npm install -g sequelize sequelize-auto mysql2
 
 sequelize-auto -h 127.0.0.1 -d aula2 -u root -x senha_123 -p 3306  --dialect mysql -c "./config" -o "./model" -t usuario
