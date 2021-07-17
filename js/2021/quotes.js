const quotes = [
    {
        quote : "You only live once, but if you do it right, once is enough.",
        author : "Mae West"
    },
    {
        quote : "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
        author : "Jane Austen, Northanger Abbey"
    },
    {
        quote : "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        author : "Sarah Dessen, The Truth About Forever"
    },
    {
        quote : "We don't see things as they are, we see them as we are.",
        author : "Anais Nin"
    },
    {
        quote : "Not all of us can do great things. But we can do small things with great love.",
        author : "Mother Teresa"
    },
    {
        quote : "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        author : "Helen Keller"
    },
    {
        quote : "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
        author : "Jodi Picoult, My Sister's Keeper"
    },
    {
        quote : "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
        author : "Anais Nin"
    },
    {
        quote : "I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
        author : "Virginia Woolf, A Room of One's Own"
    },
    {
        quote : "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
        author : "Madeleine L'Engle"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;