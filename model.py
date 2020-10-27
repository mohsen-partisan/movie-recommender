
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from data_handler import DataHandler

class Model:

    def create_feature_vectors(self, movies):
        movies['genres'] = movies['genres'].str.split('|')
        movies['genres'] = movies['genres'].fillna("").astype('str')
        tf = TfidfVectorizer(analyzer='word', ngram_range=(1, 2), min_df=0, stop_words='english')
        vectors = tf.fit_transform(movies['genres'])

        return vectors

    def compute_similarity(self, movie_index, matrix):
        cosine_similarity = linear_kernel(matrix[movie_index], matrix)

        return cosine_similarity

movies = DataHandler().get_data()
model = Model()
titles = movies['title']
indices = pd.Series(movies.index, index=movies['new-title'])
matrix = model.create_feature_vectors(movies)

def genre_recommendation(title):
    try:
        movie_index = indices[title]
    except KeyError:
        return ("Movie Not Found")
    similarity_scores = model.compute_similarity(movie_index, matrix)
    # sort movies from high similar to low
    sorted_similarity_scores = np.argsort(-similarity_scores)
    # select just 20 first high similar movies
    recommend_ids = sorted_similarity_scores[0][0:21]
    # remove query movie from similar movoes list if exists in it
    index = np.argwhere(recommend_ids == movie_index)
    recommend_ids = np.delete(recommend_ids, index)

    recommend_movies = titles.iloc[recommend_ids]

    # convert ndarray to list for being serialized for rest api
    return recommend_movies.values.tolist()





