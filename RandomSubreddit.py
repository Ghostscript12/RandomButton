import praw

reddit = praw.Reddit(client_id='r7VoJuE4sbh_qQ',
                     client_secret='UOfeQwQt3VEavagbXecRXZssM2o',
                     user_agent='OSX:com.example.Randomizer:v1.0.0 (by /u/Jaymonkey02)')

subreddit = reddit.random_subreddit(nsfw=False)

print(subreddit)
