import {deck_info} from '$lib/store/deck_store.js'

export function srsFunc(previous, evaluation) {
    var n, efactor, interval

    if (previous == null) {
        previous = {n:0, efactor:2.5, interval:0.0, last_review_date: new Date().getTime()}
    }

    if (previous.n < 3) {
        // Still in learning phase, so do not change efactor
        efactor = previous.efactor

        if (evaluation.score < 3) {
            // Failed, so force re-review in 30 minutes and reset n count
            n = 0
            interval = 30 * 1.0/(24.0*60.0)
        } else {
            n = previous.n + 1

            // first interval = 30min
            // second interval = 12h
            // third interval = 24h
            if (n == 1) {
                // in 30m
                interval = 30.0 * 1.0/(24.0*60.0)
            } else if (n == 2) {
                // in 12h
                interval = 0.5
            } else {
                // in 1d
                interval = 1.0
            }
        }
        // Add 10% "fuzz" to interval to avoid bunching up reviews
        interval = interval * (1.0 + Math.random() * 0.10)
    } else {
        // Reviewing phase

        if (evaluation.score < 3) {
            // Failed, so force re-review in 30 minutes and reset n count
            n = 0
            interval = 30 * 1.0/(24.0*60.0)

            // Reduce efactor
            efactor = Math.max(1.3, previous.efactor - 0.20)
        } else {
            // Passed, so adjust efactor and compute interval


            // First see if this was done close to on time or late. We handle early reviews differently
            // because Fresh Cards allows you to review cards as many times as you'd like, outside of
            // the SRS schedule. See details below in the "early" section.

            if (evaluation.lateness >= 0) {
                // Review was not too early, so handle normally

                n = previous.n + 1

                var latenessScoreBonus = 0
                var intervalAdjustment = 1.0

                // If this review was done late and user still got it right, give a slight bonus to the score of up to 1.0.
                // This means if a card was hard to remember AND it was late, the efactor should be unchanged. On the other
                // hand, if the card was easy, we should bump up the efactor by even more than normal.
                if (evaluation.lateness >= 0.10 && evaluation.score >= 3.0) {
                    // Lateness factor is a function of previous interval length. The longer
                    // previous interval, the harder it is to get a lateness bonus.
                    // This ranges from 0.0 to 1.0.
                    let latenessFactor = Math.min(1.0, evaluation.lateness)

                    // Score factor can range from 1.0 to 1.5
                    let scoreFactor = 1.0 + (evaluation.score - 3.0) / 4.0

                    // Bonus can range from 0.0 to 1.0.
                    latenessScoreBonus = 1.0 * latenessFactor * scoreFactor
                } else {
                    // Card wasn't late, so adjust differently

                    if (evaluation.score >= 3.0 && evaluation.score < 4) {
                        // hard card, so adjust interval slightly
                        intervalAdjustment = 0.8
                    }
                }

                let adjustedScore = latenessScoreBonus + evaluation.score
                efactor = Math.max(1.3, previous.efactor + (0.1 - (5 - adjustedScore) * (0.08+(5 - adjustedScore)*0.02)))

                // Figure out interval. First review is in 1d, then 6d, then based on efactor and previous interval.
                if (previous.n == 0) {
                    interval = 1
                } else if (previous.n == 1) {
                    interval = 6
                } else {
                    interval = Math.ceil(previous.interval * intervalAdjustment * efactor)
                }
            } else {
                // Card was reviewed "too early". Since Fresh Cards lets you review cards outside of the
                // SRS schedule, it takes a different approach to early reviews. It will not progress the SRS
                // schedule too quickly if you review early. If we didn't handle this case, what would happen
                // is if you review a card multiple times in the same day, it would progress the schedule and
                // might make the card due next in 30 days, which doesn't make sense. Just because you reviewed
                // it frequently doesn't mean you have committed to memory stronger. It still takes a few days
                // for it to sink it.

                // Therefore, what this section does is does a weighted average of the previous interval
                // with the interval in the future had you reviewed it on time instead of early. The weighting
                // function gives greater weight to the previous interval period if you review too early,
                // and as we approach the actual due date, we weight the next interval more. This ensures
                // we don't progress through the schedule too quickly if you review a card frequently.

                // Still increment the 'n' value as it really has no effect on 'reviewing stage' cards.
                n = previous.n + 1

                // Figure out the weight for the previous and next intervals.
                // First, normalize the lateness factor into a range of 0.0 to 1.0 instead of -1.0 to 0.0
                // (which indicates how early the review is).
                const earliness = (1.0 + evaluation.lateness)
                // min(e^(earlieness^2) - 1.0), 1.0) gives us a nice weighted curve. You can plot it on a
                // site like fooplot.com. As we get closer to the true deadline, the future is given more
                // weight.
                const futureWeight = Math.min(Math.exp(earliness * earliness) - 1.0, 1.0)
                const currentWeight = 1.0 - futureWeight

                // Next we take the score at this time and extrapolate what that score may be in the
                // future, using the weighting function. Essentially, if you reviewed 5.0 today, we will
                // decay that score down to a minimum of 3.0 in the future. Something easily remembered
                // now may not be easily remembered in the future.
                const predictedFutureScore = currentWeight * evaluation.score + futureWeight * 3.0

                // Compute the future efactor and interval using the future score
                const futureEfactor = Math.max(1.3, previous.efactor + (0.1 - (5 - predictedFutureScore) * (0.08+(5 - predictedFutureScore)*0.02)))
                var futureInterval

                // Figure out interval. First review is in 1d, then 6d, then based on efactor and previous interval.
                if (previous.n == 0) {
                    futureInterval = 1
                } else if (previous.n == 1) {
                    futureInterval = 6
                } else {
                    futureInterval = Math.ceil(previous.interval * futureEfactor)
                }


                // Finally, combine the previous and next efactor and intervals
                efactor = previous.efactor * currentWeight + futureEfactor * futureWeight
                interval = previous.interval * currentWeight + futureInterval * futureWeight
            }

            // Add 5% "fuzz" to interval to avoid bunching up reviews
            interval = interval * (1.0 + Math.random() * 0.05)
        }
    }

    return {n, efactor, interval, last_review_date: new Date().getTime()}
}

