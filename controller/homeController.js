const Home = require("../models/homeModel");
exports.getHome = (req, res) => {
    Home.fetchAll().then(([rows, fieldData]) => {
        res.render("home", {
            homes: rows
        })
    });
}



    exports.postaddhome = (req, res) => {
        const home = new Home(
            req.body.houseName,
            req.body.price,
            req.body.description,
            req.body.rating,
            req.body.imageUrl,
            req.body.location
        );
        home.save().then(() => {
            res.redirect("Success")
        }).catch(err => console.log(err));


    }

exports.getAddform = (req, res) => {
    res.render("Add-Home-form", { home: null }); // <- important
}

exports.gethomepost = (req, res) => {
    res.render("Success")


}

exports.getHomelistpage = (req, res) => {
    Home.fetchAll().then(([rows, fieldData]) => {
        res.render("Home-List-Page", {
            homes: rows
        })
    });
}
exports.postdelethome = (req, res) => {
    const homeId = req.body.homeId;

    Home.deletbyId(homeId)
        .then(() => {
            res.redirect("/Home-List-Page");
        })
        .catch(err => console.log(err));
};


exports.getEditHome = (req, res) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then(([rows]) => {
        if (rows.length === 0) return res.redirect("/Home-List-page")

        res.render("Add-Home-form", {
            home: rows[0]
        })
    }).catch(err => console.log(err));

}

exports.postedithome = (req, res) => {
    const { id, houseName, price, description, rating, imageUrl, location } = req.body;
    

    Home.updateById(id, houseName, price, description, rating, imageUrl, location)
        .then(() => res.redirect("/Home-List-Page"))
        .catch(err => console.log(err));
};

