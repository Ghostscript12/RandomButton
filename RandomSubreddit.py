import praw
#Connects to Reddit
reddit = praw.Reddit(client_id='r7VoJuE4sbh_qQ',
                     client_secret='UOfeQwQt3VEavagbXecRXZssM2o',
                     user_agent='OSX:com.example.Randomizer:v1.0.0 (by /u/Jaymonkey02)')
#Obtains a random subreddit
subreddit = reddit.random_subreddit(nsfw=False)
#Sends to the console so node can recieve it
print(subreddit)
