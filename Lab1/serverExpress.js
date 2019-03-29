//
var list = [];
// подключение express
const express = require("express");
const bodyParser = require("body-parser");
// создаем объект приложения
const app = express();	
// парсер для данных
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
	response.send(list);
});

app.post("/", function(req, res) {
	list.push(req.body);
	res.send(req.body);
	
});
app.delete("/", function(req, res) {
	list.pop();
	res.json("<h2>Удалил</h2>");
});
app.put("/", function(req, res) {
	list.splice(req.body.index,1);
	res.send("<h2>PUT запрос</h2>");
});
app.options("/", function(req, res) {
	res.setHeader('Allow', 'GET, POST, DELETE, PUT, OPTIONS')
	res.json({ response: "This is OPTIONS"});
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);