
import pandas as pd
import numpy as np
import os

MOVIELENS_DIR = 'data/'
MOVIES_CSV_FILE = 'movies-2019.csv'


class DataHandler:

    def manipulate_data_file(self):
        movies = pd.read_csv(MOVIELENS_DIR + MOVIES_CSV_FILE, sep=',')
        # create new column from title column for better user search experience
        movies['new-title'] = np.nan

        movies['new-title'] = movies['title'].astype(str).replace('[^0-9a-zA-Z]', '', regex=True)
        movies['new-title'] = movies['new-title'].str.lower()

        # Save into movies.csv
        movies.to_csv(MOVIELENS_DIR + MOVIES_CSV_FILE,
                      sep='\t',
                      header=True,
                      columns=['movie_id', 'title','new-title', 'genres'])
        print('Saved to', MOVIELENS_DIR + MOVIES_CSV_FILE)

    def get_data(self):
        data = pd.read_csv(MOVIELENS_DIR + MOVIES_CSV_FILE, sep=',')

        return data


data = DataHandler()