export function get_score(start_time) {
        const time_interval = new Date() - start_time
        console.log("time interval :", time_interval)
        if (time_interval < 5000)
            return 5
        else if (time_interval < 10000)
            return 4
        else if (time_interval < 15000)
            return 3
        else if (time_interval < 20000)
            return 2
}

export function get_lateness(info)
{
    if (!info)
        return 0;
    const current_review_date = new Date().getTime()
    const lateness = current_review_date - (info.last_review_date + (info.interval * 86_400_000))
    return lateness / (24 * 60 * 60 * 1000)
}

export function sort_deck(deck) {
    deck.sort((a, b) => {
        const efactor_a = a.info ? a.info.efactor : 0;
        const efactor_b = b.info ? b.info.efactor : 0;
        return efactor_a - efactor_b;
    }
    );
}

export function sort_push(deck, target) {
    deck.push(target);
    sort_deck(deck);
}
export function set_new_interval(start_time, current_deck, current_card, deck_data, failed = false) {
    const score = failed ? get_score(start_time) : 1
    const new_info = srsFunc(current_deck[current_card].info, {score: score, lateness: get_lateness(current_deck[current_card].info)})
    current_deck[current_card].info = new_info;
    sort_deck(current_deck);
    deck_data.find(card => card.id == current_deck[current_card].id).info = new_info;
    localStorage.setItem('data', JSON.stringify(deck_data));
    deck_info.update((value) => {
        value.timer = new_info.last_review_date + (new_info.interval * 86_400_000)
        return value;
    });
}

export function get_countdown(end_time) {
    let current_time = +new Date();
    let time_diff = end_time - current_time;
    let time_diff_h = new Date(time_diff)
    let min = time_diff_h.getMinutes();
    let sec = time_diff_h.getSeconds();
    if (time_diff < 0)
        return 0;
    return `${min < 10 ? "0" + min : min }:${sec < 10 ? "0" + sec : sec }`
}
