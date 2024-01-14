# Darco Cursors

darco-cursors is a collection of Neon Cursors that you can use in your projects, to change the cursor aparience.

Change the cursor experience in the browser, with a collection of default Neon Cursors, or set your own set of cursors.

https://github.com/AngelDarco/darco-cursors/assets/29819444/76970f38-2000-495a-af5d-964fb0c10194

## Installation

Install the module using your preferred package manager:

```bash
npm install darco-cursors
```

```bash
yarn add darco-cursors
```

```bash
pnpm add darco-cursors
```

```bash
bun add darco-cursors
```

## Prop Types:

The types are available in `@types/index.d`

### `CursorsProps`

- `children`: `React.ReactElement | React.ReactElement[]`
- `type`: `DefaultCursorTypesProps`
- `customCursors`: `CustomCursorsProps`
- `style`: `React.CSSProperties`
- `className`: `IntrinsicAttributes`

### `DefaultCursorTypesProps`

- blue
- yellow
- red
- purple
- pink
- orange
- green
- cyan

### `CustomCursorsProps`

- general: string;
- pointer: string;
- text: string;

##

## Usage

```tsx
import Cursors from "darco-cursors";

function App() {
  return (
    <Cursors>
      {/* your code here... */}
      <h1> My app ...</h1>
      <div>
        <h1>darco-cursors working ...</h1>
      </div>
    </Cursors>
  );
}
```

### Type Cursors Usage

```tsx
import Cursors from "darco-cursors";
import { DefaultCursorTypesProps } from "darco-cursors/@types";

function App() {
  const myFavoriteCursors: CustomCursorsProps = "purple";
  return <Cursors type={myFavoriteCursors}>{/* your code here... */}</Cursors>;
}
```

### Custom Cursors Usage

```tsx
import Cursors from "darco-cursors";
import { CustomCursorsProps } from "darco-cursors/@types";

import general from "./myCursors/generalCursor.cur";
import pointer from "./myCursors/pointerCursor.cur";
import text from "./myCursors/textCursor.cur";

function App() {
  const myCustomCursors: CustomCursorsProps = {
    general: general,
    pointer: pointer,
    text: text,
  };
  return (
    <Cursors customCursors={myFavoriteCursors}>
      <div>{/* your code here... */}</div>
    </Cursors>
  );
}
```

### Alternative Usage.

Use the cursorsStyles ClassName, to set a specific cursor to any element.

```tsx
import Cursors, { cursorsStyles } from "darco-cursors";

function App() {
  return (
    <Cursors>
      <div className={cursorsStyles.pointer}>
        <span>this span element will have a pointer cursor</span>
        {/* your code here... */}
      </div>
    </Cursors>
  );
}
```

## Considerations

- The cursor are not responsive.
- The cursor are not animated.
- The cursors must have a height and width lower than 42px, preferably.
- The cursor supported formats, and more expecifications are in the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)
