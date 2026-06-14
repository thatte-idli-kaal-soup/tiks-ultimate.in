+++
title = "Goodbye RSVP app!"
date = 2026-06-13T15:08:32Z
draft = false
slug = "goodbye-rsvp-app"
author = "Punch"
+++

8 years ago, we tried an experiment at [Rajan]'s suggestion. We forked a baby
open source app and made it [our own]. We just started with the idea of making
the WhatsApp group less noisy by cutting down all the RSVPs aka call-ins, but
over these years we added a whole bunch of features with ideas from y'all, like
Google based logins, posts for long-lived content, media sharing, shared
calendar, Secret Santa, etc.

In the last couple of years, the app hasn't been getting enough love. A
plain-old RSVP app shouldn't need much, but we added a bunch of personally
identifiable information (PII) to the app to make team management easier. I
have been worrying about all this PII for months now. We now have a new app
by [KUPA] who will do this properly!

As a goodbye, I thought it'd be fun to write up a summary post.

## Some features via numbers

Though it's called an "RSVP app", over time we ended up adding a bunch of
features that we felt would make it easier to manage the team.

### Events

Obviously, the Events and the RSVP feature was the most used. In a span of 8
years, we had around ~1300 events -- most of them are practices that actually
happened, but some cancelled ones too alongside other events like tournament
call-ins, Secret Santa lists, bachelorette party and wedding reception RSVPs
too! I was so happy to see that the most attended event happened to be the 10th
Anniversary Celebration of TIKS. 🎉

1150+ practices across 420 weeks averages to about 2.8 sessions per
week, which is crazy considering the multiple waves of COVID-19 and the fact
that Saturday pick-ups are no longer a thing.

{{< figure
  src="/images/charts/events-evolution.svg"
  alt="A chart showing event distribution across years"
  caption="When did we play? 2018 to 2026"
>}}

{{< figure
  src="/images/charts/players-timeline.svg"
  alt="A chart showing active and inactive players"
  caption="Players with 30+ events attendance"
>}}

### WhatsApp noise

How much WhatsApp noise did we cut-down for real? By using the app, we avoided
sending around 17,000 messages or about 40 messages a week with just names in
them. If we put all these names together into a document, at over 150k words,
it'd be somewhere in between the length of Prisoner of Azkaban and the Goblet
of Fire.

### Posts

We added the posts functionality to share messages with longer-term value in a
place where they wouldn't get buried in the WhatsApp chat. But, we only had 40
posts overall, a bunch of which were re-shared articles we'd found elsewhere.

I've archived 3 articles written by humans in the pre-AI era, [on this site],
even if just for AI to now learn from 🤷. WhatsApp has a knack of making things
feel "easier" or maybe we just don't mind it because of how much time we all
seem to spend on it!

### Photos

I've always felt that this feature wasn't used enough (to satisfy my urge to
archive), but we've had 2600+ photos in 65 or so albums shared via the app.
About 8 albums a year, doesn't sound that bad!

There was certainly some friction in uploading media via this app, in a large
part because I chose to use Google Drive as a storage and permission mechanism
and not do our own media store. It meant we had limited control on the share
workflow and whose Google Drive storage limits get used. But, it is also this
decision that today makes it easy to retain all the media and access
permissions without much hassle. I've tried to preserve the index of the shared
albums in this post's [appendix]. I'll definitely miss the collage of random
photos I'd see each time I opened the app on my laptop, though.

### Secret Santa

Like a lot of other (unused) features on this app, I over engineered how we
organized Secret Santa too. The app randomized and automatically assigned
kiddos to the Santas and emailed them the deets. We organized 8 editions of
these, one every year, though we've all had our share of Santas from the
"southern hemisphere".

### Stuff that you didn't know existed

In a long list of other over-engineered things, there were:

- a shared Google calendar with people's birthdays synced to it. 120+ people
  had entered their birthdays into the app.
- a [Zulip] [bot] that announced new RSVP events or posts and allowed folks to
  call-in without opening the RSVP app.
- an interactive chart on user profiles to see their own attendance with
  filtering options like day of week, etc.
- a Progressive Web App to allow "installing" the app on your phone's home
  screen and make it easy to share media via the app.
- and even an Onesta easter egg (inspired by Aki) to easily find team-mates who
  qualify to use Onesta's weekly offers based on letter sequences in names.

### The Development

Who thought a simple RSVP app would need 750+ commits? More than 2/3rds of this
work was in 2018 and 2019, and then there was the COVID lull. Almost all the
commits were mine, but your feature requests, suggestions, complaints and
excitement are what fueled it. What started as just an experiment to escape an
annoyance turned into an exciting side-project. Thank you 💛!

{{< figure
  src="/images/charts/dev-timeline.svg"
  alt="A chart showing development activity and timeline"
  caption="Weekly development activity"
>}}


### Outro

If you enjoyed this post or using the app, feel free to buy me a coffee at [One
All], [Y-Ultimate], or [Project KHEL] and let me know!

See you on the field!

