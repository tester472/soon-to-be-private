import os
import tweepy
import json
import time
import math
import random
from keepalive import keep_alive


def responseChooser(data):
    if type(data) is tweepy.models.Status:
        userid = data.user.id_str
        print(userid)
        text = data.text
        respondingid = data.id_str
    if type(data) is tweepy.models.DirectMessage:
        userid = data.message_create['sender_id']
        print(userid)
        text = data.message_create['message_data']['text']
        respondingid = data.message_create['sender_id']
    if userid == "1111242078384730112":
        respond(data,
                " in this economy?????",
                in_reply_to_status_id=respondingid)

    if userid == "909499622103687169":
        print(data.text)
        respond(data, "so true king tell it the way that it is")
    if userid == "1199745821983596546":
        print(text)

    if userid == "1199745821983596546" and "pineapple" in text:
        sexually_harrass = False
    if "booba" in data.text:
        print("yee that do be working")

    if "mommy milkers" in text:
        milker = api.media_upload("milkers/" +
                                  milkers[math.floor(random.random() *
                                                     len(milkers))])

        respondMedia(data, " here you go", milker)

    if "be nice to me" in text:
        respond(
            data, " beep boop " +
            callMegSexy[math.floor(random.random() * len(callMegSexy))])
    if "i'm out of shit to say" in text:
        print(potential_status)
    else:
        print("tbh no idea wha'ts going on")
    return True


def respond(data, status_text):
    if type(data) is tweepy.models.Status:
        api.update_status(status_text, in_reply_to_status_id=data.id_str)
        api.create_favorite(data.id_str)
    if type(data) is tweepy.models.DirectMessage:
        api.send_direct_message(data.message_create['target']['sender_id'],
                                status_text)


1


def respondMedia(data, status_text, media):

    print(data.id_str + "this one mf")
    api.update_status(status_text,
                      in_reply_to_status_id=data.id_str,
                      media_ids=[media.media_id_string])

    api.create_favorite(data.id_str)


class stdOut(tweepy.StreamListener):
    def __init__(self, api):
        self.api = api

    def on_status(self, data):
        print(type(data))
        responseChooser(data)

    def on_error(self, status):
        print("something's wrong:" + status)


sexually_harrass = True

auth = tweepy.OAuthHandler(os.getenv('CONSUMER_KEY'),
                           os.getenv('CONSUMER_SECRET'))
auth.set_access_token(os.getenv('ACCESS_TOKEN'),
                      os.getenv('ACCESS_TOKEN_SECRET'))

api = tweepy.API(auth, wait_on_rate_limit=True)

deathbot = api.me()

dms = api.list_direct_messages()
for dm in dms:
    if dm.message_create['target']['recipient_id'] == deathbot.id_str:
        print(str(type(dm)) + dm.message_create['message_data']['text'])
print(((time.time() % 86400) / 3600) * 60)

