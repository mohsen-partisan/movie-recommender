
import flask
from flask_cors import CORS
from model import Model
import os 


app = flask.Flask(__name__, static_folder='./ui', static_url_path='/')
CORS(app)

BASE_PATH = "/movie-recommender"

@app.route('/')
def index():
    return app.send_static_file('index.html')

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
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 443))
