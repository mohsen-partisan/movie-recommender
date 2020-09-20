
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt
from data_handler import DataHandler

class DataExploration:

    def create_wordcloud(self):
        movies = DataHandler().get_data()
        movies['title'] = movies['title'].fillna("").astype('str')
        title_corpus = ''.join(movies['title'])
        wordcloud = WordCloud(stopwords=STOPWORDS, background_color='black', height=2000,
                              width=4000).generate(title_corpus)

        plt.figure(figsize=(16, 8))
        plt.imshow(wordcloud)
        plt.show()



explore = DataExploration()
explore.create_wordcloud()