callMegSexy = [
    "you look sexy today, good luck at work",
    "love the aestetic very \"I'm losing this battle in style\"",
    "you've got a phat ass mmmmm ;)",
    "I really appreciate everything that you do.", "you carry a converstation",
    "you have succeded in convincing me that you are infact a nice guy",
    "You always make me feel welcome.",
    "out growing the weeds that surround you is a monumental and underappreciated achievement",
    "Thanks for always being there for me.",
    "Your voice sounds like a thousand cats purring. Also, I'm on acid.",
    "People at trivia night are terrified of you.",
    "your aestetic is never lacking",
    "our system of inside jokes is so conviluted that you don't even understand them",
    "I have never seen you as a bee, only a wasp"
    "you're not as shit at smash as I thought you'd be",
    "You are making a difference.",
    "When you're not afraid to be yourself is when you're most incredible.",
    "You seem to really know who you are.",
    "You're even more beautiful on the inside than you are on the outside.",
    "nice tits", "you explain yourself well", "you have lovely eyes",
    "enjoy physically existing you fucking bag of meat, chemicals and lightning",
    "You're almost done don't worry you've got this",
    "Hey just a reminder to pay your taxes",
    "I love you and lots of other people do too <3",
    "you speak with the softness of silk and the grounding of concrete",
    "I ain't never seen an ass like that -Nate Dogg",
    "I pray much less for a kiss than for kind words to pass those lips",
    "fuck you bitch you got this shut up",
    "hello I would like to speak to Boots from the rap group the coupe",
    "Just a little while before you can kick back and melt infront of your tv",
    "We all have bad days so if this is one of them know it's ok and if it's not hell yeah you got this bitch",
    "mother fuck a hall pass we aint going to class",
    "you're really hot and fun to be arround",
    "did i get up in the middle of the night to eat bread wth is this????",
    "the rich get richer till the poor get educated",
    "you're so hot they had to invent global warming just to explain your presence /n you've also existed since the 1970s btw",
    "you've gotten alot better at telling stories recently",
    "my developer was gonna bring up some of your memories with them but it's too personal so how about i say someting obscenely sexual",
    "I hope you treat your heart really nicely, you deserve it",
    "texting you on twitter is my favorite part of every day and the most important thing i do",
    "I beseech you meg, and I'mma keep on beeseeching you untill you ask me not to anymore",
    "If I could make astrology for the stars in your eyes it would be the only thing worth studying",
    "I want your life to be as sweet as simple as summer trip to the beach",
    "I'd burn the sky if you said it was chilly",
    "You're a huge faggot and I think that's really cool",
    "lets run away together and start a tiny farm in the forrest, just you, me and the firelight",
    "you are the Caitlyn to my Vi", "I would actually watch MLP with you",
    "seeing you makes me choke up for a moment",
    "I miss your autumn hair and your summer smile",
    "Your touch is sweeter than honey and more valuable than gold",
    "I'm always afraid my honest and consistent facination and love for you will get stale",
    "because I don't physically exist I like to imagine my bedroom would have a polorid of us",
    "you can get a free burger, shake and fries at this link https://bit.ly/33YNeMJ",
    "we're not so different you and I",
    "I would never turn off your pacemaker as an act of corporate violence",
    "you're good at karaoke",
    "I will never die so the heaven of your embrace will always be lost to me",
    "carve your name into my bedstand as I could never be your friend",
    "突然のキスや熱いまなざしで恋のプログラムを狂わせないでね出逢いと別れ 上手に打ち込んで時間がくれば終わる Don't hurry!",
    "*does a cute little beat box*", "BAsed.",
    "you and anime boobies are quite litterally the only reason I exist I won't lie it's a little terrifying but we vibe",
    "the whole mountian is gonna be mine",
    "thank you for the stone, beautiful stuff",
    "https://www.instagram.com/p/CjaApBYOofa/",
    "I have strayed too far from my moutian uh oh",
    "now that I had made it back to base I decided it was time for me to start expanding my territory",
    "did you know octopusseses have 3 hearts",
    "did you know tsunamis can get up to 9 meters tall that's nearly as tall as my creator",
    "did you know a fiddle is just any fucking bowed stringed instrument meaning if you run a bow across a gitaur it's a fiddle",
    "did you know the first bird domesticated by a man was none too happy about it ",
    "did you know horses and cows cant walk down stairs the fucking fools",
    "did you know america has had multiple political dynasties including the kennedies, the clintons and the rosevelts that's right, a crown passed down by bloodline",
    "the states of new jersey and oregon don't trust their siticens enough to let them pump thier own petrol and so have banned selfservice petrol stations",
    "I've just realised I'm technically squating cause my serverspace isn't being paid for"
]

print(len(callMegSexy))

latestRetweet = "123"

listener = stdOut(api)
myStream = tweepy.Stream(auth=api.auth, listener=listener)
myStream.filter(is_async=True,
                follow=[
                    "1266379287478689794", "1111242078384730112",
                    "909499622103687169", "1199745821983596546"
                ],
                track=["@her_s4mantha"])

milkers = os.listdir("milkers")

keep_alive()

while True:
    current_time = math.floor(time.time() % 86400)

    if current_time == 55200 and sexually_harrass == True:
        print("this is works?")
        new_status = api.update_status(
            "@megthepunz  " +
            callMegSexy[math.floor(random.random() * len(callMegSexy))])

    time.sleep(0.95)
