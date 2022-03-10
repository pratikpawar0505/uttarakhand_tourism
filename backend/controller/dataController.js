const { mysql_connect } = require("../connection/connection");

// Travel Package
function travel(req, res) {
  console.log(req.params.name);
  let place_name = req.params.name;
  mysql_connect.query(
    `Select * from travel_places tp inner join travel_places_images tpi where tp.id=tpi.travel_places_id and name='${place_name}'`,
    (err, response) => {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(JSON.stringify(response));
        //   console.log(response);
      }
    }
  );
}

module.exports = {
  travel,
};
