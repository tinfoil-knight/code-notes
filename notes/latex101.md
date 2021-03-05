---
title: Latex 101
link: https://www.learnlatex.org/
---
## Page Controls
- Every document has `begin{document}` and `end{document}` necessarily.
- To control the document, use `\documentclass[]{}` with preferred options. Eg: `\documentclass[a4paper,11pt]{article}`
- Disable Page Numbering: `\pagenumbering{gobble}`
- Use `\usepackage[T1]{fontenc}` to prevent unexpected errors as the default encoding is very limited.
- Page Margins Example: `\usepackage[margin=0.5in]{geometry}`. Use a comma separated list to set margins separately.


## Paragraphs
- Multiple spaces in `.tex` won't produce the same output. Use `~`.
- Leaving a blank line results in newline in output.
- `\section{}`, `\subsection{}` & `\subsubsection{}` is used to organise the documents. `section*{}` to prevent numbering.

## Text
- Text Styling:
  - `\textbf{bold}`
  - `\textit{italic}`
  - `\textrm{roman}`
  - `\textsf{sans serif}`
  - `\texttt{monospaced}`
  - `\textsc{small caps}`
- Common font sizes: `huge`, `large`, `normalsize`, `small`, `tiny`
    Use as `{\huge some text\par}`. It’s important to finish a paragraph before changing the font size back.(`par` is paragraph break.)
- Ordered List
  ```tex
    \begin{enumerate}
        \item An entry
        \item Another One
        \item Wow! Three entries
    \end{enumerate}
  ``` 
- Unordered List (Bullet)
  ```tex
  \begin{itemize}
        \item An entry
        \item Another One
        \item Wow! Three entries
    \end{itemize}
  ``` 
- FontAwesome Icons: `{fontawesome}`  package and use `/faIconName` (convert to camelcase)

## Misc
- Comments: `%` or `begin{comment}` & `end{comment}` w/ `\usepackage{comment}`.
