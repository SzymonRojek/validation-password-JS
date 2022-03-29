# Validation Password Form

<br>

## 🎥 Preview site :arrow_right: [tap here](http://szymonrojek.github.io/validation-password-JS/)

<br>
<br>

<img src="./src/img/password-validation.giff" width="250" height="400">

<br>
<br>

## Description:

---

<br>

**Project written just to develop simple pure functions and to have a better understanding of objects.**

Password Validation Form has got some restrictions:

```
- minimum one upperCase letter
- minimum one of the special characters: @#!
- minimum one number
- the elength between 5 and 12 characters
```

If the password doesn't have a one of the rule above, the error occurs on the screen.

I am checking the strength of the password and assessing whether the password is weak or good or strong enough and display information to the user. In this case I have decided to build an array with objects which contains numbers built based on the number of characters in the string, generated after submitting the form at the end:

Password is correct...

```
- "& quite good"
- "& good enough"
- "& really good"
- "& strong enough"
- "& strong"
- "& very strong"
- "& very very strong"
- "& weak"
```

<br>

## Technologies:

---

<br>
<br>

<table>
  <tr>
    <td><img src="./src/img/npm-icon.png" width="50" height="50"></td>
    <td><img src="./src/img/parcelJs-icon.png" width="50" height="50"></td>
    <td><img src="./src/img/sass-icon.svg" width="50" height="50"></td>
    <td><img src="./src/img/flexbox-icon.png" width="50" height="50"></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="./src/img/html-icon.svg" width="50" height="50"></td>
    <td><img src="./src/img/css-icon.svg" width="50" height="50"> </td>
    <td><img src="./src/img/js-icon.svg" width="50" height="50"></td>
  </tr>
 </table>

<br>

## I have used:

<br>

---

- Semantic HTML
- BEM methodology
- RWD
- Functional Programming (mostly pure functions)

<br>

## Usage:

---

<br>

1. Install project:

```
npm install to have dev dependencies installed.
```

2. To start development and server for live preview

```
npm run dev
```

3. Build version

```
npm run build
```

4. Dist version - gh-pages

```
npm run deploy
```
