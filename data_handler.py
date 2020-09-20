
import pandas as pd
import os

MOVIELENS_DIR = 'data/'
MOVIE_DATA_FILE = 'movies.dat'
MOVIES_CSV_FILE = 'movies.csv'


class DataHandler:

    def create_csv_from_dat_file(self):
        # Read the Movies File
        movies = pd.read_csv(os.path.join(MOVIELENS_DIR, MOVIE_DATA_FILE),
                             sep='::',
                             engine='python',
                             encoding='latin-1',
                             names=['movie_id', 'title', 'genres'])
        print(len(movies), 'descriptions of', 'movies loaded.')

        # Save into movies.csv
        movies.to_csv(MOVIELENS_DIR + MOVIES_CSV_FILE,
                      sep='\t',
                      header=True,
                      columns=['movie_id', 'title', 'genres'])
        print('Saved to', MOVIELENS_DIR + MOVIES_CSV_FILE)

    def get_data(self):
        data = pd.read_csv(MOVIELENS_DIR + MOVIES_CSV_FILE, sep='\t')

        return data


data = DataHandler()
data.create_csv_from_dat_file()
