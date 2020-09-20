
import pandas as pd
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

    def compute_similarity(self, vectors):
        cosine_sim = linear_kernel(vectors, vectors)

        return cosine_sim


    movies = DataHandler().get_data()
    titles = DataHandler().get_data()['title']
    indices = pd.Series(movies.index, index=movies['title'])
    vectors = create_feature_vectors(None, movies)
    similarities = compute_similarity(None, vectors)
    def genre_recommendation(self, title):
        index = self.indices[title]
        sim_scores = list(enumerate(self.similarities[index]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[1:21]
        movie_indices = [i[0] for i in sim_scores]

        return self.titles.iloc[movie_indices]


model = Model()
recommends = model.genre_recommendation('Good Will Hunting (1997)').head(20)
print(recommends)