# Boni Exit Exam

A single-file, offline mock exam app for Management / Business Management / Business Administration exit exam preparation.

## How to use

1. Open `Boni Exit Exam.html` in any modern browser (Chrome, Edge, Firefox, Safari), on desktop or phone.
2. No installation, server, or internet connection is needed.
3. Choose your settings on the home screen and tap **Start Exam**.

## Features

- **Question banks (7 past papers)**
  - 2015 Management (Morning)
  - 2015 Management (Afternoon)
  - Yekatit 2016 Management
  - 2016 Business Management
  - Sene 14, 2016
  - Tir 2017
  - Sene 2, 2017
  - Or choose **All papers** to get a random mix.
- **Number of questions:** 30, 50, 100, 200, or All.
- **Timer:** defaults to 1 minute per question and can be changed. The exam auto-submits when time runs out.
- **Practice mode:** shows the correct answer right after you choose.
- **Question navigator:** jump to any question; answered, flagged, and current questions are marked.
- **Flag for review:** mark questions to come back to.
- **Results screen:** score, percentage, correct/wrong/unanswered counts, time used, and a full review with correct answers. Filter by All, Wrong, or Unanswered.
- **Retake** with one tap.
- Responsive layout with automatic dark mode.

## Important note on answers

The source PDF did not include an answer key. The correct answers were worked out for this page, so a few may be wrong, especially calculation questions (probability, finance, linear programming, transportation, CPM/PERT). Please double-check those against your own working and your textbook.

## Editing the questions

All questions are stored in the `D` array inside the `<script>` tag. Each entry looks like:

```
[paperIndex, questionNumber, "Question text", ["Option A", "Option B", "Option C", "Option D"], correctIndex]
```

- `paperIndex` is the position in the `P` array of paper names.
- `correctIndex` is `0` for A, `1` for B, `2` for C, `3` for D.

To fix a wrong answer, change the last number of that question.

## Notes

- Progress is not saved. Leaving the exam or closing the page resets it.
