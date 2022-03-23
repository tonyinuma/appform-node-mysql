const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer", (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render("customers", {data: customers});
        });
    });
};

controller.add = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query("INSERT INTO customer set ?", [data], (err, result) => {
            if (err) {
                res.json(err);
            }
            res.redirect("/");
        });
    });
};

module.exports = controller;
