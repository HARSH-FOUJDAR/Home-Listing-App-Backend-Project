const db = require("../utils/database");

class Home {
    constructor(houseName, price, description, rating, imageUrl, location, id) {
        this.houseName = houseName;
        this.price = price;
        this.description = description;
        this.rating = rating;
        this.imageUrl = imageUrl;
        this.location = location;
        this.id = id;
    }

    save() {
        return db.execute(
            `INSERT INTO airbnb.home_table 
            (houseName, price, description, rating, imageUrl, location) 
            VALUES (?,?,?,?,?,?)`,
            [this.houseName, this.price, this.description, this.rating, this.imageUrl, this.location]
        );
    }

    static fetchAll() {
        return db.execute("SELECT * FROM airbnb.home_table");
    }

    // ✅ ONLY SELECT
    static findById(id) {
        return db.execute(
            "SELECT * FROM airbnb.home_table WHERE id = ?",
            [id]
        );
    }

    static deletbyId(id) {
        return db.execute(
            "DELETE FROM airbnb.home_table WHERE id = ?",
            [id]
        );
    }

    static updateById(id, houseName, price, description, rating, imageUrl, location) {
        return db.execute(
            `UPDATE airbnb.home_table 
             SET houseName=?, price=?, description=?, rating=?, imageUrl=?, location=? 
             WHERE id=?`,
            [houseName, price, description, rating, imageUrl, location, id]
        );
    }
}

module.exports = Home;