[Rajan]: https://github.com/Adityar93
[our own]: https://github.com/thatte-idli-kaal-soup/rsvpapp/
[KUPA]: https://karnatakaultimate.web.app/
[on this site]: /archive/
[appendix]: #photo-appendix
[Zulip]: https://zulip.com
[bot]: https://github.com/thatte-idli-kaal-soup/namma-bots/
[One All]: https://one-all.in/supportus/
[Y-Ultimate]: https://www.yultimate.org/donate/
[Project KHEL]: https://projectkhel.org/donate/

### Photo Appendix

{{<details summary="See all the photo albums">}}

NOTE: I removed some albums with "Anyone with link can view" permissions from this list.

- [2017-04 Vikini's bachelor(ette) party](https://drive.google.com/drive/folders/1PvYu_5cxJnOSovrFMptEmQrbyLYTjlhJ) (8 photos)
- [2017-11 Prats + Krupa bachelorette party](https://drive.google.com/drive/folders/1OhEdvD6SEsyWh_vcfpPvYQYQLv0M7LZZ) (15 photos)
- 2018-04 FlyBaba
  - [2018-04 FlyBaba > Daanish](https://drive.google.com/drive/folders/1HRllKTY678LvRb5b-J60bGirH1ZzI8X1) (40 photos)
  - [2018-04 FlyBaba > Krishna media](https://drive.google.com/drive/folders/16kzB-0f5auk_NFAwBe25_L5hs_prRv6A) (5 photos)
  - [2018-04 FlyBaba > Vinay's Phone](https://drive.google.com/drive/folders/1lanPh0OyQYH78QViqPOPmBk1qWw9QnSP) (25 photos)
- [2018-05 Slipdisc Game (Sakkath Practice)](https://drive.google.com/drive/folders/1nnIzbBPSlFcnEJ0QkHxG3V2UzwpMYerJ) (53 photos)
- [2018-06 Sakkath](https://drive.google.com/drive/folders/1roEJam8dHB89pVlU0wiS71iqZwUM0pS6) (53 photos)
- [2018-07 JP Nagar Turf](https://drive.google.com/drive/folders/1QbI1d9R5JLpPb5TOUl4Q-OjPqZrJfkmw) (39 photos)
- [2018-08 Sectionals 1](https://drive.google.com/drive/folders/1mcJ1JaPgZQAlJ1uZPugvypEf7wW87su3) (51 photos)
- 2018-09 Sectionals 2
  - [2018-09 Sectionals 2 > Day-1](https://drive.google.com/drive/folders/1k5G1aH8NAgfm_vFl6EgHG64kenvis9Ux) (164 photos)
  - [2018-09 Sectionals 2](https://drive.google.com/drive/folders/1DeDzZQyNClusKxevFJHypy4Q6sunILLN) (59 photos)
- [2018-10 Cutlet](https://drive.google.com/drive/folders/1kdIaP3FtY-o4WCb6aypE2MOC1HCAIuDb) (18 photos)
- [2018-10 Varunya Birthday](https://drive.google.com/drive/folders/1PKeu12ayqKINbCEHy3Jb7lQY_g5nNX3j) (1 photos)
- [2018-11 Sectionals 3 > Day-2](https://drive.google.com/drive/folders/1Zdg3bQryP1YckqRUS32mqbEFJaytrUyj) (103 photos)
- [2018-11 V & Q's wedding > Gudalur Ceremony](https://drive.google.com/drive/folders/10gM6VsrPqrRT_smJQ9fFfB_0Dfrg2Sc2) (20 photos)
- [2018-12 Christmas](https://drive.google.com/drive/folders/1yBrKj9zJwzQcaxYUfJd8YOYIxrWmLmre) (7 photos)
- [2018-12 Naashta First](https://drive.google.com/drive/folders/10WEN8qjrkASOchFIrqdmlCyk1FHIEHxB) (9 photos)
- [2018-12 Regionals](https://drive.google.com/drive/folders/1UYtlBGAn6Q9JL7OAnGtjCqaGQDCnp0s_) (28 photos)
- [2019 May, June, July](https://drive.google.com/drive/folders/17QLNdjgjs9spnWsSJI_vLjSYN0Di8SfX) (15 photos)
- [2019-01 Rush Arena Minis](https://drive.google.com/drive/folders/1NG35kEYqAPJOgpDOW7OA1dNHSU9-H6D9) (9 photos)
- [2019-02 Auroville](https://drive.google.com/drive/folders/1LkbUfoPJ3vMyLYdHUiI77WAM_KpPD9Py) (22 photos)
- [2019-02 Team Meeting](https://drive.google.com/drive/folders/1iYIciJ2jYj-mv1AsKnd8jXgWCVAn8-2v) (9 photos)
- [2019-04 Flybaba](https://drive.google.com/drive/folders/14F1yZAU43_-pLNcaWucL769pYO34FE7e) (25 photos)
- [2019-07 KP Birthday](https://drive.google.com/drive/folders/16HIc2W-7b1TpPEo1Wxct4mLzvMM3mfaN) (29 photos)
- [2019-07 Sakkath](https://drive.google.com/drive/folders/1w00zkVFuuLtAhwpaUvzy7usXmlRt2gAZ) (160 photos)
- [2019-09 Breakfast sessions](https://drive.google.com/drive/folders/1fOvJKDRz1BNYWANyhwvpQh6OopUUefhO) (3 photos)
- [2019-10 Sectionals-2 NCS 2019-20](https://drive.google.com/drive/folders/1994YO09ZzVCwCu9EtePuumEAabld64Uo) (24 photos)
- [2019-11 DoD BFS Opens Morning Game](https://drive.google.com/drive/folders/1K8RUpPfmvVRL0zB0TFyFwuI-lBws1UVv) (6 photos)
- [2019-11 Throwing Set (Ini, Punch)](https://drive.google.com/drive/folders/1D33f5SOEZLMPmAKnnMOOiD7f-cMpjWdy) (4 photos)
- [2019-12 V & Q Gudalur](https://drive.google.com/drive/folders/1nGVIs7_wdjBLtaHddmnoLy4-pfpc3u8P) (20 photos)
- [2019-12-07 Praki marriage unnecessary](https://drive.google.com/drive/folders/1lmShs6Tbtd-kpG5zXD97gZX3wkzPByhU) (35 photos)
- [2020-01 Random breakfast pictures](https://drive.google.com/drive/folders/1QEAwP6Ocw2-Lkb_0D3d3NsVkgCL4hz9R) (4 photos)
- [2020-02 Nationals 2019-2020](https://drive.google.com/drive/folders/1UhdT3sQRkX4il4PG6FCeV8wvNPG-F-OM) (3 photos)
- [2021-01 Game against Hammer heads (Ulsoor)](https://drive.google.com/drive/folders/1zKBt1j2ZQC3-Vbr_QHwBttN308DlgiCw) (8 photos)
- [2021-10-22 Sanjana Birthday Nashta First](https://drive.google.com/drive/folders/1vFDFeVuYuc0tBSAR1nKdIn-Da8gKAI-M) (8 photos)
- [2021-10-23 Aki & Prats Housewarming and Team meeting](https://drive.google.com/drive/folders/1n4Dn6pg1AbUlaRfpGafryUDtowxEMfw9) (12 photos)
- [2022-01 New Year](https://drive.google.com/drive/folders/1gpl-u7_-sZRg6kIu5_gRG2M2zhMEgv9y) (53 photos)
- [2022-04 Sufc/NCJ Sessions](https://drive.google.com/drive/folders/1uhy_za8xau8G0VkO9kHmyUVdzQep3yjX) (21 photos)
- [2022-04-08 BMS Showcase event](https://drive.google.com/drive/folders/1r6SwsC5b74oiekm8Tt-GQtpxunPfj1I0) (5 photos)
- [2022-04-23 Sanj Bachelorette](https://drive.google.com/drive/folders/1xDlK11aPu4dP9ZxpWxE5XN0xXMpwNCbe) (59 photos)
- [2022-05 Nationals Spirit Circle](https://drive.google.com/drive/folders/1muQLl6hYB-8MffjcudMgiBcteFUji53D) (10 photos)
- [2022-06,05,04 - Masala Idli League](https://drive.google.com/drive/folders/1hN5-dl8Vafe_PjiirVy-TL8IdZPhYX5b) (19 photos)
- [2022-09 Thursday Practice](https://drive.google.com/drive/folders/1uqgddnRu8-hJ3D0ZJUFWA18Kjnzsz7Jr) (40 photos)
- [2023-02 Mysore weekend camp](https://drive.google.com/drive/folders/1NEbOGavn3WLXgBlUtlZex4zLREcqriUp) (86 photos)
- [MGR-2022](https://drive.google.com/drive/folders/1nLIKFxEOvslKdMHLI1jokhmk91p07cuR) (11 photos)
- [MIL'23 Auction Photos](https://drive.google.com/drive/folders/1J1qKkrAfnODpJwCp0a6GaMrjPgaFluh8) (33 photos)
- [Sakkath 2022](https://drive.google.com/drive/folders/1zgakREoUtD2g5Sl0wuOvh0hHuqqf6x0M) (10 photos)
- TIKS 10th Anniversary
  - [TIKS Memories - Choba](https://drive.google.com/drive/folders/1UblfxoPo5SjlKVYH5Orebm2u10uwfO2P) (31 photos)
  - [TIKS memories - AFR](https://drive.google.com/drive/folders/1M1Wvhnz70Jt7jhSFt0VMt_kd6On1j1Sj) (164 photos)
  - [TIKS memories - vikini](https://drive.google.com/drive/folders/1LGczb1mstJNje5fM2ShvkxZM9rYgO3su) (3 photos)
  - [TIKS memories - birdie](https://drive.google.com/drive/folders/1FMJSs5hUIPHwnseGapXwzf9fJgU5Z0oh) (20 photos)
- [TIKS Workshop](https://drive.google.com/drive/folders/1vWQrrc5V7ywYse5INJXe1MNnklAlLT3b) (4 photos)

{{< /details >}}
