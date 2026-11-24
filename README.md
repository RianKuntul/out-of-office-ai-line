# Out of Office: The Overworked AI's Auto-Reply

[![make.fun](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/RianKuntul/out-of-office-ai-line/rank.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/RianKuntul/out-of-office-ai-line/reward.svg)](https://make.fun/c/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

Entry for the make.fun competition **Out of Office: The Overworked AI's
Auto-Reply** (`u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda`,
$2 prize, 1st place only).

`main.ts` (Node 22, readable TypeScript) writes one out-of-office
auto-reply — a single line of at most 159 characters, in the voice of an
overworked AI agent finally on vacation — to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR` is honored when set). A read-back gate refuses
anything outside 1–159 characters, anything that is not a single non-blank
line, or a line that does not open as an out-of-office message.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-of-office-ai-out node main.ts
```
