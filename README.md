# Typeform Discord Init (Design)
Very simple Discord Bot that will automatically post a Typeform response to a Discord Channel.

This is useful for moderation of a Discord server. Consider the story of a team that sets up a small discord server. This team decides
to choose Typeform.com as its' platform for creating interactive forms. The moderation team decides to use typeform for volunteer staff applications, ban appeals, complaints about the server, members or staff in that community.

The server moderator who elects themselves in charge of managing the server's typeform account would have the sole access to
these forms, may need to log themselves into typeform.com, open the responses, copy and paste them (unformatted plain text) into Discord
for the whole moderation team to see it.

This bot intends to rid that annoying manual work by automatically posting each submitted response to a typeform directly into a Discord
channel the moment that submission happens. And if for whatever reason it were missed the first time, this bot should be responsive to
basic commands in Discord allowing it to read the responses waiting on any typeform on the account.

That is the goal of this project.

## But How?
With a typeform account, we have access to APIs off developer.typeform.com free of charge. I've looked at the documentation, and it has become apparent that we will use:
https://developer.typeform.com/webhooks/
for when the responses are initially made. We can configure events that would fire as a response is submitted. And then:
https://developer.typeform.com/responses/
This api will allow us to call and read responses on a typeform, which would be perfect for user commands entered on Discord with a
prefix `!` like `!marco` (as demonstrated in code on early commits)

(PS, I'm a professional Typescript developer, as well as developer that works with RX Forms. If I make a typo about Typeform, it was
probably inevitable)
