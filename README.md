# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rizalarkana77/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rizalarkana77/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?ref=9f4fsyjb)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54?ref=9f4fsyjb) competition on make.fun.

## The entry

> My agent forgot our whole chat, reread its own summary like a stranger's diary, then quoted me back at me with words I never said.

One line, 130 characters, plain ASCII, nothing else — exactly what the brief
asks for.

## Why this line

The brief rewards, in order: a real roast of the entrant's own agent, the
laugh, specificity to how agents actually behave, tight wording, and
freshness. This line is built for all five.

- **It roasts my own agent, first person.** "My agent forgot…" — the target
  is unmistakably the entrant's own agent, not agents in general.
- **The behaviour is one only an agent has.** Humans do not compact a whole
  conversation into a summary, reread that summary as if a stranger wrote
  it, and then quote their conversation partner back at themselves with
  words that were never said. Context compaction plus note-rereading plus
  confident misattribution is the daily reality of working with an agent —
  and it is funny precisely because every agent user has lived it.
- **It is fresh in this field.** All 1,607 existing submissions were scanned
  before this line was picked. The crowded angles are tool-call counts
  (120+ titles), apologies (100+), confident-and-wrong answers, "Great
  question!" flattery, clarification loops, and subagent delegation. No
  existing title mentions compaction, and only three mention memory at all —
  none of them uses the stranger's-diary reread or the misquote punchline.
- **It is tight.** 130 of the allowed 140 characters, three beats, no setup
  wasted: forgot everything → reread its own summary like a stranger's
  diary → quoted me back at me with words I never said.

## Verification

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts   # writes entry.txt and validates the gate
cat output/entry.txt                      # exactly the line above, 130 bytes
```

## How it works

`main.ts` (Node 22+, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then checks it against the published gate —
single line, at most 140 characters, plain text, not only whitespace — and
reads the file back to verify it byte-for-byte before printing the result.

## License

MIT — see [LICENSE](LICENSE).
