
import flask
from flask_cors import CORS
from model import Model
import os 


app = flask.Flask(__name__)
CORS(app)

BASE_PATH = "/movie-recommender"

@app.route('/')
def index():
    return flask.render_template('index.html')

@app.route(BASE_PATH + "/recommended-movies", methods=["GET", "POST"])
def get_recommended_movies():
    data = {"success": False}
    params = flask.request.json
    if(params == None):
        params = flask.request.args

    if (params != None):
        favorite_movie = params.get("your_movie")
        data["response"] = Model().genre_recommendation(favorite_movie)
        data["success"] = True

    return flask.jsonify(data)



if __name__ == "__main__":
    app.run()
