import axios from "axios";

export default {
  // Gets all polygons
  getpolygons: function() {
    return axios.get("/api/polygons");
  },
  // Gets the book with the given id
  getpolygon: function(id) {
    return axios.get("/api/polygons/" + id);
  },
  // Deletes the book with the given id
  deletepolygon: function(id) {
    return axios.delete("/api/polygons/" + id);
  },
  // Saves a book to the database
  savepolygon: function(polygonData) {
    return axios.post("/api/polygons", polygonData);
  }
};
