# Overview

**More from LESS** by Kyle Lin

Cascading Stylesheets (CSS) and web design in general aren't considered 'programming' by the vast majority of the Computer Science field. You don't define functions, you don't have variables, and you they're simply displaying elements.

LESS (Leaner Style Sheets) lets you write cleaner and more consistent CSS.

Vanilla CSS is pretty hard to write and keep track of. Having multiple elements maintain the same color scheme can be pretty tedious, most if not all of us have been there before. That is where CSS Pre-Processors come in.

Although you need to compile your stylesheets to plain CSS beforehand, they add a variety of benefits.

* Variables to keep constants throughout your stylesheet
* Calculation of values for more precision
* Reuse styles from other elements
* Bundling styles

---

### Variables

Variables can be used to keep constants throughout your stylesheet.

```less
@bluecolor: #00aeef;

h1 {
    color: @bluecolor;
}
```

is equivalent to

```css
h1 {
    color: #00aeef;
}
```

---

### Calculations

Calculations can be used for more precise values throughout your stylesheet.

```less
@bluecolor: #00aeef;
@bluecolor1: @bluecolor + #111; 

h1 {
    color: @bluecolor1;
}
```

is equivalent to

```css
h1 {
    color: #00b00;
}
```

---

### Mixins - Reusing styles

Styles from other elements can be transplanted.

```less
.bluesmush {
    color: blue;
    width: 5px;
}

h1 {
    font-family: Arial;
    .bluesmush;
}
```

is equivalent to

```css
h1 {
    font-family: Arial;
    color: blue;
    width: 5px;
}
```

---

### Nesting

Styles can be nested!

```less
#bigdiv {
    width: 900px;
    .container {
        width: 300px;
        div {
            width: 50px;
            h3 {
                color: blue;
            }
        }
    }
}
```

is equivalent to

```css
#bigdiv {
    width: 900px;
}

#bigdiv > .container {
    width: 300px;
}

#bigdiv > .container > div {
    width: 50px;
}

#bigdiv > .container > div > h3 {
    color: blue;
}
```

---

### Bundling

You can bundle styles and select individual styles to apply

```less
#mybundle() {
    .bluetext {
        color: blue;
    }

    .coolbutton {
        display: block;
        border: 1px solid blue;
        background-color: red;
        .bluetext;
    }
}

.stylishdiv {
    width: 90px;
    #mybundle > .bluetext;
}

.stylishbutton {
    #mybundle > .coolbutton;
}
```

is equivalent to

```css
.stylishdiv {
    width: 90px;
    color: blue;
}

.stylishdiv {
    display: block;
    border: 1px solid blue;
    background-color: red;
    color: blue;
}
```