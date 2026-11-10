# Exit Exam Interactive Quiz

A simple, dependency-free web quiz for exit-exam practice. Pick a course, answer the multiple-choice questions against a countdown timer, and review your results.

## Courses

| Course | Questions | Time limit |
|---|---|---|
| Business Ethics | 100 | 100 minutes |
| Risk Management & Insurance | 120 | 120 minutes |

## Features

- Question navigator: jump to any question; answered questions are highlighted
- Previous / Next buttons and a progress bar
- Countdown timer with automatic submission when time runs out
- Score summary and a full answer review (your answer vs. the correct answer)
- Works on desktop and mobile, with no build step or external libraries

## Run locally

Open `index.html` in any modern browser. No server or installation is needed.

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. After a minute, the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Project structure

```
exit-exam-quiz/
├── index.html          # Page markup
├── css/
│   └── style.css       # Styles
├── js/
│   └── app.js          # Quiz logic (navigation, timer, scoring, review)
├── data/
│   └── questions.js    # Question bank for both courses
├── README.md
└── .gitignore
```

## Adding or editing questions

Questions live in `data/questions.js`. Each question follows this format:

```js
{
  "id": 1,
  "question": "Question text",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "answer": "B"
}
```

To change a time limit, edit `quizMinutes` at the top of `js/app.js`.
